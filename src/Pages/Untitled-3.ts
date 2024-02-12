 addHover: (index:number) => void
  removeHover: () => void
  tableIndex:number
  currentIndex:number
  submitInput:()=>void
  cancelChanges:()=>void
  isSubmitting:boolean,
  getTableProps: ()=>void
  getTableBodyProps: ()=>void
  prepareRow: ()=>void
  pageIndex:number,
  headerGroups:any,
  page:number,
  canPreviousPage:boolean,
  canNextPage:boolean,
  pageOptions:Array<number> ,
  nextPage:()=>void,
  previousPage:()=>void,
  toggleSortBy:()=>void,
  loading:boolean,
  deletion:boolean,
  rows,