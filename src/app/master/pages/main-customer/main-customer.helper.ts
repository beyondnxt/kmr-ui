import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class MainCusHelper {

    mapMainCustomer(serviceData: any) {
        console.log('serviceData', serviceData)
        return serviceData?.map((x: any) => {
            return {
                id: x.id,
                code: x.code,
                companyName: x.name,
                name: x.name,
                type: x.type,
                country: x.country,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
            }
        })
    }

}