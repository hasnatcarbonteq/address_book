import React from 'react'
import { 
    Typography,
    Layout,
    Radio,
} from 'antd';
const { Title } = Typography;
const { Content } = Layout;
import {Link} from 'react-router-dom'


const SettingsPanel = (props) => {

    const {options, onChange, value} = props
    return (
        <Content>
            <Title level={3}>Change the nationality</Title>
            <Radio.Group
                options={options}
                onChange={onChange}
                value={value}
                optionType="button"
                buttonStyle="solid"
            />

            <Link to="/">Back to home</Link>
        </Content>
    )
}

export default SettingsPanel
