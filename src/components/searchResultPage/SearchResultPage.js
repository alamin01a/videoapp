import React, { useState } from 'react'
import './SearchResultPage.css'
import { useSelector } from 'react-redux';
import Videoitem from '../home/Videoitem';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

function SearchResultPage(props) {
    const navigate = useNavigate()
    const fetchedArray = useSelector((state) => state.searchResult);
    const searchWord = useSelector((state) => state.searchterm)

    const [fetchedItemArray, setFetchedItemArray] = useState([])


    const filterFunc = () => {
        props.setProgress(5)
        const filteredItems = fetchedArray.videoArray.filter((ele) => {
            if (searchWord.value === "" || searchWord.value === null) {
                return console.log("");;
            } else if (ele.title.toLowerCase().includes(searchWord.value.toLowerCase()) === true) {
                return ele;
            }
            props.setProgress(45)
        })
        setFetchedItemArray(filteredItems)
        props.setProgress(70)
        if (filteredItems.length <= 0) {
            navigate('/nothingtoshow')
        }

        props.setProgress(100)

    }


    useEffect(() => {
        filterFunc()
         // eslint-disable-next-line
    }, [searchWord.value])


    return (
        <>
            <div className="searchPageArea">
                <p className='heading'> Result for your search: {searchWord.value}</p>
                <div className="fetchedArea">
                    {
                        fetchedItemArray.map((element) => {
                            return <div key={element.id} className="singleVitem">
                                <Videoitem videoId={element.id} videoUrl={element.link} videoTitle={element.title} />
                            </div>
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default SearchResultPage