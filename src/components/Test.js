import React,{useEffect, useRef, useState} from 'react'

export default function Test() {
 const [count,setCount]=useState(0)
 const [x,setX]=useState(0)
 const [firstname,setFirstname]=useState("Houssem")
 const age=useRef()
 const lastname=useRef()
 const image=useRef()
 /* const lastname=useRef()
 useEffect(()=>{
 console.log("welcome")
 },[count])
 useEffect(()=>{
    console.log("welcome 2")
    },[]) */
  return (
    <div>
    {/* <h1>This is Test component{count}</h1>
    <h1>The value of X is{x}</h1>
    <h1>My  name is {firstname}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setX(x+1)}>Increment</button> */}<br/>
    {/* <input type="text" ref={lastname} /> 
    <input type="number" ref={age} /> */}
    <input type="file" multiple ref={image} />
    {/* <button onClick={()=>console.log(lastname)}>Click Me</button>
    <button onClick={()=>console.log(age)}>Click Me</button> */}
    <button onClick={()=>console.log(image.current.files)}>Click Me</button>
{/*     <button onClick={()=>setCount(count-1)}>Decrement</button>
    <button onClick={()=>setFirstname("Bejaoui")}>Change</button> */}
    </div>
  )
}
