import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import moment from "moment";
import "../App.css";

const TIME = styled(Col)`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 3;
    transition: 0.5s;
    opacity: 0.8;
`;

function RealTime() {
    const [time, setTime] = useState(moment());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(moment());
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    const week = time.format("dddd");
    const date = time.format("LL");
    const curTime = time.format("LTS");

    return (
        <Row>
            <TIME className="d-flex flex-column p-0 m-0">
                <div className="date">
                    {week}, {date}
                </div>
                <div className="time text-center">{curTime}</div>
            </TIME>
        </Row>
    );
}

export default RealTime;
