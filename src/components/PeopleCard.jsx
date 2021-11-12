import React from 'react'

const PeopleCard = ({name, location, content, image}) => {
    return (
        <div className="card m-6">
            <div classNameName="card-image">
                <figure className="image is-256x256">
                    <img src={image} alt={name}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{name}</p>
                        <p className="subtitle is-6">{location}</p>
                    </div>
                </div>

                <div className="content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default PeopleCard
