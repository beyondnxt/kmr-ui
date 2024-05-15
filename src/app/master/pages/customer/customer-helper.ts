import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class CustomerHelper {

    mapCustomer(serviceData: any) {
        console.log('serviceData', serviceData)
        return serviceData?.map((x: any) => {
            return {
                    id: x.id,
                    mainCustomerId: x.mainCustomerId,
                    mainCustomerName: x.mainCustomerName,
                    companyName: x.mainCustomerName,
                    status: x.status,
                    name: x.name,
                    code: x.code,
                    type: x.type,
                    contactPerson: x.contactPerson,
                    contactNo: x.contactNo,
                    email: x.email,
                    grade: x.grade,
                    salesLeadId: x.salesLeadId,
                    salesLeadName: x.salesLeadName,
                    salesCode: x.salesCode,
                    destinationPort: x.destinationPort,
                    finalDestination: x.finalDestination,
                    pieceWeightTolerance: x.pieceWeightTolerance,
                    invoiceTolerance: x.invoiceTolerance,
                    state: x.state,
                    gstIn: x.gstIn,
                    aadhaarNumber: x.aadhaarNumber,
                    pan: x.pan,
                    country: x.country,
                    handledBy: x.handledBy,
                    address: x.address,
                    createdBy: x.createdBy,
                    createdOn: x.createdOn,
                    updatedBy: x.updatedBy,
                    updatedOn: x.updatedOn
                }
            
        })
    }
}