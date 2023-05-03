import './App.css';
//index.js 생략 가능 
import MainPageCompnent from "./main/index.js"
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import UploadPage from './upload';
import ProductPage from './product';
import {Alert, Button} from "antd";
import {DashOutlined, DownloadOutlined} from '@ant-design/icons';

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/"><img src="/images/icons/logo.png" /></Link>
          <Button size="large" onClick={function(){
            history.push('/upload');
          }} icon={<DownloadOutlined/>}>상품 업로드</Button>
        </div>
      </div>
      <div id="body">
      <Switch>
        <Route exact={true} path={"/"}>
          <MainPageCompnent></MainPageCompnent>
        </Route>
      </Switch>

      <Switch>
        <Route exact={true} path={"/products/:id"}>
          <ProductPage></ProductPage>
        </Route>
      </Switch>

      <Switch>
        <Route exact={true} path={"/upload"}>
          <UploadPage></UploadPage>
        </Route>
      </Switch>
      </div>
      <div id="footer"></div>
    </div>
    
    );
    
}

export default App;
