import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = () => { 
    setCounter((counter) =>counter===20?counter=20:counter + 1);
  };
  const decreaseValue = () => {
        if(counter===0){
          setCounter(counter)
        }else{
          setCounter(counter-1)
        }
       
   
  };

  return (
    <>
      <div>
        <h1>counter value :{counter} </h1>
        <button onClick={increaseValue}>Increase value</button>
        <button onClick={decreaseValue}>Decrease value</button>
      </div>
    </>
  );
}
export default App;
