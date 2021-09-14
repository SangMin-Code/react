import {React, PureComponent } from 'react';

class Habit extends PureComponent {
    //부모 component로부터 데이터를 받아서 보여주기만 하는
    // 단순한 component이기 때문에 state가 필요 없음.
    // 데이터 뿐 아니라 콜백함수도 전달받음

    handleIncrement = ()=>{
        this.props.onIncreament(this.props.habit)
    } 
    handleDecreament = ()=>{
        this.props.onDecrement(this.props.habit)
    }         
    handleDelete = ()=>{
        this.props.onDelete(this.props.habit)
    }

    render() {
        console.log('habit')
        const {name,count} = this.props.habit;
        return (
            <div className='habit'>
            <span className="habit-name">
                {name}
            </span>
            <span className="habit-count">
                {count}
            </span>
            <button  className='habit-button habit-increase' onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className='habit-button habit-decrease' onClick={this.handleDecreament}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className='habit-button habit-delete' onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
            </button >
            </div>
        );
    }
}

export default Habit;   