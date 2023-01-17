import './notification.css';
import { createContext, useState } from 'react';

const Notification = ({ message, severity, otherClass = 'Message'}) => {

    const notificationStyle = {
      position: 'fixed',
      right: '5px',
      top:'85px',
      width:'auto',
      height: 'auto',
      padding: '10px',
      borderRadius: '7px',
      fontWeight: '600',
      //backgroundColor:severity === 'success' ? ' rgb(159, 233, 255)' : 'red',
      color:'black'
  }

  if(message === ''){
    return null
  }

  const config = true ? {
    style: notificationStyle,
    className: `${severity === 'success' ? 'Success' : 'Error' } ${otherClass || ''}`
} : {

}

    return (
      <div {...config}>
        { message }
      </div>
    )
  }

  const NotificationContext = createContext();

  export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success');

    const setNotification = (sev, msg) => {
      setMessage(msg);
      setSeverity(sev);
      setTimeout(()=>{
        setMessage('')
      }, 3000)
    }

    return(
      <NotificationContext.Provider value={{setNotification}}>
        <Notification message={message} severity={severity}/>
        {children}
      </NotificationContext.Provider>
    )
  }



  export default NotificationContext;