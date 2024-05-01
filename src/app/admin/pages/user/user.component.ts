import { Component } from '@angular/core';
import * as data from './user-data';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { UserHelper } from './user.helper';
import { AuthService } from 'src/app/providers/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserHelper]
})
export class UserComponent {
  constructor(private dialog: MatDialog, private authService: AuthService, private userHelper: UserHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues: any
  fixedTableHeader = data.fixedTableHeaders;

  ngOnInit() {
    this.getUser();
  }

  addUser() {
    this.openPopup();
  }

  delete(id:string) {
    this.dialog.open(DeleteModalComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data:id,
      panelClass: 'delete-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
        this.deleteUser(res)
      }
    })
  }

  edit(value: any) {
    this.openPopup(value)
  }

  openPopup(edit?: boolean) {
    this.dialog.open(AddUserComponent, {
      width: '650px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'user-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res);
        if (res.isEdit) {
          this.updateteUser(res.formData, res.id);
          return
        }
        this.createUser(res.formData);
      }
    });
  }

  createUser(payload: any) {
    this.authService.createUser(payload).subscribe({
      next: (res) => {
        this.getUser();
      }, error(err) {

      },
    })
  }

  updateteUser(payload: any, id: string) {
    this.authService.updateUser(payload, id).subscribe({
      next: (res) => {
        this.getUser();
      }, error(err) {

      },
    })
  }
  deleteUser(id: string) {
    this.authService.deleteUser(id).subscribe({
      next: (res) => {
        this.getUser();
      }, error(err) {

      },
    })
  }

  getUser() {
    this.authService.getUser().subscribe({
      next: (res) => {
        console.log('res', res)
        this.tableValues = this.userHelper.mapUserData(res.data);
      }, error(err) {

      },
    })
  }

}
