(function (global) {
    "use strict";

    const _console = { ...console };

    const logger = {
        ..._console,
        _info(info) {
            _console.log(`%c${info}`, 'color:white;background:black')
        },
        _success(info) {
            _console.log(`%csuccess %c${info}`, 'color:#7AFA09;background:black', 'color:white;background:black');
        },
        _process(info) {
            _console.log(`%c %c${info}`, 'background:url(https://tse1-mm.cn.bing.net/th/id/R-C.2ed97b9538d20626ed8026c17c03d84c?rik=cvV71GppIAepOg&riu=http%3a%2f%2fwww.gifde.com%2fgif%2fotros%2fdecoracion%2fcargando-loading%2fcargando-loading-023.gif&ehk=2Q%2bbiakab%2fhp5bRcGZcZuD21WyOY4w2Na27mC2UF1G8%3d&risl=&pid=ImgRaw&r=0) no-repeat center;padding:10px 10px', 'color:white;background:black');
        },
        _warn(info) {
            _console.log(`%cwarning %c${info}`, 'color:yellow;background:black', 'color:white;background:black');
        },
        _error(info) {
            _console.log(`%cerror %c${info}`, 'color:red;background:black', 'color:white;background:black');
        }
    }

    global.$L = logger;

})(typeof window !== "undefined" ? window : this);