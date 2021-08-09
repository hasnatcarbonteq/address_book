import React from 'react'
import { Input, } from 'antd'
import {
    SearchOutlined,
} from '@ant-design/icons';


function SearchBar(props) {

    const {
        data,
        setSearchData,
    } = props;

    const onSearch = event => {
        let dataCopy = [...data]
        let value = event.target.value
        let search = dataCopy.filter(x => x.name.first.toLowerCase().includes(value) || x.name.last.toLowerCase().includes(value))
        setSearchData(search)
    };

    return (
        <div>
            <Input 
                placeholder="input search text" 
                allowClear  
                onChange={onSearch}
                suffix={<SearchOutlined />}
                className="searchBar"
            />
        </div>
    )
}

export default SearchBar
