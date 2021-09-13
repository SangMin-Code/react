import React, { Component } from 'react';
import Habit from './Habit';

class Habbits extends Component {
    state ={
        habits:[
            {id:1, name:'Reading',count:1},
            {id:2, name:'Running',count:2},
            {id:3, name:'Coding',count:3},
        ]
    };

    //데이터를 가지고 있는 곳에서 처리하는 함수도 같이 가지는것이 좋음
    handleIncrement = (habit)=>{
        const updateHabits = this.state.habits.map((el)=>{
            if(el.name === habit.name){
                el.count++;
            }
            return el
        })
        this.setState({habits:updateHabits})
        console.log(`handleIncrement ${habit.name}`)
    }
    
    handleDecreament =(habit)=>{
        if(habit.count<1){
            return
        }
        const updateHabits = this.state.habits.map((el)=>{
            if(el.name === habit.name){
                el.count--;
            }
            return el
        })
        this.setState({habits:updateHabits})
        console.log(`handleDecrement ${habit}`)
    }
    
    handleDelete =(habit)=>{
        const updateHabits = this.state.habits.filter((el)=>{
            return el.name !== habit.name
        })
        this.setState({habits:updateHabits})
        console.log(`handleDelete ${habit}`)
    }
    
    render() {
        return (
            <ul>
                {
                    this.state.habits.map(
                    habit=>(
                    <Habit key = {habit.id} habit={habit} 
                    onIncreament={this.handleIncrement}
                    onDecrement={this.handleDecreament}
                    onDelete={this.handleDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default Habbits;