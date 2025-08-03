import { rest } from 'msw'

export const handler = [
    rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                { name: 'Tanveer' },
                { name: 'Ahmed' }
            ])
        )
    })
]