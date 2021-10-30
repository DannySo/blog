/*eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const orgSubject = ['남자 코트 추천','강남 우동 맛집','파이썬 독학'];
  let [글제목, 글제목변경] = useState(orgSubject);
  let [따봉, 따봉변경] = useState(0);
  let [flag, changeFlag] = useState(true);
  
  function 제목바꾸기() {
    
    if(flag){
      var newArray = [...글제목];
      newArray.sort()
      글제목변경(newArray);
      changeFlag(false);
    }else{
      글제목변경(orgSubject);
      changeFlag(true);
    }
    
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list1">
        <h3>{ 글제목[0] } <span onClick={ ()=>{따봉변경(따봉 + 1)} }>👍</span> {따봉} </h3>
        <p>10월 31일 발생</p>
        <hr/>
      </div>
      <div className="list1">
        <h3>{ 글제목[1] }</h3>
        <p>10월 31일 발생</p>
        <hr/>
      </div>
      <div className="list1">
        <h3>{ 글제목[2] }</h3>
        <p>10월 31일 발생</p>
        <hr/>
      </div>

      <Modal />

    </div>
  );
} 

function Modal(){
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
