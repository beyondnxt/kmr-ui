import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CategoryHelper {

    mapParentCategory(serviceData: any) {
        return this.mapCategory(serviceData, 'Parent');
    }

    mapChildCategory(serviceData: any) {
        return this.mapCategory(serviceData, 'Child');
    }

    mapCategoryData(serviceData: any) {
        return this.mapCategory(serviceData, 'Category');
    }

    mapSubCategory(serviceData: any) {
        return this.mapCategory(serviceData, 'Sub');
    }

    private mapCategory(serviceData: any, type: 'Parent' | 'Child' | 'Category' | 'Sub') {
        return serviceData?.map((x: any) => {
            const baseCategory = {
                id: x.id,
                companyName: x.name,
                name: x.name,
                createdBy: x.createdBy,
                updatedBy: x.updatedBy,
                createdOn: new Date(x.createdOn).toLocaleDateString('en-GB'),
                updatedOn: new Date(x.updatedOn).toLocaleDateString('en-GB'),
            };
            if (type === 'Category') {
                return {
                    ...baseCategory,
                    parentCategoryId: x.parentCategoryId,
                    parentCategoryName: x.parentCategoryName,
                    childCategoryId: x.childCategoryId,
                    childCategoryName: x.childCategoryName,
                    subCategoryName: x.subCategoryName,
                    subCategoryId: x.subCategoryId,
                    type: x.type,
                    grade: x.grade,
                    smsCategory: x.smsCategory ? 'Yes' : 'No',
                }
            }

            if (type === 'Child') {
                return {
                    ...baseCategory,
                    parentCategoryId: x.parentCategoryId,
                    parentCategoryName: x.parentCategoryName,
                };
            }

            if (type === 'Sub') {
                return {
                    ...baseCategory,
                    childCategoryId: x.childCategoryId,
                    childCategoryName: x.childCategoryName,
                };
            }

            return baseCategory;
        });
    }
}
