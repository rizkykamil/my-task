import React from 'react'
import Button from './Button'
import "../styles/FormInput.css"

class FormInput extends React.Component {
    state ={
        text : ""
    }
    change = e => {
        this.setState({text: e.target.value})
    }
    submit = e => {
        e.preventDeafault();
        if (this.state.text !== ""){
            this.props.add(this.state.text)
        }
    }
    render(){
        return (
        <form style = {inputFrom} onSubmit>
            <input 
            type= "text"
            onChange={this.change}
            style = {input}
            placeholder = "addtask"/>
            <Button text="add" variant= "primary"/>
        </form>
        )
    }
}

export default FormInput
const inputFrom = {
    background : "#fff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height:"3rem",
    padding : "0 1rem",
    justifyContent: "space-between",
    margin : "0.5rem 0",
}
const input ={
    width:"70%",
    border: "none",
}