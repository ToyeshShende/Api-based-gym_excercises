export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '09d768683fmsh6d15ad516978185p1351a1jsnab9d2fa08f25',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
    params: {q: 'toyesh+shende'},
    headers: {
      // 'X-RapidAPI-Key': '09d768683fmsh6d15ad516978185p1351a1jsnab9d2fa08f25',
      // 'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    }
  };
  

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };