import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { navBarData } from './nav-data';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddNewModalComponent } from '../add-new-modal/add-new-modal.component';
import { DataSharingService } from '../../services/data-sharing/data-sharing.service';
import { take } from 'rxjs';
import { StorageService } from '../../services/storage/storage-service';
interface sideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    public _storageService: StorageService
  ) {
  }

  @Output() onToggleSideNav: EventEmitter<sideNavToggle> = new EventEmitter();
  mainNavLinks: any = [];
  adminNavLinks: any = [];
  salesNavLinks: any = [];
  masterNavLinks: any = [];
  collapsed = true;
  screenWidth = 0;
  navData = navBarData;
  filteredLinks: any;
  @HostListener('window:resize', ['$event'])
  onreSize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.router.events.subscribe(() => {
      this.updateNavLinks();
    });
    this.updateNavLinks();
    this.mainNavLinks = navBarData.mainNav;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
  closeSideNav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
  logout() {
    this._storageService.clear();
    this.router.navigate(['kmr/login']);
  }
  updateNavLinks(): void {
    const routerUrl = this.router.url;
   if (routerUrl.startsWith('/kmr/admin')) {
      this.salesNavLinks = [];
      this.mainNavLinks = [];
      this.masterNavLinks = [];
      this.adminNavLinks = navBarData.adminNavLinks;
    } else if (routerUrl.startsWith('/kmr/sales')) {
      this.adminNavLinks = [];
      this.mainNavLinks = [];
      this.masterNavLinks = [];
      this.salesNavLinks = navBarData.salesNavLinks;
    } else if (routerUrl.startsWith('/kmr/master')) {
      this.adminNavLinks = [];
      this.mainNavLinks = [];
      this.salesNavLinks = [];
      this.masterNavLinks = navBarData.masterNavLinks;
    }
  }
  switch(url: string) {
    if (url === 'sales') {
      this.mainNavLinks = navBarData.mainNav;
      this.salesNavLinks = [];
    } else if (url === 'admin') {
      this.mainNavLinks = navBarData.mainNav;
      this.adminNavLinks = [];
      this.masterNavLinks = [];
    } else if (url === 'master') {
      this.mainNavLinks = navBarData.mainNav;
      this.masterNavLinks = [];
    }
  }
  addNew() {
    this.dialog
      .open(AddNewModalComponent, {
        width: '650px',
        height: 'max-content',
        disableClose: true,
        panelClass: 'add-new-dialog-container',
      })
      .afterClosed()
      .subscribe((res: any) => {
        if (res) {
          console.log(res);
        }
      });
  }
}
