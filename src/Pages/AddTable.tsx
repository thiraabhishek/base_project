import { Col, Row, message } from 'antd'
import AddTableForm from '../Components/AddTableForm'
import AddColumns from './AddColumns'
import { useState } from 'react'

const AddTable = () => {
  const [isTable, setIsTable] = useState(false)
  const [inputValue, setInputValue] = useState([{ columnName: '', dataType: '' }])
  const [selectError, setSelectError] = useState(false)

  const onFinish = () => {
    setIsTable(true)
    message.success('Submit success!')
  }

  const handleSubmitTable = () => {
    const isValEmpty = inputValue.some((val) => !val.dataType)
    if (isValEmpty) {
      setSelectError(true)
      return
    }
    setSelectError(false)

    console.log('inputValue', inputValue)
  }

  const handleSelectChange = (value: string, key: number) => {
    const newData = [...inputValue]
    newData[key] = { ...newData[key], ['dataType']: value }
    setInputValue(newData)
  }

  const handleInputChange = (
    value: React.ChangeEvent<HTMLInputElement>,
    key: number
  ) => {
    const newData = [...inputValue]
    newData[key] = { ...newData[key], ['columnName']: value.target.value }
    setInputValue(newData)
  }

  return (
    <div className="add_table_container">
      <div className="add_column_header">
        <h4>{isTable?'Add Columns':'Add Table'}</h4>
      </div>

      <Row className="all_table_row">
        <Col sm={12}>
          {!isTable ? (
            <AddTableForm onFinish={onFinish} />
          ) : (
            <AddColumns
              handleSelectChange={handleSelectChange}
              onFinish={handleSubmitTable}
              handleInputChange={handleInputChange}
              data={inputValue}
              selectError={selectError}
            />
          )}
        </Col>
      </Row>
    </div>
  )
}

export default AddTable
