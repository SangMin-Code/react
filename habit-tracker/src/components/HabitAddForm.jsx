import React, { memo } from 'react';


//memo -> pureComponent 처럼사용
const HabitAddForm = memo((props) => {
    const inputRef = React.createRef();
    const formRef = React.createRef();
    
    const onSubmit = (e)=>{
        e.preventDefault();
        const name = inputRef.current.value
        name && props.onAdd(name);
        formRef.current.reset();
    }
    
    return (
        <form ref={formRef} className='add-form' onSubmit={onSubmit}>
            <input
                ref = {inputRef} 
                type="text"
                className="add-input"
                placeholder='Habit'
            />
            <button className ="add-button">Add</button>
        </form>
    );

})
    

export default HabitAddForm;




// class HabitAddForm extends PureComponent {
    
//     //PureComponent
//     //props와 state 최상위 데이터가 변하지않으면 render하지 않음
    

//     inputRef = React.createRef();
//     formRef = React.createRef();

//     onSubmit = (e)=>{
//         e.preventDefault();
//         const name = this.inputRef.current.value
//         name && this.props.onAdd(name);
//         this.formRef.current.reset();
//         //this.inputRef.current.value ='';
//     }
//     //Ref
//     // React 에서 createRef를 만들어서 원하는 react dom에 연결해서 사용
    
//     render() {
//         console.log('addform')
//         return (
//             <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
//                 <input
//                     ref = {this.inputRef} 
//                     type="text"
//                     className="add-input"
//                     placeholder='Habit'
//                 />
//                 <button className ="add-button" onClick= {this.handleAdd}>Add</button>
//             </form>
//         );
//     }
// }

// export default HabitAddForm;