const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3001;
app.use(express.static(publicPath));
console.log("🚀 ~ file: server.js ~ line 8 ~ publicPath", publicPath)
console.log("🚀 ~ file: server.js ~ line 9 ~ __dirname", __dirname)
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});