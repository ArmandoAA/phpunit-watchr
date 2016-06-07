phpunit-watchr
==============

A [NodeJS](http://nodejs.org) app to watch directories and run [PHPUnit](http://www.phpunit.de/) tests.

[![Build Status](https://travis-ci.org/pyriand3r/phpunit-watchr.svg?branch=master)](https://travis-ci.org/pyriand3r/phpunit-watchr.svg?branch=master)


# Installation

The following command will install the application. Use `-g` to install as a global binary.

```sh
[sudo] npm install [-g] phpunit-watchr-2
```

# Running The Server

Running the app is easy. If you installed globally, then starting the app is as easy as:

```sh
phpunit-watchr [path to phpunit executable to use] [paths to watch recursivly] [phpunit-configuration]
```

To define more than one path to watch separate them with a comma, e.g.: `/tests,/src`

## Defaults

* **phpunit-executable** = `phpunit`
* **paths** = ` . `
* **phpunit-parameter** = `--colors`

### Example usage

Setting phpunit-executable:

    phpunit-watchr /project/vendor/phpunit/phpunit/phpunit

Setting path:

    phpunit-watchr null './php/tests'

Setting paths:

    phpunit-watchr null ./php/tests,./tests

Setting [PHPUnit configuration](http://www.phpunit.de/manual/current/en/appendixes.configuration.html):

    phpunit-watchr null './php/tests' '--strict --colors'


# Licence

This project is licensed under [MIT](https://github.com/pyriand3r/phpunit-watchr/blob/master/LICENSE-MIT)
license.
