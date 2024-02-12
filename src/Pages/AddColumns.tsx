import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select } from 'antd'

type dataObjType = {
  columnName: string;
  dataType: string;
};

interface ColumnType {
  onFinish: () => void
  handleSelectChange: (e:string,index:number) => void
  handleInputChange: (e:React.ChangeEvent<HTMLInputElement>,index:number) => void
  data:dataObjType[]
  selectError:boolean
}


const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
}

const AddColumns: React.FC<ColumnType> = (props) => {
  const { onFinish, handleSelectChange, handleInputChange,data,selectError } = props

  // const onFinish = (values: any) => {
    console.log('Received values of form:', selectError);
  // };

  return (
    <div className="add_column_container">
     
    <div className="login_form_box">
    <Form
      name="dynamic_form_item"
      {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
     
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 1) {
                return Promise.reject(new Error('At least 1 field'))
              }
            },
          },
        ]}
      >
      
        {(fields, { add }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item required={false} key={field.key}>
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: 'Please add field name',
                    },
                  ]}
                  style={{ width: '100%', marginBottom: 10, marginTop: 10 }}
                >
                  <Input
                    placeholder="Column Name"
                    style={{ width: '100%' }}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Item>

                <Form.Item
                  rules={[
                    { required: true, message: 'Please select your country!' },
                  ]}
                  validateStatus={!data[index]?.dataType && selectError ? 'error' : 'success'}
                  help={!data[index]?.dataType && selectError ? 'Please select a value' : ''}
                >
                  <Select
                    key={field.key}
                 
                    style={{ width: '100%', marginBottom: 10, marginTop: 10 }}
                    defaultValue="Please select data type"
                    onChange={(e) => handleSelectChange(e, index)}
                    options={[
                      {
                        label: 'VARCHAR(formatted)',
                        value: 'VARCHAR(245)',
                        defaultValue: '',
                      },
                      {
                        label: 'VARCHAR (formatted,long)',
                        value: 'VARCHAR(2045)',
                        defaultValue: '',
                      },
                      {
                        label: 'VARCHAR (formatted,long,with summary)',
                        value: 'VARCHAR(5045)',
                        defaultValue: '',
                      },
                      { label: 'INT(Number)', value: 'INT(11)', defaultValue: null },
                      {
                        label: 'INTEGER(Number)',
                        value: 'INTEGER(255)',
                        defaultValue: null,
                      },
                      {
                        label: 'BIGINT(Number)',
                        value: 'BIGINT(255)',
                        defaultValue: null,
                      },
                      { label: 'FLOAT', value: 'FLOAT', defaultValue: null },
                      {
                        label: 'DECIMAL (Number)',
                        value: 'DECIMAL(65)',
                        defaultValue: null,
                      },
                      {
                        label: 'DOUBLE(Number)',
                        value: 'DOUBLE(53)',
                        defaultValue: null,
                      },
                      { label: 'BOOLEAN', value: 'BOOLEAN', defaultValue: 0 },
                    ]}
                  />
                </Form.Item>
                {/* {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null} */}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>

              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  )
}

export default AddColumns
