import { builder } from "../builder";

export const otherInterface1 = builder.simpleInterface("otherInterface1", {
  fields: (t) => ({
    otherInterface1Bool: t.boolean(),
  }),
});

export const otherObj = builder.simpleObject("otherObj", {
  interfaces: [otherInterface1],
  fields: (t) => ({
    otherObjBool: t.boolean(),
  }),
});

export const otherInterface2 = builder.simpleInterface("otherInterface2", {
  // Type error on the interfaces array
  interfaces: [otherInterface1],
  fields: (t) => ({
    otherInterface2String: t.string(),
  }),
});
