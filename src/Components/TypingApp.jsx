import React from 'react'
import Player from './Player'

const TypingApp = () => {


  return (
    <div>
        <div class="container text-center mt-5">
            <div class="row">
              <div class="col bg-primary">
                <h3>Typing Speed Test</h3>
              </div> 
            </div>
        </div>
        <Player />
       
    </div>
  )
}

export default TypingApp