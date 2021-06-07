 import React, {Component} from 'react'
import './App.css';
// import axios from "axios";



class App extends Component {
        constructor(props) {
        super(props)
       this.state = { data:'',
      post:'',};
          
            }
 async componentDidMount (){
try{
    
     const response = await fetch('http://localhost:5000/api/hello')
  const json = await response.json()
console.log(json);
  this.setState({ data: json });
}
catch(e) {
   console.log(e)
}
 }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }




   handleSubmit = (e) => {
        e.preventDefault();
      };


render() {     
    const {data} =this.state;  
   // console.log(post);
    console.log(data);   
    return ( 
<>
  <div className="col">
    <div>{data.data}</div>  
       {/* <div> <b>{data.post}</div> */}
 <form onSubmit={this.handleSubmit}>
   <label htmlFor="userData" ></label>
      <input type='text' id="inp" onChange={this.handleChange} ></input>
  <button type="submit">Submit</button>
  </form>
  </div>
</>
   )
}
 }
 export default App;



