import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Radio } from 'antd';
import {changeNationality} from '../redux/actions/dataGrid';
import {Link} from 'react-router-dom'

const nationalities = [
    { label: 'USA', value: 'US' },
    { label: 'China', value: 'CH' },
    { label: 'France', value: 'FR' },
    { label: 'Germany', value: 'GR' },
]


function Settings() {

    const dispatch = useDispatch()
    const nat = useSelector(state => state.dataGrid.nat)
    
    const [value, setValue] = useState(nat)


    const handleChange = (e) => {
        const { value } = e.target;
        setValue(value)
        dispatch(changeNationality(value));
    }
    return (
        <div>
            <h1 className="title">
                Settings
            </h1>
            <h3>Change the nationality</h3>
            <Radio.Group
                options={nationalities}
                onChange={handleChange}
                value={value}
                optionType="button"
                buttonStyle="solid"
            />

            <Link to="/">Back to home</Link>
        </div>
    )
}

export default Settings
