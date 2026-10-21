import {
    Box,
    Button,
    TextField,
    Typography,
} from '@mui/material'

import heroIllustration from '../../assets/hero-illustration.svg'

function EmailSignup() {
    return (
        <Box
            component="form"
            className="email-signup"
            onSubmit={(event) => event.preventDefault()}
        >
            <TextField
                type="email"
                placeholder="Enter your email"
                required
                fullWidth
                size="medium"
                inputProps={{'aria-label': 'Email address'}}
            />

            <Button
                type="submit"
                variant="contained"
                color="secondary"
            >
                Get Started
            </Button>
        </Box>
    )
}

function Hero() {
    return (
        <Box component="section" className="hero" id="product">
            <Box className="hero-copy">
                <Box className="decorative-dot yellow-dot"/>

                <Typography component="h1" className="hero-title">
                    All-in-
                    <Box component="span" className="highlight">
                        one
                    </Box>
                    <br/>
                    workspace
                </Typography>

                <Typography className="hero-description">
                    One tool for your whole team. Write, plan, and get organized.
                </Typography>

                <EmailSignup/>
            </Box>

            <Box className="hero-visual">
                <Box
                    component="img"
                    src={heroIllustration}
                    alt="Person using a tablet beside a productivity dashboard"
                />
            </Box>

            <Box className="decorative-dot coral-dot"/>
        </Box>
    )
}

export default Hero
