import { bigintworkersetup } from "./bigintworkersetup.js"
import { decimalworkersetup } from "./decimalworkersetup.js"
import { terminateallworkers as terminateallworkers1 } from "./bigint-terminateallworkers.js"
import { terminateallworkers as terminateallworkers2 } from "./decimal-terminateallworkers.js"
export function bigintcleanup() {
  terminateallworkers1()
}

export function decimalcleanup() {
  terminateallworkers2()
}
export { decimalworkersetup } from "./decimalworkersetup.js"
export { bigintworkersetup } from "./bigintworkersetup.js"
export { bigintCalculatePi } from "./bigintCalculatePi.js"
export { decimalCalculatePi } from "./decimalCalculatePi.js"
