import { mockedCurrencies } from "src/data/CybrApidData";

const axios = require("axios");

const currenciess = [
  "EUR",
  "GBP",
  "RUB",
  "CNY",
  "INR",
  "AUD",
  "JPY",
  "KRW",
  "AED",
  "TRY",
  "NGN",
];

var document = { USD: 1 };
export const getcurrency = async (): Promise<string> => {
  for await (const currency of currenciess) {
    try {
      const options = {
        method: "GET",
        url: "https://api.apilayer.com/exchangerates_data/convert",
        params: { to: currency, from: "usd", amount: "1" },
        headers: {
          apikey: "lo6q00YmwAxJkAnT3f9FebN8S5XhWZTO",
        },
      };
      const response = await axios.request(options);
      localStorage.setItem("last_time_updated", Date.now().toString());
      const data = response.data;

      document[currency] = await data.info.rate;
    } catch (err: any) {
      if (err.response) {
        // The client was given an error response (5xx, 4xx)
        document = mockedCurrencies;
      } else {
        document = mockedCurrencies;
      }
    }
  }
  return JSON.stringify(document);
};

export const getTokensInfo = async (): Promise<[]> => {
  try {
    const options = {
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=terra-luna-2%2Cshiba-inu%2Capecoin%2Cfloki-inu%2Clooksrare&order=market_cap_asc&page=1&sparkline=false",
    };
    const response = await axios.request(options);

    let tokens_data: any = [];
    response.data.map((tokenInfo: any, index: number) => {
      let formattedMarketCap = new Intl.NumberFormat("en", {
        notation: "compact",
        compactDisplay: "long",
      }).format(tokenInfo.market_cap);
      tokens_data[index] = {
        title: tokenInfo.name,
        formattedMarketCap: formattedMarketCap,
        marketCap: tokenInfo.market_cap,
        circulatingSupply: tokenInfo.circulating_supply,
      };
    });

    return tokens_data;

    // Work with the response...
  } catch (err: any) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      return [];
    }
  }
  return [];
};

export const getCybrTokenInfo = async (): Promise<any> => {
  try {
    const options = {
      method: "GET",
      url: "https://api.thecyberenterprise.com/get_info.php",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
    };
    const response = await axios.request(options);
    return response.data;

    // Work with the response...
  } catch (err: any) {
    if (err) {
      return null;
    }
  }
};
