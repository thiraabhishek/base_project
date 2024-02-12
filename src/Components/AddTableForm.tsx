import React from 'react'
import { Button, Form, Input, Space } from 'antd'

interface AddTableProps {
  onFinish: () => void
}
const AddTableForm: React.FC<AddTableProps> = (props) => {
  const { onFinish } = props
  const [form] = Form.useForm()

  return (
    <div className="login_form_container">
      <div className="login_form_box">
        <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please table name!' }]}
          >
            <Input placeholder="Table Name" />
          </Form.Item>

          <Form.Item>
            <Space className='submit_button'>
              <Button type="primary" htmlType="submit" className='submit_button'>
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default AddTableForm
