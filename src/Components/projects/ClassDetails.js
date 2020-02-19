import React from 'react'

const ClassDetails = (props) => {
    const id =props.match.params.id;    
    return (
        <div className="container section class-details">
            <div className="cardz-depth-0">
                <div className="card-content">
                    <h3 class="card-title">Class title - {id}</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellat, eos sapiente maxime asperiores voluptas doloremque sint eum dolorum ab, atque excepturi fugit praesentium ut neque id aperiam? Magni, nemo.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by ay boi</div>
                    <div>Date</div>
                </div>
            </div>
        </div>
    )
}

export default ClassDetails
