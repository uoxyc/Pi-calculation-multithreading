(async () => {
    if (process.env.NODE_ENV === "production") {
        const { registerSW } = await import("virtual:pwa-register");

        registerSW({})().catch(() => {});
    }
})();
