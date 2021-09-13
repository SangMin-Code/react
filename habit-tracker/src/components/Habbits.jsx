import React, { Component } from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

class Habbits extends Component {
    
    handleAdd = (name)=>{
        this.props.onAdd(name)
    }

    render() {
        return (
            <>
            <HabitAddForm onAdd  = {this.handleAdd}/>
            <ul>
                {
                    this.props.habits.map(
                    habit=>(
                    <Habit
                        key = {habit.id}
                        habit={habit} 
                        onIncreament={this.props.onIncreament}
                        onDecrement={this.props.onDecrement}
                        onDelete={this.props.onDelete}
                    />
                ))}
            </ul>
            </>
        );
    }
}

export default Habbits;