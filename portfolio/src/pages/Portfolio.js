import React, {useState} from 'react'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'
import Card from '../components/Card'

export default function Portfolio() {



    const [projects, setProjects] = useState([
        {
            img: "assets/repo-screenshot/Gym_tracker.png",
            img_alt: "gymtracker-project2",
            github: "https://github.com/Chib1co/gymtrack",
            title: "Gym Tracker/Group project2",
            desc:  "Second group project. Also out first full stack web application.  We ",
            app_link: "https://gymtrack-app.herokuapp.com/",

        },
        {
            img: "assets/repo-screenshot/Gym_tracker.png",
            img_alt: "gymtracker-project2",
            github: "https://github.com/Chib1co/gymtrack",
            title: "Gym Tracker/Group project2",
            desc:  "Second group project. Also out first full stack web application.  We ",
            app_link: "https://gymtrack-app.herokuapp.com/",

        },

    ])

    return (
        <div>
            <Container>
                <Row>
                    {projects.map((project) => {
                        return (
                            <Col>
                                <Card
                                 {...project}
                                />
                                
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
