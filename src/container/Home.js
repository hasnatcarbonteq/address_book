import React, {useEffect, useState} from 'react'
import DataGrid from '../components/DataGrid/DataGrid.jsx'
import SearchBar from '../components/SearchBar/SearchBar.jsx'
import DetailedView from '../components/DetailedView/DetailedView.jsx'
import {useDispatch, useSelector} from 'react-redux'
import {
    getData,
    getDetails,
    getReserveData,
} from '../redux/actions/dataGrid'
import {Link} from 'react-router-dom'

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
    const onScroll = event => {
        let element = event.target;
        if(data.length < 1000){
            setLoadMore('fetching more results')
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                console.log(dataGrid.page)
                dispatch(getReserveData(dataGrid.page+1))
                setLoadMore('')
            }
        }else {
            setLoadMore('end of users catalog')
        }
    };

    const handleDetails = (user) => {

        dispatch(getDetails(user))
        setModal(true)
    }


    // life cycle
    useEffect(() => {
        (async () => {
            console.log(dataGrid.nat)
            let res = dispatch(getData(dataGrid.page, dataGrid.nat))
            setIsLoading(res)
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

    return (
        <div className="dataGrid" >
            <h1 className="title">
                Address Book
            </h1>
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
        </div>
    )
}

export default home
