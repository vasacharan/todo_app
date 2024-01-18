import React, { useState } from 'react';

const Player = () => {
const [playerName, setPlayerName] = useState("");
const [text, setText] = useState("");
const [words, setWords] = useState(0);
const [time, setTime] = useState(0);

const handleStart=()=>{
    setText("")
    // if(playerName.length === 0){
    //     const inputFocus = useRef();
    //     myref = inputFocus.current.focus;
    // }
    setInterval(()=>{
        if(time === 60){
            setTime(0);
        }else{
            setTime(a => a + 1)
        }
    },1000);
}
const handleResult=(text)=>{
   
   if(!text.length){
    return words;
   }
   let count = 1;
   for(let i = 0; i < text.length; i++){
    if(text[i] === " "){
        count ++;
    }
   }
   return setWords(count); 
}
const playerSubmit=(e)=>{
e.preventDefault();
    setPlayerName(playerName);
    
}
  return (
    <div>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                <div class="card ms-5 mt-3" style={{width: '18rem', height:'15rem'}}>
                <h5>Player name : </h5>
                <form onSubmit={playerSubmit}>
                <input className='m-3' type='text' onChange={(e)=>{setPlayerName(e.target.value)}} value={playerName} />
                <input type='submit' name='add player'/>
                </form>
                <h5>Name : {playerName}</h5>
                <h5>Time : 60 Sec</h5>
                <h5>Timer : {time}</h5>
                </div>
                </div>

            <div class="col">
                <div class="form-floating mt-3">
                <textarea className="form-control" style={{height:'15rem'}} onChange={(e)=>{setText(e.target.value)}} placeholder="Leave a comment here" id="floatingTextarea" value={text}></textarea>
                <label for="floatingTextarea">Type Here...</label>
                </div>
            </div>

            <div class="col">
                <div class="card ms-3 mt-3" style={{width: '18rem', height:'15rem'}}>
                <h5>Typed words : {words}</h5>
                <h5>Score : {text.length}</h5>
                <h5>Words /min : </h5>
                </div>
                </div>
            </div>
        </div>
        <div className='container text-center mt-3'>
            <div className='row'>
                <div className='col'>
                    <button className='btn btn-success' onClick={handleStart}>Test Start</button>
                </div>
                <div className='col'>
                    <button className='btn btn-danger' onClick={()=>handleResult(text)}>Test Result</button>
                </div>
            </div>
        </div>
        <section className='m-5'>
            <p>Sample Text:</p>
            <h6>In sports, racing is a competition of speed, in which competitors try to complete a given task in the shortest amount of time. Typically this involves traversing some distance, but it can be any other task involving speed to reach a specific goal.

            A race may be run continuously to finish or may be made up of several segments called heats, stages or legs. A heat is usually run over the same course at different times. A stage is a shorter section of a much longer course or a time trial.
            
Early records of races are evident on pottery from ancient Greece, which depicted running men vying for first place. A chariot race is described in Homer's Iliad.</h6>
        </section>
    </div>
  )
}

export default Player;