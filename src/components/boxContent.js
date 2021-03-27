import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../images/No_picture_available.png'

const BoxContent = ({trip}) => {
    const {title = "", url = "", description = "", photos = [], tags = []} = trip
    photos[3] = undefined
    const main_photo = photos[0]?? defaultImage
    const detial_photo_1 = photos[1]?? defaultImage
    const detial_photo_2 = photos[2]?? defaultImage
    const detial_photo_3 = photos[3]?? defaultImage

    return (
        <div className="card"> 

            <div className="main-img-box">
                {<img className="main-img" src={main_photo} alt="mainImage" />}
            </div>

            <div className="info-card">

                <div className="title-box">
                    <a href={url} >{title}</a>
                </div>

                <div className="descript">
                    {description}
                </div>

                <div className="tag">
                    <p>หมวด: {tags.map((tag, index) => (<span key={index} >{tag} </span>))}</p>
                </div>

                <div className="img-info-container">
                    <img className="img-info" src={detial_photo_1} alt="imgeDetail" />
                    <img className="img-info" src={detial_photo_2} alt="imgeDetail" />
                    <img className="img-info" src={detial_photo_3} alt="imgeDetail" />
                </div>
            </div>
        </div>
    )
}


BoxContent.propTypes = {
    trip: PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photos: PropTypes.array.isRequired
    }).isRequired
}

export default BoxContent