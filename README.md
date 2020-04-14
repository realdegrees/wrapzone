# Welcome to Wrapzone 👋
[![NPM][npm-image]][npm-url]
[![Typedoc][typedoc-img]][typedoc-url]
[![NPM][license-img]][license-url]

> Wrapzone is a Wrapper for the Call of Duty® Modern Warfare (2019) API.  
> It aims to simplify parsing the huge JSON-File returned from the API endpoint.  

## Install

```sh
npm install wrapzone
```

## Usage

### Initialize a Wrapzone instance

```javascript
const Wrapzone = require("wrapzone").default;
const platform = "<platform>" // psn | xbl | battle
const userName = "<userName>" // Username (include id for battle.net like name#12345)
await Wrapzone.authenticate('<ActivisionEmail>', '<ActivisionPassword>')
const player = await Wrapzone.get(platform, userName);
```

### Updating a Wrapzone instance

A Wrapzone instance queries the API only once on instantiation to reduce unnecessary traffic.  
It can be updated manually via

```javascript
player.updatePlayerData() // Uses the saved platform and userName to fetch the data
```
```javascript
player.setPlayerData(platform, userName) // Uses the provided platform and userName to fetch the data
```

*Note: Both of these methods are async since the API is queried and should be awaited*  

All other methods on a Wrapzone object can be used to query the retrieved data. They are all **synchronous**.  
[A full documentation of all methods and types can be found here.](https://realdegrees.github.io/wrapzone/) 

## Getting the raw json

```javascript
const raw = player.raw
```
Until this package covers all properties, the raw untyped json data can be retrieved to use how you want to.  
The Wrapzone object can still be used to wrap the call to the API.

[npm-image]: https://img.shields.io/npm/v/wrapzone?style=flat-square
[npm-url]: https://npmjs.org/package/wrapzone
[typedoc-img]: https://img.shields.io/badge/documentation-yes-blue.svg?style=flat-square
[typedoc-url]: https://realdegrees.github.io/wrapzone/
[license-img]: https://img.shields.io/npm/l/wrapzone?color=blue&style=flat-square
[license-url]: https://github.com/realdegrees/wrapzone/blob/master/LICENSE
