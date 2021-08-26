import React from 'react'
import { 
    Typography,
    Layout,
} from 'antd';
const { Header } = Layout;

const { Title } = Typography;

function CustomHeader(props) {

    const { title } = props;
    return (
        <Header className="customHeader">
            <Title className="customTitle">
                {title}
            </Title>
        </Header>
    )
}

export default CustomHeader
