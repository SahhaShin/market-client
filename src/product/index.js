import './index.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function ProductPage(){
    const {id} = useParams();
    const [product, setProducts] = useState(null);//product는 처음에 null이 들어간다.

    // useEffect로 딱 한번만 불리게 써줘야한다. 안써주면 렌더링을 할 때마다 네트워크 요청이 계속 간다.
    useEffect(function(){
        axios.get(`https://localhost:8080/products/${id}`).then(
            function(result){
                setProducts(result.data);
                console.log(result);
        }).catch(function(error){
            console.error(error);
        });
    },[])//useEffect의 값을 []로 비워두면 1번만 실행된다.

    // 비동기 통신 전에 return되어 에러나는 것을 방지하는 코드
    if(product === null){
        return <h1>상품 정보를 받고 있습니다...</h1>
    }
    console.log(product);
    return(
        <div>
            <div id="image-box">
                <img src={product.imageUrl}></img> {/* 비동기 통신을 하고, 객체를 받아서 띄우는 게 아니라 통신 중에 return을 띄우는 것이여서 처음에는 imageUrl에 null이 들어간다. */}
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png"></img>
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>  
                <div id="createdAt">2020년 12월 8일</div>  
                <div id="description">{product.description}</div>            
            </div>
        </div>
    );
}

export default ProductPage;