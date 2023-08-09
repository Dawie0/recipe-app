/* eslint react/prop-types: 0 */
import './card.css'

const Card = ( { recipe } ) => {
    const recipeID = recipe.id

    return (
        <div className="col-xs-12 col-sm-4 col-md-3 m-2 card glass-morph">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 d-flex justify-content-center">
                    <img className='prop-image' src={recipe.image} />
                </div>
                <div className="col-12 text-center">
                    <span>{recipe.title}</span>
                </div>
                {/* <div className="col-12  d-flex justify-content-center align-items-center">
                    <a href={recipe.rdc_web_url} target="_blank" rel='noreferrer'>
                    <button className="btn2">
                        Details
                        <div className=""></div>
                    </button>
                    </a>
                </div> */}
            </div>

        </div>
    )
}

export default Card