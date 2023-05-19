import React from "react";
import CoverGrid from "../../pages/cover-bank/CoverGrid";


import classes from "./Searchresult.module.scss"
import { FetchMoreLoader } from "../FetchMoreLoader";
export function SearchResult({searchStatus,searchCovers,setSelectedCover,wrapperRef,setOpenModal,imgRef,searchFetch}){
    
    return(
<>
{searchStatus === "success" && (<>
  {/* FOR SEARCHING */}
   
        <>   {JSON.stringify([]) !== JSON.stringify(searchCovers) ? <CoverGrid
                  covers={searchCovers}
                  setSelectedCover={setSelectedCover}
                  setOpenModal={setOpenModal}
                  imgRef={imgRef}
                  wrapperRef={wrapperRef}
                />:   <div className={classes.EmptyWrapper}>
                    <div className={classes.TextWrapper}>
                      <h3>Oops no cover matches your search</h3>
                <p>The cover you’re searching for is not in our database.To fix this, 
                  check that you typed in the right words or Click the ‘submit’ button to contribute this cover to this website</p>   
                    </div>
               
                </div>}  </> 
         
                   {/* FETCHING NEW DATA */}
          {searchFetch && (
         <FetchMoreLoader/>
          )}
</>)}
   
</>
    )
}
