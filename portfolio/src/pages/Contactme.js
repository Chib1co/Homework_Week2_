import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Hero from "../components/Hero"
import Form from "../components/Form"
import ContactTitle from "../components/ContactTitle";

class Contactme extends React.Component {
    render() {
        return (
            // <!--contact form bootstrap-->
            <Hero backgroundImage={"/images/sean-o-KMn4VEeEPR8-unsplash.jpg"}>
                <Container>
                <ContactTitle />
                    <Form />
                </Container>
            </Hero>



        )
    };
}


export default Contactme;