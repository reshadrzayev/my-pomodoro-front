import React, {useEffect, useState} from 'react';

function Loader({loading}) {

    // const[loader,setLoader]=useState(true)

    // useEffect(()=>{
    //
    //     if(loading===true){
    //         document.getElementsByTagName("html")[0].style.overflowY="hidden"
    //     }
    //     else{
    //         document.getElementsByTagName("html")[0].style.overflowY="unset"
    //     }
    // })
    //
    // useEffect(()=>{
    //     console.log(loading)
    // })

    return (
        <div className="loader">
            <div className="donut"></div>
        </div>
    );
}

export default Loader;
