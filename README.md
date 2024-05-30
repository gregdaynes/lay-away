Lay Away
========

A simple cache that's good enough.

[Getting Started](#getting-started)
[Examples](#examples)
- [Set entry](#set-entry)
- [Set entry with TTL](#set-entry-with-ttl)
- [Delete entry](#delete-entry)
- [Clear all entries](#clear-all-entries)


Getting Started
---------------

1. Add dependency to project

    npm install --save lay-away

2. Create instance of lay-away

    import Cache from 'lay-away'

		const cache = Cache()

3. Write data to the cache

    cache.set('a', 1)

4. Read data from the cache

    cache.get('a')


Examples
--------

### Set entry

```js
import Cache from 'lay-away'

const cache = Cache()
cache.set('a', 1)

console.log(cache.get('a'))
// => 1
```

### Set entry with TTL

```js
import Cache from 'lay-away'
import { setTimeout as sleep } from 'node:timers/promises'

const cache = Cache()
cache.set('a', 1, 1000)

console.log(cache.get('a'))
// => 1

await sleep(1000)

console.log(cache.get('a'))
// => undefined
```

### Delete entry

```js
import Cache from 'lay-away'

const cache = Cache()
cache.set('a', 1)

console.log(cache.get('a'))
// => 1

cache.del('a')

console.log(cache.get('a'))
// => undefined
```

### Clear all entries

```js
import Cache from 'lay-away'

const cache = Cache()
cache.set('a', 1)

console.log(cache._data.size)
// => 1

cache.clear()

console.log(cache._data.size)
// => 0
```
