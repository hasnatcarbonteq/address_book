import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    getUserList,
    getUserDetail,
    getChachedData,
} from '../../redux/actions/userTable'
import UserTable from '../../components/UserList/UserList.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import DetailedView from '../../components/DetailedView/DetailedView.jsx'
import { 
    Layout,
} from 'antd';
import MainLayout from '../../components/common/MainLayout/MainLayout.jsx'
import {uesOnScreen} from "../../hooks/customHooks"

const {Content} = Layout;

const options = {
    threshold: 1,
    root: null,
    rootMargin: "0px",
};



function HomeContainer(props) {

    // redux
    const dispatch = useDispatch()
    const userList = useSelector(state => state.userList)
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
        dispatch(getUserDetail(user)) 
        setModal(true)
    }

    // life cycle
    useEffect(() => {
        (async () => {
            dispatch(getUserList(userList.page, userList.nat))
        })()
    }, [])

    useEffect(() => {
        setData(userList.userData)
        setSearchData(userList.userData)
        setIsLoading(userList.isLoading)
    }, [userList.userData])

    useEffect(() => {
        setDetails(userList.details)
    }, [userList.details])

    useEffect(() => {
        (async () => {
            if(data.length < 1000 && isOnScreen) {
                setLoadMore('fetching more results')
                dispatch(getChachedData(userList.page, userList.nat))
            }else {
                setLoadMore('end of users catalog')
            }
        })()
    }, [isOnScreen])



    return (
        <MainLayout title="Address Book" {...props} >
            <Content className="content" >
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
        </MainLayout>
    )
}

export default HomeContainer
