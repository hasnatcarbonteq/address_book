import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeNationality} from '../../redux/actions/dataGrid';
import { 
    Layout,
} from 'antd';
const { Header } = Layout;
import CustomTitle from '../../components/common/CustomTitle/CustomTitle.js'
import SettingsPanel from '../../components/SettingsPanel/SettingsPanel.jsx'

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
            <SettingsPanel
                options={NAT}
                onChange={handleChange}
                value={value}
            />
            
        </Layout>
    )
}

export default Settings
