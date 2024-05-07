import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserHelper {
    mapUserData(serviceData: any) {
        return serviceData.map((x: any) => {
            return {
                id:x.id,
                companyName:`${x.firstName} ${x.lastName} `,
                firstName:x?.firstName,
                lastName:x?.lastName,
                phoneNumber:x?.phoneNumber,
                email:x.email,
                createdOn:new Date(x.createdOn).toLocaleDateString('en-GB'),
                roleName:x.roleName,
                roleId:x.roleId
            }
        })
    }

}