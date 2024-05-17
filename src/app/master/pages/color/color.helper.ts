import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ColorHelper {

    mapColor(serviceData: any) {
        console.log('serviceData', serviceData)
        return serviceData?.map((x: any) => {
            return {
                id: x.id,
                colorName: x.colorName,
                companyName: x.colorName,
                shortCode: x.shortCode,
                matchingColor: x.matchingColor,
                applicableFor: x.applicableFor,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
            }
        })
    }
}