/* eslint react/prop-types: 0 */
import Card from "./Card"

const CardContainer = ({ recipes }) => {
    const handleCardPopulate = () => {
        return (
            recipes.map((recipe, index) => {
                return (
                    <Card 
                        key={index}
                        recipe={recipe}
                    />
                )
            })
        )
        
    }

    return (
        <div className="row m-3 justify-content-center">
            {handleCardPopulate()}
        </div>
    )

}

export default CardContainer