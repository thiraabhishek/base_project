import { UpIcon } from '../Icons/UpIcon'
import { DownIcon } from '../Icons/DownIcon'
import Skeleton from 'react-loading-skeleton'
import RightArrowIcon from '../Icons/RightArrowIcon'
import LeftArrowIcon from '../Icons/LeftArrowIcon'
import setColumns from '../Pages/Columns'
import React from 'react'
import { useFilters, useSortBy, usePagination, useTable } from 'react-table'

interface ColumnType {
  id: string
  data: []
  loading: boolean
  queryId: string
  globalLoading: boolean
  count: number
}
const initialState = {
  queryPageIndex: 0,
  queryPageSize: 15,
  totalCount: null,
}

type ACTIONTYPE =
  | { type: 'PAGE_CHANGED'; payload: number }
  | { type: 'PAGE_SIZE_CHANGED'; payload: number }
  | { type: 'TOTAL_COUNT_CHANGED'; payload: number }
  | { type: ''; payload: number }

interface State {
  queryPageIndex: number
  queryPageSize: number
  totalCount: null | number
}
const PAGE_CHANGED = 'PAGE_CHANGED'
const PAGE_SIZE_CHANGED = 'PAGE_SIZE_CHANGED'
const TOTAL_COUNT_CHANGED = 'TOTAL_COUNT_CHANGED'

const reducer = (state: State, action: ACTIONTYPE) => {
  switch (action.type) {
    case PAGE_CHANGED:
      return {
        ...state,
        queryPageIndex: action.payload,
      }
    case PAGE_SIZE_CHANGED:
      return {
        ...state,
        queryPageSize: action.payload,
      }
    case TOTAL_COUNT_CHANGED:
      return {
        ...state,
        totalCount: action.payload,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const Table: React.FC<ColumnType> = (props) => {
  const { id, data, loading, queryId, globalLoading, count } = props
  console.log('i am in table',id)

  const [{ queryPageIndex, queryPageSize }, dispatch] = React.useReducer(
    reducer,
    initialState
  )
  const ActionCell = ({ row }) => <></>

  const columns = React.useMemo(
    () => setColumns(id, ActionCell, queryPageIndex, queryPageSize),
    [id, loading, queryId, globalLoading]
  )

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,

    state: { pageIndex, pageSize },
    headerGroups,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    toggleSortBy,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: queryPageIndex,
        pageSize: queryPageSize,
      },
      manualPagination: true,
      pageCount: Math.ceil(count / 15),
    },

    useFilters,
    useSortBy,
    usePagination
  )

  // React.useEffect(() => {
  //   const callbackFromSidebar = () => {
  //     dispatch({ type: PAGE_CHANGED, payload: 0 })
  //   }

  //   registerCallback(callbackFromSidebar)

  //   return () => {}
  // }, [registerCallback])

  React.useEffect(() => {
    dispatch({ type: PAGE_CHANGED, payload: pageIndex })
  }, [pageIndex])

  // const cancelChanges = () => {
  //   setIsSubmitting(false)

  //   setCurrentIndex(null)
  // }

  return (
    <div className="table_container main_table">
      <table
        {...getTableProps()}
        style={{ color: 'white' }}
        className="bordered table"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="table_row">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="table_header">
                  {column.render('Header')}
                  {column.sort ? (
                    <>
                      <div className="table_sorting_controls">
                        <div
                          onClick={() => toggleSortBy(column.id, false)}
                          className="icons_box"
                        >
                          <UpIcon
                            color={
                              column.isSorted && !column.isSortedDesc
                                ? 'black'
                                : 'gray'
                            }
                          />
                        </div>
                        <div
                          onClick={() => toggleSortBy(column.id, true)}
                          className="icons_box"
                        >
                          <DownIcon
                            color={
                              column.isSorted && column.isSortedDesc
                                ? 'black'
                                : 'gray'
                            }
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {!loading ? (
            page.map((row, index) => {
              prepareRow(row)
              return (
                <tr
                  className="table_row_body"
                  {...row.getRowProps()}
                  onMouseEnter={() => addHover(index)}
                  onMouseLeave={() => removeHover()}
                  // style={{background:${index === tableIndex?'#e9ecef':''}}}
                  // background={index === tableIndex ? '#e9ecef' : ''}
                  // isselected={row.original.id === currentIndex ? 'true' : 'false'}
                >
                  {row.cells.map((cell, index) => (
                    <td {...cell.getCellProps()} className="table_data">
                      {<div> {cell.render('Cell')} </div>}
                    </td>
                  ))}
                  
                </tr>
              )
            })
          ) : (
            <>
              {Array.from({ length: 15 - headerGroups.length }).map((_, index) => (
                <tr key={index} className="table_data">
                  {Array.from({
                    length: tableRowLength - headerGroups.length + 1,
                  }).map((_, index) => (
                    <td key={index}>
                      <Skeleton width={'100%'} height={20} />
                    </td>
                  ))}
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>

      <div className="table_pagination">
        <div className="table_controls">
          <div className="controls_selected table_controls_box">
            <div onClick={() => previousPage()} className="table_control_items">
              <LeftArrowIcon color={!canPreviousPage ? '#ced4da' : '#333533'} />
            </div>
            <div id="selected" className="control_items">
              {pageIndex + 1}
            </div>
            <div className="control_items">Of</div>

            <div className="control_items"> {pageOptions.length}</div>
            <div
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="control_items"
            >
              <RightArrowIcon color={!canNextPage ? '#ced4da' : '#333533'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
