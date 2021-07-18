import React, { useState } from 'react';

function App(){

  const [name, setName] = useState();
  const [fname, setFname] = useState();

  function inputEvent(e){
    // console.log(e.target.value);
    setName(e.target.value);
  }

  function onSubmit(){
    setFname(name);
  }

  return(
    <>
      <div>
        <h1> Hello { fname } </h1>
        <input 
          type="text" 
          placeholder='Enter Your Name' 
          onChange={inputEvent}
          value={name}
          />
        <button onClick={onSubmit}> Click Me</button>
      </div>
    </>
  );
}

/* ------ Event Handling ------ */

// function App(){
//   const color = '#fff';
//   const [bg, setBg] = useState(color);
//   const [name, setName] = useState('change 🔥');

//   function UpdateBg(){
//     let newBg = "#34495e"; 
//     setBg(newBg);
//     setName("change 🔥");
//   }

//   function prevBg(){
//     setBg(color);
//   }

//   return(
//     <>
//       <div style={{ backgroundColor: bg }}>
//         <button onMouseEnter={UpdateBg} onMouseLeave={prevBg}> {name} </button>
//       </div>
//     </>
//   );

// }



/* ------ Digital Clock ------ */

// function App(){

//   let time = new Date().toLocaleTimeString();

//   const [ctime, setTime] = useState(time);

//   function UpdateTime(){
//     time = new Date().toLocaleTimeString();
//     setTime(time);
//   }
//   setInterval(UpdateTime, 1000);

//   return <h1>  {ctime} </h1>;
// }


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