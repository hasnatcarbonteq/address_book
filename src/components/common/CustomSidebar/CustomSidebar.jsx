import React, {useState} from 'react'
import { Layout,Menu,Drawer, Button } from 'antd';
import {
    BrowserView,
    MobileView,
    isMobile,
  } from "react-device-detect";
import {sidebarUrls} from '../../../utils/urls'
const { Sider } = Layout;
import {MenuOutlined} from '@ant-design/icons';


function CustomSidebar(props) {

    const handleClick = (e) => {
        props.history.push(e.key)
    }

    const currentPage = props.history.location.pathname;
    const [showSidebar, setShowSideBar] = useState(false)

    const handleDrawer = () => {
        setShowSideBar(!showSidebar)
    }

    return (
        <Sider className="customSidebar" >
            {(!isMobile) ? (
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

            ) : (
                <MobileView>
                    <Button icon={<MenuOutlined />} type="primary" onClick={handleDrawer}/>
                    <Drawer
                    title="Address Book"
                    placement="left"
                    visible={showSidebar}
                    onClose={handleDrawer}
                    >
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
                    </Drawer>
                </MobileView>

            )}
        </Sider>
    )
}

export default CustomSidebar
