import './App.css';
import Dropdown from './components/dropdown/Dropdown';
import SelectedCity from './context/WeatherContext'

function App() {
  const { city } = SelectedCity()
  return (
    <div className="App">
      <Dropdown />
      <h2>{city}</h2>
    </div>
  );
}

export default App;
