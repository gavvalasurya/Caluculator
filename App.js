import React,{useState} from 'react'
const App=()=>
{
  const [input1,setinput]=useState("");
  const [result,setresult]=useState(0);
  const changeHandler=(e)=>
  {
    setinput(e.target.value)
  }
  return(
    <div className='surya'>
      <center>
      <input type="text" size="30"name="input1" value={input1} onChange={changeHandler}/>
      <br/>
      <button onClick={()=>setresult(eval(input1))}>Button</button>
      <h4>Result is:{result}</h4>
      <button onClick={()=>setinput(input1+'1')}>1</button>
      <button onClick={()=>setinput(input1+'2')}>2</button>
      <button onClick={()=>setinput(input1+'3')}>3</button>
      <button onClick={()=>setinput(input1+'4')}>4</button><br/>
      <button onClick={()=>setinput(input1+'5')}>5</button>
      <button onClick={()=>setinput(input1+'6')}>6</button>
      <button onClick={()=>setinput(input1+'7')}>7</button>
      <button onClick={()=>setinput(input1+'8')}>8</button><br/>
      <button onClick={()=>setinput(input1+'9')}>9</button>
      <button onClick={()=>setinput(input1+'0')}>0</button>
      <button onClick={()=>setinput(input1+'+')}>+</button>
      <button onClick={()=>setinput(input1+'-')}>-</button><br/>
      <button onClick={()=>setinput(input1+'*')}>*</button>
      <button onClick={()=>setinput(input1+'/')}>/</button>
      <button onClick={()=>setinput("")}>CLR</button>
      </center>
    </div>
  )
}
export default App