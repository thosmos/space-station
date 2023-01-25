import CantoLogo from 'images/canto-logo.png';

export default {
  acanto: {
    name: 'Canto',
    denom: 'acanto',
    symbol: 'CANTO',
    decimals: 18,
    logoURI: CantoLogo
  },
  gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2: {
    name: 'Wrapped ETH',
    denom: 'ibc/DC186CA7A8C009B43774EBDC825C935CABA9743504CE6037507E6E5CCE12858A',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/2518/thumb/weth.png?1628852295',
    priceDenom: 'weth'
  },
  gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48: {
    name: 'USD Coin',
    denom: 'ibc/17CD484EE7D9723B847D95015FA3EBD1572FD13BC84FB838F55B18A57450F25B',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389',
    priceDenom: 'usdc'
  }
};
