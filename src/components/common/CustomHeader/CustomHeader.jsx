import React from 'react'
import { 
    Typography,
    Layout,
} from 'antd';
import {
    BrowserView,
} from "react-device-detect";
const { Header } = Layout;

const { Title } = Typography;

function CustomHeader(props) {

    const { title } = props;
    return (
        <BrowserView>
            <Header className="customHeader">
                <Title className="customTitle">
                    {title}
                </Title>
            </Header>
        </BrowserView>
    )
}

export default CustomHeader
