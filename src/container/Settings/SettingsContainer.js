import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeNationality} from '../../redux/actions/userTable';
import SettingsPanel from '../../components/SettingsPanel/SettingsPanel.jsx'
import MainLayout from '../../components/common/MainLayout/MainLayout.jsx';

const NAT = [
    { label: 'USA', value: 'US' },
    { label: 'China', value: 'CH' },
    { label: 'France', value: 'FR' },
    { label: 'Germany', value: 'GR' },
]


function SettingsContainer(props) {

    const dispatch = useDispatch()
    const nat = useSelector(state => state.userList.nat)
    
    const [value, setValue] = useState(nat)


    const handleChange = async (e) => {
        const { value } = e.target;
        dispatch(changeNationality(value));
        setValue(value)
    }

    return (
        <MainLayout title="Settings" {...props} >
            <SettingsPanel
                options={NAT}
                onChange={handleChange}
                value={value}
            />
        </MainLayout>
    )
}

export default SettingsContainer
