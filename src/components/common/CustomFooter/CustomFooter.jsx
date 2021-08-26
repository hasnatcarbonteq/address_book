import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;

function CustomFooter() {
    return (
        <Footer className="footerPanel" >
            {new Date().getFullYear()} © Created by Hasnat Amir
        </Footer>
    )
}

export default CustomFooter
