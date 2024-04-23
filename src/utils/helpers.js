export const shortMultiFormatDateString = (timestamp) => {
    const timestampNum = Math.round(new Date(timestamp).getTime() / 1000);
    const date = new Date(timestampNum * 1000);
    const now = new Date();
  
    const diff = now.getTime() - date.getTime();
    const diffInSeconds = diff / 1000;
    const diffInMinutes = diffInSeconds / 60;
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;
  
    switch (true) {
      case Math.floor(diffInDays) >= 30:
        return formatDateString(timestamp);
      case Math.floor(diffInDays) === 1:
        return `${Math.floor(diffInDays)}d`;
      case Math.floor(diffInDays) > 1 && diffInDays < 30:
        return `${Math.floor(diffInDays)}d`;
      case Math.floor(diffInHours) >= 1:
        return `${Math.floor(diffInHours)}hr`;
      case Math.floor(diffInMinutes) >= 1:
        return `${Math.floor(diffInMinutes)}m`;
      default:
        return "just now";
    }
  };



 export function formatCustomDate(dateString) {
    const date = new Date(dateString);
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const monthIndex = date.getMonth();
    const monthShort = monthNames[monthIndex];
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${monthShort} ${day}, ${year}`;
}