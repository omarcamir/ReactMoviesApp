import React, { useEffect, useState } from 'react'
import "./MovieDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay , faHeart } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import axios from "axios";

function MovieDetails() {

    const param = useParams();
    console.log(param)
    const [details, setDetails] = useState([]);
    const getDetails = async ()=>{
        const response = await axios.get(`https://api.themoviedb.org/3/${param.name}/${param.id}?api_key=14bdd69ce887376edfafb09f23f78fe9`)
        setDetails(response.data)
    }
      useEffect(() => {
        getDetails()
        console.log(details)
      }, []);

      const imageUrl = `https://image.tmdb.org/t/p/w500/${details.backdrop_path}`;

      const coverStyle = {
        backgroundImage: `url(${imageUrl})`,
      };
  return (
    <div className="movie-details">
        <div className="cover w-100" 
        style={coverStyle} >
        </div>
        <div className="content position-absolute w-100">
            <div className="container py-5">
                <div className="row w-100">
                    <div className="col-sm-12 col-md-4">
                        <img className='w-100 d-block' src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className="details d-flex flex-column justify-content-between text-color py-4 w-100">
                            <h6>2020</h6>
                            <h2>{details.original_title}</h2>
                            <p>{details.overview}</p>
                            <div className="row justify-content-between align-items-center mt-5 w-100 py-3">
                                <div className="col-md-12 col-lg-4">
                                    <div className="trailer d-flex align-items-center pe-">
                                    <div className="circle  border border-2 border-light d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon className='text-center fs-3 icon-link-hover' icon={faPlay} />
                                    </div>
                                    <a className='ms-2 fw-bold text-capitalize btn-link link-light link-underline-opacity-0' href={details.homepage} target='_blank'>
                                        Watch The Trailer
                                        </a>
                                </div>
                                </div>
                                <div className="col-md-12 col-lg-8">
                                    <ul className="d-sm-block d-md-flex justify-content-around align-items-center ps-0 mb-0">
                                        <li className='mx-3 ps-sm-4'>{Math.floor(details.runtime/60)}h {details.runtime%60}min</li>
                                        <li className='mx-3 ps-sm-4'>Horror , Trailer </li>
                                        <li className='mx-3 ps-sm-4'>{details.release_date}</li>
                                    </ul>
                                </div>
                                <div className=" text-color-lg black-details d-flex mt-5 justify-content-start justify-content-md-between align-items-center flex-wrap">
                                    <div className="col-md-12 col-lg-8">
                                        <div className="d-flex">
                                            <p className='rate m-5 px-3'><span className=" fs-1 fw-bold">{details.vote_average}</span> <sub className='fw-bold'>IMDb</sub></p>
                                            <div className="d-flex flex-column justify-content-center">
                                                <p className='text-muted'>status</p>
                                                <p className='text-dark fw-bold'>{details.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-4">
                                        <div className="d-flex justify-content-center justify-content-lg-end align-items-center">
                                            <button className='btn btn-dark fs-2 px-4 mx-2'>+</button>
                                            <button className='btn btn-light fs-2 px-4 mx-2'>
                                            <FontAwesomeIcon icon={faHeart} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails