/**
 * What?
 *
 * A simple caching module that is good-enough.
 *
 * features:
 * - simple API
 * - cache expiration
 */

export default function cache () {
  const cache = new Map()

  return {
    _data: cache,
    get (key) {
      const item = cache.get(key)
      if (!item) return undefined
      if (item.expires && Date.now() > item.expires) {
        setImmediate(() => this.delete(key))
        return undefined
      }

      return item.value
    },
    set (key, value, ttl = 0) {
      cache.set(key, {
        value,
        expires: ttl ? Date.now() + ttl : ttl
      })
    },
    delete (key) { cache.delete(key) },
    clear () { cache.clear() }
  }
}
