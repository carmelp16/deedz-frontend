import React from 'react';
import styled from "styled-components";
import {MapContainer, TileLayer, GeoJSON} from "react-leaflet";
import {Col, Row} from "antd";
import {useNavigate} from "react-router-dom";


import NeighborhoodsGeoJSON from "../../neighborhoods.json";

const StyledMC = styled(MapContainer)`
    height: 40vh;
`;

function MapView() {
    const haifa = [32.794044, 34.989571];

    const navigate = useNavigate();

    const handleRedirectMatches = () => {
        navigate('/matches');
    };
    return <Row>
        <Col span={16} onClick={()=> {
            handleRedirectMatches()
        }}>
            <StyledMC center={haifa} zoom={13} scrollWheelZoom={false} onClick={()=> {
            handleRedirectMatches()
        }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    onClick={()=> {
                        handleRedirectMatches()
                    }}
                />
                <GeoJSON data={NeighborhoodsGeoJSON}  onClick={()=> {
            handleRedirectMatches()
        }}/>
            </StyledMC>
        </Col>
        <Col span={8}>
            hi
        </Col>
    </Row>;
}

export default MapView;