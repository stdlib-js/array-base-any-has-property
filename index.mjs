// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@v0.2.2-esm/index.mjs";function s(s,n){return r(s)?function(r,s){var n,i;for(n=t(r),i=0;i<r.length;i++)if(e(n(r,i),s))return!0;return!1}(s,n):function(r,t){var s;for(s=0;s<r.length;s++)if(e(r[s],t))return!0;return!1}(s,n)}export{s as default};
//# sourceMappingURL=index.mjs.map
