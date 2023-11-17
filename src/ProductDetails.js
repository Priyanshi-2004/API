import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function ProductDetails() {
    let url = useLocation();
    let [singleData, setsingleData] = useState({})
    let [imgGallery,setimgGallery]=useState([])
    let currentId = url.pathname.split('/')[2]
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${currentId}`)
            .then((res) => {
                console.log(res.data)
                setsingleData(res.data)
                setimgGallery(res.data.images)
            })
        
    }, [currentId])


    return (
        <div className='container py-5'>

            <div className='text-center py-4'> <Link to={'/'} className='btn btn-primary'>Back to Home</Link></div>
            {
                (singleData !== undefined || singleData !== null || singleData !== "")

                    ?

                    <div className='row'>
                        <div className='col-lg-6'>
                            <div id="carouselExampleIndicators" class="carousel slide">

                                <div class="carousel-inner">
                                    {imgGallery.map((v,i)=>{
                                        return(
                                            <div class={`carousel-item ${i==0 ? 'active' : '' } `}>
                                                 <img src={v} class="d-block w-100" alt="..." />
                                             </div>
                                        )
                                    }
                                    )}
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <h2>{singleData.title}</h2>
                            <p>{singleData.description}</p>
                            <p>{singleData.price}</p>
                        </div>
                    </div>
                    :

                    "No data"

            }

        </div>
    )
}
