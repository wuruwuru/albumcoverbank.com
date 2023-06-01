import React from "react";
import CoverGrid from "../../pages/cover-bank/CoverGrid";

import Search from "../../assets/svg/search-icon.svg"

import classes from "./Searchresult.module.scss"
import { FetchMoreLoader } from "../FetchMoreLoader";
export function SearchResult({searchStatus,searchCovers,setSelectedCover,wrapperRef,setOpenModal,imgRef,searchFetch}){
    
    return(
<>
{searchStatus === "success" && (
<>
  {/* FOR SEARCHING */}
   
        <>   {JSON.stringify([]) !== JSON.stringify(searchCovers) ? <CoverGrid
                  covers={searchCovers}
                  setSelectedCover={setSelectedCover}
                  setOpenModal={setOpenModal}
                  imgRef={imgRef}
                  wrapperRef={wrapperRef}
                />:  
                 <div className={classes.EmptyWrapper}>
                    <div className={classes.TextWrapper}>
                  <div className={classes.FlexWrapper}><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0965 20.1475L28 26.0496L26.0496 28L20.1475 22.0965C17.9514 23.857 15.2199 24.8145 12.4052 24.8105C5.55755 24.8105 0 19.2529 0 12.4052C0 5.55755 5.55755 0 12.4052 0C19.2529 0 24.8105 5.55755 24.8105 12.4052C24.8145 15.2199 23.857 17.9514 22.0965 20.1475ZM19.3315 19.1247C21.0808 17.3258 22.0577 14.9144 22.0538 12.4052C22.0538 7.07374 17.7354 2.75672 12.4052 2.75672C7.07374 2.75672 2.75672 7.07374 2.75672 12.4052C2.75672 17.7354 7.07374 22.0538 12.4052 22.0538C14.9144 22.0577 17.3258 21.0808 19.1247 19.3315L19.3315 19.1247Z" fill="#683522"/>
<path d="M7.22152 7.32766C7.51687 7.03352 7.99574 7.03352 8.2911 7.32766L17.9173 16.9142C18.2127 17.2084 18.2127 17.6853 17.9173 17.9794C17.622 18.2735 17.1431 18.2735 16.8477 17.9794L7.22152 8.39283C6.92616 8.09869 6.92616 7.6218 7.22152 7.32766Z" fill="#683522"/>
<path d="M7.28269 17.8723C6.98733 17.5782 6.98733 17.1013 7.28269 16.8072L16.9089 7.2206C17.2043 6.92646 17.6831 6.92647 17.9785 7.2206C18.2738 7.51474 18.2738 7.99164 17.9785 8.28578L8.35227 17.8723C8.05691 18.1665 7.57804 18.1665 7.28269 17.8723Z" fill="#683522"/>
</svg>
 <h3>Oops no cover matches your search</h3></div>   
              <p> The cover you’re searching for is not in our database.To fix this, kindly check that you typed in the correct words or Click the  <a href="https://forms.gle/Tz1SMwkBRbKvd62JA" target="_blank"><u className={classes.SubmitColor}>‘submit’ </u></a> button to contribute a cover to this website
  </p>   
                    </div>
               
                </div>}  </> 
         

                   {/* FETCHING NEW DATA */}
          {searchFetch && JSON.stringify([]) !== JSON.stringify(searchCovers) && (
         <FetchMoreLoader/>
          )}
</>)}
   
</>
    )
}
