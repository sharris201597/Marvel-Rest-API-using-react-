import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100},
    {
        field: 'super_hero_name',
        width: 150,
        headerName: 'Hero name',
        editable: true,
    },
    {
        field: 'secret_identity',
        headerName: 'Secret Identity',
        width: 150,
        editable: true,
    },
    {
        field: 'home_planet',
        headerName: 'Home Planet',
        width: 150,
        editable: true,
    },
    {
        field: 'villian_or_hero',
        headerName: 'Villian or Hero?',
        width: 100,
        editable: true,
    }
]

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

export const DataTable = () => {

    return (
        <Box sx={{ height: 400, width: '100%'}}>
            <h2>Super Hero Inventory</h2>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick />
        </Box>
    );
}