const compression = require('compression');
const path = require('path');
const express = require('express');
const app = express();

// Custom cache headers for assets
const assetHeaders = (req, res, next) => {
	// Cache static assets for 1 year on the browser, 7 days on CDNs and keep old file when revalidating or upon server error
	res.set('Cache-Control', 'public, max-age=31536000, s-maxage=604800, stale-while-revalidate=86400, stale-if-error=86400');
	next();
};

// Gzip compression for all files
app.use(compression());

// Serve static files
// Automatically adds etag and last-modifed headers for conditional requests
app.use('/static', assetHeaders, express.static(path.join(__dirname, '/build/static')));

// Query videos api
const api = require('./api');
app.use('/api', api);

// Serve index file
app.get('*', (req, res) => {
	// 2 minute browser cache, 1 minute CDN cache, safe to be cached on CDNs as well, will keep old html file when revalidating or upon a server error
	res.set('Cache-Control', 'public, max-age=120, s-maxage=60, stale-while-revalidate=86400, stale-if-error=86400');
	res.sendFile(path.join(__dirname, './build/index.html'));
});

// Start server on port 3000
app.listen(3000, console.log('Server running on http://localhost:3000/'));
