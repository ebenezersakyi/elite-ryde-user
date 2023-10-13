import React, { useRef } from "react";
import DetailTab from "./DetailTab";
import { useSelector } from "react-redux";
import {
  GoogleMap,
  InfoBox,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

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

const AdditionalInformation = () => {
  const { data } = useSelector((d) => d?.selected_car);
  const mapRef = useRef(null);

  const onLoad = React.useCallback(function callback(mapL) {
    mapRef.current = mapL;
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDTzQON_0lZ0rTQ9Zw9xzwhYUkgF_mHZqs",
  });

  return isLoaded ? (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
      <div className="flex flex-col gap-4 col-span-2 xl:col-span-1">
        <DetailTab
          icon={"material-symbols:location-on-outline"}
          title={"Location"}
          value={data?.additionalInformation?.location}
        />
        <DetailTab
          icon={"material-symbols:directions-car"}
          title={"License plate number"}
          value={data?.additionalInformation?.licensePlate}
        />
        <DetailTab
          icon={"material-symbols:directions-car"}
          title={"Vehicle identification number"}
          value={data?.additionalInformation?.vehicleIdentificationNumber}
        />
      </div>

      <div className="flex flex-col gap-4 col-span-2 min-h-[200px] rounded-lg overflow-hidden xl:col-span-1">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: parseFloat(data?.additionalInformation?.geolocation?.lat),
            lng: parseFloat(data?.additionalInformation?.geolocation?.long),
          }}
          zoom={10}
          onLoad={onLoad}
          options={createMapOptions}
        >
          <InfoBox
            position={{
              lat: parseFloat(data?.additionalInformation?.geolocation?.lat),
              lng: parseFloat(data?.additionalInformation?.geolocation?.long),
            }}
            options={{ closeBoxURL: "", enableEventPropagation: true }}
          >
            <img
              src={data?.photos[0]}
              alt=""
              className="h-[50px] w-[50px] rounded-lg"
            />
          </InfoBox>
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default AdditionalInformation;
