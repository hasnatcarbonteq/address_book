import React from 'react'
import { 
    Layout,
} from 'antd';
import CustomSidebar from '../CustomSidebar/CustomSidebar.jsx';
import CustomFooter from '../CustomFooter/CustomFooter.jsx';
import CustomHeader from '../CustomHeader/CustomHeader.jsx';

function MainLayout(props) {

    const { children, title } = props;
    return (
        <Layout>
            <CustomSidebar {...props} />
            <Layout>
                <CustomHeader title={title} />
                    {children}
                <CustomFooter/>
            </Layout>
        </Layout>
    )
}

export default MainLayout
