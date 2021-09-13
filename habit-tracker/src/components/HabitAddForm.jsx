import React, { Component } from 'react';

class HabitAddForm extends Component {
    
    inputRef = React.createRef();
    formRef = React.createRef();

    onSubmit = (e)=>{
        e.preventDefault();
        const name = this.inputRef.current.value
        name && this.props.onAdd(name);
        this.formRef.current.reset();
        //this.inputRef.current.value ='';
    }
    //Ref
    // React 에서 createRef를 만들어서 원하는 react dom에 연결해서 사용
    
    render() {
        return (
            <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
                <input
                    ref = {this.inputRef} 
                    type="text"
                    className="add-input"
                    placeholder='Habit'
                />
                <button className ="add-button" onClick= {this.handleAdd}>Add</button>
            </form>
        );
    }
}

export default HabitAddForm;