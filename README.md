# req_geoip

An npm Package for Node.js use the geoip-lite pack and add the search function by request

## Basic Usage

```javascript
var geoip = require("req-geoip");

app.get('/some_path?ip=207.97.227.239', function(req, res) {
    var result = { };
    result.geo = geoip.byIpParams(req);
 
    res.status(200).send(result);
});

app.get('*', function(req, res) {
    var result = { };
    result.ip = geoip.getIpFromRequest(req);
    result.geo = geoip.byRequest(req);
 
    res.status(200).send(result);
});

```
