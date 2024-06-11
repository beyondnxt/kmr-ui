import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class RopeMachineHelper {

    mapRopeMachine(serviceData: any) {
        console.log('serviceData', serviceData);
        return serviceData?.map((x: any) => {
            return {
                location: x.location,
                companyName: x.locationName,
                machineName: x.machineName,
                shortCode: x.shortCode,
                noOfStrand: x.noOfStrand,
                itemCode: x.itemCode,
                createdBy: x.createdBy,
                maximumCoilingHead: x.maximumCoilingHead,
                spindlePerStrand: x.spindlePerStrand,
                hourProduction: x.hourProduction,
                runningHours: x.runningHours,
                updatedBy: x.updatedBy,
                id: x.id,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB')
            };
        });
    }
    
}