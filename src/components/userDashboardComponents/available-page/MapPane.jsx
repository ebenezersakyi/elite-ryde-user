import {
  GoogleMap,
  InfoBox,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const createMapOptions = {
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: true,
  fullscreenControl: false,
};

const MapPane = ({ data }) => {
  const mapRef = useRef(null);
  const nav = useNavigate();

  const onLoad = React.useCallback(function callback(mapL) {
    mapRef.current = mapL;
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDTzQON_0lZ0rTQ9Zw9xzwhYUkgF_mHZqs",
  });

  useEffect(() => {
    // console.log("data", data[0].additionalInformation.geolocation.long);
  }, []);

  return isLoaded ? (
    <div className="w-full h-[80vh]">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 5.6772176, lng: -0.1251477 }}
        zoom={10}
        onLoad={onLoad}
        // onUnmount={onUnmount}
        // onDragEnd={onDragEnd}
        // onBoundsChanged={onDragEnd}
        // onZoomChanged={onDragEnd}
        options={createMapOptions}
      >
        {data?.map((item, index) => {
          return (
            // <Marker
            //   key={index}
            //   position={{
            //     lat: parseFloat(item?.additionalInformation.geolocation.lat),
            //     lng: parseFloat(item?.additionalInformation.geolocation.long),
            //   }}
            //   // onClick={() => onChildClick(item)}
            //   // icon={{
            //   //   url: item.photos[0],
            //   //   // url: "https://eliterydestorage.blob.core.windows.net/64adbb1d6e86aeb92a521513/BHFB883UHFBDBUIDNNF/JDPA_2021%20Toyota%20Corolla%20XSE%20Red%20Front%20Quarter%20View%20(1).png",
            //   //   scaledSize: {
            //   //     width: 45,
            //   //     height: 45,
            //   //   },
            //   // }}
            //   icon={() => (
            //     <img
            //       src={item.photos[0]}
            //       alt=""
            //       className="h-[50px] w-[50px["
            //     />
            //   )}
            // />
            <InfoBox
              position={{
                lat: parseFloat(item?.additionalInformation.geolocation.lat),
                lng: parseFloat(item?.additionalInformation.geolocation.long),
              }}
              options={{ closeBoxURL: "", enableEventPropagation: true }}
            >
              <img
                src={item.photos[0]}
                alt=""
                className="h-[40px] w-[50px] rounded-lg object-fill"
                onClick={() => {
                  // dispatch(setData(data))
                  nav(`/dashboard/car?id=${item._id}`);
                }}
              />
            </InfoBox>
          );
        })}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MapPane;
