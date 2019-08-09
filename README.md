# crud-express-ts-mongo-boilerplate
CRUD Express TS Rest Api Boilerplate

# Run the server
2. Make sure your computer has been installed mongodb
2. Make sure the mongod server is running
2. In the project directory, run `yarn install && yarn dev`

# Test With Postman
## List
method: **GET**
url: `http://localhost:7000/contacts`

## Create
method: **POST**
url: `http://localhost:7000/contacts`
body (raw-json):
```
{
	"name": "awank",
	"phone": "628994111129"
}

``` 

## Update
method: **PUT**
url: `http://localhost:7000/contacts/$id_mongo`
body (raw-json):
```
{
	"name": "awank100",
	"phone": "628994111129"
}

``` 

## Detail
method: **GET**
url: `http://localhost:7000/contacts/$id_mongo`

## Delete
method: **DELETE**
url: `http://localhost:7000/contacts/$id_mongo`