import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { getData } from "../api/api";
import { MyContext} from '../api/MyContext';
import "../App.css";

const Weather = () => {
    const {setStore} = useContext(MyContext);
    const [isload, setIsLoad] = useState(false);
    const [region, setRegion] = useState("");
    const [cityname, setCityname] = useState("");
    const [wdata, setWdata] = useState("");
    const [temp, setTemp] = useState("");

    /**
     * 위치 체크
     */
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const data = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };
            setRegion(data);
        });
    },[]);

    /**
     * 위치 체크가 완료된 후, 날씨 API 를 받아서 각 데이터에 넣어준다.
     * 이렇게 useEffect를 하면, dom이 안착하기 전에 데이터를 셋팅을 시켜준다.
     */
    useEffect(() => {
        if(region){
            getData(region)
            .then(({data}) => {
                const {main} = data;
                setCityname(data.name);
                setTemp(main.temp);
                setWdata(data.weather[0]);
                setStore({backgroundKeyword: `${data.weather[0].main}`})
                setIsLoad(true);
            });
        }
    }, [region, setStore]);



    // 로딩이 필요함.
    const celsius = Math.floor(temp, -1);
    const weatherIcon = `http://openweathermap.org/img/wn/${wdata.icon}@2x.png`;
    return isload ? (
        <Row>
            <Col className="weather">
                {cityname} / <img src={weatherIcon} alt="" /> / {celsius} ℃
            </Col>
        </Row>
    ) : (
        <Row>
            <Col className="weather">Loading</Col>
        </Row>
    );
};

export default Weather;
