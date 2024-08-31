import './App.css'

import Title from './components/Title';
import Panel from './components/Panel';
import Keyboard from './components/Keyboard';

const App: React.FC = () => {

  const handleKeyPress = (evt : React.MouseEvent<HTMLButtonElement> ) : string => {

    const button = evt.target as HTMLElement
    const value = button.innerText;

    return value;
  };


  return (
    <>
    <div className='w-full h-screen flex flex-col gap-5 items-center m-2'>
        <Title />
        <Panel />
        <Keyboard handleKeyPress={handleKeyPress} />
      </div>
    </>
  )

}

export default App
