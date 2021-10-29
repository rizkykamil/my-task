import './App.css';
import React from 'react';
import FormInput from './Component/FormInput';
import TodoItem from './Component/TodoItem';
import logo from './logo.svg';

class App extends React.Component{
    state = {
        todos:[
            {
                id: 1,
                title : "reading a book"
            },
            {
                id: 2,
                title : "work"
            }
        ]
    }
    deleteTask = id => {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== id)
        })
    }
    addTask = data => {
        console.log ("ok")
    }

    render(){
        const {todos} = this.state;
        return (
            <div className="app">
                <div className= "logo">
                    <img src= {logo} alt="logo"></img>
                    <h3>Task List</h3>
                </div>
                
                <div className = "list">
                    {todos.map(item =>
                        <TodoItem key = {item.id} todo ={item} del = {this.deleteTask} />
                        )}
                </div>
        
                <div className = "input-form">
                    <FormInput add= {this.addTask}/>
                </div>
            </div>
        );
    }
}

export default App;
