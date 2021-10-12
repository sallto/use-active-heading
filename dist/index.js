'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var useMyHook = function () {
    var _a = React__namespace.useState({
        counter: 0
    }), counter = _a[0].counter, setState = _a[1];
    React__namespace.useEffect(function () {
        var interval = window.setInterval(function () {
            counter++;
            setState({ counter: counter });
        }, 1000);
        return function () {
            window.clearInterval(interval);
        };
    }, []);
    return counter;
};

exports.useMyHook = useMyHook;
//# sourceMappingURL=index.js.map
