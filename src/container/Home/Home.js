import React, {useEffect, useState} from 'react'
import DataGrid from '../../components/DataGrid/DataGrid.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import DetailedView from '../../components/DetailedView/DetailedView.jsx'
import {useDispatch, useSelector} from 'react-redux'
import {
    getData,
    getDetails,
    getReserveData,
} from '../../redux/actions/dataGrid'
import CustomTitle from '../../components/common/CustomTitle/CustomTitle.js'
import {Link} from 'react-router-dom'
import { 
    Layout,
} from 'antd';

const { Header, Content } = Layout;


function home() {

    // redux
    const dispatch = useDispatch()
    const dataGrid = useSelector(state => state.dataGrid)

    // internal state mananagement
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [loadMore, setLoadMore] = useState('')
    const [details, setDetails] = useState({})
    const [modal, setModal] = useState(false)

    // functions
    const onScroll = async event => {
        let element = event.target;
        if(data.length < 1000){
            setLoadMore('fetching more results')
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                await dispatch(getReserveData(dataGrid.page, dataGrid.nat))
                setLoadMore('')
            }
        }else {
            setLoadMore('end of users catalog')
        }
    };

    const handleDetails = async (user) => {

        await dispatch(getDetails(user))
        setModal(true)
    }


    // life cycle
    useEffect(() => {
        (async () => {
            await dispatch(getData(dataGrid.page, dataGrid.nat))
        })()
    }, [])

    useEffect(() => {
        setData(dataGrid.data)
        setSearchData(dataGrid.data)
        console.log(dataGrid.isLoading)
        setIsLoading(dataGrid.isLoading)
    }, [dataGrid.data])

    useEffect(() => {
        setDetails(dataGrid.details)
    }, [dataGrid.details])

    return (
        <Layout className="dataGrid" >
            <Header>
                <CustomTitle>
                    Address Book
                </CustomTitle>
            </Header>
            <Content>
                <Link to="/settings">Settings</Link>
                <SearchBar 
                    data={data}
                    setSearchData={setSearchData}
                />
                <DataGrid 
                    data={searchData}
                    isLoading={isLoading}
                    onScroll={onScroll}
                    getDetails={handleDetails}
                    loadMore={loadMore}
                />
                <DetailedView 
                    details={details} 
                    modal={modal}
                    setModal={setModal}
                />
            </Content>
        </Layout>
    )
}

export default home
