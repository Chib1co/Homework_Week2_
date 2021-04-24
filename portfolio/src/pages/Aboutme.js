import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
// import Col from "../components/Col";
import HeaderHero from "../components/HeaderHero";
import Biography from "../components/Biography";


class Aboutme extends React.Component {
    render() {
    return (
        <div>
            <div className="ocean">
                <div className="bubble bubble--1"></div>
                <div className="bubble bubble--2"></div>
                <div className="bubble bubble--3"></div>
                <div className="bubble bubble--4"></div>
                <div className="bubble bubble--5"></div>
                <div className="bubble bubble--6"></div>
                <div className="bubble bubble--7"></div>
                <div className="bubble bubble--8"></div>
                <div className="bubble bubble--9"></div>
                <div className="bubble bubble--10"></div>
                <div className="bubble bubble--11"></div>
                <div className="bubble bubble--12"></div>
            </div>
           
         
<Container id="bootstrap-container">
            <Row className="header-img">
                <HeaderHero backgroundImage= {'/images/surf-me.jpg'}/>
                
            </Row>

            

             <Biography />

             </Container>       

           
        </div>

    )}
};

export default Aboutme;