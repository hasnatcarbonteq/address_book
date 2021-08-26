import React from 'react'
import { 
    Row, 
    Col,
    Spin, 
} from 'antd';

function UserTable(props) {

    const {
        data,
        isLoading,
        getDetails,
        loadMore,
        setRef,
    } = props;

    return (
        <>
        <Row className="userTable">
            <Col span={24}>
                <Row 
                className="tableHeader"
                align="middle"
                justify="center">
                    <Col xl={1} sm={0} md={0} xs={0}>#</Col>
                    <Col xl={4} sm={8} md={8} xs={8} > Image</Col>
                    <Col xl={4} sm={8} md={8} xs={8} > First Name</Col>
                    <Col xl={4} sm={8} md={8} xs={8} > Last Name</Col>
                    <Col xl={5} sm={12} md={12} xs={12} > Username</Col>
                    <Col xl={6} sm={12} md={12} xs={12} > Email</Col>
                </Row>
            </Col>
            {
                !isLoading ? (
                    <Col span={24}>
                        {
                            data && data.map((user, index) => {
                                return (
                                    <Row 
                                        key={index} 
                                        className="tableRow" 
                                        onClick={() => getDetails(user)} 
                                        align="middle"
                                        justify="center"
                                        >
                                        <Col xl={1} sm={0} md={0} xs={0}>{index+1}</Col>
                                        <Col xl={3} sm={8} md={8} xs={8} > <img src={user.picture.medium} alt='user'/></Col>
                                        <Col xl={4} sm={8} md={8} xs={8} > {user.name.first}</Col>
                                        <Col xl={4} sm={8} md={8} xs={8} > {user.name.last}</Col>
                                        <Col xl={4} sm={12} md={12} xs={12} > {user.login.username}</Col>
                                        <Col xl={4} sm={12} md={12} xs={12} > {user.email}</Col>
                                    </Row>
                                )
                            })
                        }
                    </Col>
                ) : (
                    <Col span={24} className="loading" >
                        <Spin spinning={isLoading} className="spinner" size="large" tip="Loading..."  />
                    </Col>
                )
            }
        <Col className="loadMore" ref={setRef}>{loadMore}</Col>
        </Row>
        </>
    )
}
  
export default UserTable;