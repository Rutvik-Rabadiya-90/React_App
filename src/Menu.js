import { Link } from 'react-router-dom';
function Menu() {
    return (
        <>
            <div id="menu-wrapper">
                <div id="menu">
                    <ul>
                        <li className="current_page_item">
                            <Link to='/'>Home</Link>
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
                    </ul>
                </div>

            </div>
            <div id="header-wrapper">
                <div id="header">
                    <div id="logo">
                        <h1><a href="#">My Car Demo</a></h1>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Menu;    