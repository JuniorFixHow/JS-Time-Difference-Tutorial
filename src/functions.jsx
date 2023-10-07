export const timePastSince = (time) =>{
    const now = new Date();

    const day = (now - time) / (1000 * 3600*24);
    const hr = (now - time) / (1000 * 3600);
    const min = (now - time) / (1000 * 60);

    if(day === 365){
        return `${Math.floor(day/365)} year ago`
    }
    else if( day > 365){
        return `${Math.floor(day/365)} years ago`
    }
    else if( day === 30){
        return `${Math.floor(day/30)} month ago`
    }
    else if (day > 30 && day < 365){
        return `${Math.floor(day/30)} months ago`
    }
    else if (day === 7){
        return `${Math.floor(day/7)} week ago`
    }
    else if (day > 7 && day < 30 ){
        return `${Math.floor(day/7)} weeks ago`
    }
    else if (day ===1 ){
        return `${Math.floor(day/1)} day ago`
    }
    else if (day > 1 && day < 7){
        return `${Math.floor(day/1)} days ago`
    }
    else if (hr === 1 ){
        return `${Math.floor(hr/1)} hour ago`
    }
    else if (hr > 1 && hr < 24 ){
        return `${Math.floor(hr/1)} hours ago`
    }
    else if (min ===1  ){
        return `${Math.floor(min/1)} minute ago`
    }
    else if (min > 1 && min < 60  ){
        return `${Math.floor(min/1)} minutes ago`
    }
    else if (min < 1  ){
        return `just now`
    }
}


export const timeRemaining = (time) =>{
    const now = new Date();

    const day = (time - now) / (1000 * 3600*24);
    const hr = (time - now) / (1000 * 3600);
    const min = (time - now) / (1000 * 60);

    if(day === 365){
        return `${Math.floor(day/365)} year remaining`
    }
    else if( day > 365){
        return `${Math.floor(day/365)} years remaining`
    }
    else if( day === 30){
        return `${Math.floor(day/30)} month remaining`
    }
    else if (day > 30 && day < 365){
        return `${Math.floor(day/30)} months remaining`
    }
    else if (day === 7){
        return `${Math.floor(day/7)} week remaining`
    }
    else if (day > 7 && day < 30 ){
        return `${Math.floor(day/7)} weeks remaining`
    }
    else if (day ===1 ){
        return `${Math.floor(day/1)} day remaining`
    }
    else if (day > 1 && day < 7){
        return `${Math.floor(day/1)} days remaining`
    }
    else if (hr === 1 ){
        return `${Math.floor(hr/1)} hour remaining`
    }
    else if (hr > 1 && hr < 24 ){
        return `${Math.floor(hr/1)} hours remaining`
    }
    else if (min ===1  ){
        return `${Math.floor(min/1)} minute remaining`
    }
    else if (min > 1 && min < 60  ){
        return `${Math.floor(min/1)} minutes remaining`
    }
    else if (min < 1  ){
        return `about now`
    }
}