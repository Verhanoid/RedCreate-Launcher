import './assets/styles/app.scss'
{/*import './assets/styles/start.scss'*/}

//////////////////////////

import startImage from './assets/images/start.png'
import avatarImage from './assets/images/avatar1.png'
 

function App() {
  return (
      <div className="app-container">
        <img src={startImage} className="app-background" alt="background" />

        <div className="bg-overlay"></div>

        <aside className="sidebar">

          <div className="sidebar-logo">
            <span className="logo-large">CONVIENCE</span>
            <span className="logo-small">LAUNCHER</span>
          </div>

          <div className="sidebar-projects">
            <div className="project-header">
              <span>Проекты</span>
            </div>
            <ul className="project-list">
              <li>
                <span className="icon red">restone block</span> RedCreate
              </li>
              <li>
                <span className="icon grean">grass block</span> Vanilla+
              </li>
              <li>
                <span className="icon beige">commande block</span> Тестовый
              </li>
            </ul>
          </div>

          <div className="sidebar-bottom">
            <div className="user-profile">
              <div className="user-info">
                <img src={avatarImage} className="avatar" alt="Аватар пользователя" />
                <span className="username">Player</span>
              </div>
              <button className="settings-btn">gear</button>
            </div>
            <div className="app-version">v0.0.1</div> 
          </div>
        
        </aside>
        
        <main className="main-content">

          <h2>Part two fucker's</h2>
        </main>
      </div>
  )
}

export default App