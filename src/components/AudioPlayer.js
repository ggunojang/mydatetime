import React, { useState, useEffect, useCallback } from "react";
import { Col } from "react-bootstrap";
/**
 * http://radio.linnrecords.com:8000/stream    Linn Jazz{320}

http://radio.linnrecords.com:8003/stream    Linn Radio{320}

http://radio.linnrecords.com:8004/stream    Linn Classical{320}

http://8.38.78.173:8093/stream      Audiophile Classical{320}

http://8.38.78.173:8045/stream      Audiophile Baroque{320}

http://8.38.78.173:8210/stream      Audiophile Jazz{320}

http://8.38.78.173:8226/stream      Audiophile Lounge{320}

http://37.130.228.60:8090             Naim Radio{320}

http://stream-uk1.radioparadise.com/aac-320     Radio Paradise - Naim exclusive{320}

http://live.demonfm.co.uk:8000/demon320          DemonFM 320k{320}

http://stream.iradio.fi:8000/klasu-hi.mp3            Rondo Classic - Klasu{320}

http://67.228.164.226:8001/stream/2/                ATOS Theatre Organ Radio{320}

http://stream.klassikradio.de/beethoven/mp3-192/dirable/    Klassik Radio Beethoven{192}

http://stream.klassikradio.de/purebach/mp3-192/dirable/     Klassik Radiio Bach{192}

http://stream.klassikradio.de/mozart/mp3-192/dirable/        Klassik Radio Mozart{192}

http://178.18.137.246:80              Pinguin Radio{320}

http://87.118.78.80:8030              Week-FM Easy Listening{320}

http://95.211.162.73:8000/            Rockhard Lossless{320}

http://bestesradio.de:8000/         Bestes Radio{192}

http://174.36.206.197:8000/stream   Venice Classic Radio Italia{128}



http://live7.avf.ch:8000/ipmusic320     IP music{320}

http://thesoundofjazz.net:8000/TheSoundOfJazzHD The Sound of Jazz{320}

http://cristina.torontocast.com:8007/mp3-320  JB Radio-2{320}



# FLAC 무손실 스트리밍

http://209.126.66.166:10999/flac           JB Radio-2{flac,192kHz}

http://91.121.159.124:8000/eko-des-garrigues-max.flac   EKO DES GARRIGUES{flac,44.1kHz}

http://rod.frequence3.net/frequence3.flac   Frequence3, Paris France
 */

function AudioPlayer() {
    const audioRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [textPlay, setTextPlay] = useState("음악재생");

    const handlePlay = useCallback(() => {
        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
            setTextPlay("음악재생중입니다");
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
            setTextPlay("음악중지중입니다");
        }
    }, [isPlaying]);

    useEffect(() => {
        const handleClick = () => {
            handlePlay();
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [handlePlay]);

    return (
        <Col className="col-2 audio cp">
            <audio
                ref={audioRef}
                src="http://174.36.206.197:8000/stream"
                controls
                style={{ display: "none" }}
                autoPlay
            />
            {textPlay}
        </Col>
    );
}

export default AudioPlayer;
