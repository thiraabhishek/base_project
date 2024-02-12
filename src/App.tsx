import { ConfigProvider } from "antd";
import "./App.css";
import Homescreen from "./Components/Homescreen";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
            borderRadius: 2,
            colorBgContainer: "#f6ffed",
          },
        }}
      >
        {/* <Login /> */}
        <Homescreen/>
      </ConfigProvider>
    </>
  );
}

export default App;
