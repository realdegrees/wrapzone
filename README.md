# Wrapzone

> Wrapzone is a Wrapper for the Call of Duty® Modern Warfare (2019) API.  
> It simplifies parsing the huge JSON-File returned from the API endpoint.  
> Types are included in the package. There is also a [Typedoc](https://realdegrees.github.io/wrapzone/) available.

[![NPM Version][npm-image]][npm-url]

## Install

```bash
npm install wrapzone
```

## Usage

### Initialize a Wrapzone instance

```javascript
const Wrapzone = require("wrapzone");
const platform = "battle" // psn | xbl | battle
const userName = "degrees#21681" // Username (include id for battle.net)
const player = Wrapzone(platform, userName);
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

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/live-wrapzone.svg
[npm-url]: https://npmjs.org/package/wrapzone