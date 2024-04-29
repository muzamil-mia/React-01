import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //check if online
  const[onlineStatus, setonlineStatus] = useState(true);


  const handleOnline = () => {
    setonlineStatus(true);
    console.log("clicked");
  }

  const handleOffline = () => {
    setonlineStatus(false);
    console.log("offline");
  }

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  },[])

  //boolean value
  return onlineStatus;
}

export default useOnlineStatus;