import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Radio } from 'antd';
import {changeNationality} from '../../redux/actions/dataGrid';
import {Link} from 'react-router-dom'
import { 
    Typography,
    Layout,
} from 'antd';
const { Title } = Typography;
const { Header, Content } = Layout;
import CustomTitle from '../../components/common/CustomTitle/CustomTitle.js'


const NAT = [
    { label: 'USA', value: 'US' },
    { label: 'China', value: 'CH' },
    { label: 'France', value: 'FR' },
    { label: 'Germany', value: 'GR' },
]


function Settings() {

    const dispatch = useDispatch()
    const nat = useSelector(state => state.dataGrid.nat)
    
    const [value, setValue] = useState(nat)


    const handleChange = async (e) => {
        const { value } = e.target;
        await dispatch(changeNationality(value));
        setValue(value)
    }
    return (
        <Layout>
            <Header>
                <CustomTitle>
                    Settings
                </CustomTitle>
            </Header>
            <Content>
                <Title level={3}>Change the nationality</Title>
                <Radio.Group
                    options={NAT}
                    onChange={handleChange}
                    value={value}
                    optionType="button"
                    buttonStyle="solid"
                />

                <Link to="/">Back to home</Link>
            </Content>
        </Layout>
    )
}

export default Settings
