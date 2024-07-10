import "./schemaGen";

import { join } from "path";
import { printSchema } from "graphql";
import { schema } from "./schemaGen";
import { writeFileSync } from "fs";

const schemaFile = printSchema(schema);

writeFileSync(join(__dirname, "./genSchema.graphql"), schemaFile);
