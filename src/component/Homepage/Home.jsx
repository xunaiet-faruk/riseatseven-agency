import AgencyBehind from '../AgencyBehind';
import CreativeSection from '../CreativeSection';
import DrivingDemand from '../Driving-Demand';
import Footer from '../Footer';
import Navbanner from '../Navbanner';
import Ourservices from '../Ourservices';
import WhatsNew from '../WhatsNew';
import Header from './Header';

const Home = () => {
    return (
        <div className=''>
            <Header/>
            <Navbanner/>
            <AgencyBehind/>
            <DrivingDemand/>
            <Ourservices/>
            <CreativeSection/>
            <WhatsNew/>
            <Footer/>
        </div>
    );
};

export default Home;