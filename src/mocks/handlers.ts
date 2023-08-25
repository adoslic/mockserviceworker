import { rest } from 'msw'

export const handlers = [
  rest.get('/players', (req, res, ctx) => {

    const player1 = {
      id: 1,
      name: 'Cristiano Ronaldo',
      height: 190,
      weight: 85
    }
    const player2 = {
      id: 2,
      name: 'Lionel Messi',
      height: 165,
      weight: 65
    }

    return res(
      ctx.status(200),
      ctx.json([player1, player2]),
    )
  })
]
