# url-shortner-api

url-shortner-api is a backend server to takes in a URL of any length and returns a short URL which
redirects to the original URL

## Todo

1. - [x] API that’ll take in the long URL and convert it into a short URL as json.
1. - [x] API that’ll update an already existing short URL to point to another long URL
1. - [x] API to delete the short URL
1. - [x] API that takes in the short URL to display information about where the URL

## TechStack

- Backend: NestJS, MongoDB.

## Requirement

- VSCode: If you want to take advantage of dev plugins.
- Node v16.x.x
- MongoDB

> To prevent bugs project is locked to run only on Node v16.x+.
> Recommended to use [NVM](https://github.com/creationix/nvm)

## Running Project locally

Run these commands in terminal.

```bash
$ git clone https://github.com/CoderOO7/url-shortner-api.git
$ cd url-shortner-api
$ npm i
```

This will install dependencies. The next step is to set `environment` variables. For this run below command

```bash
$ cp .sample.env .env
```

And then run this command from root directory.

```bash
$ npm start
```

It serve the project on http://localhost:3000

## API Docmentation

Import below json in postman collection.

```json
{
  "info": {
    "_postman_id": "d097e017-678d-499e-8fd5-81ad6c4aa598",
    "name": "url-shortner",
    "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
    "_exporter_id": "10812797"
  },
  "item": [
    {
      "name": "update url",
      "request": {
        "method": "PUT",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"longUrl\": \"https://www.dev.to\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": "http://localhost:3000/U74LurBV4H"
      },
      "response": []
    },
    {
      "name": "redirect url",
      "protocolProfileBehavior": {
        "disableBodyPruning": true
      },
      "request": {
        "method": "GET",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": "http://localhost:3000/U74LurBV4H"
      },
      "response": []
    },
    {
      "name": "get url info",
      "protocolProfileBehavior": {
        "disableBodyPruning": true
      },
      "request": {
        "method": "GET",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": "http://localhost:3000/U74LurBV4H/info"
      },
      "response": []
    },
    {
      "name": "delete url",
      "request": {
        "method": "DELETE",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": "http://localhost:3000/U74LurBV4H"
      },
      "response": []
    },
    {
      "name": "Create Short Url",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"longUrl\": \"https://www.sdfsdf.com\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": "http://localhost:3000/shorten"
      },
      "response": []
    }
  ]
}
```

## Contribution

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D
