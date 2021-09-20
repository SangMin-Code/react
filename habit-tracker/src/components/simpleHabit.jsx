import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../app.css';

// 리액트 훅 - > 함수형에서 state, lifecylce을 사용
// 클래스는 한번 만들어지면 멤버 변수들이 한번만 만들어짐,
// state 변경, props 가 변경되면 render만 반복 호출
// 반면에
// 함수는 컴포넌트 변경되면 코드블럭 전체가 반복해서 호출
// 지역변수들이 반복 생성
// useState는 리액트가 기억하고 있으므로 호출이 되어도 따로 저장된 것을 불러옴



const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  // state와 state를 업데이트하는 set 함수 반환
  // const spanRef = React.createRef();
  //React 특성상 state, props가 바뀔 때 반복 호출되고
  // class가 아닌 function을 호출하면 같은 코드를 호출함, 그러므로
  // 초기화를 막을 필요가 있는 대상에 대해 use api를 제공함.
  const spanRef = useRef();

  // const handleIncrement = () => {
  //   setCount(count+1);
  // };
  
  const handleIncrement = useCallback(()=>{
      setCount(count+1);
  })

  useEffect(()=>{
    console.log(`mounted & updated : ${count}`)
  },[])

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

