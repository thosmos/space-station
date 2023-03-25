import axios from 'axios';
import { IToken, IERC20Token, ICosmosToken } from 'types';

type FetchTokenPriceDataResponse = {
  price: number;
}

export const fetchTokenPriceData = async (token: IToken): Promise<FetchTokenPriceDataResponse> => {
  let coinId: string | undefined;

  if (token.erc20) {
    coinId = token.erc20.address;
  } else if (token.cosmos) {
    coinId = token.cosmos.denom.toLowerCase();
  }

  if (!coinId) {
    throw new Error('Token does not have a valid coingecko ID');
  }

  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  const data = response.data;

  function numberWithCommas (number: number | bigint): string {
    return new Intl.NumberFormat('en-US').format(number);
  }

  return {
    price: data.market_data.current_price.usd
  };
};
