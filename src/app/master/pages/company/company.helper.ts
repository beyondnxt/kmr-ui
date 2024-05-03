import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class companyHelper {

mapCompanyData(serviceData:any){
    console.log('serviceData',serviceData)
    return serviceData?.map((x: any) => {
        return {
                id: x.id,
                companyName: x.companyName,
                location: x.location,
                code: x.code,
                vatTin: x.vatTin,
                cstNo: x.cstNo,
                pan: x.pan,
                accountYear: x.accountYear,
                referenceNumber: x.referenceNumber,
                gstIn: x.gstIn,
                address: x.address,
                email: x.email,
                mobileNumber: x.mobileNumber,
                createdBy: x.createdBy,
                createdOn: x.createdOn,
                updatedBy: x.updatedBy,
                updatedOn: x.updatedOn
        }
    })
}

}