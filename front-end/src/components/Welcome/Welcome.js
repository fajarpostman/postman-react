import React from"react";
import TextTransition, { presets } from "react-text-transition";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "../Styles/Styles.scss";

export default function Welcome() {
    const WORD = ["Halo", "Hello", "Hola", "Ciao"];
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            7000 // every 5 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return(
        <>
        <div className="welcome-container welcome-container-full">
            <div className="welcome-text-zone">
                <div className="welcome-image-zone">
                    <img src="../../images/fajar_postman_logo.png" className="welcome-image-zone-img"/>
                </div>
                <h1 className="welcome-text-zone-header">
                    <TextTransition 
                        inline
                        text={WORD[index % WORD.length]}
                        springConfig={presets.wobbly}
                    />
                    <br />
                    I'm Fajar Dwi Rianto,
                    <br />
                    I'm
                    Web Developer
                </h1>
                <div className="welcome-button-container">
                    <Link to="/home" className="welcome-button-flat">
                        Check it Out!
                    </Link>
                </div>
            </div>
            <div className="welcome-background"></div>
            <div className="welcome-background-2"></div>
            <div className="welcome-background-3"></div>
        </div>
        </>
    )
}