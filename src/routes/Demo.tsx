import logo from '../assets/images/logo.svg'

import {Counter} from '../features/counter/Counter'

export const Demo = () => {
    
    return (<div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>)
}