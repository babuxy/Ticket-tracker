import React from "react";
// import Counter from "./components/Button/Counter";
import "./components/Button/Counter.scss";
import team from "./data/team";
import "./components/NameRole/NameRole";
import NameRole from "./components/NameRole/NameRole";

const App = () => {

 const teamNameRole = team.map((item) => ({ name: item.name , role: item.role}));
    console.log(teamNameRole);


  return (
    <div className="App">


         {/* <div className="name-role">  */}
           <NameRole nameroleArray={teamNameRole} />  
           {/* </div> */}
        
      
         
          
      {/* <Counter/> */}
     
      {/* </section> */}
    </div>
  );
}

export default App;

