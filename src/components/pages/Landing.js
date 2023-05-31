import "../../styles/App.css";
import logo from '../../images/logo.png';
import ButtonRegister from "./login-page/Button-register";
import ButtonSign from "./login-page/Button-sign";


function Landing() {
    return (
    <div className="landing">
        <img className="img-logo" src={logo} alt="lodo de Mi App"></img>
            <h1 className="landing-title">Mi App</h1>  
            <ButtonRegister />
            <ButtonSign/>
        
    </div>

    )
}

export default Landing;