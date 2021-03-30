import React, {useState} from 'react'
import MediaCard from './MediaCard'

function MediaList({media, review, handleReviewUpdate, handleAddReview, handleDeleteReview, activeUser}) {
    const [filtered, setFiltered] = useState({review})
    const reviewObject = review.map((reviewObj) => {
        return <reviewObj key={reviewObj} id={reviewObj}/>
    } )

    const filteredReview = () => {
        let mediaReviews = [...review].filter((filteredObj) => (filteredObj.media_id === media.id))
        setFiltered(mediaReviews)
    }

    const mediaObject = media.map((mediaObj) => {
        let mediaReviews = [...review].filter((filteredObj) => (filteredObj.medium_id === mediaObj.id))
    return <MediaCard handleReviewUpdate={handleReviewUpdate} handleDeleteReview={handleDeleteReview} activeUser={activeUser} key={mediaObj.id} id={mediaObj.id} media={mediaObj} reviews={mediaReviews} handleAddReview={handleAddReview}/>})
        return (
        <div>
        {mediaObject}  
        </div>
    )
}

export default MediaList
