import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import moment from 'moment';
//import 'moment/locale/ko';
import '../App.css';


const TIME = styled(Col)`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index:3;
    transition: .5s;
`;


function CurrentDate(){

    const currentDate = moment().format('LL');
    const currentWeek = moment().format('dddd');
    const currentTime = moment().format('LTS');
    const [date, setDate] = useState(currentDate);
    const [week, setWeek] = useState(currentWeek);
    const [time, setTime] = useState(currentTime);
    
    useEffect(() => {
        const timerID = setInterval(() => { 
            setDate(moment().format('LL'));
            setWeek(moment().format('dddd'));
            setTime(moment().format('LTS'));  
        }, 1000);
        return () => { 
            clearInterval(timerID); 
        };
    });

    const today = [];
    today['date'] = date;
    today['week'] = week;
    today['time'] = time;

    return today;

}


function RealTime (){
    const date = CurrentDate();
    return(
        <Row>
            <TIME className="d-flex flex-column p-0 m-0">
                <div className="date">{date['week']}, {date['date']}</div>
                <div className="time text-center">{date['time']}</div>
            </TIME>
        </Row>
    );

}


export default RealTime;