import "./types/test";
import "./types/otherTest";

import { builder } from "./builder";

export const schema = builder.toSchema();
