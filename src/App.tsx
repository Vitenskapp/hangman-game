import './App.css'

import Title from './components/Title';
import Panel from './components/Panel';
import Keyboard from './components/Keyboard';

function App() {

  return (
    <>
    <div className='w-full h-screen flex flex-col gap-5 items-center m-2'>
        <Title />
        <Panel />
        <Keyboard />
      </div>
    </>
  )
}

export default App
