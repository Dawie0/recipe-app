/* eslint react/prop-types: 0 */
import axios from 'axios'
import './card.css'

const Card = ( { recipe } ) => {
    const recipeID = recipe.id
    let url = ''

    const getRecipe = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/recipe-details/${recipeID}`);
          const { data } = res;
        //   setResponse(data.results);
        url = data.sourceUrl
        newTab()
        } catch (error) {
          console.error(error)
        }
    }
    const newTab = () => {
        window.open(url, '_blank')
    }

    return (
        <div className="col-xs-12 col-sm-4 col-md-3 m-2 card glass-morph"
            onClick={getRecipe}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 d-flex justify-content-center">
                    <img className='prop-image' src={recipe.image} />
                </div>
                <div className="col-12 text-center">
                    <span>{recipe.title}</span>
                </div>
                <div className="col-12  d-flex justify-content-center align-items-center">
                </div>
            </div>
        </div>
    )
}

export default Card