import React from 'react';
import ReactDOM  from 'react-dom/client';
import liberty from './images/Liberty.jpg'

// -- FUNCTION COMPONENT --
// content in the app
const App = function(){
    //create a constant variable
    const divText ='I am a text in a variable'
    //create a style variable
    const styleJSX={color:'purple', fontFamily:'Algerian'}
    return(
        <div>
            <h1 style={{color:"magenta", textAlign:"center"}}>Welcome to ReactJS</h1>
            <p>Let's be familiar with JSX elements</p>
            <h2>Activity: Places to visit in NYC</h2>
            <ul>
                <li>Statue of Library</li>                
                <li>Bronx Zoo</li>  
                <li>Empire State Building</li>  
            </ul>
            <h2>Inline styling</h2>
            <label for="email" style={{color:"olive", padding:"0.5em 1em", fontWeight:'bolder'}}>Enter e-mail</label>
            <input id='email' type='text' placeholder='Type your email' style={{backgroundColor:'rgb(230,230,230)', padding:'0.5em', borderRadius:'5em'}}/>
            <button style={{marginLeft:'1em', backgroundColor:'magenta', padding:'0.5em 1em', borderRadius:'0.5em', color:'whitesmoke'}}>Submit form</button>
            <figure>
                <img scr={liberty} style={{width:'50%'}}/>
            </figure>
            <p classname='title'>Adding a class name to a JSX element</p>
            <p classname='txtVar'>{divText}</p>
             <p style={styleJSX}>{divText}</p>
        </div>
    )
}

//rooting the app
const root=ReactDOM.createRoot(document.querySelector('#root'))
root.render(App())