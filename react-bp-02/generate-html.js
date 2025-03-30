import { writeFileSync } from "fs";
import config from "./config.js";
writeFileSync(
  "dist/index.html",
  `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>${config.APP_TITLE}</title>
        </head>
        <body>
            <div id="root"></div>
            <script src="index.js" type="module"></script>
        </body>
    </html>`
);
