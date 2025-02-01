const express = require('express');
const app = express();
const port = 3000;

// Serve HTML frame
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle interactions
app.post('/interact', (req, res) => {
  const responseHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta property="fc:frame" content="vNext">
      <meta property="fc:frame:image" content="https://via.placeholder.com/600x600?text=Clicked!">
      <meta property="fc:frame:button:1" content="Thanks!">
    </head>
    </html>
  `;
  res.send(responseHtml);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
