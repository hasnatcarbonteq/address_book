import React, {useEffect, useState} from 'react'
import { 
    Row, 
    Col,
    Spin, 
    Modal,
    Input,
} from 'antd';
import { connect } from 'react-redux'
import {
    getData,
    setUserDetails,
} from '../../redux/actions/dataGrid'

const { Search } = Input;


function DataGrid(props) {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState({})
    const [cell, setCell] = useState('')
    const [street, setStreet] = useState({})
    const [address, setAddress] = useState({})
    const [picture, setPicture] = useState('')


    const getDetails = async  (user) => {
        setPicture(user.picture.large)
        setModalData(user)
        setCell(user.cell)
        setStreet(user.location.street)
        setAddress({
            city: user.location.city,
            country: user.location.country,
            state: user.location.state,
            postcode: user.location.postcode,
        })
        setModal(true)
        console.log(user)
    }

    const onSearch = event => console.log(event);


    useEffect(() => {
        (async () => {
            let res = props.getData()
            setIsLoading(res)
        })()
    }, [])

    useEffect(() => {
        setData(props.data.data)
        setIsLoading(props.data.isLoading)
    }, [props.data.data])
    return (
        <div className="dataGrid" >
            <h1 className="title">
                Address Book
            </h1>
            
            <Search placeholder="input search text" allowClear onSearch={onSearch} />
            
            <div className="dataTable" >
                <Row className="tableHeader">
                    <Col span={4}> Image</Col>
                    <Col span={4}> First Name</Col>
                    <Col span={4}> Last Name</Col>
                    <Col span={4}> Username</Col>
                    <Col span={4}> Email</Col>
                </Row>
                {
                    !isLoading ? (
                        data && data.map((user, index) => {
                            return (
                                <Row key={index} className="tableRow">
                                    <Col span={4}> <img src={user.picture.medium} alt='user'/></Col>
                                    <Col span={4} className="infoCell" onClick={() => getDetails(user)} > {user.name.first}</Col>
                                    <Col span={4}> {user.name.last}</Col>
                                    <Col span={4}> {user.login.username}</Col>
                                    <Col span={4}> {user.email}</Col>
                                </Row>
                            )
                        })

                    ) : (
                        <div className="loading" >
                            <Spin spinning={isLoading} className="spinner" size="large" tip="Loading..."  />
                        </div>
                        )

                }
            </div>
            <Modal
                centered
                title={modalData.name ? (modalData.name.first +" "+ modalData.name.last) : ('')}
                visible={modal}
                onCancel={() => setModal(false)}
                footer={false}
                className="detailModal"
            >
                <Row>
                    <Col span={8}> <img src={picture} alt='user'/></Col>
                    <Col span={4}> {cell}</Col>
                    <Col span={4}> {address.city}</Col>
                    <Col span={4}> {address.country}</Col>
                    <Col span={4}> {address.state}</Col>
                    <Col span={4}> {address.postcode}</Col>
                    <Col span={8}> {street.name + " " + street.number}</Col>    
                </Row>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.dataGrid
})
  
const mapDispatchToProps = {
    getData,
    setUserDetails,
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DataGrid);