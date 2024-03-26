import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
const MaybeShowNavBar = ({children}) => {
    const location = useLocation()
    const [noNavBar, setNoNavBar] = useState(false)
    useEffect(() => {
        console.log("this is location", location);
        if (location.pathname === "/") {
            setNoNavBar(false)
        }else {
            setNoNavBar(true)
        }

    }, [Location])
    
  return (
    <div>{noNavBar && children}</div>
  )
}

export default MaybeShowNavBar