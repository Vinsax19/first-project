import React from 'react';
import icon1 from '../icon1.png';
import icon2 from '../icon2.png';
import icon3 from '../icon3.png';
import icon4 from '../icon4.png';
import icon5 from '../icon5.png';


const Navbar = () => {
    return (
        <aside>
            <h1>Menu</h1>
            <ul>
                <li><span><img src={icon1} alt="icon-1"/> Overview</span></li>
                <li>
                    <span><img src={icon2} alt="icon-2"/> Facility Maintenance <i className="fas fa-chevron-down"></i></span>
                    <ul className="dropdown">
                        <li>Facility Categorization</li>
                        <li>Facility Profiling</li>
                        <li>Setup Pay-Items</li>
                        <li>Setup Other Billings</li>
                    </ul>
                </li>
                <li><span><img src={icon3} alt="icon-3"/> Subscriber Maintenance <i className="fas fa-chevron-down"></i></span></li>
                <li><span><img src={icon4} alt="icon-4"/> Reports <i className="fas fa-chevron-down"></i></span></li>
                <li><span><img src={icon5} alt="icon-5"/> Logout</span></li>
            </ul>
        </aside>
    )
}

export default Navbar;