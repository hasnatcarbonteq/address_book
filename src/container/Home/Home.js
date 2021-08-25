import React, {useEffect, useState} from 'react'
import UserTable from '../../components/UserTable/UserTable.jsx'
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
import {uesOnScreen} from "../../hooks/customHooks"

const { Header, Content } = Layout;

const options = {
    threshold: 1,
    root: null,
    rootMargin: "0px",
};



function home() {

    // redux
    const dispatch = useDispatch()
    const dataGrid = useSelector(state => state.dataGrid)
    const [ref, isOnScreen] = uesOnScreen(options)


    // internal state mananagement
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [loadMore, setLoadMore] = useState('')
    const [details, setDetails] = useState({})
    const [modal, setModal] = useState(false)

    // functions

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
        setIsLoading(dataGrid.isLoading)
    }, [dataGrid.data])

    useEffect(() => {
        setDetails(dataGrid.details)
    }, [dataGrid.details])

    useEffect(() => {
        (async () => {
            if(data.length < 1000 && isOnScreen) {
                setLoadMore('fetching more results')
                await dispatch(getReserveData(dataGrid.page, dataGrid.nat))
            }else {
                setLoadMore('end of users catalog')
            }
        })()
    }, [isOnScreen])


    return (
        <Layout className="dataGrid" >
            <Header>
                <CustomTitle>
                    Address Book
                </CustomTitle>
            </Header>
            <Content id="content" >
                <Link to="/settings">Settings</Link>
                <SearchBar 
                    data={data}
                    setSearchData={setSearchData}
                />
                <UserTable 
                    data={searchData}
                    isLoading={isLoading}
                    getDetails={handleDetails}
                    loadMore={loadMore}
                    setRef={ref}
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
