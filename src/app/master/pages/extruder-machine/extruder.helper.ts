import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class ExtruderHelper {

    mapExtruder(serviceData: any) {
        return serviceData?.map((x: any) => {
            return {
                id: x.id,
                code: x.code,
                companyName: x.machineName,
                machineName: x.machineName,
                shortCode: x.shortCode,
                location: x.location,
                locationName: x.locationName,
                rpm: x.rpm,
                target: x.target,
                runningTime: x.runningTime,
                spindle: x.spindle,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
            }
        })
    }
}
