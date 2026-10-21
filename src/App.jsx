import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {CssBaseline, ThemeProvider} from '@mui/material'

import theme from './theme/theme'
import HomePage from './pages/HomePage'

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
