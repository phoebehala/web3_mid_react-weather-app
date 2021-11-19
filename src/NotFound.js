import {Link} from 'react-router-dom';
import Footer from './components/Footer';
import './NotFound.css'
 
const NotFound = () => {
   return ( 
       <>
       <div className="not-found">
           <h2>Sorry</h2>
           <p>The page cannot be found</p>
           <Link to="/">Back to the homepage ...</Link>
           
       </div>
       <Footer />
       </>
   );
}
export default NotFound;