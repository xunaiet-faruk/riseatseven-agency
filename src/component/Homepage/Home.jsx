import AgencyBehind from '../AgencyBehind';
import Navbanner from '../Navbanner';
import Header from './Header';

const Home = () => {
    return (
        <div className=''>
            <Header/>
            <Navbanner/>
            <AgencyBehind/>
        </div>
    );
};

export default Home;