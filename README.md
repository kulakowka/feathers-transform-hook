## feathers-transform-hook

[![npm package](https://nodei.co/npm/feathers-transform-hook.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/feathers-transform-hook/)

[![NPM version](http://img.shields.io/npm/v/feathers-transform-hook.svg)](https://www.npmjs.org/package/feathers-transform-hook)
[![Dependency Status](https://david-dm.org/kulakowka/feathers-transform-hook.svg)](https://david-dm.org/kulakowka/feathers-transform-hook)


This is experiment. **Work in progress!**

Feathers hook for transform hook.data parameters with [string.js](https://www.npmjs.com/package/string)

```javascript
const transformHook = require('feathers-transform-hook')

app.service('/users').before({
  create: [ 
    transformHook({
      username: v => v.toLowerCase().replaceAll(/\s/, '')
    })
  ]
})
```

## Example

Look [example folder](https://github.com/kulakowka/feathers-transform-hook/tree/master/example) for more information.

Test request:
```
curl -H "Accept: application/json" -d "username=        adM       in" -X POST http://localhost:3030/users
```

Server response example:
```
{
  "username": "admin"
}
```