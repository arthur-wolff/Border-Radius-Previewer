import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [rad1, setRad1] = useState(0)
  const [rad2, setRad2] = useState(0)
  const [rad3, setRad3] = useState(0)
  const [rad4, setRad4] = useState(0)

  

  function alterarBorda (){

    const radius1 = (document.getElementById('rad1').value)
    const radius2 = (document.getElementById('rad2').value)
    const radius3 = (document.getElementById('rad3').value)
    const radius4 = (document.getElementById('rad4').value)
    setRad1(radius1)
    setRad2(radius2)
    setRad3(radius3)
    setRad4(radius4)

    console.log(rad1)
    document.getElementById('box').style.borderRadius = `${rad1}px ${rad2}px ${rad3}px ${rad4}px` 
  }

  return (
    <div className='main'>
      <h1>Visualizador de Borda</h1>
      <div className='box' id='box'></div>
      <input className='rad1' id='rad1' type='text' maxLength={3} placeholder='00' defaultValue={0}/>
      <input className='rad2' id='rad2' type='text' maxLength={3} placeholder='00' defaultValue={0}/>
      <input className='rad3' id='rad3' type='text' maxLength={3} placeholder='00' defaultValue={0}/>
      <input className='rad4' id='rad4' type='text' maxLength={3} placeholder='00' defaultValue={0}/>
      <button onClick={alterarBorda}>Alterar Borda</button>
      <div>
        
      </div>

    </div>
  )
}

export default App
