import './app.css';
import React, { Component } from 'react'
import Habbits from './components/Habbits';
import Navbar from './components/Navbar'


class App extends Component {
	state = {
		habits:[
			{id:1, name:'Reading',count:1},
			{id:2, name:'Running',count:2},
			{id:3, name:'Coding',count:3},
		]	
	}
	
	handleAdd = (name)=>{
		const habits = [...this.state.habits,
			{	
				id:Date.now(),
				name,
				count:0
			},
		]
		this.setState({habits})
	}

	handleIncrement = (habit)=>{
		//this.state.habits[index]를 통해 직접 값을 바꾸는 것은
		//React가 Shallow comparison을 하기 때문에 render를 안함. 

        console.log(`handleIncrement ${habit.name}`)
		const habits = this.state.habits.map(item=>{
			if(item.id === habit.id){
				return {...habit, count:habit.count+1}
			}
			return item;
		})
        this.setState({habits})
	}
	
	handleDecreament =(habit)=>{
		console.log(`handleDecrement ${habit}`)       
        const habits = this.state.habits.map(item=>{
			if(item.id === habit.id){
				const count = habit.count -1
				return {...habit, count:count <0 ? 0 : count}
			}
			return item;
		})
		this.setState({habits})
	}
	
	handleDelete =(habit)=>{
		console.log(`handleDelete ${habit}`)
        const habits = this.state.habits.filter(item => item.id !== habit.id)
        this.setState({habits})
    }
	
	handleReset =()=>{
		console.log(`handleReset`)
		const habits = this.state.habits.map((habit) => {
			if(habit.count !==0){
				return {...habit, count:0}
			}
			return habit;
		})
		this.setState({habits})
	}

	render() {
		console.log('app')
		return( 
		<>
			<Navbar totalCount = {this.state.habits.filter(item=>item.count >0).length}/>
			<Habbits habits = {this.state.habits}
				onIncreament={this.handleIncrement}
				onDecrement={this.handleDecreament}
				onDelete={this.handleDelete}
				onAdd = {this.handleAdd}
				onReset = {this.handleReset}
				/>
		</>
		);
	};
}

export default App;
