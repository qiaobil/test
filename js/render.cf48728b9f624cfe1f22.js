! function(t) {
    var n = {};

    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    e.m = t, e.c = n, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: r
        })
    }, e.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, e.t = function(t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" === typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var o in t) e.d(r, o, function(n) {
                return t[n]
            }.bind(null, o));
        return r
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, e.p = "https://widget-v4.tidiochat.com/", e.h = "cf48728b9f624cfe1f22", e.cn = "render", e(e.s = 213)
}([, , , , , function(t, n) {
    t.exports = function(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
}, function(t, n) {
    function e(t, n) {
        for (var e = 0; e < n.length; e++) {
            var r = n[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    t.exports = function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
    }
}, , , , , function(t, n, e) {
    var r = e(16),
        o = e(55).f,
        i = e(44),
        u = e(49),
        c = e(67),
        a = e(108),
        f = e(85);
    t.exports = function(t, n) {
        var e, s, d, l, p, v = t.target,
            h = t.global,
            y = t.stat;
        if (e = h ? r : y ? r[v] || c(v, {}) : (r[v] || {}).prototype)
            for (s in n) {
                if (l = n[s], d = t.noTargetGet ? (p = o(e, s)) && p.value : e[s], !f(h ? s : v + (y ? "." : "#") + s, t.forced) && void 0 !== d) {
                    if (typeof l === typeof d) continue;
                    a(l, d)
                }(t.sham || d && d.sham) && i(l, "sham", !0), u(e, s, l, t)
            }
    }
}, function(t, n, e) {
    "use strict";
    var r = e(11),
        o = e(19),
        i = e(69),
        u = e(23),
        c = e(50),
        a = e(39),
        f = e(70),
        s = e(100),
        d = e(71),
        l = e(20),
        p = e(87),
        v = l("isConcatSpreadable"),
        h = p >= 51 || !o((function() {
            var t = [];
            return t[v] = !1, t.concat()[0] !== t
        })),
        y = d("concat"),
        m = function(t) {
            if (!u(t)) return !1;
            var n = t[v];
            return void 0 !== n ? !!n : i(t)
        };
    r({
        target: "Array",
        proto: !0,
        forced: !h || !y
    }, {
        concat: function(t) {
            var n, e, r, o, i, u = c(this),
                d = s(u, 0),
                l = 0;
            for (n = -1, r = arguments.length; n < r; n++)
                if (i = -1 === n ? u : arguments[n], m(i)) {
                    if (l + (o = a(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (e = 0; e < o; e++, l++) e in i && f(d, l, i[e])
                } else {
                    if (l >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    f(d, l++, i)
                } return d.length = l, d
        }
    })
}, , , function(t, n, e) {
    var r = e(23);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, function(t, n, e) {
    (function(n) {
        var e = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof n && n) || Function("return this")()
    }).call(this, e(42))
}, , , function(t, n) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (n) {
            return !0
        }
    }
}, function(t, n, e) {
    var r = e(16),
        o = e(83),
        i = e(27),
        u = e(68),
        c = e(86),
        a = e(113),
        f = o("wks"),
        s = r.Symbol,
        d = a ? s : s && s.withoutSetter || u;
    t.exports = function(t) {
        return i(f, t) || (c && i(s, t) ? f[t] = s[t] : f[t] = d("Symbol." + t)), f[t]
    }
}, , function(t, n) {
    t.exports = !1
}, function(t, n) {
    t.exports = function(t) {
        return "object" === typeof t ? null !== t : "function" === typeof t
    }
}, , , , function(t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function(t, n) {
        return e.call(t, n)
    }
}, , function(t, n, e) {
    var r = e(19);
    t.exports = !r((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }))
}, , , function(t, n, e) {
    var r = e(29),
        o = e(95),
        i = e(15),
        u = e(59),
        c = Object.defineProperty;
    n.f = r ? c : function(t, n, e) {
        if (i(t), n = u(n, !0), i(e), o) try {
            return c(t, n, e)
        } catch (r) {}
        if ("get" in e || "set" in e) throw TypeError("Accessors not supported");
        return "value" in e && (t[n] = e.value), t
    }
}, , , , , , function(t, n, e) {
    var r = e(110),
        o = e(16),
        i = function(t) {
            return "function" == typeof t ? t : void 0
        };
    t.exports = function(t, n) {
        return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][n] || o[t] && o[t][n]
    }
}, function(t, n, e) {
    var r = e(61),
        o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}, , , function(t, n) {
    var e;
    e = function() {
        return this
    }();
    try {
        e = e || new Function("return this")()
    } catch (r) {
        "object" === typeof window && (e = window)
    }
    t.exports = e
}, function(t, n, e) {
    var r = e(80),
        o = e(46);
    t.exports = function(t) {
        return r(o(t))
    }
}, function(t, n, e) {
    var r = e(29),
        o = e(32),
        i = e(56);
    t.exports = r ? function(t, n, e) {
        return o.f(t, n, i(1, e))
    } : function(t, n, e) {
        return t[n] = e, t
    }
}, , function(t, n) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, , , function(t, n, e) {
    var r = e(16),
        o = e(44),
        i = e(27),
        u = e(67),
        c = e(81),
        a = e(57),
        f = a.get,
        s = a.enforce,
        d = String(String).split("String");
    (t.exports = function(t, n, e, c) {
        var a = !!c && !!c.unsafe,
            f = !!c && !!c.enumerable,
            l = !!c && !!c.noTargetGet;
        "function" == typeof e && ("string" != typeof n || i(e, "name") || o(e, "name", n), s(e).source = d.join("string" == typeof n ? n : "")), t !== r ? (a ? !l && t[n] && (f = !0) : delete t[n], f ? t[n] = e : o(t, n, e)) : f ? t[n] = e : u(n, e)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && f(this).source || c(this)
    }))
}, function(t, n, e) {
    var r = e(46);
    t.exports = function(t) {
        return Object(r(t))
    }
}, , function(t, n) {
    var e = {}.toString;
    t.exports = function(t) {
        return e.call(t).slice(8, -1)
    }
}, , , function(t, n, e) {
    var r = e(29),
        o = e(94),
        i = e(56),
        u = e(43),
        c = e(59),
        a = e(27),
        f = e(95),
        s = Object.getOwnPropertyDescriptor;
    n.f = r ? s : function(t, n) {
        if (t = u(t), n = c(n, !0), f) try {
            return s(t, n)
        } catch (e) {}
        if (a(t, n)) return i(!o.f.call(t, n), t[n])
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: n
        }
    }
}, function(t, n, e) {
    var r, o, i, u = e(130),
        c = e(16),
        a = e(23),
        f = e(44),
        s = e(27),
        d = e(82),
        l = e(60),
        p = c.WeakMap;
    if (u) {
        var v = new p,
            h = v.get,
            y = v.has,
            m = v.set;
        r = function(t, n) {
            return m.call(v, t, n), n
        }, o = function(t) {
            return h.call(v, t) || {}
        }, i = function(t) {
            return y.call(v, t)
        }
    } else {
        var g = d("state");
        l[g] = !0, r = function(t, n) {
            return f(t, g, n), n
        }, o = function(t) {
            return s(t, g) ? t[g] : {}
        }, i = function(t) {
            return s(t, g)
        }
    }
    t.exports = {
        set: r,
        get: o,
        has: i,
        enforce: function(t) {
            return i(t) ? o(t) : r(t, {})
        },
        getterFor: function(t) {
            return function(n) {
                var e;
                if (!a(n) || (e = o(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return e
            }
        }
    }
}, , function(t, n, e) {
    var r = e(23);
    t.exports = function(t, n) {
        if (!r(t)) return t;
        var e, o;
        if (n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
        if ("function" == typeof(e = t.valueOf) && !r(o = e.call(t))) return o;
        if (!n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, n) {
    t.exports = {}
}, function(t, n) {
    var e = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
    }
}, , , , , , function(t, n, e) {
    var r = e(16),
        o = e(44);
    t.exports = function(t, n) {
        try {
            o(r, t, n)
        } catch (e) {
            r[t] = n
        }
        return n
    }
}, function(t, n) {
    var e = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++e + r).toString(36)
    }
}, function(t, n, e) {
    var r = e(52);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}, function(t, n, e) {
    "use strict";
    var r = e(59),
        o = e(32),
        i = e(56);
    t.exports = function(t, n, e) {
        var u = r(n);
        u in t ? o.f(t, u, i(0, e)) : t[u] = e
    }
}, function(t, n, e) {
    var r = e(19),
        o = e(20),
        i = e(87),
        u = o("species");
    t.exports = function(t) {
        return i >= 51 || !r((function() {
            var n = [];
            return (n.constructor = {})[u] = function() {
                return {
                    foo: 1
                }
            }, 1 !== n[t](Boolean).foo
        }))
    }
}, , , , , , , , function(t, n, e) {
    var r = e(61),
        o = Math.max,
        i = Math.min;
    t.exports = function(t, n) {
        var e = r(t);
        return e < 0 ? o(e + n, 0) : i(e, n)
    }
}, function(t, n, e) {
    var r = e(19),
        o = e(52),
        i = "".split;
    t.exports = r((function() {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function(t) {
        return "String" == o(t) ? i.call(t, "") : Object(t)
    } : Object
}, function(t, n, e) {
    var r = e(97),
        o = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function(t) {
        return o.call(t)
    }), t.exports = r.inspectSource
}, function(t, n, e) {
    var r = e(83),
        o = e(68),
        i = r("keys");
    t.exports = function(t) {
        return i[t] || (i[t] = o(t))
    }
}, function(t, n, e) {
    var r = e(22),
        o = e(97);
    (t.exports = function(t, n) {
        return o[t] || (o[t] = void 0 !== n ? n : {})
    })("versions", []).push({
        version: "3.6.4",
        mode: r ? "pure" : "global",
        copyright: "\xa9 2020 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, n, e) {
    var r = e(111),
        o = e(99).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function(t) {
        return r(t, o)
    }
}, function(t, n, e) {
    var r = e(19),
        o = /#|\.prototype\./,
        i = function(t, n) {
            var e = c[u(t)];
            return e == f || e != a && ("function" == typeof n ? r(n) : !!n)
        },
        u = i.normalize = function(t) {
            return String(t).replace(o, ".").toLowerCase()
        },
        c = i.data = {},
        a = i.NATIVE = "N",
        f = i.POLYFILL = "P";
    t.exports = i
}, function(t, n, e) {
    var r = e(19);
    t.exports = !!Object.getOwnPropertySymbols && !r((function() {
        return !String(Symbol())
    }))
}, function(t, n, e) {
    var r, o, i = e(16),
        u = e(114),
        c = i.process,
        a = c && c.versions,
        f = a && a.v8;
    f ? o = (r = f.split("."))[0] + r[1] : u && (!(r = u.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = u.match(/Chrome\/(\d+)/)) && (o = r[1]), t.exports = o && +o
}, , , , , , , function(t, n, e) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        i = o && !r.call({
            1: 2
        }, 1);
    n.f = i ? function(t) {
        var n = o(this, t);
        return !!n && n.enumerable
    } : r
}, function(t, n, e) {
    var r = e(29),
        o = e(19),
        i = e(96);
    t.exports = !r && !o((function() {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, n, e) {
    var r = e(16),
        o = e(23),
        i = r.document,
        u = o(i) && o(i.createElement);
    t.exports = function(t) {
        return u ? i.createElement(t) : {}
    }
}, function(t, n, e) {
    var r = e(16),
        o = e(67),
        i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = i
}, function(t, n, e) {
    var r = e(43),
        o = e(39),
        i = e(79),
        u = function(t) {
            return function(n, e, u) {
                var c, a = r(n),
                    f = o(a.length),
                    s = i(u, f);
                if (t && e != e) {
                    for (; f > s;)
                        if ((c = a[s++]) != c) return !0
                } else
                    for (; f > s; s++)
                        if ((t || s in a) && a[s] === e) return t || s || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: u(!0),
        indexOf: u(!1)
    }
}, function(t, n) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, n, e) {
    var r = e(23),
        o = e(69),
        i = e(20)("species");
    t.exports = function(t, n) {
        var e;
        return o(t) && ("function" != typeof(e = t.constructor) || e !== Array && !o(e.prototype) ? r(e) && null === (e = e[i]) && (e = void 0) : e = void 0), new(void 0 === e ? Array : e)(0 === n ? 0 : n)
    }
}, , , , , , , , function(t, n, e) {
    var r = e(27),
        o = e(109),
        i = e(55),
        u = e(32);
    t.exports = function(t, n) {
        for (var e = o(n), c = u.f, a = i.f, f = 0; f < e.length; f++) {
            var s = e[f];
            r(t, s) || c(t, s, a(n, s))
        }
    }
}, function(t, n, e) {
    var r = e(38),
        o = e(84),
        i = e(112),
        u = e(15);
    t.exports = r("Reflect", "ownKeys") || function(t) {
        var n = o.f(u(t)),
            e = i.f;
        return e ? n.concat(e(t)) : n
    }
}, function(t, n, e) {
    var r = e(16);
    t.exports = r
}, function(t, n, e) {
    var r = e(27),
        o = e(43),
        i = e(98).indexOf,
        u = e(60);
    t.exports = function(t, n) {
        var e, c = o(t),
            a = 0,
            f = [];
        for (e in c) !r(u, e) && r(c, e) && f.push(e);
        for (; n.length > a;) r(c, e = n[a++]) && (~i(f, e) || f.push(e));
        return f
    }
}, function(t, n) {
    n.f = Object.getOwnPropertySymbols
}, function(t, n, e) {
    var r = e(86);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function(t, n, e) {
    var r = e(38);
    t.exports = r("navigator", "userAgent") || ""
}, , , , , , , , , , , , , , , function(t, n, e) {
    (function(t) {
        ("undefined" !== typeof window ? window : "undefined" !== typeof t ? t : "undefined" !== typeof self ? self : {}).SENTRY_RELEASE = {
            id: "1.39.0"
        }
    }).call(this, e(42))
}, function(t, n, e) {
    var r = e(16),
        o = e(81),
        i = r.WeakMap;
    t.exports = "function" === typeof i && /native code/.test(o(i))
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, n, e) {
    e(129), t.exports = e(214)
}, function(t, n, e) {
    "use strict";
    e.r(n);
    e(12);
    ! function() {
        var t = e(215).default,
            n = "boolean" === typeof PRODUCTION_DEVELOPMENT_BUILD && !0 === PRODUCTION_DEVELOPMENT_BUILD,
            r = function() {
                var t = [],
                    n = !1,
                    e = !1;

                function r() {
                    if (!n) {
                        n = !0;
                        for (var e = 0; e < t.length; e += 1) t[e].fn.call(window, t[e].ctx);
                        t = []
                    }
                }

                function o() {
                    "complete" === document.readyState && r()
                }
                return function(i, u) {
                    if ("function" !== typeof i) throw new TypeError("callback for docReady(fn) must be a function");
                    return n ? (setTimeout((function() {
                        i(u)
                    }), 1), !1) : (t.push({
                        fn: i,
                        ctx: u
                    }), "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(r, 1) : e || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1)) : (document.attachEvent("onreadystatechange", o), window.attachEvent("onload", r)), e = !0), !0)
                }
            }();
        window.tidioChatApi = new t, r((function() {
            if (window.document.getElementById("tidio-chat-code")) return !1;
            ! function(t, n, e) {
                var r = n.createElement("iframe"),
                    o = !1;
                r.onload = function() {
                    o || (e(r), o = !0)
                }, r.id = t, r.style.display = "none", r.title = "Tidio Chat code", n.body.appendChild(r), setTimeout((function() {
                    o || (e(r), o = !0)
                }), 1e3)
            }("tidio-chat-code", window.document, (function(t) {
                n && window.__REDUX_DEVTOOLS_EXTENSION__ && (t.contentWindow.__REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__, t.contentWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__), t.contentWindow.tidioChatApi = window.tidioChatApi;
                var r = n ? "".concat("https://widget-v4.tidiochat.com/", "/dist/") : "https://widget-v4.tidiochat.com/";
                ! function(t, n) {
                    var e = t.contentWindow.document,
                        r = e.createElement("script");
                    r.src = n, r.async = !0, e.body.appendChild(r)
                }(t, "".concat(r, "/").concat("1_39_0", "/static/js/widget.").concat(e.h, ".js"))
            }))
        }))
    }()
}, function(t, n, e) {
    "use strict";
    e.r(n), e.d(n, "default", (function() {
        return c
    }));
    e(12);
    var r = e(5),
        o = e.n(r),
        i = e(6),
        u = e.n(i),
        c = function() {
            function t() {
                o()(this, t), this.eventPrefix = "tidioChat-", this.readyEventWasFired = !1, this.queue = [], this.popUpOpen = this.open, this.popUpHide = this.close, this.chatDisplay = this.display, this.setColorPallete = this.setColorPalette
            }
            return u()(t, [{
                key: "on",
                value: function(t, n) {
                    "ready" === t && this.readyEventWasFired ? n() : document.addEventListener("".concat(this.eventPrefix).concat(t), (function(t) {
                        n(t.data)
                    }), !1)
                }
            }, {
                key: "trigger",
                value: function(t, n) {
                    if ("ready" === t && this.readyEventWasFired) return !1;
                    try {
                        var e = document.createEvent("Event");
                        if (e.initEvent("".concat(this.eventPrefix).concat(t), !0, !0), e.data = n, document.dispatchEvent(e), "ready" === t) {
                            if (this.readyEventWasFired) return !1;
                            this._flushAllFromQueue(), this.readyEventWasFired = !0
                        }
                    } catch (r) {
                        return !1
                    }
                    return !0
                }
            }, {
                key: "method",
                value: function(t, n) {
                    return "ready" === t && "function" === typeof n ? (this.on("ready", n), !0) : (this[t] && this[t](n), !0)
                }
            }, {
                key: "_addToQueue",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this.queue.push({
                        method: t,
                        args: n
                    })
                }
            }, {
                key: "_flushAllFromQueue",
                value: function() {
                    for (; 0 !== this.queue.length;) {
                        var t = this.queue.shift(),
                            n = t.method,
                            e = t.args;
                        this[n].apply(null, e)
                    }
                }
            }, {
                key: "open",
                value: function() {
                    this._addToQueue("open")
                }
            }, {
                key: "close",
                value: function() {
                    this._addToQueue("close")
                }
            }, {
                key: "display",
                value: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this._addToQueue("display", [t])
                }
            }, {
                key: "show",
                value: function() {
                    this._addToQueue("show")
                }
            }, {
                key: "hide",
                value: function() {
                    this._addToQueue("hide")
                }
            }, {
                key: "setColorPalette",
                value: function(t) {
                    this._addToQueue("setColorPalette", [t])
                }
            }, {
                key: "track",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "track",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                    this._addToQueue("track", [t, n, e])
                }
            }, {
                key: "messageFromVisitor",
                value: function(t) {
                    this._addToQueue("messageFromVisitor", [t])
                }
            }, {
                key: "messageFromOperator",
                value: function(t) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this._addToQueue("messageFromOperator", [t, n])
                }
            }, {
                key: "setVisitorData",
                value: function(t, n) {
                    this._addToQueue("setVisitorData", [t, n])
                }
            }, {
                key: "setContactProperties",
                value: function(t, n) {
                    this._addToQueue("setContactProperties", [t, n])
                }
            }, {
                key: "addVisitorTags",
                value: function(t, n) {
                    this._addToQueue("addVisitorTags", [t, n])
                }
            }, {
                key: "setFeatures",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._addToQueue("setFeatures", t)
                }
            }]), t
        }()
}]);