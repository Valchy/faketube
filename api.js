const ytSearch = require('youtube-search-without-api-key');
const ytVideoInfo = require('updated-youtube-info');
const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
	const { q } = req.query;
	const videos = await ytSearch.search(q);
	res.json(videos);
});

router.get('/videos/:videoId', async (req, res) => {
	const { videoId } = req.params;
	const video = await ytVideoInfo(videoId);
	res.json(video);
});

module.exports = router;
