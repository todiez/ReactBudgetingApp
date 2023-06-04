// const path = require('path');
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// const publicPath = path.join(__dirname, '..', 'dist');

// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
//  });

// app.use(express.static(publicPath));
// app.listen(port, () => {
//    console.log(`Server is up on port ${port}!`);
// });


import path from 'path';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

const currentFilePath = new URL(import.meta.url).pathname;
const currentDirectoryPath = path.dirname(currentFilePath);

const publicPath = path.join(currentDirectoryPath, '..', 'dist');

// Configure MIME type for JavaScript files
app.use(express.static(publicPath, {
  setHeaders: (res, filePath) => {
    if (path.extname(filePath) === '.js') {
      res.setHeader('Content-Type', 'application/javascript');
    }
  },
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
