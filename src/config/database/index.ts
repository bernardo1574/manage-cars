import mongoose from "mongoose";

import { dbConnections } from "../index";

mongoose.connect(dbConnections.mongo.conn);
