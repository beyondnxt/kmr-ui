export const fixedTableHeaders =
{
    name: 'Role Name',
    key: 'companyName',
    sort: true,
}
export const tableHeaders = [
    {
        name: 'Dashboard',
        key: 'dashboard',
        sort:false,
        role:true
    },
    {
        name: 'Product',
        key: 'product',
        sort:false,
        role:true
    },
    {
        name: 'Lead',
        key: 'lead',
        sort:false,
        role:true
    },
    {
        name: 'Master',
        key: 'master',
        sort:false,
        role:true
    },
    {
        name: 'Admin',
        key: 'admin',
        sort:false,
        role:true
    },
    {
        name: 'User',
        key: 'user',
        sort:false,
        role:true
    },
    {
        name: 'Role',
        key: 'role',
        role:true,
        sort:false,
    },
    {
        name: 'Action',
        key: 'action',
        sort:false,
        edit:true
    }
]

export const tableValues = [
    {
        companyName:'Admin',
        // action: ''
    },
    {
        companyName:'Manager',
        // action: ''
    },
    {
        companyName:'Super Admin',
        // action: ''
    }
]