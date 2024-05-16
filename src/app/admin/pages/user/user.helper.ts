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
                userName: x.userName,
                mobileNumber:x?.mobileNumer,
                departmentName:x.departmentName,
                departmentId:x.departmentId,
                location:x.location,
                email:x.email ? x.email : '',
                createdOn:new Date(x.createdOn).toLocaleDateString('en-GB'),
                roleName:x.roleName,
                roleId:x.roleId
            }
        })
    }
}