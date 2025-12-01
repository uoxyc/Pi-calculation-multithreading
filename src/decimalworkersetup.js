import { decimalchildwork } from "./decimalchildwork.js";

export function decimalworkersetup() {
    (() => {
        addEventListener("message", function (event) {
            var piwei;
            piwei = event.data[0];
            var threadall = event.data[1];
            var threadid = event.data[2];
            console.log(
                "副线程" + (threadid + 1) + "从主线程接收" + "event.data\n"
            );
            console.log(...event.data);

            const [p, x] = decimalchildwork(piwei, threadall, threadid);
            postMessage([p, x]);
        });
    })();
}
