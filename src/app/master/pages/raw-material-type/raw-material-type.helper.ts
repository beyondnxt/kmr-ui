import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class RawMaterialType {
    mapRawMaterialType(serviceData: any) {
        return serviceData?.map((x: any) => {
            return {
                id: x.id,
                name: x.name,
                companyName: x.rawMaterialTypeName,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
            }
        })
    }
}