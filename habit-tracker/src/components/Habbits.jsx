import React, { Component } from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

class Habbits extends Component {
    //컴포넌트 업데이트마다 호출되는 함수가 있다면?
    // render마다 호출되면 예상치 못한 일들이 수행가능
    // 
    handleAdd = (name)=>{
        this.props.onAdd(name)
    }

    render() {
        console.log('habits')
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
            <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habbits;