# Manage Cars

Project developed for a selection process in which the user should create a cars registration rest api

## Author

- [@bernardo1574](https://www.github.com/bernardo1574)

## Badges

<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

</div>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=3001`
`DATABASE_URL="mongodb://database:27017/car_manager"`

## Installation

<h3 style="color: red; margin-bottom:1rem;margin-top:1rem;">To run this project you will need the docker.</h3>

Clone the repository:

```bash
  git clone https://github.com/bernardo1574/manage-cars.git
```

Create an env file and insert the variables passed above

```
PORT=3001
DATABASE_URL="mongodb://database:27017/car_manager"
```

execute docker-compose:

```
docker-compose up --force-recreate
```

After you have done all the installation steps and the api is running go to /api-docs to view the documents.

```
http://localhost:3001/api-docs/
```

## Running Tests

To run tests, run the following command

```bash
  yarn
  yarn test
  or
  npm install
  npm run test
```
