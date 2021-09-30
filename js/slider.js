! function(c) {
    function e(e) { for (var t, n, a = e[0], r = e[1], i = e[2], o = 0, l = []; o < a.length; o++) n = a[o], Object.prototype.hasOwnProperty.call(u, n) && u[n] && l.push(u[n][0]), u[n] = 0; for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (c[t] = r[t]); for (p && p(e); l.length;) l.shift()(); return d.push.apply(d, i || []), s() }

    function s() {
        for (var e, t = 0; t < d.length; t++) {
            for (var n = d[t], a = !0, r = 1; r < n.length; r++) {
                var i = n[r];
                0 !== u[i] && (a = !1)
            }
            a && (d.splice(t--, 1), e = o(o.s = n[0]))
        }
        return e
    }
    var n = {},
        u = { 2: 0 },
        d = [];

    function o(e) { if (n[e]) return n[e].exports; var t = n[e] = { i: e, l: !1, exports: {} }; return c[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports }
    o.m = c, o.c = n, o.d = function(e, t, n) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, o.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var a in t) o.d(n, a, function(e) { return t[e] }.bind(null, a));
        return n
    }, o.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return o.d(t, "a", t), t }, o.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "/webpack-bundle/";
    var t = window.webpackJsonp = window.webpackJsonp || [],
        a = t.push.bind(t);
    t.push = e, t = t.slice();
    for (var r = 0; r < t.length; r++) e(t[r]);
    var p = a;
    d.push([343, 0]), s()
}({
    1: function(e, t, n) {
        "use strict";
        n.d(t, "x", function() { return W }), n.d(t, "f", function() { return U }), n.d(t, "y", function() { return X }), n.d(t, "z", function() { return G }), n.d(t, "C", function() { return J }), n.d(t, "A", function() { return q }), n.d(t, "B", function() { return Y }), n.d(t, "b", function() { return Q }), n.d(t, "a", function() { return Z }), n.d(t, "c", function() { return ee }), n.d(t, "d", function() { return te }), n.d(t, "J", function() { return ne }), n.d(t, "h", function() { return ae }), n.d(t, "e", function() { return re }), n.d(t, "p", function() { return ie }), n.d(t, "l", function() { return oe }), n.d(t, "q", function() { return le }), n.d(t, "D", function() { return ce }), n.d(t, "G", function() { return se }), n.d(t, "m", function() { return ue }), n.d(t, "n", function() { return de }), n.d(t, "g", function() { return pe }), n.d(t, "i", function() { return me }), n.d(t, "t", function() { return fe }), n.d(t, "r", function() { return ve }), n.d(t, "s", function() { return ge }), n.d(t, "H", function() { return he }), n.d(t, "o", function() { return be }), n.d(t, "u", function() { return ye }), n.d(t, "k", function() { return xe }), n.d(t, "w", function() { return Ee }), n.d(t, "j", function() { return we }), n.d(t, "F", function() { return Oe }), n.d(t, "v", function() { return Ne }), n.d(t, "I", function() { return je }), n.d(t, "E", function() { return Te }), n.d(t, "K", function() { return Se });
        var a = n(2),
            r = n(4);

        function i() { var e = F(["\n  display: flex;\n  align-items: center;\n  margin: 0 4% 1.111vw;\n"]); return i = function() { return e }, e }

        function o() { var e = F(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  text-align: center;\n  transform: translate(-50%, -50%);\n  font-size: 1.5rem;\n  width: 100%;\n  color: #fff;\n  white-space: pre-wrap;\n  pointer-events: none;\n  @media (max-width: 1100px) {\n    font-size: 1rem;\n  }\n"]); return o = function() { return e }, e }

        function l() { var e = F(["\n  font-size: 1.389vw;\n  font-weight: bold;\n  position: relative;\n  color: #fff;\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n\n  svg {\n    width: 1.667vw;\n    height: 1.667vw;\n    position: absolute;\n    top: 50%;\n    left: 100%;\n    padding-left: 0.833vw;\n    transform: translateY(-50%);\n    transition: 300ms;\n    cursor: pointer;\n    box-sizing: initial;\n\n    @media (max-width: 768px) {\n      padding-left: 10px;\n      width: 14px;\n      height: 14px;\n    }\n  }\n\n  &:hover {\n    svg {\n      padding-left: 1.667vw;\n    }\n  }\n"]); return l = function() { return e }, e }

        function c() { var e = F(["\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n"]); return c = function() { return e }, e }

        function s() { var e = F(["\n  background: #343434;\n  margin: 0 0 10.7px;\n  min-width: 6em;\n  display: inline-block;\n  min-height: 20px;\n  position: relative;\n"]); return s = function() { return e }, e }

        function u() { var e = F(["\n  box-sizing: border-box;\n  padding-right: 10px;\n  width: 50%;\n  position: relative;\n  border-radius: 4px;\n  @media (min-width: 768px) {\n    width: 25%;\n  }\n\n  @media (min-width: 1200px) {\n    width: 20%;\n  }\n"]); return u = function() { return e }, e }

        function d() { var e = F(["\n  padding: 0 4%;\n"]); return d = function() { return e }, e }

        function p() { var e = F(["\n  padding: 200% 0 0;\n  position: relative;\n  width: 100%;\n"]); return p = function() { return e }, e }

        function m() { var e = F(["\n  position: absolute;\n  bottom: 5px;\n  color: #00000099;\n  background: #e9cc00;\n  font-weight: 600;\n  padding: 3px 11px;\n  font-size: 12px;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n  @media (max-width: 576px) {\n    padding: 2px 6px;\n    font-size: 10px;\n  }\n"]); return m = function() { return e }, e }

        function f() { var e = F(["\n  position: absolute;\n  width: calc(100% + 1.5px);\n  height: 41%;\n  border-radius: 4px;\n  background-image: linear-gradient(to bottom, rgba(22, 12, 23, 0), rgba(4, 8, 20, 0.8));\n  bottom: 0;\n  left: -0.5px;\n"]); return f = function() { return e }, e }

        function v() { var e = F(["\n  position: absolute;\n  width: 90%;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 30px;\n  transition-duration: 500ms;\n  ", "\n"]); return v = function() { return e }, e }

        function g() { var e = F(["\n  position: absolute;\n  height: 3px;\n  background-color: #007aff;\n  border-radius: 5px;\n  bottom: -14px;\n  left: 0;\n"]); return g = function() { return e }, e }

        function h() { var e = F(["\n  position: absolute;\n  width: 100%;\n  background-color: #595a5b;\n  bottom: -14px;\n  height: 3px;\n  border-radius: 5px;\n  left: 0;\n"]); return h = function() { return e }, e }

        function b() { var e = F(["\n  width: 90%;\n  margin: 0 auto;\n  position: relative;\n"]); return b = function() { return e }, e }

        function y() { var e = F(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  object-fit: cover;\n  border-radius: 4px;\n"]); return y = function() { return e }, e }

        function x() { var e = F(["\n  position: absolute;\n  opacity: 0;\n  box-sizing: border-box;\n  ", "\n  ", "\n  .action {\n    ", "\n  }\n  &.detail-enter-active {\n    opacity: 1;\n    transition: opacity 500ms, transform 500ms;\n  }\n  &.detail-enter-done {\n    opacity: 1;\n    pointer-events: auto;\n  }\n  &.detail-exit {\n    opacity: 1;\n  }\n  &.detail-exit-active {\n    opacity: 0;\n    transition: opacity 500ms, transform 500ms;\n  }\n"]); return x = function() { return e }, e }

        function E() { var e = F(['\n  position: relative;\n  list-style-type: none;\n  font-size: 14px;\n  color: #fff;\n  display: inline-block;\n  &:not(:first-child) {\n    &:before {\n      content: "";\n      position: absolute;\n      top: 50%;\n      z-index: 10;\n      left: -10px;\n      transform: translate(-50%, -50%);\n      width: 4px;\n      height: 4px;\n      border-radius: 50%;\n      background: #fff;\n    }\n  }\n  &:not(:last-child) {\n    padding-right: 20px;\n  }\n']); return E = function() { return e }, e }

        function w() { var e = F(["\n  margin: 3.6px 0 0;\n  padding: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  ", "\n"]); return w = function() { return e }, e }

        function O() { var e = F(["\n  font-size: 16px;\n  color: #fff;\n  font-weight: 600;\n  line-height: 22px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  overflow: hidden;\n  ", "\n"]); return O = function() { return e }, e }

        function N() { var e = F(["\n  position: relative;\n  margin: 0;\n  padding: 0 4%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  .slide-item {\n    width: ", ";\n    ", "\n    display: inline-block;\n    vertical-align: top;\n    position: relative;\n    cursor: pointer;\n    box-sizing: border-box;\n    padding-right: 10px;\n    .img-landscape {\n      border-radius: 4px;\n      width: 100%;\n    }\n  }\n"]); return N = function() { return e }, e }

        function j() { var e = F(["\n  position: absolute;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.219608) 5%, #000);\n  left: 0;\n  bottom: -1px;\n  width: 100%;\n  height: 100%;\n  ", "\n"]); return j = function() { return e }, e }

        function T() { var e = F(["\n  position: absolute;\n  top: 50%;\n  ", "\n"]); return T = function() { return e }, e }

        function S() { var e = F(["\n  opacity: 0;\n  transition: opacity 500ms;\n  display: block;\n  &.overlay-enter-active {\n    opacity: 1;\n  }\n  &.overlay-enter-done {\n    opacity: 1;\n  }\n  &.overlay-exit {\n    opacity: 1;\n  }\n  &.overlay-exit-active {\n    opacity: 0;\n  }\n"]); return S = function() { return e }, e }

        function k() { var e = F(["\n  position: relative;\n  width: 100%;\n  ", "\n  ", '\n  &::before {\n    content: "";\n    background: url(', ") no-repeat;\n    background-size: cover;\n    width: 30%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: auto;\n    left: 0;\n    overflow: hidden;\n  }\n  .rank-number {\n    width: 30%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: auto;\n    left: 0;\n    overflow: hidden;\n  }\n  .topten-image {\n    width: 78%;\n    height: 100%;\n    ", "\n  }\n  .hover-img-topten {\n    border-bottom-right-radius: 4px;\n    border-top-right-radius: 4px;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: auto;\n    height: 100%;\n    object-fit: cover;\n  }\n  .overlay {\n    opacity: 0;\n    transition: opacity 500ms;\n    display: block;\n    &.overlay-enter-active {\n      opacity: 1;\n    }\n    &.overlay-enter-done {\n      opacity: 1;\n    }\n    &.overlay-exit {\n      opacity: 1;\n    }\n    &.overlay-exit-active {\n      opacity: 0;\n    }\n  }\n  .action {\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    pointer-events: none;\n    transition: 500ms;\n    ", "\n    .border-right {\n      height: 21px;\n      width: 2px;\n      background: #fff;\n      margin: 0 25px;\n    }\n\n    .trailer-icon {\n      &.disabled {\n        pointer-events: none;\n        opacity: 0.4;\n      }\n    }\n\n    .add-icon,\n    .trailer-icon,\n    .play-icon {\n      position: relative;\n\n      .note-list {\n        position: absolute;\n        top: -5px;\n        width: 120px;\n        height: 30px;\n        transform: translate(-50%, -100%);\n        opacity: 0;\n        transition: 0.3s all;\n        left: 50%;\n\n        .clip-path {\n          width: 100%;\n          height: 100%;\n          position: relative;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n\n          .path {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            left: 0;\n            background: #fff;\n            clip-path: polygon(0% 0%, 100% 0, 100% 88%, 55% 90%, 50% 100%, 45% 87%, 0 87%);\n          }\n\n          .txt-path {\n            color: #333;\n            position: relative;\n            font-size: 12px;\n            font-weight: 600;\n            top: -3px;\n          }\n        }\n      }\n\n      &:hover {\n        .note-list {\n          opacity: 1;\n        }\n      }\n    }\n\n    .play-icon {\n      width: 60px;\n      height: 60px;\n      border: 2px solid #fff;\n      border-radius: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: rgba(0, 0, 0, 0.5);\n      cursor: pointer;\n      transition: 0.3s all;\n\n      .note-list {\n        width: 135px;\n        height: 35px;\n\n        .clip-path {\n          .txt-path {\n            font-size: 14px;\n          }\n        }\n      }\n\n      #icon-play {\n        width: 25px;\n\n        path {\n          fill: #fff;\n          transition: 0.2s all;\n        }\n      }\n\n      &:hover {\n        #icon-play {\n          path {\n            fill: #007aff;\n          }\n        }\n      }\n    }\n\n    .trailer-icon {\n      transition: 0.3s all;\n      cursor: pointer;\n\n      #icon-trailer {\n        width: 30px;\n\n        path {\n          fill: #fff;\n        }\n      }\n\n      .note-list {\n        top: 0;\n      }\n\n      &:hover {\n        transform: scale(1.2);\n        -webkit-transform: scale(1.2);\n        -moz-transform: scale(1.2);\n        -o-transform: scale(1.2);\n      }\n    }\n\n    .add-icon {\n      width: 30px;\n      height: 30px;\n      border-radius: 50%;\n      border: 3px solid #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      transition: 0.3s all;\n      cursor: pointer;\n\n      #add-list-icon,\n      #icon-minus {\n        width: 14px;\n\n        path {\n          fill: #fff;\n        }\n      }\n\n      &:hover {\n        transform: scale(1.2);\n        -webkit-transform: scale(1.2);\n        -moz-transform: scale(1.2);\n        -o-transform: scale(1.2);\n\n        .note-list {\n          opacity: 1;\n        }\n      }\n    }\n  }\n  .action-enter-active {\n    opacity: 1;\n  }\n  .action-enter-done {\n    opacity: 1;\n    pointer-events: auto;\n  }\n  .action-exit {\n    opacity: 1;\n  }\n  .action-exit-active {\n    opacity: 0;\n    transform: scale(0.7);\n  }\n"]); return k = function() { return e }, e }

        function _() { var e = F(["\n  width: 15px;\n  height: 2px;\n  background: #c1c1c1;\n  opacity: ", ";\n  margin-left: 3px;\n  &:last-child {\n    margin-right: 5px;\n  }\n"]); return _ = function() { return e }, e }

        function R() { var e = F(["\n  position: absolute;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  top: -15px;\n  right: 8px;\n  opacity: 0;\n  transition: 0.3s ease-in-out;\n"]); return R = function() { return e }, e }

        function P() { var e = F(["\n  position: relative;\n  .img-placeholder {\n    border-radius: 4px;\n    width: 100%;\n    background: #333;\n    padding-top: 56.25%;\n    &.portrait {\n      padding-top: 200%;\n    }\n  }\n  .placeholder-topten {\n    position: relative;\n    padding-top: 44.224%;\n  }\n"]); return P = function() { return e }, e }

        function D() { var e = F(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  transition-duration: 500ms;\n  ", "\n  .img-original {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    object-fit: cover;\n    border-radius: 4px;\n  }\n  .hover-img-ratio {\n    position: relative;\n    padding-top: 56.25%;\n    background: #333;\n  }\n\n  .hover-img {\n    border-radius: 4px;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-size: cover;\n  }\n\n  .hover-img-portrait {\n    border-radius: 4px;\n    width: 100%;\n  }\n"]); return D = function() { return e }, e }

        function z() { var e = F(["\n  right: 0;\n  width: 4%;\n"]); return z = function() { return e }, e }

        function I() { var e = F(["\n  left: 0;\n  width: calc(4% - 10px);\n  ", "\n"]); return I = function() { return e }, e }

        function H() { var e = F(["\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 3;\n  background: rgba(20, 20, 20, 0.5);\n  svg {\n    width: 20px;\n    height: 20px;\n    fill: #fff;\n    transition: 0.2s ease-in-out;\n  }\n  &:hover {\n    svg {\n      transform: scale(1.4);\n    }\n  }\n"]); return H = function() { return e }, e }

        function M() { var e = F(["\n  box-sizing: border-box;\n  z-index: 1;\n  display: inline-block;\n  position: relative;\n  white-space: normal;\n  vertical-align: top;\n  padding-right: ", ";\n  width: ", ";\n"]); return M = function() { return e }, e }

        function V() { var e = F(["\n  white-space: nowrap;\n  ", "\n  transform: translate3d(", "%, 0, 0);\n  ", "\n"]); return V = function() { return e }, e }

        function C() { var e = F(["\n  overflow-x: visible;\n  position: relative;\n  top: 0;\n  left: 0;\n"]); return C = function() { return e }, e }

        function A() { var e = F(["\n  position: relative;\n  margin: 0;\n  padding: 0 4%;\n  @media (min-width: 1400px) {\n    &:hover {\n      .slide-dots {\n        opacity: 1;\n      }\n    }\n  }\n"]); return A = function() { return e }, e }

        function L() { var e = F(["\n  padding: 0;\n  box-sizing: border-box;\n"]); return L = function() { return e }, e }

        function $() { var e = F([""]); return $ = function() { return e }, e }

        function B() { var e = F(["\n  position: relative;\n  z-index: 0;\n  animation: fadeIn 1s;\n  box-sizing: initial;\n  ", "\n"]); return B = function() { return e }, e }

        function F(e, t) { return t = t || e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
        var W = a.a.div(B(), r.isMobile && "overflow: hidden;"),
            U = a.a.div($()),
            X = a.a.div(L()),
            G = a.a.div(A()),
            J = a.a.div(C()),
            q = a.a.div(V(), function(e) { return e.animate ? " transition: transform ".concat(e.duration, "ms ease ;") : "" }, function(e) { return e.translate }, function(e) { return !e.clickArrow && "pointer-events: none;" }),
            Y = a.a.div(M(), function(e) { return "TopTen" == e.typeRibbon ? "20px" : "10px" }, function(e) { return e.slideShow ? "".concat(100 / e.slideShow, "%") : "20%" }),
            K = a.a.div(H()),
            Q = Object(a.a)(K)(I(), function(e) { return !e.swiped && "display: none;" }),
            Z = Object(a.a)(K)(z()),
            ee = a.a.div(D(), function(e) { return e.isHover ? e.original ? "width: 120%; height: 120%; top: -10%; left: -10%;" : "width: 150%; height: 150%; top: -25%; left: -25%;" : "" }),
            te = a.a.div(P()),
            ne = a.a.div(R()),
            ae = a.a.div(_(), function(e) { return e.active ? "1" : "0.25" }),
            re = a.a.div(k(), function(e) { return !e.collection && "height: 100%;" }, function(e) { return e.topTen && r.isMobile && "padding-top: 44.224%;" }, function(e) {
                return e.index && function(e) {
                    switch (e) {
                        case "0":
                            return "//assets.glxplay.io/web/images/1.svg";
                        case "1":
                            return "//assets.glxplay.io/web/images/2.svg";
                        case "2":
                            return "//assets.glxplay.io/web/images/3.svg";
                        case "3":
                            return "//assets.glxplay.io/web/images/4.svg";
                        case "4":
                            return "//assets.glxplay.io/web/images/5.svg"
                    }
                }(e.index)
            }, function(e) { return e.topTen ? "position: absolute; right: 0; top: 0" : "position: relative; float: right;" }, function(e) { return e.topTen && "display: flex; justify-content: center; align-items: center;" }),
            ie = a.a.a(S()),
            oe = a.a.div(T(), function(e) { return e.topTen ? "width: 78%;right: 0;transform: translateY(-50%);" : "left: 50%;transform: translate(-50%, -50%);" }),
            le = a.a.div(j(), function(e) { return e.topTen ? "width: 78%; left: auto; right: 0; border-top-right-radius: 4px; border-bottom-right-radius: 4px;" : "border-radius: 4px;" }),
            ce = a.a.div(N(), function(e) { return e.slideShow ? "".concat(100 / e.slideShow, "%") : "20%" }, function(e) { return e.topTen && r.isMobile ? r.isTablet ? "width: 33%;" : "width: 70%;" : "" }),
            se = a.a.div(O(), function(e) { return e.center && "text-align: center; padding: 0 1rem;" }),
            ue = a.a.div(w(), function(e) { return e.center && "display: flex;justify-content: center;align-items: center;" }),
            de = a.a.div(E()),
            pe = a.a.div(x(), function(e) { return e.topTen ? "right: 0;width: 78%;" : "left: 0;width: 100%;" }, function(e) { return e.tvod ? "bottom: 20px;" : "bottom: 0;padding: 11px 18px;" }, function(e) { return e.tvod && "pointer-events: initial; opacity: 1; display: flex; justify-content: center; align-items: center; padding-bottom: 24px;" }),
            me = a.a.img(y()),
            fe = a.a.div(b()),
            ve = a.a.div(h()),
            ge = a.a.div(g()),
            he = a.a.img(v(), function(e) { return e.tvod && e.isHover ? "opacity: 0;" : "" }),
            be = a.a.div(f()),
            ye = a.a.div(m()),
            xe = a.a.div(p()),
            Ee = a.a.div(d()),
            we = a.a.img(u()),
            Oe = a.a.div(s()),
            Ne = a.a.div(c()),
            je = a.a.div(l()),
            Te = a.a.div(o()),
            Se = a.a.div(i())
    },
    15: function(e, t, n) {
        "use strict";

        function R() { return D.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 492.004 492.004", width: "30px", height: "30px", className: "arrow-right" }, D.a.createElement("path", { d: "M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z", "data-original": "#000000", className: "active-path", "data-old_color": "#000000" })) }

        function a() { return D.a.createElement("svg", { version: "1.1", viewBox: "0 0 41.999 41.999", id: "icon-play" }, D.a.createElement("path", { d: "M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40 c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20 c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z" })) }

        function r() { return D.a.createElement("svg", { viewBox: "0 0 448 448", id: "add-list-icon" }, D.a.createElement("path", { d: "m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" })) }

        function i() { return D.a.createElement("svg", { version: "1.1", id: "icon-trailer", viewBox: "0 0 485 485" }, D.a.createElement("path", { d: "M0,430.4" }), D.a.createElement("path", { d: "M192.5,199l0,105.1c0,3.8,4.2,6.3,7.5,4.3l91.1-52.6c3.3-1.9,3.3-6.7,0-8.7L200,194.7C196.6,192.8,192.5,195.2,192.5,199z" }), D.a.createElement("path", { d: "M455,76.6h-50H80H30H0v320v30h380.8l104.2,1.2v-1.2v-30v-320H455z M405,106.6h50v50h-50V106.6z M405,186.6h50v50h-50V186.6 z M405,266.6h50v50h-50V266.6z M110,106.6h265v290H110V106.6z M30,106.6h50v50H30V106.6z M30,186.6h50v50H30V186.6z M30,266.6h50 v50H30V266.6z M30,346.6h50v50H30V346.6z M405,396.6v-50h50v50H405z" })) }

        function o(e) { e.target.src = " #" }

        function d(n) {
            function e() {
                var e = { direct_object_id: n.data.value.titleId, direct_object_property: n.data.value.alternateName, context_value: n.data.value && n.data.value.comingSoon ? { message: n.data.value.comingSoon.message, hasSource: n.data.value.comingSoon.hasSource } : "" },
                    t = { indirect_object_type: "ribbon", indirect_object_property: n.title, indirect_object_id: n.slugRibbon };
                trackingToDetail(e, t)
            }
            var t = Object(P.useRef)();
            return D.a.createElement(H.c, { isHover: n.data.isHover, ref: t }, D.a.createElement(H.e, null, D.a.createElement("a", { href: "/title/" + n.data.value.slug, onClick: e }, D.a.createElement("div", { className: "hover-img-ratio" }, D.a.createElement("img", { alt: n.data.value.alternateName, onError: o, className: "hover-img", src: "image/".concat(n.data.value.image.posterLandscape) }))), "TVOD" === n.data.value.priceType && D.a.createElement(H.u, null, "Phim thuê"), D.a.createElement(u.a, { in: n.data.isHover, timeout: 500, classNames: "overlay", unmountOnExit: !0 }, D.a.createElement(H.p, { href: "/title/" + n.data.value.slug, onClick: e }, D.a.createElement(H.q, null))), D.a.createElement("a", { href: "/title/" + n.data.value.slug, onClick: e }, D.a.createElement(u.a, { in: n.data.isHover, timeout: 500, classNames: "detail", unmountOnExit: !0 }, D.a.createElement(H.g, null, D.a.createElement(H.G, null, window.localStorage.lang && "en" == window.localStorage.lang ? n.data.value.name : n.data.value.alternateName), D.a.createElement(H.m, null, n.data.value.genre && "None" !== n.data.value.genre && D.a.createElement(H.n, null, n.data.value.genre), n.data.value.duration && "None" !== n.data.value.duration && D.a.createElement(H.n, null, n.data.value.duration), n.data.value.contentRating && "None" !== n.data.value.contentRating && D.a.createElement(H.n, null, n.data.value.contentRating), "TVOD" === n.data.value.priceType && D.a.createElement(H.n, null, "Phim thuê"), n.data.value.pricePackage && "SVOD" == n.data.value.priceType && n.data.value.pricePackage.includes("PREMIUM") && !n.data.value.pricePackage.includes("BASIC") && D.a.createElement(H.n, null, "Cao cấp"))))), D.a.createElement(H.l, null, D.a.createElement(u.a, { in: n.data.isHover, timeout: 500, classNames: "action", unmountOnExit: !0 }, D.a.createElement("div", { className: "action" }, D.a.createElement("div", {
                className: !n.data.value.trailer && !n.isRelated || !n.data.value.hasTrailer && n.isRelated ? "trailer-icon disabled" : "trailer-icon",
                onClick: function() {
                    if (n.isRelated) return console.log("vao"), void watchTrailer(n.data.value.titleId);
                    playtrailer(n.data.value.trailer.alid, n.data.value.trailer.name)
                }
            }, D.a.createElement(i, null), D.a.createElement("div", { className: "note-list" }, D.a.createElement("div", { className: "clip-path" }, D.a.createElement("div", { className: "path" }), D.a.createElement("div", { className: "txt-path" }, "Xem trailer")))), D.a.createElement("div", { className: "border-right" }), "ComingSoon" !== n.typeRibbon && (!n.data.value.comingSoon || n.data.value.comingSoon && n.data.value.comingSoon.hasSource) ? D.a.createElement(P.Fragment, null, D.a.createElement("a", { href: "TVOD" == n.data.value.priceType ? "/auth/login?n=/watch/" + n.data.value.slug : "/subs/plan-intro?n=/watch/" + n.data.value.slug }, D.a.createElement("div", { className: "play-icon" }, D.a.createElement(a, null), D.a.createElement("div", { className: "note-list" }, D.a.createElement("div", { className: "clip-path" }, D.a.createElement("div", { className: "path" }), D.a.createElement("div", { className: "txt-path" }, n.isRelated ? "TVOD" == n.data.value.priceType ? "Thuê phim" : "Mua gói" : n.data.value.textPlay))))), D.a.createElement("div", { className: "border-right" })) : "", D.a.createElement("a", { href: "/auth/login" }, D.a.createElement("div", { className: "add-icon" }, D.a.createElement(r, null), D.a.createElement("div", { className: "note-list" }, D.a.createElement("div", { className: "clip-path" }, D.a.createElement("div", { className: "path" }), D.a.createElement("div", { className: "txt-path" }, "Danh sách của tôi"))))))))))
        }

        function l(e) { e.target.src = " #" }

        function p(n) {
            var e = Object(P.useRef)(),
                t = n.data.value.alternateName || "";
            t = t.replace("<br>", "\n");
            var a = n.data.value.url || "";
            return a = a.replace("search", ""), D.a.createElement(H.c, { isHover: n.data.isHover, ref: e }, D.a.createElement(H.e, null, D.a.createElement("a", {
                href: "/browse/collection" + a + "&title=" + t,
                onClick: function() {
                    var e = { direct_object_property: n.data.value.alternateName, direct_object_type: "rbcollection" },
                        t = { indirect_object_type: "ribbon", indirect_object_property: n.title };
                    trackingToDetail(e, t)
                }
            }, D.a.createElement("img", { alt: t, onError: l, className: "hover-img", src: "image".concat(n.data.value.posterLandscape) })), D.a.createElement(H.E, null, t)))
        }

        function c(e) { e.target.src = " #" }

        function m(n) {
            function e() {
                var e = { direct_object_id: n.data.value.titleId, direct_object_property: n.data.value.alternateName },
                    t = { indirect_object_type: "ribbon", indirect_object_property: n.title, indirect_object_id: n.slugRibbon };
                trackingToDetail(e, t)
            }
            var t = Object(P.useRef)();
            return D.a.createElement(H.c, { isHover: n.data.isHover, ref: t }, D.a.createElement(H.e, { index: n.defaultIndex.toString(), topTen: !0 }, D.a.createElement("a", { href: "/title/" + n.data.value.slug, onClick: e }, D.a.createElement("div", { className: "topten-image" }, D.a.createElement("img", { alt: n.data.value.alternateName, onError: c, className: "hover-img-topten", src: "image/".concat(n.data.value.image.posterLandscape) }), "TVOD" === n.data.value.priceType && D.a.createElement(H.u, null, "Phim thuê"))), D.a.createElement(u.a, { in: n.data.isHover, timeout: 500, classNames: "overlay", unmountOnExit: !0 }, D.a.createElement(H.p, { href: "/title/" + n.data.value.slug, onClick: e }, D.a.createElement(H.q, { topTen: !0 }))), D.a.createElement("a", { href: "/title/" + n.data.value.slug, onClick: e }, D.a.createElement(u.a, { in: n.data.isHover, timeout: 500, classNames: "detail", unmountOnExit: !0 }, D.a.createElement(H.g, { topTen: !0 }, D.a.createElement(H.G, null, window.localStorage.lang && "en" == window.localStorage.lang ? n.data.value.name : n.data.value.alternateName), D.a.createElement(H.m, null, n.data.value.genre && "None" !== n.data.value.genre && D.a.createElement(H.n, null, n.data.value.genre), n.data.value.duration && "None" !== n.data.value.duration && D.a.createElement(H.n, null, n.data.value.duration), n.data.value.contentRating && "None" !== n.data.value.contentRating && D.a.createElement(H.n, null, n.data.value.contentRating), "TVOD" === n.data.value.priceType && D.a.createElement(H.n, null, "Phim thuê"), n.data.value.pricePackage && "SVOD" == n.data.value.priceType && n.data.value.pricePackage.includes("PREMIUM") && !n.data.value.pricePackage.includes("BASIC") && D.a.createElement(H.n, null, "Cao cấp"))))), D.a.createElement(H.l, { topTen: !0 }, D.a.createElement(u.a, { in: n.data.isHover, timeout: 500, classNames: "action", unmountOnExit: !0 }, D.a.createElement("div", { className: "action" }, D.a.createElement("div", { className: n.data.value.trailer ? "trailer-icon" : "trailer-icon disabled", onClick: n.data.value.trailer && function() { playtrailer(n.data.value.trailer.alid, n.data.value.trailer.name) } }, D.a.createElement(i, null), D.a.createElement("div", { className: "note-list" }, D.a.createElement("div", { className: "clip-path" }, D.a.createElement("div", { className: "path" }), D.a.createElement("div", { className: "txt-path" }, "Xem trailer")))), D.a.createElement("div", { className: "border-right" }), !n.data.value.comingSoon || n.data.value.comingSoon && n.data.value.comingSoon.hasSource ? D.a.createElement(P.Fragment, null, D.a.createElement("a", { href: "TVOD" == n.data.value.priceType ? "/auth/login?n=/watch/" + n.data.value.slug : "/subs/plan-intro?n=/watch/" + n.data.value.slug }, D.a.createElement("div", { className: "play-icon" }, D.a.createElement(a, null), D.a.createElement("div", { className: "note-list" }, D.a.createElement("div", { className: "clip-path" }, D.a.createElement("div", { className: "path" }), D.a.createElement("div", { className: "txt-path" }, n.data.value.textPlay))))), D.a.createElement("div", { className: "border-right" })) : "", D.a.createElement("a", { href: "/auth/login" }, D.a.createElement("div", { className: "add-icon" }, D.a.createElement(r, null), D.a.createElement("div", { className: "note-list" }, D.a.createElement("div", { className: "clip-path" }, D.a.createElement("div", { className: "path" }), D.a.createElement("div", { className: "txt-path" }, "Danh sách của tôi"))))))))))
        }

        function s(e) { e.target.src = " image/original.svg" }

        function f(n) {
            function e() {
                var e = { direct_object_id: n.data.value.titleId, direct_object_property: n.data.value.alternateName },
                    t = { indirect_object_type: "ribbon", indirect_object_property: n.title, indirect_object_id: n.slugRibbon };
                trackingToDetail(e, t)
            }
            var t = Object(P.useRef)();
            return D.a.createElement(H.c, { isHover: n.data.isHover, ref: t, original: !0 }, D.a.createElement(H.e, null, D.a.createElement("div", null, D.a.createElement("a", { href: "/title/" + n.data.value.slug, onClick: e }, D.a.createElement(H.i, { alt: n.data.value.alternateName, onError: s, className: "hover-img-portrait", src: "image/".concat(n.data.value.image.posterOriginal) }), D.a.createElement(H.o, null), window.localStorage.lang && "en" == window.localStorage.lang ? n.data.value.image.titleOriginalEn && D.a.createElement(H.H, { isHover: n.data.isHover, tvod: !0, src: "image/".concat(n.data.value.image.titleOriginalEn) }) : n.data.value.image.titleOriginalVn && D.a.createElement(H.H, { isHover: n.data.isHover, tvod: !0, src: "image/".concat(n.data.value.image.titleOriginalVn) }))), D.a.createElement(u.a, { in: n.data.isHover, timeout: 500, classNames: "detail", unmountOnExit: !0 }, D.a.createElement(H.g, { tvod: !0 }, D.a.createElement("div", { className: "action" }, D.a.createElement("div", { className: n.data.value.trailer ? "trailer-icon" : "trailer-icon disabled", onClick: n.data.value.trailer && function() { playtrailer(n.data.value.trailer.alid, n.data.value.trailer.name) } }, D.a.createElement(i, null), D.a.createElement("div", { className: "note-list" }, D.a.createElement("div", { className: "clip-path" }, D.a.createElement("div", { className: "path" }), D.a.createElement("div", { className: "txt-path" }, "Xem trailer")))), D.a.createElement("div", { className: "border-right" }), D.a.createElement("a", { href: "TVOD" == n.data.value.priceType ? "/auth/login?n=/watch/" + n.data.value.slug : "/subs/plan-intro?n=/watch/" + n.data.value.slug }, D.a.createElement("div", { className: "play-icon" }, D.a.createElement(a, null), D.a.createElement("div", { className: "note-list" }, D.a.createElement("div", { className: "clip-path" }, D.a.createElement("div", { className: "path" }), D.a.createElement("div", { className: "txt-path" }, n.data.value.textPlay))))), D.a.createElement("div", { className: "border-right" }), D.a.createElement("a", { href: "/auth/login" }, D.a.createElement("div", { className: "add-icon" }, D.a.createElement(r, null), D.a.createElement("div", { className: "note-list" }, D.a.createElement("div", { className: "clip-path" }, D.a.createElement("div", { className: "path" }), D.a.createElement("div", { className: "txt-path" }, "Danh sách của tôi")))))), D.a.createElement("a", { href: "/title/" + n.data.value.slug, onClick: e }, D.a.createElement(H.G, { center: !0 }, window.localStorage.lang && "en" == window.localStorage.lang ? n.data.value.name : n.data.value.alternateName), D.a.createElement(H.m, { center: !0 }, n.data.value.genre && "None" !== n.data.value.genre && D.a.createElement(H.n, null, n.data.value.genre), n.data.value.duration && "None" !== n.data.value.duration && D.a.createElement(H.n, null, n.data.value.duration), n.data.value.contentRating && "None" !== n.data.value.contentRating && D.a.createElement(H.n, null, n.data.value.contentRating), "TVOD" === n.data.value.priceType && D.a.createElement(H.n, null, "Phim thuê"), n.data.value.pricePackage && "SVOD" == n.data.value.priceType && n.data.value.pricePackage.includes("PREMIUM") && !n.data.value.pricePackage.includes("BASIC") && D.a.createElement(H.n, null, "Cao cấp")))))))
        }
        var P = n(0),
            D = n.n(P),
            z = n(34),
            I = n(4),
            u = n(347),
            H = n(1);

        function v(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), n.push.apply(n, a)
            }
            return n
        }

        function g(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? v(Object(n), !0).forEach(function(e) { h(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
            }
            return t
        }

        function h(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function b(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [],
                    a = !0,
                    r = !1,
                    i = void 0;
                try { for (var o, l = e[Symbol.iterator](); !(a = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); a = !0); } catch (e) { r = !0, i = e } finally { try { a || null == l.return || l.return() } finally { if (r) throw i } }
                return n
            }(e, t) || function(e, t) { if (!e) return; if ("string" == typeof e) return y(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
        }

        function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a
        }

        function M(i) {
            var t, e = i.data,
                n = 150;

            function a() {
                var a, r = [];
                i.listActive.map(function(e, t) { var n; "first" == i.type ? a = t == i.index ? { zIndex: 4, transform: "translate3d(".concat(c / 2, "px, 0, 0)"), transitionDuration: "500ms" } : t > i.index ? { zIndex: 4, transform: "translate3d(".concat(c, "px, 0, 0)"), transitionDuration: "500ms" } : { transitionDuration: "500ms" } : "last" == i.type ? a = t == i.index ? { zIndex: 4, transform: "translate3d(-".concat(c / 2, "px, 0, 0)"), transitionDuration: "500ms" } : t < i.index ? { zIndex: 4, transform: "translate3d(-".concat(c, "px, 0, 0)"), transitionDuration: "500ms" } : { transitionDuration: "500ms" } : t == i.index ? a = { zIndex: 4, transform: "translate3d(0px, 0, 0)", transitionDuration: "500ms" } : t < i.index ? a = { zIndex: 4, transform: "translate3d(-".concat(c / 2, "px, 0, 0)"), transitionDuration: "500ms" } : t > i.index && (a = { zIndex: 4, transform: "translate3d(".concat(c / 2, "px, 0, 0)"), transitionDuration: "500ms" }), n = g(g({}, e), {}, { animation: a, isHover: t == i.index }), r.push(n) }), i.setItemHover(r)
            }

            function r() {
                if (x) {
                    clearTimeout(t);
                    var a = [],
                        r = { zIndex: 4, transform: "translate3d(0px, 0, 0)", transitionDuration: "500ms" };
                    i.listActive.map(function(e, t) {
                        var n = g(g({}, e), {}, { animation: r, isHover: !1 });
                        a.push(n)
                    }), i.setItemHover(a)
                }
            }

            function o() {
                setTimeout(function() {
                    if (u && u.current) {
                        var e = u.current.clientWidth;
                        s(e / 100 * n - e)
                    }
                }, 100)
            }
            "Original" != i.typeRibbon && "TVOD" != i.typeRibbon || (n = 120);
            var l = b(Object(P.useState)(0), 2),
                c = l[0],
                s = l[1],
                u = Object(P.useRef)();
            return Object(P.useEffect)(function() {
                var e = u.current.clientWidth;
                return s(e / 100 * n - e), $(window).on("resize", _.debounce(o, 500)),
                    function() { $(window).off("resize", _.debounce(o, 500)), x = !1 }
            }, []), D.a.createElement(H.B, { className: "slide-active", ref: u, style: e.animation ? e.animation : {}, slideShow: i.slideShow, typeRibbon: i.typeRibbon }, D.a.createElement(H.d, { onMouseEnter: (i.index, function(e) { x = !0, i.hoverActive ? a() : t = setTimeout(function() { i.setHoverActive(!0), a() }, 500) }), onMouseLeave: r }, "TopTen" == i.typeRibbon ? D.a.createElement("div", { className: "placeholder-topten" }) : D.a.createElement("div", { className: "Original" == i.typeRibbon || "TVOD" == i.typeRibbon ? "img-placeholder portrait" : "img-placeholder" }), i.percent && D.a.createElement(H.t, null, D.a.createElement(H.r, null), D.a.createElement(H.s, { style: "width: ".concat(i.percent, "%") })), function() {
                switch (i.typeRibbon) {
                    case "Original":
                        return D.a.createElement(BoxOriginal, { data: e, title: i.title, slugRibbon: i.slugRibbon, typeRibbon: i.typeRibbon });
                    case "TVOD":
                        return D.a.createElement(f, { data: e, title: i.title, slugRibbon: i.slugRibbon, typeRibbon: i.typeRibbon });
                    case "TopTen":
                        return D.a.createElement(m, { data: e, title: i.title, slugRibbon: i.slugRibbon, index: i.index, unHoverSlideItem: r, typeRibbon: i.typeRibbon, defaultIndex: i.defaultIndex });
                    case "Collection":
                        return D.a.createElement(p, { data: e, title: i.title, slugRibbon: i.slugRibbon, unHoverSlideItem: r, typeRibbon: i.typeRibbon });
                    default:
                        return D.a.createElement(d, { data: e, title: i.title, slugRibbon: i.slugRibbon, unHoverSlideItem: r, typeRibbon: i.typeRibbon, isRelated: i.isRelated })
                }
            }()))
        }

        function V(n) {
            function t(e) { e.target.src = "Original" === n.typeRibbon || "TVOD" === n.typeRibbon ? " image/original.svg" : " #" }
            var a = n.item,
                e = a.alternateName || "";
            e = e.replace("<br>", "\n"), "Collection" === n.typeRibbon && console.log(e);
            var r = a.url || "";

            function i() { return D.a.createElement(H.k, null, D.a.createElement(H.i, { alt: a.alternateName, onError: t, className: "hover-img", src: "image/".concat(a.image.posterOriginal) }), D.a.createElement(H.o, null), window.localStorage.lang && "en" == window.localStorage.lang ? a.image.titleOriginalEn && D.a.createElement(H.H, { src: "image/".concat(a.image.titleOriginalEn) }) : a.image.titleOriginalVn && D.a.createElement(H.H, { src: "image/".concat(a.image.titleOriginalVn) })) }
            return r = r.replace("search", ""), D.a.createElement("a", {
                href: "Collection" === n.typeRibbon ? "/browse/collection" + r + "&title=" + e : "/title/" + a.slug,
                className: "slide-item",
                onClick: function() {
                    var e = { direct_object_id: a.titleId, direct_object_property: a.alternateName, context_value: a.comingSoon ? { message: a.comingSoon.message, hasSource: a.comingSoon.hasSource } : "" };
                    "Collection" === n.typeRibbon && (e.direct_object_type = "rbcollection"), console.log(e);
                    var t = { indirect_object_type: "ribbon", indirect_object_property: n.displayNameVi, indirect_object_id: "None" !== n.slug ? n.slug : "" };
                    trackingToDetail(e, t)
                }
            }, function() {
                switch (n.typeRibbon) {
                    case "TVOD":
                    case "Original":
                        return i();
                    case "TopTen":
                        return D.a.createElement(H.e, { index: n.defaultIndex.toString(), topTen: !0 }, D.a.createElement("div", { className: "topten-image" }, D.a.createElement("img", { alt: a.alternateName, onError: t, className: "hover-img-topten", src: "image/".concat(a.image.posterLandscape) }), "TVOD" === a.priceType && D.a.createElement(H.u, null, "Phim thuê")));
                    case "Collection":
                        return e = (e = a.alternateName || "").replace("<br>", "\n"), D.a.createElement(H.e, { collection: !0 }, D.a.createElement("img", { alt: a.alternateName, className: "hover-img", src: "image/".concat(a.posterLandscape), onError: t }), D.a.createElement(H.E, null, e));
                    default:
                        return D.a.createElement("img", { className: "img-landscape", onError: t, src: "image/".concat(a.image.posterLandscape) })
                }
                var e
            }(), "TVOD" === a.priceType && "TVOD" !== n.typeRibbon && "TopTen" !== n.typeRibbon && D.a.createElement(H.u, null, "Phim thuê"))
        }
        var x = !0,
            E = n(19),
            C = n.n(E);

        function w(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), n.push.apply(n, a)
            }
            return n
        }

        function A(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? w(Object(n), !0).forEach(function(e) { O(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
            }
            return t
        }

        function O(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function L(e) { return function(e) { if (Array.isArray(e)) return N(e) }(e) || function(e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }(e) || function(e, t) { if (!e) return; if ("string" == typeof e) return N(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t) }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

        function N(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a
        }

        function B(e, t) {
            var n = L(e).splice(0, 2 * t + 1),
                a = n.slice(0, t + 1),
                r = n.slice(t + 1, e.length);
            return r.length < t && 0 !== r.length && r.push(A({}, e[0])), e.length === t + 1 && r.push(A({}, e[0])), { prev: [], active: a, next: r }
        }

        function F(e, t) { return !(e.length <= t) && !I.isMobile }

        function j(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), n.push.apply(n, a)
            }
            return n
        }

        function W(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? j(Object(n), !0).forEach(function(e) { T(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
            }
            return t
        }

        function T(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function U(e, t) {
            return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [],
                    a = !0,
                    r = !1,
                    i = void 0;
                try { for (var o, l = e[Symbol.iterator](); !(a = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); a = !0); } catch (e) { r = !0, i = e } finally { try { a || null == l.return || l.return() } finally { if (r) throw i } }
                return n
            }(e, t) || function(e, t) { if (!e) return; if ("string" == typeof e) return S(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
        }

        function S(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a
        }
        var X = function(t) {
            function n(e) { e.target.src = "Original" === t.type || "TVOD" === t.type ? " image/original.svg" : " #" }
            return D.a.createElement(H.B, { key: t.index, slideShow: t.slideShow, typeRibbon: t.type }, D.a.createElement(H.d, { className: "card" }, "TopTen" == t.type ? D.a.createElement("div", { className: "placeholder-topten" }) : D.a.createElement("div", { className: "Original" == t.type || "TVOD" == t.type ? "img-placeholder portrait" : "img-placeholder" }), t.percent && D.a.createElement(H.t, null, D.a.createElement(H.r, null), D.a.createElement(H.s, { style: "width: ".concat(t.percent, "%") })), D.a.createElement(H.c, null, function() {
                switch (t.type) {
                    case "Original":
                        return D.a.createElement(P.Fragment, null, D.a.createElement(H.i, { alt: t.data.value.alternateName, onError: n, className: "hover-img-portrait", src: "image/".concat(t.data.value.image.posterOriginal) }), D.a.createElement(H.o, null), window.localStorage.lang && "en" == window.localStorage.lang ? t.data.value.image.titleOriginalEn && D.a.createElement(H.H, { src: "image/".concat(t.data.value.image.titleOriginalEn) }) : t.data.value.image.titleOriginalVn && D.a.createElement(H.H, { src: "image/".concat(t.data.value.image.titleOriginalVn) }), "TVOD" === t.data.value.priceType && D.a.createElement(H.u, null, "Phim thuê"));
                    case "TVOD":
                        return D.a.createElement(P.Fragment, null, D.a.createElement(H.i, { alt: t.data.value.alternateName, onError: n, className: "hover-img-portrait", src: "image/".concat(t.data.value.image.posterOriginal) }), D.a.createElement(H.o, null), window.localStorage.lang && "en" == window.localStorage.lang ? t.data.value.image.titleOriginalEn && D.a.createElement(H.H, { src: "image/".concat(t.data.value.image.titleOriginalEn) }) : t.data.value.image.titleOriginalVn && D.a.createElement(H.H, { src: "image/".concat(t.data.value.image.titleOriginalVn) }));
                    case "TopTen":
                        return D.a.createElement(H.e, { index: t.defaultIndex.toString(), topTen: !0 }, D.a.createElement(P.Fragment, null, D.a.createElement("div", { className: "topten-image" }, D.a.createElement("img", { alt: t.data.value.alternateName, className: "hover-img-topten", src: "image/".concat(t.data.value.image.posterLandscape), onError: n }), "TVOD" === t.data.value.priceType && D.a.createElement(H.u, null, "Phim thuê"))));
                    case "Collection":
                        var e = t.data.value.alternateName || "";
                        return e = e.replace("<br>", "\n"), D.a.createElement(H.e, null, D.a.createElement("img", { alt: t.data.value.alternateName, className: "hover-img", src: "image/".concat(t.data.value.posterLandscape), onError: n }), D.a.createElement(H.E, null, e));
                    default:
                        return D.a.createElement(P.Fragment, null, D.a.createElement("img", { alt: t.data.value.alternateName, className: "hover-img", src: "image/".concat(t.data.value.image.posterLandscape), onError: n }), "TVOD" === t.data.value.priceType && D.a.createElement(H.u, null, "Phim thuê"))
                }
            }())))
        };
        t.a = function(l) {
            for (var c = l.data.map(function(e, t) { return { value: e, index: t, animation: null, isHover: !1 } }), e = U(Object(P.useState)(function(e) {
                    if (I.isMobile) return I.isTablet ? 4 : 2;
                    var t = window.outerWidth,
                        n = 5;
                    switch ("TopTen" == e && (n = 4), !0) {
                        case t < 576:
                            n = 2;
                            break;
                        case t < 768:
                            n = 3;
                            break;
                        case t < 1200:
                            n = 4
                    }
                    return n
                }(l.ribbonType)), 2), s = e[0], n = e[1], t = Object(P.useRef)(), a = U(Object(P.useState)(!1), 2), u = a[0], o = a[1], r = U(Object(P.useState)(F(c, s)), 2), d = r[0], i = r[1], p = U(Object(P.useState)(!0), 2), m = p[0], f = p[1], v = U(Object(P.useState)({ translate: 0, active: !0, list: B(c, s), dot: 1, duration: 1e3 }), 2), g = v[0], h = v[1], b = U(Object(P.useState)(!1), 2), y = b[0], x = b[1], E = Math.ceil(c.length / s), w = function(r) {
                    r = r || "next", u || o(!0);
                    var e, t, n, i = g.list,
                        a = (t = s, n = r, (e = i).active.length === t + 1 && 0 === e.next.length ? -100 / t : "next" === n ? -100 / t * e.next.length : 100 / t * e.prev.length);
                    h(W(W({}, g), {}, { active: !0, translate: g.translate + a })), setTimeout(function() {
                        var e;
                        e = "next" === r ? g.dot + 1 > E ? 1 : g.dot + 1 : g.dot - 1 < 1 ? E : g.dot - 1;
                        var t = function(e, t, n, a) {
                                var r, i, o = L(t),
                                    l = t[t.length - 1].index,
                                    c = t[0].index,
                                    s = 0;
                                if (e.length === n + 1 && t.length < n + 2) return o.push(e[0]), o;
                                if (t[0].index === t[t.length - 1].index && "next" === a && t[0].index === n) return o.push(e[0]), o.shift(), o;
                                if (t[0].index === t[t.length - 1].index && "next" !== a && 0 === t[0].index) return o.unshift(e[e.length - 1]), o.pop(), o;
                                if (i = "next" === a ? (r = l + 1, l + n) : (r = c - 1, c - n), o[o.length - 1].index === e.length - 1 && "next" === a) return o.push(e[0]), o.shift(), o;
                                if (0 === o[0].index && "prev" === a) return o.unshift(e[e.length - 1]), o.pop(), o;
                                if ("next" === a)
                                    for (var u = r; u <= i; u++) { s++; var d = A({}, e[u]); if (o.push(d), e.length - 1 === u && s < n) { o.push(A({}, e[0])), s++; break } } else
                                        for (var p = r; i <= p; p--) { s++; var m = A({}, e[p]); if (o.unshift(m), 0 === p && s < n) { o.unshift(A({}, e[e.length - 1])), s++; break } }
                                if (t.length < n + 2) o.splice(0, s - 1);
                                else if ("next" === a) o.splice(0, s);
                                else {
                                    var f = o.length;
                                    o.splice(f - s, f - 1)
                                }
                                return o
                            }(c, i.active, s, r),
                            n = function(e, t, n) {
                                var a = [],
                                    r = [];
                                e = L(e);
                                for (var i = t[0].index, o = t[t.length - 1].index, l = 0 < i - 1 ? i - 1 : 0, c = 0 <= l - n ? l - n + 1 : 0, s = c; s <= l; s++) c == l && 6 === e.length || a.push(e[s]);
                                if (a.length < n) {
                                    var u = 0 == c ? e.length - 1 : l - 1;
                                    a.unshift(e[u])
                                }
                                for (var d = e.length - 1, p = o + 1 < d ? o + 1 : d, m = p + parseInt(n) - 1 >= d ? d : p + parseInt(n) - 1, f = p; f <= m; f++) p === m && 6 === e.length || r.push(e[f]);
                                if (r.length < n) {
                                    var v = d < 1 + m ? 0 : 1 + m;
                                    r.push(e[v])
                                }
                                return o === e.length - 1 && (r = [e[0]]), 0 === i && (a = [e[e.length - 1]]), { prev: a, active: t, next: r }
                            }(c, t, s),
                            a = -(100 / s * (n.prev.length + 1));
                        h(W(W({}, g), {}, { dot: e, active: !1, translate: a, list: n }))
                    }, g.duration)
                }, O = function(e) { h(W(W({}, g), {}, { list: W(W({}, g.list), {}, { active: e }) })) }, N = [], j = 1; j <= E; j++) g.dot === j ? N.push(!0) : N.push(!1);

            function T() {
                var e = window.outerWidth,
                    t = 5;
                switch (console.log(e), "TopTen" == l.ribbonType && (t = 4), !0) {
                    case e <= 576:
                        t = 2;
                        break;
                    case e <= 768 && 576 < e:
                        t = 3;
                        break;
                    case e <= 1200 && 768 < e:
                        t = 4
                }
                n(t)
            }
            var S = Object(P.useRef)();
            Object(P.useEffect)(function() {
                if (!I.isMobile) return $(window).on("resize", C.a.debounce(T, 500)),
                    function() { $(window).off("resize", C.a.debounce(T, 500)) }
            }, []), Object(P.useEffect)(function() { I.isMobile && (S.current.scrollLeft = 0), c = l.data.map(function(e, t) { return { value: e, index: t, animation: null, isHover: !1 } }), o(!1), i(F(c, s)), h({ translate: 0, active: !0, list: B(c, s), dot: 1, duration: 1e3 }), E = Math.ceil(c.length / s); for (var e = g.dot, t = [], n = 1; n <= E; n++) e === n ? t.push(!0) : t.push(!1) }, [l.data, s]);
            var k = g.list;
            g.dot;
            return D.a.createElement(H.x, { ref: t, className: "row-container", "data-list": l.slug, id: "row-".concat(l.index) }, D.a.createElement(H.f, null, D.a.createElement(H.y, null, I.isMobile ? D.a.createElement(H.D, { slideShow: s, ref: S, topTen: "TopTen" === l.ribbonType }, l.data.map(function(e, t) { return D.a.createElement(V, { typeRibbon: l.ribbonType, item: e, key: t, defaultIndex: t, slug: l.slugRibbon, displayNameVi: l.title }) })) : D.a.createElement(H.z, { onMouseLeave: function() { x(!1) } }, d && D.a.createElement(H.b, { swiped: u, onClick: function() { m && (f(!1), w("prev"), setTimeout(function() { f(!0) }, g.duration)) }, onMouseEnter: function() { return x(!1) } }, D.a.createElement(z.a, null)), D.a.createElement(H.C, null, 1 < N.length && D.a.createElement(H.J, { className: "slide-dots" }, N.map(function(e, t) { return D.a.createElement(H.h, { key: t, active: e }) })), D.a.createElement(H.A, { swiped: u, animate: g.active, translate: g.translate, duration: g.duration, clickArrow: m }, k.prev.map(function(e, t) {
                var n = null;
                e.value.extra && "CntWatching" == l.ribbonType && (n = e.value.extra.continueAt / e.value.extra.duration * 100);
                var a = C.a.findIndex(c, { value: { titleId: e.value.titleId } });
                return D.a.createElement(X, { index: t, data: e, key: e.value._id, slideShow: s, type: l.ribbonType, percent: n, titleOriginal: l.titleOriginal, defaultIndex: a })
            }), k.active.map(function(e, t) {
                var n, a = u ? 1 : 0,
                    r = d ? k.active.length - 2 : k.active.length - 1;
                n = t == a ? "first" : t == r ? "last" : "center";
                var i = null;
                e.value.extra && "CntWatching" == l.ribbonType && (i = e.value.extra.continueAt / e.value.extra.duration * 100);
                var o = C.a.findIndex(c, { value: { titleId: e.value.titleId } });
                return D.a.createElement(M, { key: e.value._id, setHoverActive: x, hoverActive: y, index: t, data: e, type: n, setItemHover: O, listActive: k.active, slideShow: s, typeRibbon: l.ribbonType, setClickArrow: f, percent: i, titleOriginal: l.titleOriginal, hasTrailer: e.value.hasTrailer, defaultIndex: o, isRelated: l.isRelated, title: l.title, slugRibbon: l.slugRibbon })
            }), k.next.map(function(e, t) {
                var n = null;
                e.value.extra && "CntWatching" == l.ribbonType && (n = e.value.extra.continueAt / e.value.extra.duration * 100);
                var a = C.a.findIndex(c, { value: { titleId: e.value.titleId } });
                return D.a.createElement(X, { index: t, data: e, key: e.value._id, slideShow: s, type: l.ribbonType, percent: n, titleOriginal: l.titleOriginal, defaultIndex: a })
            }))), d && D.a.createElement(H.a, { onClick: function() { m && (f(!1), w("next"), setTimeout(function() { f(!0) }, g.duration)) }, onMouseEnter: function() { return x(!1) } }, D.a.createElement(R, null))))))
        }
    },
    34: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n.n(a);
        t.a = function() { return r.a.createElement("svg", { viewBox: "0 0 492 492", width: "30px", id: "arrow-left" }, r.a.createElement("path", { d: "M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z", "data-original": "#000000", className: "active-path", "data-old_color": "#000000" })) }
    },
    343: function(e, t, n) { e.exports = n(346) },
    346: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0),
            l = n.n(a),
            r = n(23),
            c = n.n(r),
            s = n(15),
            i = n(9),
            u = n.n(i),
            d = n(4),
            p = n(58),
            m = n(1);

        function o() { return (o = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]) } return e }).apply(this, arguments) }

        function f(e) { return l.a.createElement("svg", o({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 24, height: 24, viewBox: "0 0 24 24" }, e), l.a.createElement("defs", null, l.a.createElement("path", { id: "prefix__a", d: "M0 0h24v24H0z" })), l.a.createElement("g", { fill: "none", fillRule: "evenodd" }, l.a.createElement("mask", { id: "prefix__b", fill: "#fff" }, l.a.createElement("use", { xlinkHref: "#prefix__a" })), l.a.createElement("path", { fill: "#FFF", d: "M7.973 0l-2.83 2.83 9.17 9.17-9.17 9.17L7.973 24l12-12z", mask: "url(#prefix__b)" }))) }
        $(document).ready(function() {
            $(".block-ribbon").each(function(e, t) {
                var n = $(t).data("type"),
                    a = $(t).data("title"),
                    r = $(t).data("ribbon"),
                    i = $(t).data("slug"),
                    o = $(t).data("hideViewMore");
                r && c.a.render(l.a.createElement(u.a, { key: i, once: !0, offset: d.isMobile ? 100 : 250, height: d.isMobile ? 100 : 250, placeholder: l.a.createElement(p.a, null) }, l.a.createElement(m.K, null, "Landscape" !== n && "TVOD" !== n && "ComingSoon" !== n || o ? l.a.createElement(m.I, null, a) : l.a.createElement("a", { href: "TVOD" === n ? "/browse/rental" : "/browse/ribbon/" + i }, l.a.createElement(m.I, null, a, l.a.createElement(f, null)))), l.a.createElement(s.a, { slugRibbon: i, title: a, ribbonType: n, index: e, data: r })), t)
            })
        })
    },
    58: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n.n(a),
            i = n(1),
            o = " #";
        t.a = function() { return r.a.createElement(i.w, null, r.a.createElement(i.F, null), r.a.createElement(i.v, null, r.a.createElement(i.j, { src: o, className: "img-loading" }), r.a.createElement(i.j, { src: o, className: "img-loading" }), r.a.createElement(i.j, { src: o, className: "img-loading" }), r.a.createElement(i.j, { src: o, className: "img-loading" }), r.a.createElement(i.j, { src: o, className: "img-loading" }), r.a.createElement(i.j, { src: o, className: "img-loading" }))) }
    }
});