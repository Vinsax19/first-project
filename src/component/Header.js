import img from '../logo.png'
import avatar from '../avatar.png'
import Notification from '../Notification.png'

const Header = () => {
    return ( 
       <header className="header">
         <div className="brand-logo">
            <img src={img} alt="logo" /><p>Scm-Rcs</p>
         </div>
         <div className="user">
            <img src={avatar} alt="avatar"/>
            <p><span>Welcome, </span> <select name="name" id="name"><option value="Damilola">Damilola</option></select></p>
            <span className="notification"><img src={Notification} alt="Notification Bell"/><small>31</small></span>
         </div>
       </header> 
     );
}
 
export default Header;