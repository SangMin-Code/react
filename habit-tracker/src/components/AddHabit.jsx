import React, { Component } from 'react';

class AddHabit extends Component {
    state = {text : ''}
    
    handleAdd = ()=>{
        this.props.onAdd(this.state.text)
        this.setState({text:''})
    }

    handleChange =(e)=>{
        const text = e.target.value
        this.setState({text})
    }

    
    render() {
        return (
            <div className='addHabit'>
                <input type="text" className="addHabitInput" onChange={this.handleChange} value={this.state.text}/>
                <button className ="addHabitBtn" onClick= {this.handleAdd}>Add</button>
            </div>
        );
    }
}

export default AddHabit;