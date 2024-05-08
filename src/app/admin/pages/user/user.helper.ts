import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserHelper {
    mapUserData(serviceData: any) {
        return serviceData.map((x: any) => {
            return {
                id:x.id,
                companyName: x.fullName,
                fullName: x.fullName,
                mobileNumber:x?.mobileNumer,
                departmentName:x.departmentName,
                location:x.location,
                email:x.email ? x.email : '',
                createdOn:new Date(x.createdOn).toLocaleDateString('en-GB'),
                roleName:x.roleName,
                roleId:x.roleId
            }
        })
    }

}