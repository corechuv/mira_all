import http from 'http';
import { URL } from 'url';

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`);
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'GET' && url.pathname === '/health') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/v1/products') {
    res.writeHead(200);
    res.end(JSON.stringify({ items: [], total: 0 }));
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/v1/users') {
    res.writeHead(200);
    res.end(JSON.stringify({ users: [] }));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
