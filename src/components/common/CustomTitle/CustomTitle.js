import React from 'react'
import { 
    Typography,
} from 'antd';

const { Title } = Typography;

function CustomTitle(props) {
    return (
        <Title className="customTitle">
            {props.children}
        </Title>
    )
}

export default CustomTitle
