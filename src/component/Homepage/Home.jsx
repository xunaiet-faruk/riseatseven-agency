import AgencyBehind from '../AgencyBehind';
import DrivingDemand from '../Driving-Demand';
import Footer from '../Footer';
import Navbanner from '../Navbanner';
import Ourservices from '../Ourservices';
import Header from './Header';

const Home = () => {
    return (
        <div className=''>
            <Header/>
            <Navbanner/>
            <AgencyBehind/>
            <DrivingDemand/>
            <Ourservices/>
            <Footer/>
        </div>
    );
};

export default Home;