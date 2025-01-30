export default async function handler(req, res) {
  // Return a new frame with updated content
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
      <meta property="fc:frame" content="vNext">
      <meta property="fc:frame:image" content="https://your-username.github.io/repo/image-after-click.png">
      <meta property="fc:frame:button:1" content="Clicked!">
      <meta property="fc:frame:post_url" content="https://your-server.vercel.app/api/post">
  </head>
  </html>
  `;
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
}
