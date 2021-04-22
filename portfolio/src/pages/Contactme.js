import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contactme() {
    return (
        // <!--contact form bootstrap-->
        <div className="display bg-hero">
            <Container>

                <Row>
                    <h1>Contact me</h1>
                </Row>
                <Row>
                    <Col csize="col-lg-7" className="form">
                        <div className="card shadow contact-me-card">
                            <form>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Firstname Lastname" />
    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput2">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
    </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlTextarea1">Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
  </form>


                                    <button type="button" className="btn btn-info">submit</button>
                                </div>

</Col>
                        </Row>
                    </Container>
                </div>


 );
}


export default Contactme;