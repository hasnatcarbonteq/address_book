import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeNationality} from '../../redux/actions/userTable';
import { 
    Layout,
} from 'antd';
import CustomHeader from '../../components/common/CustomHeader/CustomHeader.jsx'
import SettingsPanel from '../../components/SettingsPanel/SettingsPanel.jsx'
import CustomSidebar from '../../components/common/CustomSidebar/CustomSidebar.jsx'

const NAT = [
    { label: 'USA', value: 'US' },
    { label: 'China', value: 'CH' },
    { label: 'France', value: 'FR' },
    { label: 'Germany', value: 'GR' },
]


function Settings(props) {

    const dispatch = useDispatch()
    const nat = useSelector(state => state.userTable.nat)
    
    const [value, setValue] = useState(nat)


    const handleChange = async (e) => {
        const { value } = e.target;
        await dispatch(changeNationality(value));
        setValue(value)
    }
    return (
        <Layout>
        <CustomSidebar
            {...props}
        />
        <Layout>
            <CustomHeader 
                title="Settings"
            />
            <SettingsPanel
                options={NAT}
                onChange={handleChange}
                value={value}
            />
        </Layout>
            
        </Layout>
    )
}

export default Settings
