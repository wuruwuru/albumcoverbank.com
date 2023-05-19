import React from "react"

import classes from "./FetchMoreLoader.module.scss"
import Lottie from "lottie-react";
import Loader from "../../animations/Lottie/loader.json"
export function FetchMoreLoader(){
    return(
        <div className={classes.LoaderWrapper}>
            <Lottie animationData={Loader} loop={true} />
            	
         
        </div>
    )
}