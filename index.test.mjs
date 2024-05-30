import { test } from 'node:test'
import assert from 'node:assert/strict'
import Cache from './index.mjs'
import { setTimeout as sleep } from 'node:timers/promises'

test('cache', async (t) => {
  await t.test('set and get', () => {
    const cache = Cache()

    cache.set('a', 1)
    assert.equal(cache.get('a'), 1)
  })

  await t.test('set and get with expiration', () => {
    const cache = Cache()

    cache.set('b', 1, 1)
    assert.equal(cache.get('b'), 1)
  })

  await t.test('set and get with expiration', async () => {
    const cache = Cache()
    cache.set('c', 1, 1)

    await sleep(1)
    assert.equal(cache.get('c'), undefined)

    await sleep(1)
    assert.equal(cache._data.size, 0)
  })

  await t.test('delete', async () => {
    const cache = Cache()
    cache.set('d', 1)
    cache.delete('d')
    assert.equal(cache.get('d'), undefined)
  })

  await t.test('clear', async () => {
    const cache = Cache()
    cache.set('e1', 1)
    cache.set('e2', 1)
    cache.clear()
    assert.equal(cache._data.size, 0)
  })
})
