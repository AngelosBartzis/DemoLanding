import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {CssBaseline, ThemeProvider, createTheme} from '@mui/material'

import HomePage from './pages/HomePage'

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

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}
