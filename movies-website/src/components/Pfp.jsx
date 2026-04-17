import logoImage from '.././images/icon-user.png';
import "./pfp.css";
import { useState } from 'react';
import Login from './Login';

function Pfp() {

    const [seen, setSeen] = useState(false);
    function togglepopup(){
        setSeen(!seen);
    }
    return (


        <div>
            
            <button className='loginIconButton' 
            onClick={togglepopup}>
                <img src={logoImage} alt="icon" className='loginIcon' />
                
                {seen ? <Login toggle={togglepopup} /> : null}
                </button><p className="loginText">user</p>
        </div>
    );
} 


export default Pfp;