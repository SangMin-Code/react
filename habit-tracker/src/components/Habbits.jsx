import React, { Component } from 'react';
import Habit from './Habit';

class Habbits extends Component {
    
    render() {
        return (
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
        );
    }
}

export default Habbits;