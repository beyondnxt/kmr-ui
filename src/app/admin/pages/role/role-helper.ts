import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RoleHelper {
    mapRoleData(serviceData: any[]) {
        return serviceData.map((x: any) => {
          const menuAccessKeys = this.extractMenuAccessKeys(x.menuAccess);
          
          return {
            name: x.name,
            companyName: x.name,
            description: x.description,
            createdOn: x.createdOn,
            updatedOn: x.updatedOn,
            id: x.id,
            menuAccess: x.menuAccess,
            accessKeys: menuAccessKeys,
            dashboard: menuAccessKeys.includes('Dashboard'),
            company: menuAccessKeys.includes('Company'),
            customer: menuAccessKeys.includes('Customer'),
            admin: menuAccessKeys.includes('Admin'),
            user: menuAccessKeys.includes('User'),
            role: menuAccessKeys.includes('Role'),
            mainCustomer: menuAccessKeys.includes('Main Customer'),
            category: menuAccessKeys.includes('Category'),
            ropeType: menuAccessKeys.includes('Rope Type'),
            warehouse: menuAccessKeys.includes('Warehouse'),
            supplier: menuAccessKeys.includes('Supplier'),
            department: menuAccessKeys.includes('Department'),
            color: menuAccessKeys.includes('Color'),
            ropeKgLength: menuAccessKeys.includes('Rope Kg Length'),
            ropeGrade: menuAccessKeys.includes('Rope Grade'),
          };
        });
      }
      
      extractMenuAccessKeys(menuAccess: any[]): string[] {
        const menuAccessKeys: string[] = [];
        menuAccess.forEach((menu: any) => {
          Object.keys(menu).forEach((key) => {
            if (menu[key] === true && !menuAccessKeys.includes(key)) {
              menuAccessKeys.push(key);
            }
          });
        });
      
        return menuAccessKeys;
      }
      
}