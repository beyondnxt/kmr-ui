import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class SalesLeadHelper {

    mapSalesLeads(serviceData: any) {
        console.log('serviceData', serviceData)
        return serviceData?.map((x: any) => {
            return {
                name: x.salesLeadName,
                companyName:x.salesLeadName,
                shortCode: x.shortCode,
                userId: x.userId,
                userName:x.userName,
                id: x.id,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
            }
        })
    }
}