import React, { useState } from 'react';


/* ------ Digital Clock ------ */

function App(){

  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);

  function UpdateTime(){
    time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(UpdateTime, 1000);

  return <h1>  {ctime} </h1>;
}


/* ------ Get Time ------ */

// function App(){

//   let newtime = new  Date().toLocaleTimeString();

//   const [ctime, setTime] = useState(newtime);
  
//   function UpdateTime(){
//     newtime = new  Date().toLocaleTimeString();
//     setTime(newtime);
//   }
  
//   return(
//     <>
//       <h1> { ctime } </h1>
//       <button onClick={UpdateTime}> Current Time </button>
//     </>
//   )
// }



/*   -----  Counter App ----- */
// const App = () =>{

// const state = useState();

// const [count, setCount] = useState(0);

// function IncNum(){
//   setCount(count + 1);
// };
// return(
//   <>
//     <h1> { count } </h1>
//     <button onClick={IncNum}> Click Me</button>
//   </>
// );
// };

export default App;