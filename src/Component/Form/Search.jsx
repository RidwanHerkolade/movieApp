import React,{useState} from 'react';
import './Search.css'

const Search = (props) => {

    const { getDataFromSearch }= props;
    const [inputValue, setInPutValue] = useState("");
   
    function handleChange(event) {
        const {value} = event.target
        setInPutValue(value)
    };
    function handleSubmit(event) {
        event.preventDefault()
        getDataFromSearch(inputValue)

    };
    
    return (
       
         <div className='form__divs'>
              <form className="form" onSubmit={handleSubmit}>
               {/* <div className='form__divs'> */}
              <input
                     placeholder="Search"
                     name=""
                     value={inputValue}
                     onChange={handleChange}
              
              />
               <button type="submit">Search</button>
              {/* </div> */}
               </form>

         </div>
         
    )
}

export default Search; 