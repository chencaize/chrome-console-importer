function injectCustomJs(jsPath) {
    jsPath = jsPath;
    let temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.runtime.getURL(jsPath);
    temp.onload = function () {
        this.parentNode.removeChild(this);
    };
    document.head.appendChild(temp);
}

injectCustomJs("js/logger.js");
injectCustomJs("js/inject.js");