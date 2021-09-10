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
    render() {
        return (
            <ul>
                {
                this.state.habits.map(
                    habit=>(
                    <Habit key = {habit.id} habit={habit}/>
                ))}
            </ul>
        );
    }
}

export default Habbits;