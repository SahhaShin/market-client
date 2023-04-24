//가존 export를 맨아래에 적어주던 js와는 달리 css는 적어주지 않았다.
//이럴 때는 import시 from을 없앤다.
import './index.css';
import axios from "axios";
import React from 'react';

function MainPage(){
  //products는 일반적으로 배열이기 때문에 기본값으로 빈배열을 넣어준다.
  const [products, setProducts]=React.useState([]);
  React.useEffect(function(){
    //이전 프로젝트에서 각자 만든 mock서버를 가져온다.
  //프로미스 함수이기 때문에 결과가 프로미스 객체로 온다 때문에 then을 꼭 써줘야한다.
  axios.get("https://1771c96e-64d6-4579-9e75-e3aee90caeb9.mock.pstmn.io/products")
  .then(function(result){
    const products = result.data.products;
    setProducts(products);//여기가 불리면 네트워크 통신이 다시 일어나서 렌더링 반복 때문에 이를 방지하기 위해 useEffect를 써준다.
  }).catch(function(error){
    console.error('에러 발생 : ', error);
  });
  }, []);
  
  // 복수개의 div 등의 태그들을 리턴할 수 없다.
  //때문에 1개의 div로 씌워줘야 한다.
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="/images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {
            // map은 순회함수이다.
            //map의 특징 중 하나는 리턴이 가능하다는 것이다.
            products.map(function(product, index){
              return(
                <div className="product-card">
              <div>
                <img className="product-img" src={product.imageUrl}></img>
              </div>
              <div className="product-contents">
                <span className="product-name">{product.name}</span>
                <span className="product-price"> {product.price}원 </span>
                <div className="product-seller">
                  <img className="product-avatar" src="images/icons/avatar.png"></img>
                  <span>{product.seller}</span>
                </div>
              </div>
            </div>
              );
            })
          }
          
            
          
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;