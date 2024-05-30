import { Bench } from 'tinybench'
import Cache from './index.mjs'

const bench = new Bench()
let cache = Cache()
let i = 0

bench
  .add('set', () => {
    cache.set('a', i)
    i++
  }, {
    beforeAll () {
      cache = Cache()
      i = 0
    }
  })
  .add('set ttl', () => {
    cache.set('a', i, 5000)
    i++
  }, {
    beforeAll () {
      cache = Cache()
      i = 0
    }
  })
  .add('get', () => {
    cache.get('a')
  }, {
    beforeAll () {
      cache = Cache()
      cache.set('a', 1)
    }
  })
  .add('get ttl', () => {
    cache.get('a')
  }, {
    beforeAll () {
      cache = Cache()
      cache.set('a', 1, 5000)
    }
  })

await bench.run()
console.table(bench.table())
