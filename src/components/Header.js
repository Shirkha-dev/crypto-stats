import { AppBar, Toolbar, Typography, Container, Select, MenuItem } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';
import UserSidebar from './Authentication/UserSidebar';


const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "#17a2b8",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));


const Header = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const { currency, setCurrency, user } = CryptoState();


    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography
                            onClick={() => navigate("/")}
                            className={classes.title}
                            variant='h5'
                        >
                            CryptoStats</Typography>
                        <Select
                            variant="outlined"
                            style={{
                                width: 100,
                                height: 40,
                                marginRight: 15,
                            }}

                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                        </Select>
                        {user ? <UserSidebar /> : <AuthModal />}
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header