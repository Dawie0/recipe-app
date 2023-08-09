import { useState } from "react"
import CardContainer from "./cardContainer"
import axios from 'axios'



const SearchForm = () => {
    const [keyword, setKeyword] = useState('')
    const [exclude, setExclude] = useState('')
    const [diet, setDiet] = useState('')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(false)


    const getRecipes = async () => {
        if (diet === 'none') {
            setDiet('')
        }
        try {
          setLoading(true);
          const res = await axios.get("http://localhost:5000/api/recipe", {
            params: { keyword, diet, exclude },
          });
          
          const { data } = res;
          setLoading(false);
          setResponse(data.results);
        } catch (error) {
          setLoading(false);
        }
      }


      console.log('response: ', Array.isArray(response), response)
    return (
        <div className="row d-flex mt-4 justify-content-center">
            <div className="row justify-content-center">
                <div className="col-8 mb-3">
                    <input 
                        type="text"
                        value={keyword} 
                        className="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="Search recipes"
                        onChange={(e) => setKeyword(e.target.value)} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">
                    <label htmlFor="diet">Diet</label>
                    <select 
                        className="form-select" 
                        id="diet" 
                        aria-label="Default select example"
                        value={diet}
                        onChange={(e) => setDiet(e.target.value)}>
                        <option defaultValue="none">none</option>
                        <option value="paleo">Paleo</option>
                        <option value="whole30">Whole30</option>
                        <option value="ketogenic">Ketogenic</option>
                        <option value="gluten free">Gluten Free</option>
                        <option value="pescetarian">pescetarian</option>
                        <option value="lacto vegetarian">lacto vegetarian</option>
                        <option value="ovo vegetarian">ovo vegetarian</option>
                        <option value="vegan">vegan</option>
                        <option value="vegetarian">vegetarian</option>
                    </select>
                </div>
                <div className="col-4">
                    <label htmlFor="exclude-ingredients">Exclude Ingredients</label>
                    <input 
                        type="text" 
                        value={exclude}
                        id="exclude-ingredients" 
                        className="form-control" 
                        placeholder="ex: Cilantro" 
                        aria-label="exclude ingredient" 
                        onChange={(e) => setExclude(e.target.value)}/>
                </div>
                <div className='col-8 d-flex m-3 justify-content-center'>
                    <button className='btn' 
                        onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        getRecipes()}}
                        >
                        {loading ? <>Loading...</> : <>Search</>} 
                    </button>
                </div>
            </div>
            <div className='row'>
          
            {response && <CardContainer recipes={response}/>} 
          </div> 
        </div>
    )
}

export default SearchForm