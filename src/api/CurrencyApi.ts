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

const document = { USD: 1 };
export const getcurrency = async (): Promise<any> => {
  for await (const currency of currenciess) {
    const options = {
      method: "GET",
      url: "https://api.apilayer.com/exchangerates_data/convert",
      params: { to: "usd", from: currency, amount: "1" },
      headers: {
        apikey: "lo6q00YmwAxJkAnT3f9FebN8S5XhWZTO",
      },
    };
    const response = await axios.request(options);
    const data = response.data;
    document[currency] = await data.info.rate;
  }

  return document;
};

export const getTokensInfo = async (): Promise<any> => {
  const response = await fetch(
    "https://api.nomics.com/v1/currencies/ticker?key=217cc0ff59219b2b4913f0cf503d51e35cab8e08&ids=SHIB,FLOKI&interval=1d"
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

    console.log(JSON.stringify(response));

    // Work with the response...
  } catch (err: any) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
    } else if (err.request) {
      // The client never received a response, and the request was never left
    } else {
      // Anything else
    }
  }
};
