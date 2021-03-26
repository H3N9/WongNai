import React from 'react'
import PropTypes from 'prop-types'

const BoxContent = ({trip}) => {
    const {title = "", url = "", description = "", photos = [], tags = []} = trip
    const defaultImage = "%PUBLIC_URL%/logo192.png"
    return (
        <div className="card"> 

            <div className="main-img-box">
                {<img className="main-img" src={photos[0]?? defaultImage} alt="mainImage" />}
            </div>

            <div className="info-card">

                <div className="title-box">
                    <a href={url} >{title}</a>
                </div>

                <div className="descript">
                    <p>{description}</p>
                </div>

                <div className="tag">
                    <p>หมวด: {tags.map((tag, index) => (<span key={index} >{tag} </span>))}</p>
                </div>

                <div className="img-info-container">
                    <img className="img-info" src={photos[1]?? defaultImage} alt="imgeDetail" />
                    <img className="img-info" src={photos[2]?? defaultImage} alt="imgeDetail" />
                    
                </div>
            </div>
        </div>
    )
}

const ImageInfo = (url) => {
    if(url){
        return (
            <img className="img-info" src={url} alt="imgeDetail" />
        )
    }
    else {
        reu
    }
    
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