import { Button, Form, Input, Space } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

interface LoginProps {
  onFinish: () => void
}

const LoginForm: React.FC<LoginProps> = (props) => {
  const { onFinish } = props
  const [form] = Form.useForm()

  return (
    <div className="login_form_container">
      <div className="login_form_box">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginForm
