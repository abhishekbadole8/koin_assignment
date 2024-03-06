import axios from "axios";

const currency_24_hr_URL = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`;

const currency_treding_URL = `https://api.coingecko.com/api/v3/search/trending`;

export async function getPrice() {
  try {
    const response = await axios.get(currency_24_hr_URL);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getTrending() {
  try {
    const response = await axios.get(currency_treding_URL);
    return response.data;
  } catch (error) {
    return error;
  }
}
