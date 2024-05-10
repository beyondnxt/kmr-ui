import { Component } from '@angular/core';
import * as data from './user-data';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { UserHelper } from './user.helper';
import { AuthService } from 'src/app/providers/auth/auth.service';
import { CommonService } from 'src/app/providers/common/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserHelper]
})
export class UserComponent {
  constructor(private dialog: MatDialog, private authService: AuthService, private userHelper: UserHelper, public commonService: CommonService) { }
  tableHeaders = data.tableHeaders;
  tableValues: any
  fixedTableHeader = data.fixedTableHeaders;
  totalCount = 0;
  apiLoader=false;

  ngOnInit() {
    this.getUser();
  }

  addUser() {
    this.openPopup();
  }

  delete(id: string) {
    this.dialog.open(DeleteModalComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: id,
      panelClass: 'delete-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.deleteUser(res)
      }
    })
  }

  edit(value: any) {
    this.openPopup(value)
  }

  pagination(pageData: any) {
    this.getUser(pageData);
  }

  search(key: any) {
    this.getUser('', `&value=${key}`)
  }


  openPopup(edit?: any) {
    this.dialog.open(AddUserComponent, {
      width: '650px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'user-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getUser();
      }
    });
  }

  deleteUser(id: string) {
    this.authService.deleteUser(id).subscribe({
      next: (res) => {
        this.getUser();
        this.commonService.notification('Success','Deleted Successfully','success')
      }, error: (err) => {
        this.commonService.notification('Failed','Failed to delete, please try again','fail')
      },
    })
  }

  getUser(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.authService.getUser(query, searchQuery).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.tableValues = this.userHelper.mapUserData(res.data);
        this.totalCount = res.total
      }, error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed','Failed to get data','fail')
      },
    })
  }

}
