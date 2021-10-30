/*eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const orgSubject = ['남자 코트 추천','강남 우동 맛집','파이썬 독학'];
  let [글제목, 글제목변경] = useState(orgSubject);
  let [따봉, 따봉변경] = useState(0);
  let [flag, changeFlag] = useState(true);

  let [modal,modal변경] = useState(false);
  let [누른제목,누른제목변경] = useState(0);
  let [입력값,입력값변경] = useState('');

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

      {
        글제목.map(function(글,i){
          return (
            <div className="list1" key={i}>
              <h3 onClick={ ()=>{ 누른제목변경(i) } }>{ 글 } <span onClick={ ()=>{따봉변경(따봉 + 1)} }>👍</span> {따봉} </h3>
              <p>10월 31일 발생</p>
              <hr/>
            </div>
          )
        })
      }

      <div className="publish">
        <input onChange={ (e)=>{입력값변경(e.target.value) }}/>
        <button onClick={ ()=>{ 
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값)
          글제목변경(arrayCopy);
          } }>저장</button>
      </div>

      <button onClick={ () => { modal변경(!modal) } }>모달</button>
      {
        modal === true 
        ? <Modal 글제목={글제목} 누른제목={누른제목}/> 
        : null
      }
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h2>{ props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
