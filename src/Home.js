import Menu from "./Menu";
import Sidebar from './Sidebar';
import Footer from './Footer';

function Home() {
    return (
        <>
            <Menu />

            <div id="wrapper">
                <div id="page-bgtop"></div>
                <div id="page">
                    <div><img src="images/carcall.jpg" width="920" height="500" alt="" /></div>
                    <div id="content">
                        <div className="post">
                            <h2 className="title">Home </h2>
                            <div >&nbsp;</div>
                            <div className="entry">
                                    <div style={{ color: 'Grey', fontSize: "30px" }}>
                                        WELCOME TO OUR STORE!
                                    </div>
                                    <br></br>
                                    <div style={{ color: 'DarkSilver', fontSize: '25px' }}>
                                       <li>The theme doesn’t just ensure an online store, but it offers an excellent support and marketing system that can help website owners overcome technical problems handily and increase sales.</li>
                                    </div>
                            </div>
                            
                        </div>

                        <div >&nbsp;</div>``
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
export default Home;