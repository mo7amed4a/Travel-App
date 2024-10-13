import moment from 'moment';



export function formatISODate(isoDateString, isShort = false) {
  if (!isoDateString) return '' 
    const formattedDate = moment(isoDateString);
    // const date = new Date(isoDateString); 
    // const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // const hours = date.getHours();
    // const minutes = date.getMinutes().toString().padStart(2, '0');
    // const day = date.getDate().toString().padStart(2, '0');
    // const month = months[date.getMonth()];
    // const year = date.getFullYear();

    return formattedDate.fromNow()
    // return isShort ? `${hours > 12 ?  'PM ' + (hours - 12) : 'AM ' + hours}:${minutes} - ${day} ${month} ${year}` : `${hours > 12 ?  'PM ' + (hours - 12) : 'AM ' + hours}:${minutes} - ${day} ${month} ${year}`;
  }