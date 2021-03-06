import React, { Component } from 'react';
import Habit from './habit'
import HabitAddForm from './habitAddForm';

class Habits extends Component {


    // habit 에는 
    handleIncrement = (habit) =>{ 
        this.props.onIncrement(habit)
    }

    handleDecrement = (habit) =>{
        this.props.onDecrement(habit)
    }

    handleDelete = (habit) => {
        this.props.onDelete(habit)
    }

    handleAdd = (name) => {
        this.props.onAdd(name)
    }


    render() {
        return (
            <>
        <HabitAddForm onAdd={this.handleAdd}/>
        <ul>
            {this.props.habits.map(habit => (
                <Habit habit={habit} key={habit.id}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                />
            ))}
        </ul>
        <button onClick={this.props.onReset}>Reset</button>
        </>
        );
    }
}

export default Habits;