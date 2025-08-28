import React, { useEffect, useState } from 'react'
import {Typewriter} from 'react-simple-typewriter'


function App() {

  
  return (
    <div>
       <div >
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Web Developer {''}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Html', 'Css', 'JavaScript', 'React js','Node js','Express js','MongoDB','MySql']}
            loop={true }
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
    </div>
  )
}

export default App

