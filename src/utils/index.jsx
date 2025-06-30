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
  if (!url || typeof url !== 'string') return null; // Handle null, undefined, or non-string input

  const regex = /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/|.*shorts\/))([^?&]+)/;
  const match = url.match(regex);

  if (match && match[1]) {
    const videoId = match[1];
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }

  return null; // If no match
}