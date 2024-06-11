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
                id: x.id,
                itemTypeId: x.itemTypeId,
                ropeTypeName: x.ropeTypeName,
                companyName: x.ropeTypeName,
                categoryId: x.categoryId,
                categoryName: x.categoryName,
                itemCode: x.itemCode,
                colorId: x.colorId,
                colorName: x.colorName,
                strand: x.strand,
                length: x.length,
                noOfTwist: x.noOfTwist,
                twineType: x.twineType,
                treasureYarn: x.treasureYarn,
                treasureYarnColorId: x.treasureYarnColorId,
                treasureYarnColorName: x.treasureYarnColorName,
                itemName: x.itemName,
                itemUnit: x.itemUnit,
                minimumStock: x.minimumStock,
                reOrderQty: x.reOrderQty,
                location: x.location,
                locationCode: x.locationCode,
                currentStock: x.currentStock,
                noOfLeadDays: x.noOfLeadDays,
                kpcCode: x.kpcCode,
                description: x.description,
                smsItem: x.smsItem,
                itemImage: x.itemImage,
                deleted: x.deleted,
                createdBy: x.createdBy,
                updatedBy: x.updatedBy,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
            };
        });
    }
    
}