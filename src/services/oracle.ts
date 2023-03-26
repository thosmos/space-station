import axios from 'axios';
import { IToken } from 'types';

type FetchTokenPriceDataResponse = {
  price: number;
};

export const fetchTokenPriceData = async (token: IToken): Promise<FetchTokenPriceDataResponse> => {
  let symbol: string | undefined;

  if (token.cosmos) {
    symbol = token.cosmos.symbol;
  }

  if (!symbol) {
    throw new Error('Token does not have a valid symbol');
  }

  const response = await axios.get('https://info.gravitychain.io:9000/erc20_metadata');
  const data = response.data;

  let tokenData: any;

  if (symbol === 'USDC') {
    const usdcData = data.filter((item: any) => item.symbol === 'USDC');
    tokenData = usdcData[1]; // Choose the second item in the filtered array for USDC
  } else {
    tokenData = data.find((item: any) => item.symbol === symbol);
  }

  if (!tokenData) {
    throw new Error(`Token with symbol ${symbol} not found in the response`);
  }

  return {
    price: tokenData.exchange_rate / 1e6 // Convert to USD
  };
};
