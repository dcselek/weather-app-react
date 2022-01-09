import styled from 'styled-components';
import Dropdown from './components/dropdown/Dropdown';
import Weather from './components/weather/Weather';

const AppLayout = styled.div`
  background-color: #D9FFFB;
  text-align: center;
`

function App() {
  return (
    <AppLayout>
      <Dropdown />
      <Weather />
    </AppLayout>
  );
}

export default App;
