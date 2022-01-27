(function (global) {
    "use strict";

    let pkg_name_origin = null;

    const npmInstall = (originName) => {
        if (typeof originName !== "string") {
            $L._error("you need to input a string!");
            return;
        }
        $L.clear();
        const name = originName.trim();
        pkg_name_origin = name;
        if (/^https?:\/\//.test(name)) return injectScript(name);
        if (name.indexOf("@") !== -1) return injectScript(`https://unpkg.com/${name}`);
        return cdnjs(name);
    }

    const injectScript = (url) => {
        $L._info(`start to install ${pkg_name_origin}!`);
        $L._process(`${pkg_name_origin} is installing...`);

        const script = document.createElement("script");

        script.src = url;

        script.onload = () => {
            $L._success(`${pkg_name_origin} install success!`);
        }

        script.onerror = () => {
            $L._error(`${pkg_name_origin} install failure!`);
        }

        document.body.appendChild(script);
    }

    const cdnjs = async (name) => {
        const searchPromise = await fetch(
            `https://api.cdnjs.com/libraries?search=${name}`,
            {
                referrerPolicy: "no-referrer"
            }
        );

        const { results, total } = await searchPromise.json();
        if (total === 0) {
            $L._error(`Sorry,${name} not found,please try another keyword.`);
            return;
        };

        const { name: exactName, latest: url } = results[0] || {};
        if (exactName && name !== exactName) {
            pkg_name_origin = exactName;
            $L._warn(`${name} not found,import ${exactName} instead.`);
        }

        injectScript(url);
    }

    global.$I = npmInstall;

})(typeof window !== "undefined" ? window : this);