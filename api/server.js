const express = require('express');
const data = require('../src/data/spectrum.json');
const areas = require('../src/data/areas.json');
const server = express();
const PORT = process.env.PORT || 3333;
server.listen(PORT, () => console.log(`Listening at ${PORT}`));
server.use(express.static('public'));

const ranges = areas.map(area => area.frequencies);

const spect = data.spectrum.map(val => val);

const minCho = ranges[0][0];
const maxCho = ranges[0][1];
const chole = spect.filter(limit => limit.x >= minCho && limit.x <= maxCho);

const minApo = ranges[1][0];
const maxApo = ranges[1][1];
const apoli = spect.filter(limit => limit.x >= minApo && limit.x <= maxApo);

const minFat = ranges[2][0];
const maxFat = ranges[2][1];
const fatty = spect.filter(limit => limit.x >= minFat && limit.x <= maxFat);

server.get('/areas', (req, res) => {
  res.json(areas);
});

server.get('/spectrum', (req, res) => {
  res.json(spect);
});

server.get('/spectrum/cholesterols', (req, res) => {
  res.json(chole);
});

server.get('/spectrum/apolipoproteins', (req, res) => {
  res.json(apoli);
});

server.get('/spectrum/fattyacids', (req, res) => {
  res.json(fatty);
});
