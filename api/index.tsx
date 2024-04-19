import { Button, Frog } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'

import { handle } from 'frog/vercel'

import { pinata } from 'frog/hubs'

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',

  hub: pinata(),
})

app.frame('/', async (c) => {
  return c.res({
    image: '/mode-yield-program.jpg',
    intents: [
      <Button.Link href="https://www.mode.network/yield-accelerator">
        Details
      </Button.Link>,
    ],
  })
})

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
