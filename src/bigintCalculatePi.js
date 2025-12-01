import bigInt from "big-integer";
import { myworker } from "./bigint-myworker.js";
import { add } from "./bigintextend.js";

export async function bigintCalculatePi(
    createworker,
    piwei,
    threadgeshu
) {
    var p,
        x = 0;

    p = bigInt(0);

    for (var i = 0, len = threadgeshu; i < len; i++) {
        if (myworker.length >= threadgeshu) {
            break;
        } else {
            myworker.push(createworker());
        }
    }
    console.log(myworker);
    await Promise.all(
        myworker.map(function (currentValue, index, arr) {
            return new Promise((res, rej) => {
                currentValue.onmessage = function (event) {
                    console.log(
                        "主线程从副线程" + (index + 1) + "接收" + "event.data\n"
                    );
                    console.log(
                        "第一个参数",
                        event.data[0],
                        "\n第二个参数",
                        event.data[1]
                    );

                    var p1 = bigInt(event.data[0]);

                    p = add(p, p1);
                    x = Math.max(x, parseInt(event.data[1]));
                    res();
                };
                currentValue.onerror = (e) => {
                    console.error("Error:", e.error, e.message);
                    currentValue.terminate();
                    rej(new Error(e.error + e.message));
                };
                currentValue.postMessage([piwei, threadgeshu, index]);
            });
        })
    );
    let resultpi = p.toString()[0] + "." + p.toString().slice(1);
    return [resultpi, x];
}
