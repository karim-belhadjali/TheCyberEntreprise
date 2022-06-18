import { mockedCurrencies } from "src/data/CybrApidData";
import * as React from "react";

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
        console.log("Currency Api : Response Error");
        console.log(JSON.stringify(err));
        document = mockedCurrencies;
      } else {
        console.log("Currency Api : Request Error");
        console.log(JSON.stringify(err));
        document = mockedCurrencies;
      }
    }
  }

  return JSON.stringify(document);
};

export const getTokensInfo = async (): Promise<any> => {
  const response = await fetch(
    "https://api.nomics.com/v1/currencies/ticker?key=217cc0ff59219b2b4913f0cf503d51e35cab8e08&ids=SHIB,FLOKI&interval=1d954"
  );
  const data = response.json;
  console.log(data);

  return data;
};

export const getCybrTokenInfo = async (): Promise<any> => {
  try {
    const options = {
      method: "GET",
      url: "https://thecyberenterprise.com/api/get_info.php",
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
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      console.log("cyber APi : error");

      console.log(JSON.stringify(err));
    }
  }
};
