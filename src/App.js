import Header from './header';
import About from './about';
import Events from './event';
import Organizers from './organizers';
import Footer from './footer';
import MainEvent from './maineve';
import './App.css'; 

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Events />
            <Organizers />
            <Footer />
            <MainEvent />
        </div>
    );
};

export default App;