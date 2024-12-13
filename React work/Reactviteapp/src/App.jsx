import React from 'react'
import Student from './Student'
import StateHandling from './StateHandling'
import ImageManipulation from './ImageManipulation'
import UseEffectWork from './UseEffectWork'
import Login from './Login'
import Registration from './Registration'

function App() {

// const studentdata=[{
//   image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
//   name:"Rahul Kumar",
//   roll:"1232434",
//   college:"ABES Engineering College"
// },
// {
//   image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
//   name:"Amit Tomer",
//   roll:"8989898",
//   college:"ABES Engineering College"
// },
// {
//   image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
//   name:"Arjun Kumar",
//   roll:"578558",
//   college:"AKG Engineering Collleg"
// },
// {
//   image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
//   name:"Sachin",
//   roll:"9898989",
//   college:"ABES Engineering College"
// }
// ]
  return (
    <div>
<div>
  <h2 style={{color:'red'}}>Hello React JS </h2>
<h2>Login Form</h2>
  <Login />
  <br></br>
  <h2>Registration Form</h2>
  <Registration />
  <div>
    {/* <UseEffectWork /> */}
  </div>
  <div>
    {/* <ImageManipulation /> */}
  </div>
  <div>
{/* <StateHandling /> */}

  </div>
  <div>
{/* <Student data={studentdata[]} /> */}

{/* {
studentdata.map((ele)=>{

  return(
    <Student data={ele} />
  )
})

} */}
  </div>
  <div>
    {/* <Student image={<img src={'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png'} height={100} width={100} />}  name="Rahul Kumar" roll="23246" college="ABES Engineering College" /> */}
  
  </div>
</div>

    </div>
  )
}

export default App