import store from './store/store'
import { Provider } from 'react-redux'
import './App.css'

function App() {

  return (  
   <Provider store={store}> <div>
      <h1>Redux Example</h1>

    </div></Provider>
  )
}

export default App
