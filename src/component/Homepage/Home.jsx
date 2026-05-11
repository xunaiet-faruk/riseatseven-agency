import AgencyBehind from '../AgencyBehind';
import CreativeSection from '../CreativeSection';
import DrivingDemand from '../Driving-Demand';
import FeaturedWork from '../FeaturedWork';
import Footer from '../Footer';
import LegacySlideCard from '../LegacySlideCard';
import Navbanner from '../Navbanner';
import Ourservices from '../Ourservices';
import ReadytoRise from '../ReadytoRise';
import WhatsNew from '../WhatsNew';
import Header from './Header';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Header/>
            <Navbanner/>
            <AgencyBehind/>
            <DrivingDemand/>
            <FeaturedWork />
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
