import React, {useState, useEffect} from "react"; 
import Body from "./Body"; 
import Header from "./Header"; 
import Footer from "./Footer"


function Home (){
    const [memories, setMemories] = useState([])
    const baseUrl = "http://localhost:3000"
    useEffect(() => {
        fetch(baseUrl + "/memories")
            .then(r => r.json())
            .then(memoryData => setMemories(memoryData))
    }, [])
    
    return (
        <div>
            <Header /> 
            <Body memories={memories}/>
            <Footer />
        </div>
       
    )
}

export default Home;