import React, { Component } from 'react';

class Navbar extends Component {
    
    render() {
        const totalCount = this.props.totalCount
        return (
            <nav>
              <span className="title">
                Habit Tracker
                </span>  
               <span className="habit-count">
                {totalCount}
                </span> 
            </nav>
        );
    }
}

export default Navbar;