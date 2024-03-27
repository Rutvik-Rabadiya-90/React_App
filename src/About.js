import Menu from "./Menu";
import Sidebar from './Sidebar';
import Footer from './Footer';

function About() {
    return (
        <>
            {/* <Menu /> */}

            <div id="wrapper">
                <div id="page-bgtop"></div>
                <div id="page">
                    <div><img src="images/CarAbout.jpg" width="920" height="400" alt="" /></div>
                    <div id="content">
                        <div className="post">
                            <h2 className="title"><a href="#">About   </a></h2>

                            <div >&nbsp;</div>
                            <div className="entry">
                                <div style={{ color: 'Grey', fontSize: "30px" }}>
                                    ABOUT OUR STORE
                                </div>
                                <br></br>
                                <div style={{ color: 'DarkSilver', fontSize: '25px' }}>
                                    Give your visitors the feel of true immersion, an illusion of depth in 2D environments of your site. Parallax will definitely make user experience onsite better and make the visitors come back to your website every now and again.
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
export default About;