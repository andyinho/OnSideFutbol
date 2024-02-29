import { API_KEY } from '../../secrets.js';

export const fetchUpcomingGames = async () => {
  const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?next=50';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
