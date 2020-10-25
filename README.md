# Camping Fire Node API

## How to Run
- `npm install` install all dependencies from package.json.
- `docker-compose up`(You must be on root dir to execute this command) to initiate MongoDB and Mongo-Express.
- `npm start` start server. 

## Important Info
- `http://localhost:8081` access to mongo-express.
- `npm install <dependency> --save` to add new to package.json and install in your NPM.

## JSON

```JSON
{
  "image": "https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/27655130_1669312056513436_1301331989260354213_n.png?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=cTV_X81xAcIAX8jpLFi&_nc_ht=scontent.fcgh2-1.fna&oh=c4011007a88611175bcf4843f29582d6&oe=5FADC641",
  "name": "Acampamento Pé de Vento",
  "description": "Acampamento de Férias",
  "location": {
    "state": "SP",
    "city": "São Paulo",
    "address": "R. Alberto Nascimento Júnior, 178 - Jardim Bonfiglioli, 05595-040"
  },
  "contact": 1129223922
}
```
