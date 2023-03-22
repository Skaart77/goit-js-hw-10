const BASE_URL = 'https://restcountries.com/v3.1/all?';

const fetchCountries = search => {
  const response = fetch(`${BASE_URL}fields=name,capital,population,flags,languages`);  
  if (!response.ok) {    
    throw new Error(response.status);    
  }
  return response.json();
};

export { fetchCountries };