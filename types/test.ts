import { builder } from '../builder';

// export const testInterface = builder.simpleInterface('testInterface', {
//   fields: (t) => ({
//     interfaceBool: t.boolean(),
//     interfaceInt: t.int(),
//   }),
// });

// export const testType = builder.simpleObject('testType', {
//   interfaces: [testInterface],
//   fields: (t) => ({
//     testBool: t.boolean({ nullable: false }),
//     testInt: t.int(),
//   }),
// });

interface testInterface1 {
  interfaceBool: boolean;
  interfaceInt: number;
}

interface testInterface2 extends testInterface1 {
  interfaceString: string;
}

export const t1Ref = builder.interfaceRef<testInterface1>('t1');

t1Ref.implement({
  fields: (t) => ({
    interface1Bool: t.boolean({ nullable: false }),
    interface1Int: t.int({ nullable: false }),
  }),
});

export const t2Ref = builder.interfaceRef<testInterface2>('t2');

t2Ref.implement({
  interfaces: [t1Ref],
  fields: (t) => ({
    interface2String: t.string({ nullable: false }),
  }),
});
