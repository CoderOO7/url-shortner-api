# url-shortner-api

url-shortner-api is a backend server to takes in a URL of any length and returns a short URL which
redirects to the original URL

## Todo

1. - [x] API that’ll take in the long URL and convert it into a short URL as json.
1. - [x] API that’ll update an already existing short URL to point to another long URL
1. - [x] API to delete the short URL
1. - [x] API that takes in the short URL to display information about where the URL
points to.

## TechStack

* Backend: NestJS, MongoDB.

## Requirement

* VSCode: If you want to take advantage of dev plugins.
* Node v16.x.x
* MongoDB

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

## Contribution

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D
