import React from 'react'
import Table from '../Components/Table'
import useBearStore from '../Store/index'
import { useLocation, useNavigate, useParams } from 'react-router'
import { GetApiFunction, GetSearchApiFunction } from '../Components/GetFunction'
import { useQuery } from 'react-query'
import { userData } from '../api'

function useQuerys() {
  const { search } = useLocation()

  return React.useMemo(() => new URLSearchParams(search), [search])
}

const TableIndex = () => {
  const { id } = useParams()
  // const [tableIndex, setTableIndex] = React.useState<number | null>(null)
  // // const [data, setData] = React.useState([])
  // const [currentIndex, setCurrentIndex] = React.useState(null)
  // const [isSubmitting, setIsSubmitting] = React.useState(true)

  // const [loading, setLoading] = React.useState(false)
  // const [count, setCount] = React.useState([])
  // const [companyData, setCompanyData] = React.useState({})
  // const [isDeletion, setIsDeletion] = React.useState(false)

  // const topLoading = useBearStore((state) => state.topLoading)
  // const globalLoading = useBearStore((state) => state.globalLoading)
  // const closeGlobalLoading = useBearStore((state) => state.closeGlobalLoading)
  // const registerCallback = useBearStore((state) => state.registerCallback)

  // const navigate = useNavigate()
  const query = useQuerys()
  const queryId = query.get('id')

  // const addHover = (index: number | null) => setTableIndex(index)
  // const removeHover = () => setTableIndex(null)

  // const { setRequestFunction } = GetApiFunction(id)
  // const { searchFunction } = GetSearchApiFunction(id)

  // const userData = async (id) => {
  // console.log('here in userdata=>', id)
  // let response=''
  //   if(id==='users'){
  //       response = await http.get(`/api/all/users`)
  //   }
   
  //   return response.data
  // }
    const { data,isLoading } = useQuery({ queryKey: [`${id}`,id], queryFn:()=>userData(id)})
  console.log('userData=>', data)

  
  // const ActionCells=ActionCell('_',id)

  // const submitInput = async () => {}


  //  React.useEffect(() => {

  // }, [
  //   id,
  //   loading,
  //   queryId,
  //   globalLoading,
  //   closeGlobalLoading,
  //   pageIndex,
  // ])

  return (
    <>
    {!isLoading?<div>
      <Table
        // addHover={addHover}
        // removeHover={removeHover}
        // tableIndex={tableIndex}
        data={data.data.data}
        loading={isLoading}
        queryId={queryId}
        globalLoading={isLoading}
        count={20}
        id={id}
        // columns={columns}
        // currentIndex={currentIndex}
        // submitInput={submitInput}
        // cancelChanges={cancelChanges}
        // isSubmitting={isSubmitting}
        // getTableProps={getTableProps}
        // getTableBodyProps={getTableBodyProps}
        // prepareRow={prepareRow}
        // pageIndex={pageIndex}
        // pageSize={pageSize}
        // headerGroups={headerGroups}
        // rows={rows}
        // page={page}
        // canPreviousPage={canPreviousPage}
        // canNextPage={canNextPage}
        // pageOptions={pageOptions}
        // nextPage={nextPage}
        // previousPage={previousPage}
        // toggleSortBy={toggleSortBy}
        // loading={globalLoading}
        // deletion={isDeletion}
      />
    </div>:<>Loading</>}
    </>
  )
}

export default TableIndex
