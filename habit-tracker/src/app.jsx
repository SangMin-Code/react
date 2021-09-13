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
        console.log(`handleIncrement ${habit.name}`)
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits})
	}
	
	handleDecreament =(habit)=>{
		console.log(`handleDecrement ${habit}`)       
        const habits = [...this.state.habits]
        const index = habits.indexOf(habit)
        
		habits[index].count>0 && habits[index].count--;
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
			habit.count=0
			return habit;
		})
		this.setState({habits})
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
				onReset = {this.handleReset}
				/>
		</>
		);
	};
}

export default App;
