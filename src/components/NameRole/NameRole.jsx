import React from 'react';
import team from "../../data/team";
import Counter from '../Button/Counter';
import "../NameRole/NameRole.scss";
import "../Button/Counter.scss";


 const NameRole = (props) => {
    //  const { name, role} = props;
    const {nameroleArray} = props;
    console.log(props);

    return (
        <>
        {/* <div className="grid-container" id="details"> */}

        <h1>Ticket Tracker</h1>
        <div className="table" id="details">
        
          {/* <div> */}
        {nameroleArray.map(({name, role, index}) => (
              //  <div className="Names" key={name + team.id}>{name} <div></div> {role} <div></div> <Counter /></div> 
               <div className="Names" id="names" key={name + team.id}>{name} 
               {/* <div></div>  */}
                <div className="Roles" id="role">{role}</div> 
                {/* <div></div>  */}
                <div className="Counter" id="counter"><Counter /> </div>
               </div> 
               
            ))}
          </div> 
       {/* </div> */}
        </>
   
);
  

 }



export default NameRole

