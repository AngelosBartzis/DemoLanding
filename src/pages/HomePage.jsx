import {
    Box,
    Container,
} from '@mui/material'

import Header from '../components/landing/Header'
import Hero from "../components/landing/Hero.jsx";
import TaskPreview from "../components/landing/TaskPreview.jsx";
import Features from "../components/landing/Features.jsx";
import '../styles/HomePage.css'

export default function HomePage() {
    return (
        <Box className="landing-page">
            <Header/>

            <Container
                maxWidth={false}
                disableGutters
                className="page-content"
            >
                <Hero/>

                <Box component="section" className="lower-section">
                    <TaskPreview/>
                    <Features/>
                </Box>
            </Container>
        </Box>
    )
}
