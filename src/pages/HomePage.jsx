import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Stack,
    TextField,
    Toolbar,
    Typography,
} from '@mui/material'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import logo from '../assets/motivve-logo.svg'
import heroIllustration from '../assets/hero-illustration.svg'
import avatarTimeManagement from '../assets/avatar-time-management.png'
import avatarProjects from '../assets/avatar-projects.png'
import avatarNotes from '../assets/avatar-notes.png'
import avatarTeamWiki from '../assets/avatar-team-wiki.png'
import iconMotivation from '../assets/icon-motivation.svg'
import iconBenefits from '../assets/icon-benefits.svg'

import '../styles/HomePage.css'

const tasks = [
    {title: 'Time management', date: '26 Apr', avatar: avatarTimeManagement, color: '#D9E4FF', status: '#FF5358'},
    {title: 'Projects & tasks', date: '27 Apr', avatar: avatarProjects, color: '#FFBD5E', status: '#D4E9FF'},
    {title: 'Notes & docs', date: '1 Mar', avatar: avatarNotes, color: '#D9E4FF', status: '#FFF2BD', faded: true},
    {title: 'Team wiki', date: '6 Mar', avatar: avatarTeamWiki, color: '#D9E4FF', status: '#FFE6EC', faded: true},
]

const features = [
    {
        title: 'What you need to be motivated',
        description:
            'Focusing on a dull task doesn’t make it any more attractive. Zooming out and asking yourself why you are bothering in the first place will make it more appealing.',
        icon: iconMotivation,
        color: '#FFBD5E',
        className: 'motivation-feature',
    },
    {
        title: 'How Motivve will help you',
        description:
            'There are many ways you can place small successes earlier on to spur motivation later. Structuring your to-do lists, placing straightforward tasks such as.',
        icon: iconBenefits,
        color: '#FF6B70',
        className: 'benefits-feature',
    },
]

function Header() {
    const navigation = [
        {label: 'Product', dropdown: true, href: '#product'},
        {label: 'Download', dropdown: true, href: '#download'},
        {label: 'Resources', dropdown: true, href: '#resources'},
        {label: 'Enterprise', href: '#enterprise'},
        {label: 'Pricing', href: '#pricing'},
        {label: 'Login', href: '#login'},
    ]

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters className="site-toolbar">
                    <Box
                        component="a"
                        href="/"
                        className="brand"
                        aria-label="Motivve home"
                    >
                        <Box component="img" src={logo} alt="Motivve"/>
                        <Typography component="span" className="brand-name">
                            Motivve
                        </Typography>
                    </Box>

                    <Stack
                        component="nav"
                        direction="row"
                        alignItems="center"
                        spacing={{md: 1, lg: 2}}
                        className="desktop-nav"
                        aria-label="Main navigation"
                    >
                        {navigation.map((item) => (
                            <Button
                                key={item.label}
                                component="a"
                                href={item.href}
                                color="inherit"
                                endIcon={
                                    item.dropdown
                                        ? <KeyboardArrowDownIcon/>
                                        : null
                                }
                                className="nav-link"
                            >
                                {item.label}
                            </Button>
                        ))}

                        <Button
                            variant="contained"
                            color="primary"
                            href="#signup"
                            className="signup-button"
                        >
                            Sign up
                        </Button>
                    </Stack>

                    <IconButton
                        className="mobile-menu-button"
                        aria-label="Open navigation"
                        onClick={() => {
                            document.getElementById('mobile-navigation')
                                ?.classList.toggle('mobile-navigation-open')
                        }}
                    >
                        <Box component="span" className="menu-lines">
                            ☰
                        </Box>
                    </IconButton>
                </Toolbar>

                <Stack
                    id="mobile-navigation"
                    className="mobile-navigation"
                    component="nav"
                    aria-label="Mobile navigation"
                    spacing={1}
                >
                    {navigation.map((item) => (
                        <Button
                            key={item.label}
                            component="a"
                            href={item.href}
                            color="inherit"
                            fullWidth
                        >
                            {item.label}
                        </Button>
                    ))}
                    <Button variant="contained" href="#signup" fullWidth>
                        Sign up
                    </Button>
                </Stack>
            </Container>
        </AppBar>
    )
}

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

            <Button type="submit" variant="contained" color="secondary">
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

function TaskPreview() {
    return (
        <Stack className="task-preview" spacing={1}>
            {tasks.map((task) => (
                <Box
                    key={task.title}
                    className={`task-row ${task.faded ? 'task-faded' : ''}`}
                >
                    <Box
                        className="task-indicator"
                        sx={{backgroundColor: task.color}}
                    />

                    <Typography className="task-title">
                        {task.title}
                    </Typography>

                    <Box
                        component="img"
                        src={task.avatar}
                        alt=""
                        className="task-avatar"
                    />

                    <Typography className="task-date">
                        {task.date}
                    </Typography>

                    <Box
                        className="task-status"
                        sx={{backgroundColor: task.status}}
                    />
                </Box>
            ))}
        </Stack>
    )
}

function Features() {
    return (
        <Box component="section" className="features" id="resources">
            {features.map((feature) => (
                <Box
                    component="article"
                    key={feature.title}
                    className={`feature-card ${feature.className}`}
                >
                    <Box
                        className="feature-icon"
                        sx={{backgroundColor: feature.color}}
                    >
                        <Box component="img" src={feature.icon} alt=""/>
                    </Box>

                    <Typography component="h2">
                        {feature.title}
                    </Typography>

                    <Typography component="p">
                        {feature.description}
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}

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
