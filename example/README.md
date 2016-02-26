# example

```bash
git clone git@github.com:kulakowka/feathers-transform-hook.git
cd feathers-transform-hook
npm install
cd example
npm install
npm start
```

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
