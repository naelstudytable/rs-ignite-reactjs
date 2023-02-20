import style from './App.module.css'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <div>
          <Tasks />
        </div>
      </div>
    </div>
  )
}

export default App
