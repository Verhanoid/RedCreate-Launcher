import './assets/styles/app.scss'
import './assets/styles/start.scss'

//////////////////////////

import startImage from './assets/images/start.png'

function App() {
  return (
    <>
      <section id='start'>
        <img src={startImage} className='startImage'/>
        <h1>Пошло, поехало!</h1>
        <p>RedCreate Launcher v1.0.0</p>
      </section>
    </>
  )
}

export default App