import "reflect-metadata";
import { server } from "@config/index";

import { app } from "./app";
import { logger } from "./logger";

app.listen(server.port, () => {
  logger.info("Server running");
});
