import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class CategoryHelper {

    mapParentCategory(serviceData: any) {
        console.log('serviceData', serviceData)
        return serviceData?.map((x: any) => {
            return {
                id: x.id,
                companyName: x.name,
                name: x.name,
                createdBy: x.createdBy,
                updatedBy: x.updatedBy,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
            }
        })
    }
    mapChildCategory(serviceData: any) {
        console.log('serviceData', serviceData)
        return serviceData?.map((x: any) => {
            return {
                id: x.id,
                companyName: x.name,
                name: x.name,
                parentCategoryId: x.parentCategoryId,
                parentCategoryName: x.parentCategoryName,
                createdBy: x.createdBy,
                updatedBy: x.updatedBy,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
            }
        })
    }
}