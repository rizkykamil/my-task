import './App.css';
import React from 'react';
import FormInput from './Component/FormInput';
import TodoItem from './Component/TodoItem';
import logo from './logo.svg';
import EditModal from './Component/EditModal';

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
        ],
        isEdit: false
    }
    openModal =() =>{
        this.setState({
            isEdit: true
        }) 
    }
    closeModal = () =>{
        this.setState({
            isEdit: false
        }) 
    }
    deleteTask = id => {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== id)
        })
    }

    addTask = data => {
        const id = this.state.todos.length
        const newData={
            id: id + 1,
            title: data
        }
        this.setState({
            todos:[...this.state.todos,newData]
        })
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
                        <TodoItem 
                        key = {item.id}
                        todo ={item} 
                        del = {this.deleteTask}
                        open = {this.openModal}
                        />
                        )}
                </div>
        
                <div className = "input-form">
                    <FormInput add= {this.addTask}/>
                </div>
                
                <EditModal 
                edit = {this.state.isEdit}
                close = {this.closeModal}/>
            </div>
        );
    }
}

export default App;
