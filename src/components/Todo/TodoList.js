import React, { useEffect } from "react";
import { firestore } from "../../api/firebase";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const List = styled(Col)`
    width: 100vw;
    height: 30vh;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 3;
    transition: 0.5s;
`;

export default function TodoList() {
    useEffect(() => {
        const mytodo = firestore.collection("mytodo");
        console.log(mytodo.doc);
    }, []);
    return (
        <Row className="d-flex flex-column p-0 m-0">
            <List>TodoList</List>
        </Row>
    );
}
