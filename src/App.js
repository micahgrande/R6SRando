import React, {useState} from 'react';
import './App.css';

//                 0          1           2       3          4        5           6        7      8         9    10       11
const Attackers = ["Sledge", "Thatcher", "Ash", "Thermite", "Twitch", "Montagne", "Glaz", "Fuze", "Blitz", "IQ", "Buck", "Blackbeard",
//12        13        14        15      16      17          18      19        20          21       22          23
"Capitão", "Hibana", "Jackal", "Ying", "Zofia", "Dokkaebi", "Lion", "Finka", "Maverick", "Nomad", "Gridlock", "Nøkk"]
//                  0       1       2         3         4      5       6         7           8        9         10      11
const Defenders = ["Smoke", "Mute", "Castle", "Pulse", "Doc", "Rook", "Kapkan", "Tachanka", "Jäger", "Bandit", "Frost", "Valkyrie",
//12        13      14      15        16    17        18        19       20       21       22        23
"Caveira", "Echo", "Mira", "Lesion", "Ela", "Vigil", "Maestro", "Alibi", "Clash", "Kaid", "Mozzie", "Warden"]

let AttackNumber = Array(24).fill(0)
let DefendNumber = Array(24).fill(0)
let AttackQueue = []
let DefendQueue = []

const SoftBreach = [0, 2, 10, 16]
const HardBreach = [3, 13]
const ShieldAttack = [5, 8]
const ShieldDefend = [20]
const Camera = [11,13,18]

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

function R6SRando() {
  
  let [Op, setOp] = useState("? ? ?") //variable shown as the name of who you're playing

  //Randomize all ops. no extra settings
  const DoAttack = () => {
    setOp(Attackers[Math.floor(Math.random() * Attackers.length)])
  }
  const DoDefend = () => {
    setOp(Defenders[Math.floor(Math.random() * Defenders.length)])
  }

  //extra settings connected to similarly named buttons
        const SoftBreachToggle = () => {
          const button = document.getElementById("SoftBreachersButton")
          if (button.value === "OFF"){
            SoftBreach.forEach(function(element){
              AttackNumber[element]++
            })
            console.log("Attack: " + AttackNumber)
            buttontoggle(button)
          }
          else {
            SoftBreach.forEach(function(element){
              AttackNumber[element]--
            })
            console.log("Attack: " + AttackNumber)
            buttontoggle(button)
          }
        }

        const HardBreachToggle = () => {
          const button = document.getElementById("HardBreachersButton")
          if (button.value === "OFF"){
            HardBreach.forEach(function(element){
              AttackNumber[element]++
            })
            console.log("Attack: " + AttackNumber)
            buttontoggle(button)
          }
          else {
            HardBreach.forEach(function(element){
              AttackNumber[element]--
            })
            console.log("Attack: " + AttackNumber)
            buttontoggle(button)
          }
        }

        const ShieldToggle = () => {
          const button = document.getElementById("ShieldButton")
          if (button.value === "OFF"){
            ShieldAttack.forEach(function(element){
              AttackNumber[element]++
            })
            ShieldDefend.forEach(function(element){
              DefendNumber[element]++
            })
            console.log("Attack: " + AttackNumber)
            console.log("Defend: "+ DefendNumber)
            buttontoggle(button)
          }
          else {
            ShieldAttack.forEach(function(element){
              AttackNumber[element]--
            })
            ShieldAttack.forEach(function(element){
              DefendNumber[element]--
            })
            console.log("Attack: "+AttackNumber)
            buttontoggle(button)
          }
        }
        const CameraToggle = () => {
          const button = document.getElementById("CameraButton")
          if (button.value === "OFF"){
            Camera.forEach(function(element){
              DefendNumber[element]++
            })
            console.log("Attack: " + DefendNumber)
            buttontoggle(button)
          }
          else {
            Camera.forEach(function(element){
              DefendNumber[element]--
            })
            console.log("Attack: " + DefendNumber)
            buttontoggle(button)
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
  const DoExtraDefend = () => { //called when DEFEND with extra settings button is pressed
    for (var i = 0; i < DefendNumber.length; i++){
      console.log(DefendNumber[i])
      if(DefendNumber[i] !== 0) { //
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

  const buttontoggle = (button) => { //Gray or color
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
          <button id="HardBreachersButton" value = "OFF" style = {ToggleDefault} onClick={HardBreachToggle}>HARD BREACHERS</button>
          <button id="ShieldButton" value = "OFF" style = {ToggleDefault} onClick={ShieldToggle}>SHIELDS</button>
          <button id="CameraButton" value = "OFF" style = {ToggleDefault} onClick={CameraToggle}>CAMERAS</button>
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
