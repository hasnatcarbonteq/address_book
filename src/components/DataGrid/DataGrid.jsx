import React from 'react'
import { 
    Row, 
    Col,
    Spin, 
} from 'antd';



function DataGrid(props) {

    const {
        data,
        isLoading,
        onScroll,
        getDetails,
        loadMore,
    } = props;


    return (
        <Row className="dataTable" onScroll={onScroll}>
            <Col span={24}>
                <Row className="tableHeader">
                    <Col span={1}>#</Col>
                    <Col span={3}> Image</Col>
                    <Col span={4}> First Name</Col>
                    <Col span={4}> Last Name</Col>
                    <Col span={4}> Username</Col>
                    <Col span={4}> Email</Col>
                </Row>
            </Col>
            {
                !isLoading ? (
                    <Col span={24}>
                    {
                        data && data.map((user, index) => {
                            return (
                                <Row key={index} className="tableRow" onClick={() => getDetails(user)} >
                                    <Col span={1}>{index+1}</Col>
                                    <Col span={3}> <img src={user.picture.medium} alt='user'/></Col>
                                    <Col span={4} className="infoCell"> {user.name.first}</Col>
                                    <Col span={4}> {user.name.last}</Col>
                                    <Col span={4}> {user.login.username}</Col>
                                    <Col span={4}> {user.email}</Col>
                                </Row>
                            )
                        })
                    }
                    <Row>{loadMore}</Row>
                    </Col>
                ) : (
                    <Col span={24} className="loading" >
                        <Spin spinning={isLoading} className="spinner" size="large" tip="Loading..."  />
                    </Col>
                )
            }
        </Row>
    )
}
  
export default DataGrid;