import React, {useEffect} from "react"; 

//fetch
import { get } from './fetch/fetchs';

//Redux
import { useSelector, useDispatch } from "react-redux";
import {update} from './stores/memories';

//Components
import Body from "./Body"; 
import Header from "./Header"; 
import Footer from "./Footer";


function Home (){

    //const baseUrl = "http://localhost:3000" Please look inside of /fetch/fetchs.js
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.user.value)
    const triggerUpdate = useSelector((state) => state.update.value)

    useEffect(() => {
        const fetchData = async () => {
            let memories = await get('memories')
            dispatch(update(memories.filter((memory)=> memory.userId === user.id)))
        }
        fetchData()
    }, [triggerUpdate/*dispatch, user.id*/])
    
    return (
        <div className="content">
            <div className="content-adjustment">
                <Header /> 
                <Body />
                <Footer />
            </div>
        </div>
       
    )
}

export default Home;