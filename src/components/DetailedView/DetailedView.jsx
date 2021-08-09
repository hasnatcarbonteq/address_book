import React from 'react'
import {
    Modal,
    Row,
    Col,
} from 'antd';

function DetailedView(props) {

    const {
        details,
        modal,
        setModal,
    } = props;

    return (
        <div>
            <Modal
                centered
                title={details.name ? (details.name.first +" "+ details.name.last) : ('')}
                visible={modal}
                onCancel={() => setModal(false)}
                footer={false}
                className="detailModal"
            >
                <Row>
                    <Col span={8}> <img src={details.picture ? details.picture.large : ''} alt='user'/></Col>
                    <Col span={4}>Cell: {details.cell}</Col>
                    <Col span={4}>City: {details.location ? details.location.city : ''}</Col>
                    <Col span={4}>Country: {details.location ? details.location.country : ''}</Col>
                    <Col span={4}>State: {details.location ? details.location.state : ''}</Col>
                    <Col span={4}>Post Code: {details.location ? details.location.postcode : ''}</Col>
                    <Col span={8}>Street: {details.location ? (details.location.street.name + " " + details.location.street.number) : ''}</Col>    
                </Row>
            </Modal>
        </div>
    )
}

export default DetailedView
