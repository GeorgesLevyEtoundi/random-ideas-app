const express = require('express');
const port = 5000;

const app = express();

const ideas = [
	{
		id: 1,
		text: 'Develop a mobile app to track daily water intake.',
		tag: 'health',
		username: 'healthGuru',
		date: '2024-12-12',
	},
	{
		id: 2,
		text: 'Create a platform for book lovers to exchange books locally.',
		tag: 'community',
		username: 'bookWorm99',
		date: '2024-12-10',
	},
	{
		id: 3,
		text: 'Build a smart home gardening assistant using IoT devices.',
		tag: 'technology',
		username: 'greenThumb',
		date: '2024-12-09',
	},
	{
		id: 4,
		text: 'Launch a podcast about unsung historical figures.',
		tag: 'history',
		username: 'historyBuff',
		date: '2024-12-08',
	},
	{
		id: 5,
		text: 'Create an AI-powered tool to generate personalized meal plans.',
		tag: 'AI',
		username: 'fitCoder',
		date: '2024-12-07',
	},
	{
		id: 6,
		text: 'Start an online platform to teach financial literacy to teens.',
		tag: 'education',
		username: 'moneyMentor',
		date: '2024-12-06',
	},
	{
		id: 7,
		text: 'Design a virtual reality experience to explore famous artworks.',
		tag: 'art',
		username: 'vrArtist',
		date: '2024-12-05',
	},
	{
		id: 8,
		text: 'Build a marketplace for secondhand electronics with a warranty system.',
		tag: 'commerce',
		username: 'techTrader',
		date: '2024-12-04',
	},
	{
		id: 9,
		text: 'Create a blog sharing zero-waste living tips and products.',
		tag: 'environment',
		username: 'ecoFriendly',
		date: '2024-12-03',
	},
	{
		id: 10,
		text: 'Develop a game to teach basic coding concepts to kids.',
		tag: 'education',
		username: 'gameDev',
		date: '2024-12-02',
	},
];

// index route
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to the random ideas API' });
});

// get all ideas
app.get('/api/ideas', (req, res) => {
	res.json({ success: true, data: ideas });
});

// get a single idea
app.get('/api/ideas/:id', (req, res) => {
	const idea = ideas.find(idea => idea.id === +req.params.id);

	if (!idea) {
		return res
			.status(404)
			.json({ success: false, message: 'Resource not found' });
	}

	res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
