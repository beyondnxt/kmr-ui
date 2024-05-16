import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class SuuplierHelper {

    mapSupplier(serviceData: any) {
        return serviceData?.map((x: any) => {
            return {
                id: x.id,
                name: x.name,
                companyName:x.name,
                code: x.code,
                contactNo: x.contactNo,
                contactPerson: x.contactPerson,
                vatTin: x.vatTin,
                cstNo: x.cstNo,
                pan: x.pan,
                email: x.email,
                gstIn: x.gstIn,
                termsOfPayment: x.termsOfPayment,
                productName: x.productName,
                address: x.address,
                createdBy: x.createdBy,
                updatedBy: x.updatedBy,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
            }
        })
    }
}