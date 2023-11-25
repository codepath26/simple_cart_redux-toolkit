import React from "react";
import { useSelector } from "react-redux";
import './Notification.css'

function Notificationl() {
  const ui = useSelector((state) => state.ui);
  return (
    <>
      {ui.isLoading && 
        <div  className="notification1" >
          <strong>Loading......    </strong> please wait.
          
        </div>
        
      }
      {ui.fullfilled && (
        <div className="notification2" >
          <strong>Success!   </strong> Data Stored into Store 
          
        </div>
      )}
      {ui.rejected && 
        <div  className="notification3" >
          <strong>something went wrong!   </strong> try again?
          
        </div>
      }
    </>
  );
}

export default Notificationl;
