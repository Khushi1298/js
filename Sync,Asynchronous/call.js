const Callback = (arg) => {
    console.log(arg);
};

const loadScript = (src, useCallback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = Callback("Khushi");
    document.head.append(sc);
};
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",Callback)