import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Container } from "./style";

const mapStyle = {
  position: "relative",
  left: 0,
  top: 0,
  width: "100%",
  height: "360px",
  overflow: "hidden",
};

const Yandex = ({ center }) => {
  return (
    <Container>
      <YMaps
        query={{ apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b", lang: "EN" }}
      >
        <Map
          style={mapStyle}
          defaultState={{
            center: center.center || [41.2995, 69.2401],
            zoom: 13,
          }}
        >
          <Placemark geometry={center.center} />
        </Map>
      </YMaps>
    </Container>
  );
};

export default Yandex;
