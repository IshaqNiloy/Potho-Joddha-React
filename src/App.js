import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navbar';
import Cards from './components/Cards';
import Stats from './components/Stats';
import CausesCards from './components/CausesCards';
import Volunteer from './components/Volunteer';
import EventCards from './components/EventsCards'

function App() {
  return (
    <div>
      <Navigationbar />
      <Cards heading="Donation" desc="Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt" link="DONATE NOW"/>
      <Stats />
      <CausesCards />
      <Volunteer />
      <EventCards />
    </div>
  );
}

export default App;
