import React, { useState } from "react";
import { num, sCase, sy, uCase } from "./data/passchar";

const App = () => {
  let [uppercase, setUcase] = useState(false);
  let [lowercase, setLcase] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [number, setNumber] = useState(false);
  let [len,setLen]=useState(10);
  let [fpass,setFPass]=useState('')
  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
    
  }
  let generate = () => {
    let charset='';
    let finalpass='';
    if (uppercase || lowercase || symbol || number) {
      if(uppercase)
        charset+=uCase
      if(lowercase)
        charset+=sCase;
      if(symbol)
        charset+=sy;
      if(number)
        charset+=num
      // console.log(charset)
      for(let i=0;i<len;i++){
        finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
      }
      setFPass(finalpass)
    } else {
      setFPass(finalpass='')
      alert("Please Ensure to check at least a box")
    }
  };
  return (
    <div className="bg-[url('https://plus.unsplash.com/premium_photo-1700697076327-86db372e390e?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-full w-full ">
    <div className="hero min-h-screen glass" >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold my-5">Password Generator</h1>

          <div className="join my-5">
            <input
              className="input input-bordered join-item"
              placeholder="text"
              readOnly
              value={fpass}
            />
            <button className="btn join-item rounded-r-full" onClick={copyPass}>Copy</button>
          </div>
          <div className="join">
            <h1 className="text-base font-bold place-content-center mx-5">
              Password Length
            </h1>
            <input
              type="number"
              value={len}
              min={5}
              onChange={(e)=>setLen(len=e.target.value)}
              className="border-2 w-16 border-solid rounded-md px-2 max-h-10"
            />
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Upper Case Letters</span>
              {/* {console.log(uppercase)} */}
              <input
                type="checkbox"
                className="checkbox"
                checked={uppercase}
                onChange={() => setUcase(!uppercase)}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Lower Case Letters</span>
              {/* {console.log(lowercase)} */}
              <input
                type="checkbox"
                className="checkbox"
                checked={lowercase}
                onChange={() => setLcase(!lowercase)}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Special Character</span>
              {/* {console.log(symbol)} */}
              <input
                type="checkbox"
                className="checkbox"
                checked={symbol}
                onChange={() => setSymbol(!symbol)}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Numbers</span>
              {/* {console.log(number)} */}
              <input
                type="checkbox"
                className="checkbox"
                checked={number}
                onChange={() => setNumber(!number)}
              />
            </label>
          </div>
          <button className="btn" onClick={generate}>
            Generate Password
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;

