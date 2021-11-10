import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  CYPRESS = 8217,
  BAOBAB = 1001
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = process.env.REACT_APP_CHAIN_ID === '1001' ? '0xA0acE51272FD35A9AFA42C2694Ee27A390831Ee9' : '0xBAE324Fb546240E6Cd5Dbf423d6b2c83b4d8CC58';

export const INIT_CODE_HASH = process.env.REACT_APP_CHAIN_ID === '1001' ? '0xe26f1edeb3c91a91d1eabfa8c3a718cd73b3b1abe7d4228919cb302be3985e52' : '0x4f1fb03b3f72f7040dbf0917b1c344254cb0c4bb4a51c3247dba5503a7c311b3';

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
