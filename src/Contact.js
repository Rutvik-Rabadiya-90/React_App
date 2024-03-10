import Menu from "./Menu";
import Sidebar from './Sidebar';
import Footer from './Footer';

function Contact() {
    return (
        <>
            <Menu />

            <div id="wrapper">
                <div id="page-bgtop"></div>
                <div id="page">
                    <div><img src="images/CarContact.jpg" width="920" height="500" alt="" /></div>
                    <div id="content">
                        <div className="post">
                            <h1 className="title"><a href="#">Contact </a></h1>

                            <div >&nbsp;</div>
                            <div className="entry">
                                <div style={{ color: 'Grey', fontSize: "35px" }}>
                                OUR SHOP
                                </div>
                                <br></br>
                                <div>
                                
                                <div style={{color:'ActiveBorder' ,fontSize:'25px' }}><strong>Address:</strong></div>
                                <div style={{color:'Highlight',fontSize:'20px'}}>A-65,Falgun Tenament,Jodhpur Cross Road,Ahmedabad</div>
                                <br></br>
                                <div style={{color:'ActiveBorder' ,fontSize:'25px' }}><strong>Phone:</strong></div>
                                <div style={{color:'Highlight',fontSize:'20px'}}>+91-9909229682</div>
                                </div>
                            </div>
                        </div>

                        <div >&nbsp;</div>
                    </div>

                    <Sidebar />

                    <div >&nbsp;</div>
                </div>
                <div id="page-bgbtm"></div>
            </div>
            <Footer />
        </>
    )
}
export default Contact;