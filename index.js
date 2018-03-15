const geoip = require('geoip-lite');

function getIpFromRequest(req) {
    var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    return ip;
}

geoip.getIpFromRequest = getIpFromRequest;

geoip.byRequest = function(req) {
    var ip = getIpFromRequest(req);
    return geoip.lookup(ip)
};

geoip.byIpParams = function(req) {
    var ip = req.query.ip;
    return geoip.lookup(ip)
};

module.exports = geoip;