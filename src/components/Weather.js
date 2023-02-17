import React, { useState, useEffect, useContext, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import { getData } from "../api/api";
import { MyContext } from "../api/MyContext";
import "../App.css";

const Weather = () => {
    const { setStore } = useContext(MyContext);
    const [isLoad, setIsLoad] = useState(false);
    const [region, setRegion] = useState(null);
    const [cityname, setCityname] = useState("");
    const [wdata, setWdata] = useState(null);
    const [temp, setTemp] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const data = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };
            setRegion(data);
        });
    }, []);

    useEffect(() => {
        if (region) {
            getData(region).then(({ data }) => {
                const { main } = data;
                setCityname(data.name);
                setTemp(main.temp);
                setWdata(data.weather[0]);
                setStore({ backgroundKeyword: `${data.weather[0].main}` });
                setIsLoad(true);
            });
        }
    }, [region, setStore]);

    const celsius = useMemo(() => Math.floor(temp / 10) * 10, [temp]);
    const weatherIcon = useMemo(
        () =>
            wdata
                ? `http://openweathermap.org/img/wn/${wdata.icon}@2x.png`
                : "",
        [wdata]
    );
    return isLoad ? (
        <Col className="weather col-10">
            {cityname} / <img src={weatherIcon} alt="" /> / {celsius} ℃
        </Col>
    ) : (
        <Row>
            <Col className="weather">Loading</Col>
        </Row>
    );
};

export default Weather;
