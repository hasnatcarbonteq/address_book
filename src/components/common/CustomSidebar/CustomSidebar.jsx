import React from 'react'
import { Layout,Menu } from 'antd';
import {sidebarUrls} from '../../../utils/urls'
const { Sider } = Layout;


function CustomSidebar(props) {

    const handleClick = (e) => {
        props.history.push(e.key)
    }

    const currentPage = props.history.location.pathname;
    return (
        <Sider className="customSidebar">
            <Menu 
                mode="inline"
                selectedKeys={currentPage}
                onClick={handleClick}
            >
                {sidebarUrls.map((item,index)=>(
                    <Menu.Item key={item.url} icon={item.icon} >
                        {item.name}
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    )
}

export default CustomSidebar
