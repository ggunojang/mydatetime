import { useState } from 'react';

export  const Geolocate = () => {
  // 새로운 state 변수를 선언하고, count라 부르겠습니다.
  const [region, setRegion] = useState();

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const data = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setRegion(data);
      }
    );
  }
  return region;

}
