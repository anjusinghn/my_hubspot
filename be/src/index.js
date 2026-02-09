import config from "./config/env.js";
import { createServer } from "./server.js";

const app = createServer();

app.listen(config.port, () => {
