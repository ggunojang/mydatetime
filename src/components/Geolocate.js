import { useState, useEffect } from "react";

export const Geolocate = () => {
    const [region, setRegion] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const data = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                setRegion(data);
            });
        }
    }, []);

    return region;
};
