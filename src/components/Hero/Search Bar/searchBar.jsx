import { useEffect, useState } from "react"
import axios from "axios"
import "./searchBar.css"

const searchBar = () => {
    const [value, setValue] = useState("");
    const [suggested, setSuggested] = useState([]);
    const [hideSuggestions, setHideSggestions] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const {data} = await axios.get( `https://dummyjson.com/products/search?q=${value}`);
                setSuggested(data.products);
            }
            catch(error){
                console.log(error);
            }
        };
        fetchData();

    }, [value]);
    
    return ( 
        <div className={styles.Container}>
            <input 
                type="text" 
                className={styles.textbox}
                placeholder="Search data..."
                value={value} 
                onChange = {(e) => {
                    setValue(e.target.value)
                }} 
                onFocus={() => setHideSggestions(false)}
                onBlur={async () => {
                    setTimeout(() => {
                        setHideSggestions(true);
                    }, 200);
                }}>
                <div className={`${styles['suggested']} ${hideSuggestions && styles['hidden']}`}>
                    {
                        suggested.map((suggested) => (
                        <div className={styles.suggested}>
                            {   
                                suggested['title']
                            }
                        </div>
                    ))}
                </div>
            </input>
        </div>
    );
};


export default searchBar;