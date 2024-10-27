export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getminutes());
    return `${hours}:${minutes}`;
}

function padZero(number){
    return number.toString().padStart(2, "0");
}