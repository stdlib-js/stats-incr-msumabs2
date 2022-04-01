// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-msum@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var e=t.isPrimitive,s=i,n=r;var m=function(t){var i;if(!e(t))throw new TypeError(n("invalid argument. Must provide a positive integer. Value: `%s`.",t));return i=s(t),function(t){if(0===arguments.length)return i();return i(t*t)}};export{m as default};
//# sourceMappingURL=index.mjs.map
