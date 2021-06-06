import { render } from '@testing-library/react';
import React, { Component } from 'react'

class Form extends Component{
   state={
name=null,
age=null,
gender=null,
destination=null,
deitRestrictions=null,

   }               
}
handleChange=(e)=>{
this.setState({
      [e.target.id]:e.target.value          
})
}
handleSubmit =(){
                    
}



render(){
return(
<div>
<Form onSubmit="handleSubmit">
<label htmlFor="name">Name:</label>
<input type="text" id="name" onChange={this.handleChange}/>
<label>Age</label>
<input type="text" />
<label></label>
<input type="text" />
<label></label>
<input type="text" />
<label></label>
<input type="text" />
</Form>

</div>

)

}
export default Form;