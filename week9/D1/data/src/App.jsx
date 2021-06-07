import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component{
constructor(){
  super();
  this.state={
   arr: [],
  searchText:'',
}
}



async componentDidMount(){

try{
  const res =await axios.get('http://localhost:5000/api/hello')

}
catch(e){
  console.log(e);
}
// finally(data){
//   console.log(data);
// }
}
}




export default App;