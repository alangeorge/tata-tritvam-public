(self.webpackChunktata_tritvam_org=self.webpackChunktata_tritvam_org||[]).push([[472],{472:function(D,c){var a,A=typeof self<"u"?self:this,b=function(){function a(){this.fetch=!1,this.DOMException=A.DOMException}return a.prototype=A,new a}();a=b,function(f){var u_searchParams="URLSearchParams"in a,u_iterable="Symbol"in a&&"iterator"in Symbol,u_blob="FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),u_formData="FormData"in a,u_arrayBuffer="ArrayBuffer"in a;if(u_arrayBuffer)var R=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],U=ArrayBuffer.isView||function(e){return e&&R.indexOf(Object.prototype.toString.call(e))>-1};function y(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function B(e){return"string"!=typeof e&&(e=String(e)),e}function w(e){var t={next:function(){var r=e.shift();return{done:void 0===r,value:r}}};return u_iterable&&(t[Symbol.iterator]=function(){return t}),t}function n(e){this.map={},e instanceof n?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function v(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function g(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function x(e){var t=new FileReader,r=g(t);return t.readAsArrayBuffer(e),r}function T(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function O(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:u_blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:u_formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:u_searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u_arrayBuffer&&u_blob&&function P(e){return e&&DataView.prototype.isPrototypeOf(e)}(e)?(this._bodyArrayBuffer=T(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u_arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||U(e))?this._bodyArrayBuffer=T(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):u_searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u_blob&&(this.blob=function(){var e=v(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?v(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(x)}),this.text=function(){var e=v(this);if(e)return e;if(this._bodyBlob)return function S(e){var t=new FileReader,r=g(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function F(e){for(var t=new Uint8Array(e),r=new Array(t.length),s=0;s<t.length;s++)r[s]=String.fromCharCode(t[s]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},u_formData&&(this.formData=function(){return this.text().then(M)}),this.json=function(){return this.text().then(JSON.parse)},this}n.prototype.append=function(e,t){e=y(e),t=B(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},n.prototype.delete=function(e){delete this.map[y(e)]},n.prototype.get=function(e){return e=y(e),this.has(e)?this.map[e]:null},n.prototype.has=function(e){return this.map.hasOwnProperty(y(e))},n.prototype.set=function(e,t){this.map[y(e)]=B(t)},n.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},n.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),w(e)},n.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),w(e)},n.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),w(e)},u_iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var j=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function l(e,t){var r=(t=t||{}).body;if(e instanceof l){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new n(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&null!=e._bodyInit&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new n(t.headers)),this.method=function I(e){var t=e.toUpperCase();return j.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function M(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var s=r.split("="),o=s.shift().replace(/\+/g," "),i=s.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(i))}}),t}function H(e){var t=new n;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(s){var o=s.split(":"),i=o.shift().trim();if(i){var m=o.join(":").trim();t.append(i,m)}}),t}function h(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new n(t.headers),this.url=t.url||"",this._initBody(e)}l.prototype.clone=function(){return new l(this,{body:this._bodyInit})},O.call(l.prototype),O.call(h.prototype),h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},h.error=function(){var e=new h(null,{status:0,statusText:""});return e.type="error",e};var q=[301,302,303,307,308];h.redirect=function(e,t){if(-1===q.indexOf(t))throw new RangeError("Invalid status code");return new h(null,{status:t,headers:{location:e}})},f.DOMException=a.DOMException;try{new f.DOMException}catch{f.DOMException=function(t,r){this.message=t,this.name=r;var s=Error(t);this.stack=s.stack},f.DOMException.prototype=Object.create(Error.prototype),f.DOMException.prototype.constructor=f.DOMException}function _(e,t){return new Promise(function(r,s){var o=new l(e,t);if(o.signal&&o.signal.aborted)return s(new f.DOMException("Aborted","AbortError"));var i=new XMLHttpRequest;function m(){i.abort()}i.onload=function(){var p={status:i.status,statusText:i.statusText,headers:H(i.getAllResponseHeaders()||"")};p.url="responseURL"in i?i.responseURL:p.headers.get("X-Request-URL"),r(new h("response"in i?i.response:i.responseText,p))},i.onerror=function(){s(new TypeError("Network request failed"))},i.ontimeout=function(){s(new TypeError("Network request failed"))},i.onabort=function(){s(new f.DOMException("Aborted","AbortError"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&u_blob&&(i.responseType="blob"),o.headers.forEach(function(p,E){i.setRequestHeader(E,p)}),o.signal&&(o.signal.addEventListener("abort",m),i.onreadystatechange=function(){4===i.readyState&&o.signal.removeEventListener("abort",m)}),i.send(typeof o._bodyInit>"u"?null:o._bodyInit)})}_.polyfill=!0,a.fetch||(a.fetch=_,a.Headers=n,a.Request=l,a.Response=h),f.Headers=n,f.Request=l,f.Response=h,f.fetch=_,Object.defineProperty(f,"__esModule",{value:!0})}({}),b.fetch.ponyfill=!0,delete b.fetch.polyfill;var d=b;(c=d.fetch).default=d.fetch,c.fetch=d.fetch,c.Headers=d.Headers,c.Request=d.Request,c.Response=d.Response,D.exports=c}}]);