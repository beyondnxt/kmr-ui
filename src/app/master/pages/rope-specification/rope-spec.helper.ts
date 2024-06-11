import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class RopeSpecHelper {
    mapRopeSpec(serviceData: any) {
        return serviceData?.map((x: any) => {
            return {
                id: x.id,
                sampleNo: x.sampleNo,
                companyName: x.sampleNo,
                date: x.date,
                ropeSize: x.ropeSize,
                colorId: x.colorId,
                colorName: x.colorName,
                type: x.type,
                twist: x.twist,
                customer: x.customer,
                ropeGradeId: x.ropeGradeId,
                ropeGradeName: x.ropeGradeName,
                extruderId: x.extruderId,
                extruderName: x.extruderName,
                die: x.die,
                stretchRatio: x.stretchRatio,
                elongation: x.elongation,
                gpd: x.gpd,
                denier: x.denier,
                noOfTape: x.noOfTape,
                strandDenier: x.strandDenier,
                onlineTpm: x.onlineTpm,
                noOfStrand: x.noOfStrand,
                ropeMcNo: x.ropeMcNo,
                gear: x.gear,
                twistFactor: x.twistFactor,
                layLength: x.layLength,
                wMtr: x.wMtr,
                actualDia: x.actualDia,
                strength: x.strength,
                rackNo: x.rackNo,
                createdBy: x.createdBy,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedBy: x.updatedBy,
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB')
            };
        });
    }
    
}