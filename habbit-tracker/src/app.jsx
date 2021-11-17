import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits'
import Navbar from './components/navbar'


class App extends Component {
  state = {
    habits: [
        {id: 1, name: 'Reading', count: 0 },
        {id: 2, name: 'Running', count: 0 },
        {id: 3, name: 'Coding', count: 0 }
    ],
}

handleIncrement = (habit) =>{ 
  const habits = [...this.state.habits]; // 직접 state를 수정하는것은 좋지 않다. 
  const index = habits.indexOf(habit);
  habits[index].count++
  this.setState({habits}) // 키와 벨류가 같으면 생략가능
}

handleDecrement = (habit) =>{
  const habits = [...this.state.habits]; // 직접 state를 수정하는것은 좋지 않다. 
  const index = habits.indexOf(habit);
  const count = habits[index].count - 1
  habits[index].count = count < 0 ? 0 : count;
  this.setState({habits})
}

handleDelete = (habit) => {
  const habits = this.state.habits.filter(item => item.id !== habit.id)
  this.setState({habits})
}

habitAddForm = (name) =>{
  const habits = [...this.state.habits, {
    id : Date.now(),
    name : name,
    count: 0
  }]
  this.setState({habits})
}

handleReset = () => {
  const habits = [...this.state.habits]
  habits.map((item)=> {
    item.count = 0
  })
  this.setState(habits)
}



  render(){
    const sumHabit = this.state.habits.filter(item =>item.count > 0)
  return( 
    <>
    <Navbar sumHabit={sumHabit.length}/>
    <Habits habits={this.state.habits}
    onIncrement={this.handleIncrement}
    onDecrement={this.handleDecrement}
    onDelete={this.handleDelete}
    onAdd={this.habitAddForm}
    onReset={this.handleReset}
    />
    </>
  )
  } 
}

export default App;
