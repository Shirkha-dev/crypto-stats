import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./banner2.jpg)",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
}));

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                        }}
                    >
                        CryptoStats
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "#c1ccde",
                            // fontWeight: "bold",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Keep an eye on all the cryptocurrencies you hold and mange your cryptocurrency portfolio.
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    )
}

export default Banner