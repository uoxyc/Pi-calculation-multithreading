import bigInt from "big-integer";
// TypeScript type removed: Bigintcreateparameter = string | number | Parameters<typeof bigInt>[0];
//@ts-ignore
const abs = (n) => bigInt(n).abs();

const mul = (n, m) =>
    //@ts-ignore
    bigInt(n).multiply(m);

const div = (n, m) =>
    //@ts-ignore
    bigInt(n).divide(m);
//@ts-ignore
const add = (n, m) => bigInt(n).add(m);
export { abs, mul, div, add };

// interface Bigintextend extends bigInt.BigInteger {
//     cmp(number: bigInt.BigNumber): number;
//     div(number: bigInt.BigNumber): BigInteger;
//     mul(number: bigInt.BigNumber): BigInteger;
// }

// export function bigintextend(n) {
//     //@ts-ignore
//     const i = Object.create(bigInt(n), {
//         cmp: {
//             configurable: true,
//             enumerable: true,
//             writable: true,
//             value: function (
//                 number
//             ) {
//                 return this.compare(number);
//             },
//         },
//         mul: {
//             configurable: true,
//             enumerable: true,
//             writable: true,
//             value: function (
//                 number
//             ) {
//                 return this.multiply(number);
//             },
//         },
//         div: {
//             configurable: true,
//             enumerable: true,
//             writable: true,
//             value: function (
//                 number
//             ) {
//                 return this.divide(number);
//             },
//         },
//     });
//     // bigInt().__proto__.cmp = bigInt().__proto__.compare;
//     // bigInt().__proto__.div = bigInt().__proto__.divide;
//     // bigInt().__proto__.mul = bigInt().__proto__.multiply;
//     // bigInt("90071992547409920").__proto__.cmp = bigInt(
//     //     "90071992547409920"
//     // ).__proto__.compare;
//     // bigInt("90071992547409920").__proto__.div = bigInt(
//     //     "90071992547409920"
//     // ).__proto__.divide;
//     // bigInt("90071992547409920").__proto__.mul = bigInt(
//     //     "90071992547409920"
//     // ).__proto__.multiply;
//     return i;
// }
