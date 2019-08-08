import React, {useState} from 'react';
import './App.css';

const Attackers = ["Sledge", "Thatcher", "Ash", "Thermite", "Twitch", "Montagne", "Glaz", "Fuze", "Blitz", "IQ", "Buck", "Blackbeard",
"Capitão", "Hibana", "Jackal", "Ying", "Zofia", "Dokkaebi", "Lion", "Finka", "Maverick", "Nomad", "Gridlock", "Nøkk"]
const Defenders = ["Smoke", "Mute", "Castle", "Pulse", "Doc", "Rook", "Kapkan", "Tachanka", "Jäger", "Bandit", "Frost", "Valkyrie",
"Caveira", "Echo", "Mira", "Lesion", "Ela", "Vigil", "Maestro", "Alibi", "Clash", "Kaid", "Mozzie", "Warden"]

let AttackNumber = Array(24).fill(0)
let DefendNumber = Array(24).fill(0)
let AttackQueue = []
let DefendQueue = []


const SoftBreach = [0, 3, 11, 16]
function R6SRando() {
  let [Op, setOp] = useState("? ? ?")

  
  const AttackStyle = {
    fontSize: "20px",
    backgroundColor: "#E2A2FE",
    padding: "15px",
    color: "#e7e7e7",
    borderRadius: "12px",
    margin: "10px"
  }
  const DefendStyle = {
    fontSize: "20px",
    backgroundColor: "#BBAFFD",
    padding: "15px",
    color: "#e7e7e7",
    borderRadius: "12px",
    margin: "10px"
  }
    /*const OnStyle = {
    fontSize: "20px",
    backgroundColor: "#A2C5FE",
    padding: "15px",
    color: "#e7e7e7",
    borderRadius: "12px",
    margin: "10px"
    } */
   const ToggleDefault = {
    fontSize: "20px",
    backgroundColor: "#727A87",
    padding: "15px",
    color: "#9DA9B1",
    borderRadius: "12px",
    margin: "10px"
  }

  const DoAttack = () => {
    setOp(Attackers[Math.floor(Math.random() * Attackers.length)])
  }
  const DoDefend = () => {
    setOp(Defenders[Math.floor(Math.random() * Defenders.length)])
  }

  const SoftBreachToggle = () => {
    const sbbutton = document.getElementById("SoftBreachersButton")
    if (sbbutton.value === "OFF"){
      SoftBreach.forEach(function(element){
        AttackNumber[element]++
      })
      console.log(AttackNumber)
      buttontoggle(sbbutton)
    }
    else {
      SoftBreach.forEach(function(element){
        AttackNumber[element]--
      })
      console.log(AttackNumber)
      buttontoggle(sbbutton)
    }
  }

  const DoExtraAttack = () => {
    for (var i = 0; i < AttackNumber.length; i++){
      console.log(AttackNumber[i])
      if(AttackNumber[i] !== 0) {
        AttackQueue.push(Attackers[i])
      }
    }
    setOp(AttackQueue[Math.floor(Math.random() * AttackQueue.length)])
    if(AttackQueue.length === 0){
      setOp("Fix ya settings ya dingus")
    }
    console.log(AttackQueue)
    AttackQueue = []
  }
  const DoExtraDefend = () => {
    for (var i = 0; i < DefendNumber.length; i++){
      console.log(DefendNumber[i])
      if(DefendNumber[i] !== 0) {
        DefendQueue.push(Defenders[i])
      }
    }
    setOp(DefendQueue[Math.floor(Math.random() * DefendQueue.length)])
    if(DefendQueue.length === 0){
      setOp("Fix ya settings ya dingus")
    }
    console.log(DefendQueue)
    DefendQueue = []
  }

  const buttontoggle = (button) => {
    if (button.value === "OFF"){
      button.value= "ON"
      button.style.backgroundColor = "#A2C5FE"
      button.style.color = "#e7e7e7"
    }
    else {
      button.value = "OFF"
      button.style.backgroundColor = "#727A87"
      button.style.color = "#9DA9B1"
    }
  }

  const testfunction = () => {  //linked to test button
    console.log(AttackNumber)
  }

  return (
    <div className="App-header">
        <h1>Click a class to select a random Operator!</h1>
        <div className = "default">
          <button style = {AttackStyle} onClick={DoAttack}>ATTACK</button>
          <button style = {DefendStyle} onClick={DoDefend}>DEFEND</button>
        </div>
        <h3>Toggle Operators to include or exclude below!</h3>
        <div className = "extrasettings">
          <button id='SoftBreachersButton' value = "OFF" style = {ToggleDefault} onClick={SoftBreachToggle}>SOFT BREACHERS</button>
        </div>
        <div className = "doextra">
          <button id="ExtraAttack"style = {AttackStyle} onClick={DoExtraAttack}>ATTACK with extra settings</button>
          <button style = {DefendStyle} onClick={DoExtraDefend}>DEFEND with extra settings</button>
        </div>
        <h2>You are using: {Op}</h2>
        <button onClick={testfunction}>TEST</button> {/*take out when done*/}
    </div>
  );
}



export default R6SRando;
