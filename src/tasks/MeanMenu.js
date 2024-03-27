import React from 'react';
import { Link } from 'react-router-dom';

const MeanMenu = () => {
  return (
    <nav>
      <ul>
      
      <li className="current_page_item">
                            <Link to='/Home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/About'>About</Link>
                        </li>
                        <li>
                            <Link to='/Contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/TODO'>TODO</Link>
                        </li>
                        <li>
                            <Link to='/Counter'>Counter App</Link>
                        </li>
                        <li>
                            <Link to='/ColorChanger'>Color Changera</Link>
                        </li>
                        <li>
                            <Link to='/LoginCompare'>Login Compare</Link>
                        </li>
                        <li>
                            <Link to='/ResetPassword'>ResetPassword</Link>
                        </li>
                        <li>
                            <Link to='/Map'>Map</Link>
                        </li>
                        <li>
                            <Link to='/DisplayPassword'>Display Password</Link>
                        </li>
                        <li>
                            <Link to='/Addapi'>Add Api</Link>
                        </li>
                        <li>
                            <Link to='/FatchDemo'>FatchDemo</Link>
                        </li>
                        <li>
                            <Link to='/Calculator'>Calculator</Link>
                        </li>

      </ul>
    </nav>
  );
};

export default MeanMenu;
