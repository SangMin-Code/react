import './app.css';
import React from 'react'

function App() {
	const name = ''
	return (
		<React.Fragment>
			<h1>Hello {name} :)</h1>;
			{name &&<h1>Hello2 {name} :)</h1>}
			{
				['🍕','🍔'].map(item=><h1>{item}</h1>)
			}
		</React.Fragment>
	)
	// React.Fragment를 사용않고 <></>를 사용해도 동일

	// JSX는 다수의 태그를 return할 수 없다. 형제 노드가 있을 경우 묶어야함.
	// JSX 코드 내에서는 javscript code 작성이 가능하다.
	// <div>
	// 	<h1>Hello</h1>
	// 	<h1>Hello</h1>
	// </div>
	// -> 쓸데 없는 div tag 사용
}

export default App;
