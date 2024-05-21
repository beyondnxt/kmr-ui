import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class RopeKgLengthHelper {

    mapRopeKgLength(serviceData: any) {
        return serviceData?.map((x: any) => {
            return {
                id: x.id,
                code: x.code,
                companyName: x.code,
                meterKg: x.meterKg,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
            }
        })
    }
}