import React, { Component } from 'react'


class UserData extends Component {

    constructor() {
        super();
        this.state = {
            author: null,
            age: null,
            email: null
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);

    }

    onChange = event => {
        const value = event.target.value;
        this.setState({
            [event.target.id]: value
        })
    }

    resetForm = () => {
        this.setState({
            ...this.state,
            author: '',
            age: '',
            email: ''
        })
    }




    render() {
        return ( <
            >
            <
            h3 > Title < /h3> <
            div className = "box" >
            <
            form onSubmit = { this.handleSubmit } >

            <
            label htmlFor = "name" > Name < /label> <
            input onChange = { this.onChange }
            id = "author"
            type = "text" /
            >
            <
            br / >
            <
            label htmlFor = "age" > Age < /label> <
            input onChange = { this.onChange }
            id = "age"
            type = "number" /
            >
            <
            br / >
            <
            label htmlFor = "email" > Email < /label> <
            input onChange = { this.onChange }
            id = "email"
            type = "email" /
            >
            <
            button type = "clear"
            onClick = { this.resetForm } > clear < /button> <
            br / >
            <
            button type = "submit" > Submit < /button> < /
            form > < /div>   <
            div > { this.state.author } < br / > { this.state.age } { this.state.email } < br / > < /
            div > < / >
        )
    }
}


export default UserData;