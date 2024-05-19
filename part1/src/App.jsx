/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count c'est {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */

import React from 'react'

//fonctions fléchées
import Moment from 'moment'

const Joueurs = [
  { prenom: 'Ricky', nom: 'Kaka', age: 32 },
  { prenom: 'Rafa', nom: 'Leao', age: 25 },
  { prenom: 'Pippo', nom: 'Inzaghi', age: 45 },
]
var Prenom = 'Ricky'
var Nom = 'Kaka'
var Age = '35'

//chaque component dois commencer avec un lettre majuscul
const FormContact = () => {
  return (
    <form  id="formContact" >
      <input type="text" id="inputPrenom" name="inputPrenom" placeholder='Prénom' />
      <br/>
      <br/>
      <input type="text" id="inputNom" name="inputNom" placeholder='Nom' />
      <br/>
      <br/>
      <input type="text" id="inputAge" name="inputAge" placeholder='Age' />
      <br/>
      <br/>
    </form>
  )
}

const ButtonSendForm = () => {
  return (
    <div class="div2">
      <button id='btnSendForm' onClick={(note,ul,li) => 
      {
        //TO-DO: ca marche pas: faire reload de la const 'App'
        debugger;
        Prenom = document.getElementById("inputPrenom").value;
        Nom = document.getElementById("inputNom").value;
        Age = document.getElementById("inputAge").value;

        document.getElementById("inputPrenom").value = "";
        document.getElementById("inputNom").value = "";
        document.getElementById("inputAge").value = "";
      }
      }>Soumettre</button>

    </div>
  )
}

//props c'est des entrés arbitraires
const DivResultForm = (props) => {
  return(
  <div class="divResultForm">
    <p>Prénom: <label id='lblPrenom'>{props.prenom}</label></p> 
    <p>Nom: <label id='lblNom'>{props.nom}</label></p> 
    <p>Age: <label id='lblAge'>{props.age}</label></p>
  </div>
  )
}

//le contenu d'un composant React doit (généralement) contenir un élément racine
// const App = () => {
//   console.log('Hello from component')
//   const now = new Date()
//   const a = 10
//   const b = 20
//   //https://momentjs.com/docs/#/i18n/
//   //pourquoi cette librerie marche pas et la date c'est montré en anglais??
//   Moment.locale('fr')


//   return(
//  //nous avons des éléments div "supplémentaires" dans l'arbre DOM. 
//  //Cela peut être évité en utilisant des fragments, 
//  //c'est-à-dire en enveloppant les éléments à renvoyer par le composant avec un élément vide
//   <>
    
//     <p>Bonjour à toute le monde, c'est {Moment(now).format('HH:mm dddd MMMM')}</p>
//     <p>
//         {a} plus {b} egal {a + b}
//     </p>
//     <div class="mainDiv">
//         <FormContact />
//     </div>
//     <ButtonSendForm />
//     <br/>
//     <br/>
//     <br/>
//     {/* un element peut etre repeté */}
//     <DivResultForm prenom={Joueurs[0].prenom} nom={Joueurs[0].nom} age={Joueurs[0].age}/>
//     <br />
//     <DivResultForm prenom={Joueurs[1].prenom} nom={Joueurs[1].nom} age={Joueurs[1].age}/>
//     <br />
//     <DivResultForm prenom={Joueurs[2].prenom} nom={Joueurs[2].nom} age={Joueurs[2].age}/>
//     <br />
    
//   </>

// )
// }

const Header = (props) => {
  return(
  <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
    <>
    <p>
      {props.part} {props.exercises}
    </p>
    </>
  )
}

const Content = (props) => {
  return(
      <>
      <Part part = {props.part1} exercises = {props.exercises1} />
      <Part part = {props.part2} exercises = {props.exercises2} />
      <Part part = {props.part3} exercises = {props.exercises3} />
      
      </>
  )
}



const Total = (props) =>{
  return(
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} exercises1 = {exercises1} part2 = {part2} exercises2 = {exercises2} part3 = {part3} exercises3 = {exercises3} />
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
      
    </div>
  )
}

const App2 = () => {
  const dateNow = new Date()
  const a = 5
  const b = 4
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Bonjour tout le monde'
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' egal ', a + b
    )
  )
}

export default App
//export default App2
