import React, { Component } from 'react';

class ResetBtn extends Component {
    
    resetHabit = ()=>{
        this.props.onReset();
    }
    
    render() {
        return (
            <button className="resetBtn" onClick={this.resetHabit} >Reset All</button>
        );
    }
}

export default ResetBtn;