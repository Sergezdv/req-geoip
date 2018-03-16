# req_geoip

An npm Package for Node.js uses the [geoip-lite](https://www.npmjs.com/package/geoip-lite) pack and add the search function for request

## Basic Usage
all that as in [geoip-lite](https://www.npmjs.com/package/geoip-lite) and

```javascript
var geoip = require("req-geoip");

//for /some_path?ip=207.97.227.239
app.get('/some_path', function(req, res) {
    geo = geoip.byIpParams(req);
    res.status(200).send(geo);
});

//or for the requests:
app.get('*', function(req, res) {
    var result = { };
    result.ip = geoip.getIpFromRequest(req);
    result.geo = geoip.byRequest(req);
 
    res.status(200).send(result);
});

```
