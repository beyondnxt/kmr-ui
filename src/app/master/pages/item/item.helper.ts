import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ItemHelper {

    mapItem(serviceData: any) {
        return serviceData?.map((x: any) => {
            return {
                name: x.name,
                id: x.id,

            }
        })
    }
}