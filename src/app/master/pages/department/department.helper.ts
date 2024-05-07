import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DepartmentHelper {
    mapDepartmentData(serviceData: any) {
        return serviceData.map((x: any) => {
            return {
                companyName:x.location,
                location:x.location,
                type:x.type,
                departmentName:x.departmentName,
                createdOn:new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn:new Date(x.updatedOn).toLocaleDateString('en-GB'),
                id:x.id
            }
        })
    }
}