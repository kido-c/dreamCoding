import React, { Component } from 'react';

class HabitAddForm extends Component {
    // Addhabit은 habit을 추가 해주는 컴포넌트 
    // 필요한 데이터??가 있나?? 추가해주는 매소드를 실행만
    inputRef=React.createRef()
    onSubmit = (event) => {
        event.preventDefault(); // 리프레시가 발생하지 않음.
        const name = this.inputRef.current.value
        name && this.props.onAdd(name)
        this.inputRef.current.value = ""
    };

    // 초기화
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Habit" ref={this.inputRef}/> 
                <button>add</button>
            </form>
        );
    }
}

export default HabitAddForm;