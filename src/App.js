import './App.css';
import Dropdown from './components/dropdown/Dropdown';
import Weather from './components/weather/Weather';
import SelectedCity from './context/WeatherContext'

function App() {
  const { city } = SelectedCity()
  return (
    <div className="App">
      <Dropdown />
      <Weather />
    </div>
  );
}

export default App;
