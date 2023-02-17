import React, { useState } from "react";
import { Container } from "react-bootstrap";
import RealTime from "./components/Realtime";
import Background from "./components/Background";
import Weather from "./components/Weather";
import AudioPlayer from "./components/AudioPlayer";
import Menu from "./components/Menu";
import { MyContext } from "./api/MyContext";
import "./App.css";
import { Row } from "react-bootstrap";

function App() {
    const [store, setStore] = useState({ backgroundKeyword: "" });
    return (
        <MyContext.Provider value={{ store, setStore }}>
            <Container fluid>
                <Menu />
                <Row>
                    <AudioPlayer />
                    <Weather />
                </Row>
                <RealTime />
                <Background />
            </Container>
        </MyContext.Provider>
    );
}

export default App;
