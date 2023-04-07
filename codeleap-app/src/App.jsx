import './App.css';
import { Route } from 'react-router-dom';
import Signup from './pages/singnup';
import MainScreen from './pages/mainScreen';

function App() {
  return (
    <div>
      <Route path="/" exact component={Signup}/>
      <Route path="/main" component={MainScreen}/>
    </div>
  );
}

export default App;
