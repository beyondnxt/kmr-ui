import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RopeTypeHelper {
    mapRopeTypeData(serviceData: any) {
        return serviceData.map((x: any) => {
            return {
                id: x.id,
                pieceNoShortCode: x.pieceNoShortCode,
                ropeType: x.ropeType,
                companyName: x.ropeType,
                shortCode: x.shortCode,
                updatedBy: x.updatedBy,
                createdBy: x.createdBy,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
            }
        })
    }
}