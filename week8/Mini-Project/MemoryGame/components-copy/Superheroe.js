import React from "react";
import './superheroe.css'

const Superheroe = (props) => {
  const {name, occupation, id, image} = props.hero;
    return (
      <div>
        <div className='hero' onClick={() => props.handleClick( id)}
        style={{backgroundImage:`url(${image})`}}>

        </div >
        <div className="img-content">
                {name}<br/>
                {occupation}
        </div>
      </div>
    )
}

export default Superheroe;
