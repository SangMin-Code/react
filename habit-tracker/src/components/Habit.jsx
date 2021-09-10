import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count:0,
    };
    handleIncrement = (event)=>{
        //state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해야함.
        // this.state.count +=1  => 오브젝트안에 있는 데이터를 업데이트하면 리액트가 업데이트 유무를 모름. setState가 필수
        this.setState({count:this.state.count +1})
    }
    handleDecreament =(event)=>{
        const count = this.state.count-1
        this.setState({count: count <0 ? 0: count})
    }
    //props -> 부모 component에서 전달받은 properties는 
    
    render() {
        const {name,count} = this.props.habit;
        return (
            <li clas sName='habit'>
            <span className="habit-name">
                {name}
            </span>
            <span className="habit-count">{this.state.count}</span>
            <button  className='habit-button habit-increase' onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className='habit-button habit-decrease' onClick={this.handleDecreament}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className='habit-button habit-delete'>
                <i className="fas fa-trash"></i>
            </button >
            </li>
        );
    }
}

export default Habit;   