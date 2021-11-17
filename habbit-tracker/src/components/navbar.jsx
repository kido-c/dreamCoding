import React, { Component } from 'react';

class Navbar extends Component {
    // Navbar에서 필요한 데이터는 각 habbit의 count가 0인지 아닌지
    render() {

        return (
        <nav>
            <i></i>
            <span>Habit Tracker</span> 
            <span className='navbar-count'>{this.props.sumHabit}</span>
        </nav>
        );
    }
}

export default Navbar;