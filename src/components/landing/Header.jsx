import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import logo from '../../assets/motivve-logo.svg'

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
                        alignitems="center"
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

export default Header