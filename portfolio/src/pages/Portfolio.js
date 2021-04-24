import React, {useState} from 'react'
// import Container from '../components/Container'
// import Row from '../components/Row'
// import Col from '../components/Col'
import Card from '../components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function Portfolio() {



    const [projects, setProjects] = useState([
        {
            title: "Gym Tracker/Group project2",
            desc:  "Second group project. Also out first full stack web application.  We created fake gym management app. ",
            img: "/images/Gym_tracker.png",
            img_alt: "gymtracker-project2",
            github: "https://github.com/Chib1co/gymtrack",        
            app_link: "https://gymtrack-app.herokuapp.com/",

        },
        {
            title: "Note taker",
            desc:  "Using Node.JS express. Simple note taking application. Keep the note, edit and delete. ",
            img: "/images/Note_taker.png",
            img_alt: "Note tracker",
            github: "https://github.com/Chib1co/Your-Note-Take",
            app_link: "https://limitless-depths-93347.herokuapp.com/",

        },
        {
            title: "Weather WeatherForecast_Yourcity",
            desc:  "Check the current weather of the searced city, also next 5 days weather forecast. local storage storesthe search history up to 5 cities.",
            img: "/images/weather-repo.png",
            img_alt: "Weather forecast",
            github: "https://github.com/Chib1co/WeatherForecast_Yourcity",
            app_link: "https://chib1co.github.io/WeatherForecast_Yourcity/",

        },
        {
            title: "Code quiz",
            desc:  "first web application used Javascript. You answer the quiz and save the score in your local storage.",
            img: "/images/codequiz1.png",
            img_alt: "code quiz",
            github: "https://github.com/Chib1co/Fun_CodeQuiz",
            app_link: "https://chib1co.github.io/Fun_CodeQuiz/",

        },
        {
            title: "Restaurant Otaku/Group project1",
            desc:  "First group project. Used zomato API and google map API to search restaurants and add personal reviews and photos",
            img: "/images/project1.png",
            img_alt: "project1/restaurant otaku",
            github: "https://github.com/Chib1co/Covid-Safe-Restaurant",
            app_link: "https://chib1co.github.io/Covid-Safe-Restaurant/",

        },
        {
            title: "Burger",
            desc:  "Using mysql. ORM and handlebars, express. Adding burger, move to devoured whn you click the button.",
            img: "/images/burger_demoPage.png",
            img_alt: "burger",
            github: "https://github.com/Chib1co/Burger",
            // app_link: "https://chib1co.github.io/Covid-Safe-Restaurant/",

        },

    ])

    return (
        <div>
            <Container>
                <Row>
                    {projects.map((project) => {
                        return (
                            <Col key={project.title} sm="12" md="12" lg="6">
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
