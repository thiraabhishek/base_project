import { Col, Row, message } from "antd";
import LoginForm from "./LoginForm";
import ProjectInfo from "./ProjectInfo";

const Login = () => {
    
  const onFinish = () => {
    message.success('Submit success!')
  }
  return (
    <div>
      <Row>
        <Col sm={12}>
        <ProjectInfo />
        </Col>

        <Col sm={12}>
          <LoginForm onFinish={onFinish}/>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
