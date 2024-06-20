import React from "react";
import styled from "styled-components";
import {Button, Tabs} from "antd";

import {USER_LS_KEY} from "../App";
import {MapView} from "./MapView";
import {Logo} from "../common";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
    padding: 10px;
`;

const LogoutAndLogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const items = [
    {
        key: '1',
        label: 'Map view',
        children: <MapView />
    },
    {
        key: '2',
        label: 'My help requests',
        children: null
    }
];

function User() {
    const navigate = useNavigate();

    const user = localStorage.getItem(USER_LS_KEY) ?
        JSON.parse(localStorage.getItem(USER_LS_KEY)) :
        null;

    const logout = () => {
        localStorage.setItem(USER_LS_KEY, null);
        navigate("/");
    };

    return <Wrapper>
        <LogoutAndLogoWrapper>
            <Button onClick={logout}>Log out</Button>
            <Logo width='145px' />
        </LogoutAndLogoWrapper>
        <Tabs defaultActiveKey="1" items={items} />
    </Wrapper>;
}

export default User;