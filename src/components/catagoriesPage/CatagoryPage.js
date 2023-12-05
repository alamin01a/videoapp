import React from 'react'
import './CatagoryPage.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import Videoitem from '../home/Videoitem';

function CatagoryPage(props) {
    const [catagoryArray, setCatagoryArray] = useState([])
    const fetchedArray = useSelector((state) => state.searchResult);
    const searchWord = useSelector((state) => state.searchterm);

    const filteredCatagoryFunc = () => {
        props.setProgress(5)
        const filteredCatagoryItem = fetchedArray.videoArray.filter((ele) => {
            if (searchWord.value === "" || searchWord.value === null) {
                return;
            } else if (ele.category.toLowerCase().includes(searchWord.value.toLowerCase())) {
                return ele;
            }
        })
        props.setProgress(45)
        setCatagoryArray(filteredCatagoryItem)
        setTimeout(() => {
            props.setProgress(100)
        }, 200)
    }


    useEffect(() => {
        filteredCatagoryFunc()
    }, [searchWord.value])



    return (
        <>
            <div className="catagory-Area">
                {
                    catagoryArray.map((element) => {
                        return <div key={element.id} className="singleVitem">
                            <Videoitem videoId={element.id} videoUrl={element.link} videoTitle={element.title} />
                        </div>
                    })
                }
            </div>

        </>
    )
}

export default CatagoryPage