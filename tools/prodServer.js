import express from 'express';
import path from 'path';

/* eslint-disable no-console */
const port = process.env.PORT || 3000;
const app = express();

/**
 * Serve static files
 * 
 * index.html, bundle.js
 * the `__dirname` is pointed here at tools
 * repoint it to dist
 */
app.use(express.static(__dirname.replace('tools', 'dist')));

/**
 * Server Rendering
 * 
 * always returns index and
 * make react router decides from uri
 */
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:%d', port);
