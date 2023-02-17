import React, { useState, useEffect, useContext, useCallback } from "react";
import styled from "styled-components";
import { setKeyword, MyContext } from "../api/MyContext";
import axios from "axios";

const BGIMG = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
`;

const ImgRandom = () => {
    const { store } = useContext(MyContext);
    const [randomImages, setRandomImages] = useState("");

    const getRandomImages = useCallback(() => {
        axios({
            method: "GET",
            url: `https://source.unsplash.com/1920x1080/?${setKeyword},${store.backgroundKeyword}`,
        })
            .then((response) => {
                const { responseURL } = response.request;
                setRandomImages(responseURL);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [store]);

    useEffect(() => {
        getRandomImages();
        const randID = setInterval(() => {
            getRandomImages();
        }, 20000);
        return () => {
            clearInterval(randID);
        };
    }, [getRandomImages]);

    return randomImages;
};

const Background = () => {
    const randomImages = ImgRandom();
    const styles = {
        overflow: `hidden`,
        backgroundImage: `url('${randomImages}')`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `fixed`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`,
        transitionDelay: `0.6s`,
        transition: `0.5s`,
        transitionTimingFunction: `ease-in-out`,
    };
    return <BGIMG style={styles} />;
};

export default Background;
