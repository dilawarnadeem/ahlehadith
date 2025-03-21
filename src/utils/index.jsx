export const GetWordStr = (str, count) =>{
     return str?.split(/\s+/).slice(0, count).join(" ");
}


export const ConvertDateIntoUrdu = (inputDate) => {
     const date = new Date(inputDate);

     const options = { month: 'long', day: 'numeric' };
     const formatter = new Intl.DateTimeFormat('ur-PK', options); // 'ur-PK' is the code for Urdu in Pakistan

     const formattedDate = formatter.format(date);
     return formattedDate
}


export const getIDFromURL = (url) =>{
     var id
     if(url.includes('www')){
          id = url.replace('https://www.youtube.com/watch?v=', '')
     }else{
          id = url.replace('https://youtube.com/watch?v=', '')
     }
     return id
}


export function getYouTubeThumbnail(url) {
     const regex = /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/|.*shorts\/))([^?&]+)/;
     const match = url.match(regex);
     
     if (match && match[1]) {
         return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
     } else {
         return "Invalid YouTube URL";
     }
 }