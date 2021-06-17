import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import {contentupdate, addNew, delme} from './redux/actions'

class App extends React.Component {
        constructor() {
        super()
       this.state ={

       }
    }

render (){

    const {handleChange, andleSubmit,items,input,handleDel} =this.props;
console.log("items",items,"input",input);
return(
<>
<div>
<input id='fme' type='text' onChange={handleChange} />
<button onClick={()=>}></button>

</div>

</>
)
}
}

export default App;