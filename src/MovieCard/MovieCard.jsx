import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import "./MovieCard.css"
import { Link } from 'react-router-dom'

function MovieCard({item}) {

  return (
        <div className="col-sm-12 col-md-4 col-lg-3 my-2">
            <Card className='border-0'>
                <Link to={`/${item.media_type}/${item.id}`}>
                    <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    className='card-img w-100 d-block position-relative'
                /></Link>
                <Badge className='card-badge position-absolute p-3' bg="info">{item.vote_average.toFixed(1)}</Badge>
                <Card.Body>
                    <Card.Title className='text-center fw-bold'>
                        <Link
                        className='btn-link link-dark link-underline-opacity-0 link-opacity-75-hover'
                        to={`/${item.media_type}/${item.id}`}
                        >{item.title || item.name}</Link>
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
  )
}

export default MovieCard