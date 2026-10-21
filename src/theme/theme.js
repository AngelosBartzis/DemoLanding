import {createTheme} from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#FF5358',
        },
        secondary: {
            main: '#FFDC4C',
        },
        background: {
            default: '#FFFFFF',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#303030',
            secondary: '#777777',
        },
    },

    typography: {
        fontFamily: 'Arial, Helvetica, sans-serif',

        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },

    shape: {
        borderRadius: 10,
    },
})

export default theme
