import React from 'react'
import { Input, Form} from 'antd'
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
        <Form>
            <Form.Item>
                <Input 
                    placeholder="input search text" 
                    allowClear  
                    onChange={onSearch}
                    suffix={<SearchOutlined />}
                    className="searchBar"
                    size="large"
                />
            </Form.Item>
        </Form>
    )
}

export default SearchBar
