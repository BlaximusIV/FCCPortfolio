import React from 'react'
import './DrumMachine.css'

const sounds = 
    ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    ,'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3']


// const sound = document.getElementById(this.props.keyTrigger);
// sound.currentTime = 0;
// sound.play();

// document.getElementById('yourAudioTag').play();

class DrumMachine extends React.Component{
    render = () =>
        <div id='drum-machine'>
            <div id='display'>
                <p>Here is the display input</p>
            </div>
            <div id='keyControl'>
                <button className='drum-pad'>1</button>
                <button className='drum-pad'>2</button>
                <button className='drum-pad'>3</button>
                <button className='drum-pad'>4</button>
                <button className='drum-pad'>5</button>
                <button className='drum-pad'>6</button>
                <button className='drum-pad'>7</button>
                <button className='drum-pad'>8</button>
                <button className='drum-pad'>9</button>
            </div>
        </div>
}

export default DrumMachine