import megan from '../assets/megan.jpg'
import '../pages/Header.css'

const Header = () =>{
    return (
        <div className="header-divSection">
            <h1 className="header-title">
                Welcome to Glo Management App, manage your expenses without worry with us.

            </h1>
            <img className="header-image" src={megan} alt="Presentation"/>
            <h1 className="header-title">A problem? Contact us( CALL ME IF YOU GET LOST)</h1>
        </div>
    )
}


export default Header;