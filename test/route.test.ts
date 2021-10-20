import { Token, WKLAY, ChainId, Pair, TokenAmount, Route, KLAY } from '../src'

describe('Route', () => {
  const token0 = new Token(ChainId.CYPRESS, '0x0000000000000000000000000000000000000001', 18, 't0')
  const token1 = new Token(ChainId.CYPRESS, '0x0000000000000000000000000000000000000002', 18, 't1')
  const wwklay = WKLAY[ChainId.CYPRESS]
  const pair_0_1 = new Pair(new TokenAmount(token0, '100'), new TokenAmount(token1, '200'))
  const pair_0_wklay = new Pair(new TokenAmount(token0, '100'), new TokenAmount(wwklay, '100'))
  const pair_1_wklay = new Pair(new TokenAmount(token1, '175'), new TokenAmount(wwklay, '100'))

  it('constructs a path from the tokens', () => {
    const route = new Route([pair_0_1], token0)
    expect(route.pairs).toEqual([pair_0_1])
    expect(route.path).toEqual([token0, token1])
    expect(route.input).toEqual(token0)
    expect(route.output).toEqual(token1)
    expect(route.chainId).toEqual(ChainId.CYPRESS)
  })

  it('can have a token as both input and output', () => {
    const route = new Route([pair_0_wklay, pair_0_1, pair_1_wklay], wwklay)
    expect(route.pairs).toEqual([pair_0_wklay, pair_0_1, pair_1_wklay])
    expect(route.input).toEqual(wwklay)
    expect(route.output).toEqual(wwklay)
  })

  it('supports klay input', () => {
    const route = new Route([pair_0_wklay], KLAY)
    expect(route.pairs).toEqual([pair_0_wklay])
    expect(route.input).toEqual(KLAY)
    expect(route.output).toEqual(token0)
  })

  it('supports klay output', () => {
    const route = new Route([pair_0_wklay], token0, KLAY)
    expect(route.pairs).toEqual([pair_0_wklay])
    expect(route.input).toEqual(token0)
    expect(route.output).toEqual(KLAY)
  })
})
