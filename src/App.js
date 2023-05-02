import './App.css';
//index.js 생략 가능 
import MainPageCompnent from "./main/index.js"
import {Switch, Route} from 'react-router-dom';
import UploadPage from './upload';
import ProductPage from './product';

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png" />
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
