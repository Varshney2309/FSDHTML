import React from 'react'
import Student from './Student'
import StateHandling from './StateHandling'
import ImageManipulation from './ImageManipulation'

function App() {
  // const studentdata= [{
  //   image:"https://missionfinancialservices.net/wp-content/uploads/2019/04/aprilblog2.jpg",
  //   name:"Rahul Kumar",
  //   roll:"23456",
  //   college:"Abes Engineering College"
  // },
  // {
  //   image:"https://tse2.mm.bing.net/th?id=OIP.5F3SyVGz57QTefASUtBtpgHaHa&pid=Api&P=0&h=180",
  //   name:"Arjun Kumar",
  //   roll:"123456",
  //   college:"Abes Engineering College"

  // },
  // {
  //   image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
  //   name:"Harshit Kumar",
  //   roll:"23456",
  //   college:"Abes Engineering College"
  // }
  // ]
  return (
    <div>
      <div>
        <h2 style={{color:'red'}}>hello react js</h2>
        <div>
          {/* <StateHandling /> */}
          
          {/* <Student data={studentdata} /> */}
          {/* {
            studentdata.map((ele)=>{

              return (
                <Student data={ele} />

              )
            })
          } */}
          <ImageManipulation />
        </div>
        <div>
          {/* <Student image={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100} />} name="Rahul Kumar" roll="2346" college="ABES Engineering college" /> */}
        </div>

      </div>
      
    </div>
  )
}

export default App

