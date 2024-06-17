import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css"

import './global.css';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar/>
        <main>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Beatae in explicabo optio quisquam eius voluptas neque quidem recusandae velit laborum veritatis sapiente veniam accusamus, 
          quo alias dicta, vitae magnam harum.

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Beatae in explicabo optio quisquam eius voluptas neque quidem recusandae velit laborum veritatis sapiente veniam accusamus, 
          quo alias dicta, vitae magnam harum.
        </main>

      </div>

    </div>
  )
}

export default App
