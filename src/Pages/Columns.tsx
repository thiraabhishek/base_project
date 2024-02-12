const setColumns = (id, ActionCell, pageIndex, pageSize) => {
    console.log('i am in column',id)
    let columns = []
    if (id === 'users') {
        columns = [
            {
                Header: 'ID',
                accessor: 'id',
                sort: false,
                Cell: ({ row }) => {
                    return <span>{row.index + 1}</span>
                },
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            // {
            //     Header: 'Actions',
            //     accessor: 'mid',
            //     Cell: ActionCell,
            // },
        ]
    }
    return columns
}

export default setColumns
