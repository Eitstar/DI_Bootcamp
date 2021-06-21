import React from "react";
import Superheroe from './Superheroe'
import './heroslist.css'

const HerosList = (props) => {
  const {superheroes,handleClick} = props;
    return (
      <div className='herolist'>
      {
        superheroes.map((item,i)=>{
          return (
            <Superheroe hero={item} handleClick={handleClick} key={i}/>
          )
        })
      }
      </div>
    );
}

export default HerosList;
