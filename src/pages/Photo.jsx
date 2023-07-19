import Header from "../component/Header/index";

import Footer from "../component/Footer";
import PhotoContent from "../component/PhotoContent/index";



function Photo(){
    return(
        <div className="main-layout main-container">
            <Header />
           <PhotoContent />
            <Footer className="footer-layout"/>
        </div>
    );
}
export default Photo;