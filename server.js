import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "dist");
const indexFile = path.join(distDir, "index.html");
const port = Number.parseInt(process.env.PORT ?? "3000", 10);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

if (!existsSync(indexFile)) {
  throw new Error("Build output not found. Run `npm run build` before starting the server.");
}

function sendFile(response, filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extension] ?? "application/octet-stream";

  response.writeHead(200, { "Content-Type": contentType });
  createReadStream(filePath).pipe(response);
}

function sendNotFound(response) {
  response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Not found");
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);
  const pathname = decodeURIComponent(requestUrl.pathname);
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const filePath = path.normalize(path.join(distDir, relativePath));
  const isAssetRequest = path.extname(relativePath) !== "";

  if (!filePath.startsWith(distDir)) {
    sendNotFound(response);
    return;
  }

  try {
    const fileStats = await stat(filePath);

    if (fileStats.isFile()) {
      sendFile(response, filePath);
      return;
    }
  } catch {
    if (isAssetRequest) {
      sendNotFound(response);
      return;
    }
  }

  sendFile(response, indexFile);
});

server.listen(port, () => {
  console.log(`RankLocal server listening on port ${port}`);
});