import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    getUserList,
    getUserDetail,
    getChachedData,
} from '../../redux/actions/userTable'
import UserTable from '../../components/UserTable/UserTable.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import DetailedView from '../../components/DetailedView/DetailedView.jsx'
import { 
    Layout,
} from 'antd';
import CustomHeader from '../../components/common/CustomHeader/CustomHeader.jsx'
import CustomSidebar from '../../components/common/CustomSidebar/CustomSidebar.jsx'
import CustomFooter from '../../components/common/CustomFooter/CustomFooter.jsx'
import {uesOnScreen} from "../../hooks/customHooks"

const { Header, Content } = Layout;

const options = {
    threshold: 1,
    root: null,
    rootMargin: "0px",
};



function home(props) {

    // redux
    const dispatch = useDispatch()
    const userTable = useSelector(state => state.userTable)
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
        await dispatch(getUserDetail(user))
        setModal(true)
    }

    // life cycle
    useEffect(() => {
        (async () => {
            await dispatch(getUserList(userTable.page, userTable.nat))
        })()
    }, [])

    useEffect(() => {
        setData(userTable.userData)
        setSearchData(userTable.userData)
        setIsLoading(userTable.isLoading)
    }, [userTable.userData])

    useEffect(() => {
        setDetails(userTable.details)
    }, [userTable.details])

    useEffect(() => {
        (async () => {
            if(data.length < 1000 && isOnScreen) {
                setLoadMore('fetching more results')
                await dispatch(getChachedData(userTable.page, userTable.nat))
            }else {
                setLoadMore('end of users catalog')
            }
        })()
    }, [isOnScreen])



    return (
        <Layout>
            <CustomSidebar
                {...props}
            />
            <Layout>

                <CustomHeader 
                    title="Address Book"
                />
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
                <CustomFooter/>
            </Layout>

        </Layout>
    )
}

export default home
