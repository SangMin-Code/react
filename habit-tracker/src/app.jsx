import './app.css';
import React, { Component } from 'react'
import Habbits from './components/Habbits';
import Navbar from './components/Navbar'
import ResetBtn from './components/ResetBtn'


class App extends Component {
	state = {
		habits:[
			{id:1, name:'Reading',count:1},
			{id:2, name:'Running',count:2},
			{id:3, name:'Coding',count:3},
		]	
	}
	
	
	calTotalCount = (cnt)=>{
		const totalCount = this.state.totalCount +cnt
		this.setState({totalCount})
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

	addHabitList = (habitName)=>{
		const newId = this.state.habits.reduce((acc,cur)=>{
			console.log(cur.id)
			return Math.max(acc,cur.id)
		},0)+1
		console.log(newId)
		const newHabits = {
			id:newId,
			name:habitName,
			count:0
		}

		const habits = [...this.state.habits,newHabits];

		this.setState({habits})
	}

	handleIncrement = (habit)=>{
        console.log(`handleIncrement ${habit.name}`)
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits})
		this.calTotalCount(1);
	}
	
	handleDecreament =(habit)=>{
		console.log(`handleDecrement ${habit}`)       
        const habits = [...this.state.habits]
        const index = habits.indexOf(habit)
		let totalCount = this.state.totalCount
        if(totalCount >0 && habits[index].count){
			habits[index].count--;
			this.setState({habits})
			this.calTotalCount(-1);
		}
	}
	
	handleDelete =(habit)=>{
		console.log(`handleDelete ${habit}`)
        const habits = this.state.habits.filter(item => item.id !== habit.id)
        this.setState({habits})
		this.calTotalCount(-habit.count);
    }
	
	handleReset =()=>{
		console.log(`handleReset`)
		const habits = this.state.habits.map((item) => {
			item.count=0
			return item})
		this.setState({habits})
		this.calTotalCount(-this.state.totalCount)
	}

	render() {
		return( 
		<>
			<Navbar totalCount = {this.state.habits.filter(item=>item.count >0).length}/>
			<Habbits habits = {this.state.habits}
				onIncreament={this.handleIncrement}
				onDecrement={this.handleDecreament}
				onDelete={this.handleDelete}
				onAdd = {this.handleAdd}
				/>
			<ResetBtn onReset = {this.handleReset}/>
		</>
		);
	};
}

export default App;
