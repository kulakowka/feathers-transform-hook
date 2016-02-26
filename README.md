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
      username: data => data.username.toLowerCase().replaceAll(/\s/, ''),
      slug: data => data.title.slugify()
    })
  ]
})
```

## Example

Look [example folder](https://github.com/kulakowka/feathers-transform-hook/tree/master/example) for more information.

Test request:
```
curl -H "Accept: application/json" -d "title=Hello world&username=        adM       in" -X POST http://localhost:3030/users
```

Server response example:
```
{
  "title": "Hello world",
  "username": "admin",
  "slug": "hello-world"
}
```


# P.S.

Now, this hook is just a convenient wrapper over [string.js](https://www.npmjs.com/package/string). Therefore, all the same, you can easily do without this hook.

```javascript
const marked = require('marked')
const S = require('string')

app.service('/articles').before({
  create: [
    hook => {
      let data = hook.data
      data.slug = S(data.title).slugify()
      data.contentHtml = marked(data.content)
    }
  ]
});
```
