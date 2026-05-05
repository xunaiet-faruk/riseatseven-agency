import AgencyBehind from '../AgencyBehind';
import DrivingDemand from '../Driving-Demand';
import Footer from '../Footer';
import Navbanner from '../Navbanner';
import Header from './Header';

const Home = () => {
    return (
        <div className=''>
            <Header/>
            <Navbanner/>
            <AgencyBehind/>
            <DrivingDemand/>
            <Footer/>
        </div>
    );
};

export default Home;