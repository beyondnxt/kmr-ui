import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RopeGradeHelper {
    mapRopeGrade(serviceData: any) {
        return serviceData?.map((x: any) => {
            return {
                id: x.id,
                companyName: x.ropeTypeName,
                categoryName:x.categoryName,
                ropeTypeName:x.ropeTypeName,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
                ropeTypeId: x.ropeTypeId,
                categoryId: x.categoryId,
                grade: x.grade,
                rmComb: x.rmComb
            }
        })
    }
}
