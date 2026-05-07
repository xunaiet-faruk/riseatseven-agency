import AgencyBehind from '../AgencyBehind';
import CreativeSection from '../CreativeSection';
import DrivingDemand from '../Driving-Demand';
import Footer from '../Footer';
import LegacySlideCard from '../LegacySlideCard';
import Navbanner from '../Navbanner';
import Ourservices from '../Ourservices';
import ReadytoRise from '../ReadytoRise';
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
            <LegacySlideCard/>
            <WhatsNew/>
            <ReadytoRise/>
            <Footer/>
        </div>
    );
};

export default Home;