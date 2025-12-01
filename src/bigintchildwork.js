import bigInt from "big-integer";
import { abs, add, div, mul } from "./bigintextend.js";

export function bigintchildwork(
    piwei,
    threadall,
    threadid
) {
    var p = bigInt(0);
    var a = bigInt(1);
    var h = bigInt("1e" + (piwei - 1));
    var x = bigInt(0);
    var fu = 1;
    var t = bigInt(1);
    for (var i = 0, len = threadid; i < len; i++) {
        fu = -1 * fu;
        a = mul(a, 1024);
        x = x.plus(1);
    }
    while (abs(t).compare(bigInt(0)) >= 0) {
        t = mul(1, fu)
            .multiply(
                div(h.multiply(-(2 ** 5)), mul(4, x).plus(1))
                    .plus(div(h.multiply(-1), mul(4, x).plus(3)))
                    .plus(div(h.multiply(2 ** 8), mul(10, x).plus(1)))
                    .plus(div(h.multiply(-(2 ** 6)), mul(10, x).plus(3)))
                    .plus(div(h.multiply(-(2 ** 2)), mul(10, x).plus(5)))
                    .plus(div(h.multiply(-(2 ** 2)), mul(10, x).plus(7)))
                    .plus(div(h.multiply(1), mul(10, x).plus(9)))
            )
            .divide(mul(2 ** 6, a));

        p = add(p, t);
        if (abs(t).compare(bigInt(0)) <= 0) break;

        for (var i = 0, len = threadall; i < len; i++) {
            fu = -1 * fu;
            a = mul(a, 1024);
            x = x.plus(1);
        }
    }
    x = x.plus(1);
    return [String(p), String(x)];
}
