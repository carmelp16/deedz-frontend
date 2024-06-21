import React from 'react';
import styled from "styled-components";
import {MapContainer, TileLayer, GeoJSON} from "react-leaflet";
import {Col, Row} from "antd";

import NeighborhoodsGeoJSON from "../../neighborhoods.json";

const StyledMC = styled(MapContainer)`
    height: 40vh;
`;

function MapView() {
    const haifa = [32.794044, 34.989571];

    return <Row>
        <Col span={16}>
            <StyledMC center={haifa} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON data={NeighborhoodsGeoJSON} />
            </StyledMC>
        </Col>
        <Col span={8}>
            hi
        </Col>
    </Row>;
}

export default MapView;