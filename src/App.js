// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'



function App() {
  const [counter, setCounter] = useState(0)
  const [isReflect, setIsReflect] = useState(false)

  function minus(){
     setCounter(counter - 1)
      console.log('minus', counter)
      reflect(counter)

  }
    function plus(){
        setCounter(counter + 1)
       reflect(counter)
    }
    function reset(){
        setCounter(0)
        setIsReflect(false)
    }
function reflect(counter) {
      console.log(counter)
    if (counter <= 0) {
        setIsReflect(false)
    } else {
        setIsReflect(true)
    }
}


  return (
    <div className="App">
       <h1>Counter</h1>
        <h2>liked ❤️  {counter}
           {isReflect ? '     🙂' : '     🥲'}
        </h2>
        <div >
            <button className="button"  onClick={minus} >Minus</button>
            <button  className="button" onClick={plus}  >Plus</button>
            <button className="button"  onClick={reset}>Reset</button>

        </div>


    </div>
  );
}

export default App;
