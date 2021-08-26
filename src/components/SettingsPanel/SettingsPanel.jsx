import React from 'react'
import { 
    Typography,
    Layout,
    Radio,
} from 'antd';
const { Title } = Typography;
const { Content } = Layout;


const SettingsPanel = (props) => {

    const {options, onChange, value} = props
    return (
        <Content className="settingsPanel" >
            <Title level={3}>Change the nationality</Title>
            <Radio.Group
                options={options}
                onChange={onChange}
                value={value}
                optionType="button"
                buttonStyle="solid"
                className="settingsRadioGroup"
            />
        </Content>
    )
}

export default SettingsPanel
