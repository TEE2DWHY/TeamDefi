import Aos from "aos";
import { useEffect } from "react";
import("aos/dist/aos.css");

const Animate = () =>{
    useEffect(()=>{
        Aos.init({
            duration: 2000
        })
    },[])
}

export default Animate