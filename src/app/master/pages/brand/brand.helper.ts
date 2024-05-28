import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class BrandHelper {

    mapBrand(serviceData: any) {
        return serviceData?.map((x: any) => {
            return {
                id: x.id,
                rawMaterialTypeId: x.rawMaterialTypeId,
                name: x.name,
                companyName: x.rawMaterialTypeName,
                rawMaterialTypeName:x.rawMaterialTypeName,
                brandPriorityOrder: x.brandPriorityOrder,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
            }
        })
    }
}