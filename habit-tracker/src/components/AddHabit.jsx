import React, { Component } from 'react';

class AddHabit extends Component {
    state = {text : ''}
    
    handleAdd = ()=>{
        this.props.onAdd(this.state.text)
    }

    handleChange =(e)=>{
        const text = e.target.value
        this.setState({text})
    }

    
    render() {
        return (
            <div className='addHabit'>
                <input type="text" className="addHabitInput" onChange={this.handleChange}/>
                <button className ="addHabitBtn" onClick= {this.handleAdd}>Add</button>
            </div>
        );
    }
}

export default AddHabit;