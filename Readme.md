# express powered room simulation

# Installation

All you need to do is run `yarn install` to install all packages and then `yarn start dev` to start the development server powered by express and hot-reloaded by nodemon

## Combining with a client

This mainly just receives request from a client/clients and publish the mesages to centrifugo server. Idealy, there are two other components of this, the centrifugo server and also the client, which is react. You can check this repo, there should be a client and centrifugo server file for windows users

## Motivation

Never understood how Zuri chat worked as a unit, decided to understand it by building a simple concept.

## Improving

- integrate database
- proper auth
- error handlers
  And overall code quality, this was just a basic idea built to test knowledge, so a lot of improvement areas

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
