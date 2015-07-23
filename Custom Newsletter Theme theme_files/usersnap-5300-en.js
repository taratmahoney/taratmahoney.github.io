(function() {
var f = void 0, h = !0, k = null, m = !1, n, p = {za:"//d3mvnvhjmkxpjz.cloudfront.net/", Rb:"//api.usersnap.com/report/sessionkey", Pb:"//api.usersnap.com/report/html2png", Qb:"//api.usersnap.com/report/sendReport", xc:"//api.usersnap.com/report/sendScreenshot", wc:"//api.usersnap.com/report/carbonCopy", Ua:m, gb:"http://usersnap.com/yuno", Ob:"5300", Fa:"5300", wd:""}, r = {cd:"Use the highlighter tool to emphasize proposals and issues on the page.", bd:"We are serious about your privacy. Black out areas with personal information.", 
ed:"Add sticky notes to the webpage if highlights and blackouts are not expressive enough.", fd:"Use this pen to draw something on your screen.", Sd:"Send a screenshot of this site.", Qd:"Display the help screen.", Rd:"Minimize window.", dd:"Maximize window.", Yd:"Do not show this window next time.", Zd:"Hide help window.", Mc:"Pen", Kc:"Highlight", Ic:"Blackout", Lc:"Note", rd:"Next", Jc:"Cancel", Nc:"Send", $d:"Send copy", sd:"No, thanks.", tb:"Need help?", qd:"Close", sb:"Close this window", td:"Ok", 
Ed:"Please add comments here", Uc:"Your email address", Wc:"The specified email address is not valid!", Hd:"Please place add at least one note or highlight an area!", ce:"There are highlights and/or notes which are not in your current view, these elements will not be sent.", Jd:"Submitting your screenshot", Fd:"Email:", be:"Your screenshot has been sent!<br>Do you want to get a copy of the feedback in your mailbox?", Dd:"The specified API key for this website is invalid!", Td:"Send a screenshot with your annotations.", 
Md:"Enter note here.", ad:"Use this arrow to point out something!", Hc:"Arrow", oc:"Please specify a comment!", Vc:"Please enter an email address!", Gd:"Feedback?", Id:"A screenshot is attached!"}, s;
s || (s = {});
(function() {
  function a(a) {
    return 10 > a ? "0" + a : a
  }
  function b(a) {
    e.lastIndex = 0;
    return e.test(a) ? '"' + a.replace(e, function(a) {
      var b = l[a];
      return"string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }) + '"' : '"' + a + '"'
  }
  function d(a, c) {
    var e, l, M, R, da = g, S, A = c[a];
    A && ("object" === typeof A && "function" === typeof A.ob) && (A = A.ob(a));
    "function" === typeof q && (A = q.call(c, a, A));
    switch(typeof A) {
      case "string":
        return b(A);
      case "number":
        return isFinite(A) ? String(A) : "null";
      case "boolean":
      ;
      case "null":
        return String(A);
      case "object":
        if(!A) {
          return"null"
        }
        g += j;
        S = [];
        if("[object Array]" === Object.prototype.toString.apply(A)) {
          R = A.length;
          for(e = 0;e < R;e += 1) {
            S[e] = d(e, A) || "null"
          }
          M = 0 === S.length ? "[]" : g ? "[\n" + g + S.join(",\n" + g) + "\n" + da + "]" : "[" + S.join(",") + "]";
          g = da;
          return M
        }
        if(q && "object" === typeof q) {
          R = q.length;
          for(e = 0;e < R;e += 1) {
            "string" === typeof q[e] && (l = q[e], (M = d(l, A)) && S.push(b(l) + (g ? ": " : ":") + M))
          }
        }else {
          for(l in A) {
            Object.prototype.hasOwnProperty.call(A, l) && (M = d(l, A)) && S.push(b(l) + (g ? ": " : ":") + M)
          }
        }
        M = 0 === S.length ? "{}" : g ? "{\n" + g + S.join(",\n" + g) + "\n" + da + "}" : "{" + S.join(",") + "}";
        g = da;
        return M
    }
  }
  "function" !== typeof Date.prototype.ob && (Date.prototype.ob = function() {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : k
  }, String.prototype.ob = Number.prototype.ob = Boolean.prototype.ob = function() {
    return this.valueOf()
  });
  var c = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, g, j, l = {"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", '"':'\\"', "\\":"\\\\"}, q;
  "function" !== typeof s.stringify && (s.stringify = function(a, b, c) {
    var e;
    j = g = "";
    if("number" === typeof c) {
      for(e = 0;e < c;e += 1) {
        j += " "
      }
    }else {
      "string" === typeof c && (j = c)
    }
    if((q = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) {
      throw Error("USJSON.stringify");
    }
    return d("", {"":a})
  });
  "function" !== typeof s.parse && (s.parse = function(a, b) {
    function d(a, c) {
      var e, g, j = a[c];
      if(j && "object" === typeof j) {
        for(e in j) {
          Object.prototype.hasOwnProperty.call(j, e) && (g = d(j, e), g !== f ? j[e] = g : delete j[e])
        }
      }
      return b.call(a, c, j)
    }
    var e;
    a = String(a);
    c.lastIndex = 0;
    c.test(a) && (a = a.replace(c, function(a) {
      return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }));
    if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
      return e = eval("(" + a + ")"), "function" === typeof b ? d({"":e}, "") : e
    }
    throw new SyntaxError("USJSON.parse");
  })
})();
function aa(a) {
  return a ? /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a) : m
}
function ba() {
  var a = window.location.href, b = document.createElement("a");
  b.href = a;
  a = b.protocol + "//" + b.hostname;
  "" !== b.port && (a += ":" + b.port);
  return a
}
function ca() {
  return/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera)
}
function ea() {
  var a = /Chrome/i, b = navigator.userAgent || navigator.vendor || window.opera;
  return/Android/i.test(b) && !a.test(b)
}
function t(a, b) {
  var d = arguments;
  return d[0].replace(/\{(\d+)\}/g, function(a, b) {
    b = parseInt(b, 10);
    return"undefined" != typeof d[b + 1] ? d[b + 1] : a
  })
}
function u(a, b) {
  "undefined" === typeof b && (b = document);
  var d = k;
  b.Kd ? d = b.Kd[a] : b.all ? (d = b.all[a], "undefined" === typeof d && (d = k)) : b.getElementById && (d = b.getElementById(a));
  return d
}
function v() {
  return 0 <= navigator.userAgent.search(/MSIE/) || 0 <= navigator.userAgent.search(/Trident/)
}
function fa(a, b) {
  var d = {width:a, height:b};
  d.width = document.documentElement.clientWidth;
  return d
}
function w() {
  return 0 <= navigator.userAgent.search(/MSIE 8/)
}
function x() {
  return 0 <= navigator.userAgent.search(/MSIE 7/)
}
function ga(a, b) {
  "undefined" === typeof b && (b = window);
  return!a.which && a.button !== f ? a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0 : 0 <= navigator.userAgent.search(/MSIE 9/) ? b.event.button : a.xd !== f ? a.xd : a.which
}
function B(a) {
  return v() ? a.srcElement : a.target
}
function ha(a) {
  a = a.replace(RegExp("[" + (f || "\\s") + "]+$", "g"), "");
  return a.replace(RegExp("^[" + (f || "\\s") + "]+", "g"), "")
}
function C(a, b) {
  if(a !== k) {
    for(var d = b.split(";"), c = 0;c < d.length;c++) {
      "" !== ha(d[c].split(":")[0]) && (a.style[ha(d[c].split(":")[0])] = ha(d[c].split(":")[1]))
    }
  }
}
function D(a, b) {
  a !== k && (0 <= navigator.userAgent.search(/MSIE 7/) ? a.setAttribute("className", b) : a.setAttribute("class", b))
}
function ia(a) {
  if(a === k) {
    return""
  }
  var b = k;
  return b = 0 <= navigator.userAgent.search(/MSIE 7/) ? a.getAttribute("className") : a.getAttribute("class")
}
function ja(a) {
  if(a === k) {
    return m
  }
  a = ia(a);
  if(a !== k) {
    a = a.split(" ");
    for(var b = 0;b < a.length;b++) {
      if("us_report_note" === a[b]) {
        return h
      }
    }
  }
  return m
}
function ka() {
  var a = document;
  return Math.max(Math.max(a.body.scrollHeight, a.documentElement.scrollHeight), Math.max(a.body.offsetHeight, a.documentElement.offsetHeight), Math.max(a.body.clientHeight, a.documentElement.clientHeight))
}
function la() {
  var a = document;
  return Math.max(Math.max(a.body.scrollWidth, a.documentElement.scrollWidth), Math.max(a.body.offsetWidth, a.documentElement.offsetWidth), Math.max(a.body.clientWidth, a.documentElement.clientWidth))
}
function E(a, b, d) {
  a !== k && (a.removeEventListener ? a.removeEventListener(b, d, m) : a.detachEvent && "undefined" !== typeof d && a.detachEvent("on" + b, d))
}
function F(a, b, d) {
  a !== k && (a.addEventListener ? a.addEventListener(b, d, m) : a.attachEvent && a.attachEvent("on" + b, d))
}
function ma() {
  var a, b;
  x() || w() ? (b = document.documentElement.scrollTop, a = document.documentElement.scrollLeft) : (b = window.pageYOffset, a = window.pageXOffset);
  return[a, b]
}
function na(a, b, d) {
  var c = new Date, e = new Date;
  if("undefined" === typeof d || d === k || 0 === d) {
    d = 365
  }
  e.setTime(c.getTime() + 864E5 * d);
  document.cookie = a + "=" + escape(b) + ";expires=" + e.toGMTString() + "; path=/"
}
function oa(a) {
  var b = " " + document.cookie, d = b.indexOf(" " + a + "=");
  -1 === d && (d = b.indexOf(";" + a + "="));
  if(-1 === d || "" === a) {
    return""
  }
  var c = b.indexOf(";", d + 1);
  -1 === c && (c = b.length);
  return unescape(b.substring(d + a.length + 2, c))
}
function G() {
  var a, b;
  "undefined" != typeof window.innerWidth ? (a = window.innerWidth, b = window.innerHeight) : "undefined" !== typeof document.documentElement && "undefined" !== typeof document.documentElement.clientWidth && 0 !== document.documentElement.clientWidth ? (a = document.documentElement.clientWidth, b = document.documentElement.clientHeight) : (a = document.getElementsByTagName("body")[0].clientWidth, b = document.getElementsByTagName("body")[0].clientHeight);
  if(x() || w()) {
    ka() > b && (a += 17)
  }
  return{width:a, height:b}
}
function pa(a, b) {
  var d;
  a.currentStyle ? d = a.currentStyle[b] : window.getComputedStyle && (d = document.defaultView.getComputedStyle(a, k).getPropertyValue(b));
  return d
}
function J(a, b, d) {
  "undefined" === typeof d && (d = document);
  return a === k || a === d ? m : "undefined" === typeof a.getAttribute ? J(a.parentNode, b, d) : a.getAttribute("id") === b ? h : a.getAttribute("class") === b ? h : a.getAttribute("className") === b ? h : J(a.parentNode, b, d)
}
var qa = function() {
  function a() {
    if(document.body !== k) {
      var I = z;
      x() ? I = q : !isNaN(window.screen.logicalXDPI) && !isNaN(window.screen.systemXDPI) ? I = l : window.navigator.msMaxTouchPoints ? I = j : "orientation" in window && "string" === typeof document.body.style.webkitMarquee ? I = g : "string" === typeof document.body.style.webkitMarquee ? I = e : 0 <= navigator.userAgent.indexOf("Opera") ? I = b : window.devicePixelRatio ? I = d : 0.0010 < c().zoom && (I = c);
      y = I
    }else {
      H--, 0 <= H && window.setTimeout(a, 200)
    }
  }
  function b() {
    var a = window.top.outerWidth / window.top.innerWidth, a = Math.round(100 * a) / 100;
    return{zoom:a, wa:a * (window.devicePixelRatio || 1)}
  }
  function d() {
    return{zoom:c().zoom, wa:window.devicePixelRatio || 1}
  }
  function c() {
    function a(b, c, e) {
      var g = (b + c) / 2;
      return 0 >= e || 1E-4 > c - b ? g : d("(min--moz-device-pixel-ratio:" + g + ")").matches ? a(g, c, e - 1) : a(b, g, e - 1)
    }
    var b, d, c, e;
    window.matchMedia ? d = window.matchMedia : (b = document.getElementsByTagName("head")[0], c = document.createElement("style"), b.appendChild(c), e = document.createElement("div"), e.className = "mediaQueryBinarySearch", e.style.display = "none", document.body.appendChild(e), d = function(a) {
      var b = m;
      x() || (c.sheet.insertRule("@media " + a + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0), b = "underline" == window.getComputedStyle(e, k).textDecoration, c.sheet.deleteRule(0));
      return{matches:b}
    });
    var g = a(0, 10, 20);
    e && (b.removeChild(c), document.body.removeChild(e));
    b = Math.round(100 * g) / 100;
    return{zoom:b, wa:b}
  }
  function e() {
    function a(b) {
      var d = [0.29, 0.42, 0.58, 0.71, 0.83, 0.95, 1.05, 1.18, 1.38, 1.63, 1.88, 2.25, 2.75, 3.5, 4.5, 100], c = [0.25, "1/3", 0.5, "2/3", 0.75, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5], e;
      for(e = 0;16 > e;e++) {
        if(b < d[e]) {
          return eval(c[e])
        }
      }
    }
    var b, d;
    if("undefined" !== typeof window.console.profiles) {
      b = window.console.profiles.length;
      window.console.profile();
      window.console.profileEnd();
      if(window.console.profiles.length > b) {
        return z()
      }
      b = window.outerWidth;
      d = window.innerWidth;
      b = a((b - 16) / d);
      return{zoom:b, wa:b * (window.devicePixelRatio || 1)}
    }
    return z()
  }
  function g() {
    var a = (90 == Math.abs(window.orientation) ? window.screen.height : window.screen.width) / window.innerWidth;
    return{zoom:a, wa:a * (window.devicePixelRatio || 1)}
  }
  function j() {
    var a = Math.round(100 * (document.documentElement.offsetHeight / window.innerHeight)) / 100;
    return{zoom:a, wa:a * (window.devicePixelRatio || 1)}
  }
  function l() {
    var a = Math.round(100 * (window.screen.deviceXDPI / window.screen.logicalXDPI)) / 100;
    return{zoom:a, wa:a * (window.devicePixelRatio || 1)}
  }
  function q() {
    var a = document.body.getBoundingClientRect(), a = (a.right - a.left) / document.body.offsetWidth, a = Math.round(100 * a) / 100;
    return{zoom:a, wa:a}
  }
  function z() {
    return{zoom:1, wa:1}
  }
  var y = k, H = 5;
  a();
  return{zoom:function() {
    return y().zoom
  }, ae:function() {
    return y().wa
  }}
}(), p, K, ra, sa, ta, ua;
p.Ua || (window.UserSnap = {}, r.b_pen = r.Mc, r.b_arrow = r.Hc, r.b_blackout = r.Ic, r.b_highlight = r.Kc, r.b_note = r.Lc, r.t_pen = r.fd, r.t_arrow = r.ad, r.t_blackout = r.bd, r.t_highlight = r.cd, r.t_note = r.ed);
function va(a) {
  !v() && p.Ua === h && window.console.log.apply(window.console, arguments)
}
function wa(a) {
  !v() && p.Ua === h && window.console.warn.apply(window.console, arguments)
}
function xa(a) {
  !v() && p.Ua === h && window.console.error.apply(window.console, arguments)
}
var L = k;
K = function(a) {
  L !== k ? xa("Only one concurrent request is possible!") : (this.mb = k, a.mb && (this.mb = a.mb), this.mb.callback = "UserSnap.util.JsonP.callback", this.nb = document.createElement("script"), this.nb.type = "text/javascript", L = {va:a.va, scope:a.scope, url:a.url, sc:this.nb, Xa:m}, this.url = a.url, x() || w() ? this.nb.onreadystatechange = function() {
    L !== k && L.sc === this && "loaded" === this.readyState && window.setTimeout(function() {
      if(L !== k) {
        var a = L.va, d = L.scope;
        L = k;
        a.call(d, k, m)
      }
    }, 100)
  } : this.nb.onerror = function() {
    if(L !== k && L.sc === this) {
      var a = L.va, d = L.scope;
      L = k;
      window.setTimeout(function() {
        a.call(d, k, m)
      }, 100)
    }
  })
};
K.prototype.Db = function() {
  var a;
  a = this.mb;
  var b = [], d;
  for(d in a) {
    "function" !== typeof a[d] && b.push(d + "=" + encodeURIComponent(a[d]))
  }
  a = b.join("&");
  b = this.url + "?" + a;
  1 < a.length && (b += "&dc=" + (new Date).getTime());
  this.nb.src = b;
  document.getElementsByTagName("head")[0].appendChild(this.nb);
  L.Xa = h
};
K.Db = function(a) {
  (new K(a)).Db()
};
K.yd = function() {
  L !== k && (document.getElementsByTagName("head")[0].removeChild(L.sc), L = k)
};
K.va = function(a) {
  if(L === k || !L.Xa) {
    xa("No request running")
  }else {
    var b = L.va, d = L.scope;
    L = k;
    b.call(d, a, h)
  }
};
p.Ua || (window.UserSnap.util = {}, window.UserSnap.util.JsonP = K, window.UserSnap.util.JsonP.callback = K.va);
var ya = k, N = k;
function za(a) {
  N === k && (N = ya.contentWindow.document);
  this.ha = N.createElement("iframe");
  this.fb = "iframe_post" + (new Date).getTime();
  N.body.appendChild(this.ha);
  this.ha.style.display = "none";
  this.ha.contentWindow.name = this.fb;
  this.H = m;
  var b = this;
  this.qa = k;
  "function" === typeof a.kb && (this.qa = a.kb);
  var d = "", d = 0 === a.url.indexOf("http") ? a.url : document.location.protocol + a.url;
  v() ? F(this.ha, "load", function() {
    b.H && (Aa(b, d), b.H = m, Ba(b), Ca = m, Da = k, Ea())
  }) : this.ha.onload = function() {
    b.H && (Aa(b, d), b.H = m, Ba(b), Ca = m, Da = k, Ea())
  };
  this.Q = N.createElement("form");
  this.Q.style.display = "none";
  this.Q.target = this.fb;
  this.Q.action = a.url;
  this.Q.method = "POST";
  this.Q.acceptCharset = "utf-8";
  N.body.appendChild(this.Q);
  (w() || x()) && O(this, "ieencoding", "\u9760")
}
var Ca = m, P = [], Da = k;
function Ea() {
  0 < P.length && !Ca && (Ca = h, Da = P.shift(), Da.Db())
}
function Fa(a) {
  for(var b = 0;b < P.length;b++) {
    if("undefined" !== typeof P[b] && "id" === P[b].fb) {
      P.splice(b, 1);
      return
    }
  }
  b = Da;
  b !== k && b.fb === a && (Ba(b), Ca = m, Da = k)
}
F(window, "beforeunload", function(a) {
  if(Da !== k || 0 < P.length) {
    return"undefined" === typeof a && (a = window.event), a && (a.returnValue = "Usersnap is currently uploading a report, please wait a few seconds otherwise your report will be LOST!"), "Usersnap is currently uploading a report, please wait a few seconds otherwise your report will be LOST!"
  }
});
var Ga = 0, Ha = [];
function Aa(a, b) {
  x() || (Ga++, Ha.push(a), window.setTimeout(function() {
    0 !== Ga && (Ga--, a.qa !== k && a.qa.apply(window, ["timeout"]))
  }, 2E3), a.ha.contentWindow.postMessage("d50c90d4-cda9-4b07-877c-66ca45f3c241", b))
}
function Ia(a) {
  a = a.data;
  var b = Ha.splice(0, 1);
  if(0 < b.length) {
    var b = b[0], d = k;
    try {
      d = s.parse(a)
    }catch(c) {
      return
    }
    "d50c90d4-cda9-4b07-877c-66ca45f3c241" !== d.originator ? Ha.splice(0, 0, b) : (Ga--, 1 !== d.RC && b !== k && b.qa !== k && b.qa.apply(window, ["postCB", d]))
  }
}
function Ba(a) {
  a.H && (v() || a.ha.contentWindow.stop());
  window.setTimeout(function() {
    a.ha !== k && (N.body.removeChild(a.Q), N.body.removeChild(a.ha), a.Q = k, a.ha = k)
  }, 500)
}
function O(a, b, d) {
  var c = N.createElement("input");
  c.type = "hidden";
  c.name = b;
  c.value = d;
  a.Q.appendChild(c)
}
za.prototype.Db = function() {
  this.H = h;
  this.Q.submit()
};
function Ja() {
  this.frame = this.Ea = k;
  this.eb = m;
  this.Ga = 0;
  this.jc = [];
  this.cb = {Ab:[]}
}
function Ka(a) {
  Q.a.cb.Ab.push(a)
}
Ja.prototype.Gb = function() {
  for(var a = 0;a < this.cb.Ab.length;a++) {
    this.cb.Ab[a].apply(window)
  }
};
function T(a) {
  return a.eb ? a.frame.contentWindow : k
}
function U(a) {
  return a.eb ? a.frame.contentWindow.document : k
}
function La(a, b) {
  "undefined" === typeof b && (b = []);
  var d;
  d = "";
  for(var c = 0;c < b.length;c++) {
    d += '<link rel="stylesheet" type="text/css" href="' + b[c] + '"/>'
  }
  a.open();
  a.write("<!DOCTYPE html>");
  a.write('<html class="us_sandbox_html">');
  a.write("<head>" + d + "</head>");
  a.write('<body class="us_sandbox_body" scroll="no"></body>');
  a.write("</html>");
  a.close()
}
Ja.prototype.Ab = function(a) {
  var b = document.createElement("style");
  b.setAttribute("type", "text/css");
  b.styleSheet ? b.styleSheet.cssText = "#us_sandbox {position: absolute;top: 0;left: 0;z-index: 2147483643;display: block;overflow: hidden;-webkit-user-select: none;-moz-user-select: -moz-none;-ms-user-select: none;-o-user-select: none;user-select: none;box-sizing: content-box !important;-webkit-box-sizing: content-box !important;-moz-box-sizing: content-box !important;-ms-box-sizing: content-box !important;-khtml-box-sizing: content-box !important;box-shadow: none !important;background-image: none;background-color: transparent;background-repeat: no-repeat;background: transparent;border: none !important;border-radius: none !important;-webkit-border-radius: none;-moz-border-radius: none;border-radius: none;transition: none;-moz-transition: none;-o-transition: none;-webkit-transition: none;padding: 0;margin: 0;filter: none;}#us_sandbox iframe {border: none !important;-webkit-user-select: none;-moz-user-select: -moz-none;-ms-user-select: none;-o-user-select: none;user-select: none;overflow: hidden;}" : 
  b.appendChild(document.createTextNode("#us_sandbox {position: absolute;top: 0;left: 0;z-index: 2147483643;display: block;overflow: hidden;-webkit-user-select: none;-moz-user-select: -moz-none;-ms-user-select: none;-o-user-select: none;user-select: none;box-sizing: content-box !important;-webkit-box-sizing: content-box !important;-moz-box-sizing: content-box !important;-ms-box-sizing: content-box !important;-khtml-box-sizing: content-box !important;box-shadow: none !important;background-image: none;background-color: transparent;background-repeat: no-repeat;background: transparent;border: none !important;border-radius: none !important;-webkit-border-radius: none;-moz-border-radius: none;border-radius: none;transition: none;-moz-transition: none;-o-transition: none;-webkit-transition: none;padding: 0;margin: 0;filter: none;}#us_sandbox iframe {border: none !important;-webkit-user-select: none;-moz-user-select: -moz-none;-ms-user-select: none;-o-user-select: none;user-select: none;overflow: hidden;}"));
  document.getElementsByTagName("head")[0].appendChild(b);
  this.Ea = document.createElement("div");
  this.Ea.setAttribute("id", "us_sandbox");
  this.Ea.setAttribute("unselectable", "on");
  b = G();
  b.width = la();
  var b = fa(b.width, b.height), d = ma(), c = "";
  if("static" !== pa(document.body, "position")) {
    var e = document.body.getBoundingClientRect();
    10 < e.left && (c += "margin-left: " + Math.floor(-1 * e.left) + "px;");
    25 < e.top && (c += "margin-top: " + Math.floor(-1 * e.top) + "px;")
  }
  C(this.Ea, "width: " + b.width + "px; height: " + b.height + "px;top:" + d[1] + "px;left:" + d[0] + "px;" + c);
  this.frame = document.createElement("iframe");
  C(this.frame, "width: " + b.width + "px; height: " + b.height + "px;");
  this.frame.setAttribute("frameBorder", "0");
  this.frame.setAttribute("unselectable", "on");
  this.frame.setAttribute("allowTransparency", "true");
  var g = this, j = 0;
  v() || ea() ? F(this.frame, "load", function() {
    if(0 === j) {
      j++;
      var b = g.frame.contentWindow.document;
      g.frame.contentWindow.name = "fr_" + (new Date).getTime();
      ea() && window.setTimeout(function() {
        1 === j && (j++, g.eb = h, g.Gb.apply(g))
      }, 2E3);
      La(b, a.ic)
    }else {
      1 === j && (j++, g.eb = h, g.Gb.apply(g))
    }
  }) : F(this.frame, "load", function() {
    var b = g.frame.contentWindow.document;
    g.frame.contentWindow.name = "fr_" + (new Date).getTime();
    La(b, a.ic);
    0 <= navigator.userAgent.search(/Firefox/) ? (b = new Image, b.onerror = function() {
      g.eb = h;
      g.Gb.apply(g)
    }, b.src = a.ic[0]) : (g.eb = h, g.Gb.apply(g))
  });
  this.Ga++;
  this.Ea.appendChild(this.frame);
  document.body.appendChild(this.Ea)
};
Ja.prototype.q = function(a) {
  this.frame = k;
  this.Ga--;
  "undefined" !== typeof a && this.jc.push(a);
  if(0 >= this.Ga) {
    document.body.removeChild(this.Ea);
    this.Ea = k;
    for(a = 0;a < this.jc.length;a++) {
      this.jc[a].call(window)
    }
    return h
  }
  return m
};
var Ma = "#us_report_button button {z-index: 2147483642;display: block;position: fixed !important;bottom: 0px;right: 0px;border: 0;background-color: transparent;cursor: pointer;box-shadow: none;border-radius: 0 0 0 0;opacity: 1;margin: 0 !important;font: 13px helvetica, arial, sans-serif !important;font-family: helvetica, arial, sans-serif !important;font-size: 13px !important;font-weight: bold !important;color: #717171;text-shadow: none !important;text-transform: none !important;overflow: hidden !important;outline: none;}#us_report_button button::-moz-focus-inner {border: 0;}#us_report_button button div.rotate {-webkit-transform: rotate(-90deg);-moz-transform: rotate(-90deg);-ms-transform: rotate(-90deg);-o-transform: rotate(-90deg);transform: rotate(-90deg);}#us_report_button button div.rotate.ie8 {filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);zoom: 1;position: relative;background-color: #eaeaea;top: -52px !important;left: -2px !important;width: 75px;}#us_report_button button div.rotate.ie7 {filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);zoom: 1;position: relative;background-color: #eaeaea;top: 3px !important;width: 75px;}#us_report_button button.us_button_vertical_right {background-image: url(data:image/png;base64,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);\n" + 
(x() ? "*background-image: url(mhtml:https:" + p.za + "res/" + p.Fa + "/css/button-ie7.css!usbuttonverticalright);" : "") + "width: 29px;height: 126px;}#us_report_button button.us_button_vertical_right:hover {background-image: url(data:image/png;base64,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);" + 
(x() ? "*background-image: url(mhtml:https:" + p.za + "res/" + p.Fa + "/css/button-ie7.css!usbuttonverticalrighthover);" : "") + "}#us_report_button button.us_button_vertical_right:hover div.rotate.ie8,#us_report_button button.us_button_vertical_right:hover div.rotate.ie7 {background-color: #f4f4f4;}#us_report_button button.us_button_vertical_left {background-image: url(data:image/png;base64,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);" + 
(x() ? "*background-image: url(mhtml:https:" + p.za + "res/" + p.Fa + "/css/button-ie7.css!usbuttonverticalleft);" : "") + "width: 29px;height: 126px;}#us_report_button button.us_button_vertical_left:hover {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAB+CAYAAADY8xr7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACEpJREFUeNrsm1tsHFcZx/9z3Zld7/ruen1J4iQNCZFVogilPBQjVIlGrSKQKFQqiAf6EuCt4gkQkSjwgERBAkW0DwgpSLyBoA/AQ6FRTVNwodRRLjSJQxzi267tXe91di78v7PrsGu7iaFSXphxPp3Zy5zf+a7nm2hHm5mZifDgjrOUL5kTExPQNE29szm2XkBrf6/9dev8vmPrXA2U2dnZ03KuP0AtMTk5KcPpBwrdPGJoDI2hMTSGxtAYGkNjaAyNoTE0hsbQGBpDY2gMjaExNIbG0BgaQ2NoDI2hMTSGxtAYGkNjaAyNoTE0hr7XEUWRkq2H+X4mDYIAURhCNwwYut75wzgevu9DkMaWz3cN/fulKzh/5Z+Y3/DQnzBwZDCFY4f2Izs8DK/RgMmJLdtW42tvvoVv//oNfO+zUzh4YL+COonE7qHrhQLO/OYCzmMMuj0BPUGTaTrC5QDO5ct4wnoNXzg5hf6+XpiWhYWlJXzznRLmGy6W86sYyQ4jQWCCC9qVeReXlnH69+/ijnsQTr0Cw6vB4GrFZL7IwF78MhjH6z/9Hb518hGk0ml8bSaPZaMXWrUE29BRrVZhcTG78mnDD/D8qzew4HKlXhUJmsjUNUZeExpQvChQvlrZ/xF8dfo6tH4NhdQowvwSeswQXUkXofhc13cHffnqBt41+uH6HlzThM0LTR0KihbUJr3O6NR1E7XxSRVYWsDgqZRwOKMhk8nA5LUi7UG2Y8rcLHo4N7sIJwoJY+TRh7oIDF7MSzRB/0dcfseJfH4HCD0Pfm4BJ4+OKw0dx9kG3VHTc1fX1MSi3Z60jZGkBYszWi1tDZ5rzR+GEqTh7VwN8+WGOvdX7uCxZAHHjp5QIFsi+n7Q1XqAP9wuw6EPJa8/d7Qfpw70oBqEzR+gNll3f4xqWzq+8cd53NxowLAMrshExrGUlio/DWNb/m4z76sEVkMNCVMCx1DahqSHYYSA0qB4QYQ6peaHLA5ArVJE0PDUQs2Bh3Bh3UahUFTVSAJpa1XaBv3TEkOcoe5ygn2ZBLpsA4GUM36WMDSkTQ0pitG2+EzClJoHh2a33S6sZkYxc+V6MwvoYwG/Z/SWufLL6/QN/8boyxenhmHSNKJdghO+vtLAdK6BYUfHyayNrKsrFwg0imr8jo6EpaHS248352/iEyyDdQksjlabXzugdyoB1jxOwotTjJgkNaIVwXlw5mIFL12vYixl0u8hfnC1iheOWPjUwz3opg+lBksxsGlvM5XGpdsuVldXVWlUNZir2xF6c8NXkSkJn6RZXZsfc7Kf3ajhx9eq+P7xDD6/P4mFaoCv/KWIL14oYNAKMUo3MOxUdCe0EJabxKrTh5t3ljA4NIQGa3N7kejw6e1Ks8KIT0sNDefeWcbllRJ+Me/hk+MOnjvcpXJxX8bEd4+lObmLs7N59DvNMmdKSjHVLMuG0TOIS//K3d1t2v3aAc17oSoCErErtQg/fCuHi8zBRZ4/0icTR8rcnh9hb5eJYebvtWIzPw2taT6JAYFrjou5gqeq1CZ0M4o7oFXOqKl9T1fReGCoD4cGu5F1gD+veMKEY0nC65hdbXBhAaywgTQ1NdDMY+UeKRrUdt3XlGkF3K5ph09lhepKsSFFpqFr8eVDSTw7XcBz0+vKzAu1ED+5VsNaPo/HJxIYSjuQb0doVigpjhqLRDkyO7Tc1LQD2k0NwtYuIhNI6WlEGp4cT+DlRyOcebuIn18rqkhNeWU8O+jj+ceOKJBEuC/aKCtBWayhmc3uog0oYwd0LMlCQFgArQWnfxhUISvU0/uSmBq0cP5WAeuVOg73DeHRvf3KQxHTpIsLbhDAQtv22/twWwncpunBNFemaWrbClui08wR36vR371JG58++pByQSTlUMog/xzLRDdbmDxfG2Zr0dQ6yeDaLPbtDxh0BNKelIEeOrHOi/wW1GI5lPwSEc2l7kr0NsKmCVXusUb3uDbq4r/WXhuFAXqYwzsV/Q5oF1c52WuyI5CuoKmxqTdXqbfEUKIrUXmpEl5DDyO4TvNKEZUFRyx/IyyToulW8LaC//iIi7p0AnS4L9HL3UY02ewADNNomZzFPJLdJlTpJZtBnS2Op1odalwqYDLbo+aUuqvfqwX9eF+Es/UcNpJDqgd68a953Lp1A6U6Czf9uClB2zn/Ya1cQ/foBGq0gF+robeygkPjYwomXWJ7n7QNalKTz7iL+FFiAla1iAvLdRQrbDl0hzlLjRmlUiqlajmtXBZJSnqZNjbo86Bcwgl3AwMD/ar9lG7wvu3KMx87gd++chFzvYeR9irIZrPsg+TLmqobmspjqJLoi4k5lqhulVJjy2nnbuGpY3uUdi57JGuLpjs2ZrKqF473wanmUebqC/RRsRGgRJ+VlYRNYeCU6NMixw2OAvXXcjiVXMHDE/tUU+ZwU5Ag2tUN1PjoCL6TzUNrVFCykyhQmw1qVeJY5igi2m0oASr0pce7gcmVv+GZqeMKlEqlVGO2te+9513bhyc/iJcOFJHN/wNlJ4Oi6RDOhpqQImFFWYhmoKrbqOVz+NCt8/j6E8eQZqcvPa/b0nJrVbrvvcwH9k/g3JiHX02/gVdWE5hLjqJmutBo9sDnDrK2jJGVKzjVX8OTT39U+dBNJtFFLbf68q778vl8tNtnoKTQ31lYxO3lHHLrRbWDDKRdTOwZR4baSdcoN0oJCZ5WbrY/AyXH7Ozsf3d/KpOMj41inPknkwjE537pM5CkWkk+yq2i3K/qOxT693VT3N7Higml+dJbT4Ftjvc6/ieo1mb6rY+Wxf+78v8FlXThcdacm5t7kFz1gOS/BRgAWg9gzfNzrtsAAAAASUVORK5CYII=);" + 
(x() ? "*background-image: url(mhtml:https:" + p.za + "res/" + p.Fa + "/css/button-ie7.css!usbuttonverticallefthover);" : "") + "}#us_report_button button.us_button_vertical_left:hover div.rotate.ie8,#us_report_button button.us_button_vertical_left:hover div.rotate.ie7 {background-color: #f4f4f4;}#us_report_button button.us_button_horizontal {background-image: url(data:image/png;base64,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);\n" + 
(x() ? "*background-image: url(mhtml:https:" + p.za + "res/" + p.Fa + "/css/button-ie7.css!usbuttonhorizontal);" : "") + "width: 126px;height: 29px;padding: 0 0 0 40px !important;}#us_report_button button.us_button_horizontal:hover {background-image: url(data:image/png;base64,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);" + 
(x() ? "*background-image: url(mhtml:https:" + p.za + "res/" + p.Fa + "/css/button-ie7.css!usbuttonhorizontalhover);" : "") + "}";
function Na(a) {
  function b() {
    document.body === k ? (g--, 0 <= g && window.setTimeout(b, 200)) : document.body.appendChild(e.hb)
  }
  this.s = document.createElement("button");
  var d = "Feedback";
  a.text !== f && (d = a.text);
  this.s.innerHTML = "middle" === a.ma ? w() ? '<div class="rotate ie8">' + d + "</div>" : x() ? '<div class="rotate ie7">' + d + "</div>" : '<div class="rotate">' + d + "</div>" : d;
  var c = document.createElement("style");
  c.setAttribute("type", "text/css");
  c.styleSheet ? c.styleSheet.cssText = Ma : c.appendChild(document.createTextNode(Ma));
  document.getElementsByTagName("head")[0].appendChild(c);
  this.hb = document.createElement("div");
  this.s.setAttribute("type", "button");
  this.s.setAttribute("title", function() {
    return eval("'" + r.Td.replace(/&#x([0-9a-z]{4});/g, "\\u$1") + "'")
  }());
  this.hb.setAttribute("id", "us_report_button");
  this.hb.appendChild(this.s);
  this.jd = m;
  var e = this, g = 5;
  b();
  a.ma === f && (a.ma = "bottom");
  a.xa === f && (a.xa = "right");
  this.Ha = a;
  "middle" === this.Ha.ma && "left" === this.Ha.xa ? (D(this.s, "us_button_vertical_left"), C(this.s, "top: 37%; left: 0;")) : "bottom" === this.Ha.ma && "left" === this.Ha.xa ? (D(this.s, "us_button_horizontal"), C(this.s, "bottom: 0; left: 30px;")) : "middle" === this.Ha.ma && "right" === this.Ha.xa ? (D(this.s, "us_button_vertical_right"), C(this.s, "top: 37%; right: 0;")) : (D(this.s, "us_button_horizontal"), C(this.s, "bottom: 0; right: 30px;"));
  this.cb = function(a) {
    e.zd.apply(e, arguments);
    return m
  };
  F(this.s, "click", this.cb);
  this.ba = h;
  this.H = {Xa:m, pc:k, vc:k, Nd:d}
}
function Oa() {
  var a = Q.s;
  a.H.Xa && (window.clearInterval(a.H.pc), a.H.vc.innerHTML = a.H.Nd, a.H.pc = k, a.H.Xa = m)
}
Na.prototype.ya = function() {
  this.ba && (C(this.s, "display: none;"), this.ba = m)
};
Na.prototype.show = function() {
  this.ba || (C(this.s, "display: block;"), this.ba = h)
};
Na.prototype.zd = function() {
  this.jd || this.Ha.Cd()
};
Na.prototype.q = function() {
  this.hb !== k && (E(this.s, "click", this.cb), ra(), document.body.removeChild(this.hb), this.hb = k)
};
var V = {}, Pa = '<div unselectable="on" class="us_footer"><input unselectable="on" id="us_btn_cancel" type="button" class="us_btn_cancel" value="' + r.Jc + '" /><input id="us_btn_send" type="button" class="us_btn_send" value="' + r.Nc + '" /></div><div unselectable="on" class="us_copy">Powered by <a href="http://usersnap.com" target="_blank">usersnap.com</a>.</div></form>';
function Qa(a) {
  "undefined" === typeof a.h && (a.h = ["highlight", "blackout", "note"]);
  this.c = a;
  this.g = U(this.c.a).createElement("div");
  this.g.setAttribute("id", "us_report_window");
  this.g.setAttribute("unselectable", "on");
  this.cc = h;
  Ra(this);
  for(var b in V) {
    V.hasOwnProperty(b) && "object" === typeof V[b] && (V[b].index = -1)
  }
  a = '<form unselectable="on" class="us_form" id="us_form"><div unselectable="on" class="us_header"><input type="button" id="us_btn_help" class="us_btn_help" value="Help"/><input type="button" id="us_btn_close" class="us_btn_close" value="Close"/><input type="button" id="us_btn_min" class="us_btn_move" value="Minimize"/></div><div unselectable="on" class="us_middle">';
  Sa(this);
  for(var d = b = 0;d < this.c.h.length;d++) {
    -1 === V[this.c.h[d].toLowerCase()].index && (a += V[this.c.h[d].toLowerCase()].data, V[this.c.h[d].toLowerCase()].index = b, b++)
  }
  a += "</div>";
  b = "";
  this.Pa = eval("'" + r.Uc.replace(/&#x([0-9a-z]{4});/g, "\\u$1") + "'");
  this.c.wb !== f && (this.Pa = this.c.wb);
  this.qb = this.c.jb === h;
  this.Za = eval("'" + r.Ed.replace(/&#x([0-9a-z]{4});/g, "\\u$1") + "'");
  this.c.Rc !== f && (this.Za = this.c.Rc);
  this.Wb = this.c.ib === h;
  this.c.vb === h && (b += t('<input placeholder="{0}" id="us_add_email" type="text" value="{1}" />', this.Pa, this.c.xb !== f ? this.c.xb : ""));
  this.c.ub === h && (b += t('<textarea placeholder="{0}" id="us_add_comment"></textarea>', this.Za));
  "" !== b && (a += t('<div unselectable="on" class="us_desc_container" id="us_email_text_box">{0}</div>', b));
  a += Pa + t('<div class="us_minimize" id="us_minimize"><div class="us_powered">{0}</div><input type="button" id="us_btn_max" class="us_btn_max" value="Maximize"></div>', r.dd);
  this.g.innerHTML = a;
  U(this.c.a).body.appendChild(this.g);
  var c = this;
  this.l = m;
  this.ea = {};
  for(var e in this.c.lb) {
    this.c.lb.hasOwnProperty(e) && (this.ea[e] = k, V[e] !== f && -1 !== V[e].index && Ta(this, e))
  }
  this.$b = u("us_btn_help", U(this.c.a));
  this.Bc = u("us_btn_min", U(this.c.a));
  this.ld = u("us_btn_max", U(this.c.a));
  this.hd = u("us_btn_close", U(this.c.a));
  this.gc = {width:220, height:145};
  this.n = u("us_add_email", U(this.c.a));
  this.n !== k && v() && ("" === c.n.value && (c.n.value = this.Pa), F(this.n, "focus", function() {
    c.n.value === c.Pa && (c.n.value = "")
  }), F(this.n, "blur", function() {
    "" === c.n.value && (c.n.value = c.Pa)
  }));
  this.K = u("us_add_comment", U(this.c.a));
  this.K !== k && v() && ("" === c.K.value && (c.K.value = this.Za), F(this.K, "focus", function() {
    c.K.value === c.Za && (c.K.value = "")
  }), F(this.K, "blur", function() {
    "" === c.K.value && (c.K.value = c.Za)
  }));
  this.Y = k;
  this.o = m;
  sa(this.$b, r.Qd);
  sa(this.Bc, r.Rd);
  sa(this.ld, r.dd);
  sa(u("us_btn_send", U(this.c.a)), r.Sd);
  F(this.$b, "click", function() {
    c.$b.blur();
    c.zb.apply(c, arguments)
  });
  F(u("us_btn_send", U(this.c.a)), "click", function() {
    c.Ya.apply(c, arguments)
  });
  F(u("us_btn_cancel", U(this.c.a)), "click", function() {
    c.ca.apply(c, arguments)
  });
  this.Cc = u("us_minimize", U(this.c.a));
  this.Q = u("us_form", U(this.c.a));
  F(this.Bc, "click", function() {
    c.zb.apply(c, ["close"]);
    C(c.Q, "display:none;");
    C(c.Cc, "display:block;");
    C(c.g, "height: 20px;");
    c.cc = m
  });
  F(this.hd, "click", function() {
    c.ca.apply(c, arguments)
  });
  F(this.Q, "submit", function(a) {
    a = a || window.event;
    a.preventDefault && a.preventDefault();
    a.returnValue = m
  });
  F(this.g, "click", function(a) {
    !this.cc && !J(B(a), "us_form", U(c.c.a)) && (C(c.Q, "display:block;"), C(c.Cc, "display:none;"), C(c.g, "height: auto;"), c.cc = h)
  })
}
function Ra(a) {
  V = {};
  for(var b in a.c.lb) {
    a.c.lb.hasOwnProperty(b) && (V[b] = {data:'<input unselectable="on" id="us_btn_' + b + '" type="button" class="us_btn_' + b + '" value="' + r["b_" + b] + '" />', index:-1})
  }
}
function Sa(a) {
  if(0 === a.c.h.length) {
    a.c.h = ["highlight"]
  }else {
    var b = [], d = 0;
    try {
      for(var c = 0;c < a.c.h.length;c++) {
        for(var e in a.c.lb) {
          if(a.c.lb.hasOwnProperty(e) && a.c.h[c].toLowerCase() === e) {
            b.push(a.c.h[c].toLowerCase());
            d++;
            break
          }
        }
      }
      0 === b.length && (b = ["highlight"]);
      a.c.h = b
    }catch(g) {
      a.c.h = ["highlight"]
    }
  }
}
n = Qa.prototype;
n.start = function() {
  for(var a in V) {
    if(V.hasOwnProperty(a) && "object" === typeof V[a] && 0 === V[a].index) {
      Ua(this, a);
      this.c.$c(V[a].index, a);
      break
    }
  }
};
n.mc = function(a) {
  return V.hasOwnProperty(a) ? -1 !== V[a].index : m
};
n.ia = function() {
  this.l || (this.o = h)
};
n.Ib = function(a) {
  var b = G(), d = b.width - this.gc.width, b = b.height - this.gc.height, c = m;
  a.f > d && (a.f = d, c = h);
  a.e > b && (a.e = b, c = h);
  0 > a.e && (a.e = 0, c = h);
  return c
};
n.ja = function(a) {
  if(this.o) {
    var b = ma();
    a = {f:a.clientX + b[0], e:a.clientY + b[1]};
    this.Y !== k ? (this.N = {f:this.N.f + (a.f - this.Y.f), e:this.N.e + (a.e - this.Y.e)}, this.Ib(this.N), C(this.g, " top: " + this.N.e + "px; left: " + this.N.f + "px;")) : (this.N = {f:this.g.offsetLeft, e:this.g.offsetTop}, C(this.g, "position: fixed; height: " + this.gc.height + "px;"));
    this.Y = a
  }
};
n.ka = function() {
  !this.l && this.o && (this.Y = k, this.o = m)
};
n.Qc = function(a) {
  var b = U(this.c.a).getElementById("us_email_text_box");
  b !== k && (a.commentBox !== h && a.emailBox !== h ? b.parentElement.removeChild(b) : a.commentBox !== h ? this.K !== k && b.removeChild(this.K) : a.emailBox !== h && this.n !== k && b.removeChild(this.n))
};
n.enable = function() {
  this.l = m
};
n.disable = function() {
  this.l = h
};
function Ua(a, b) {
  for(var d in a.ea) {
    a.ea.hasOwnProperty(d) && "string" === typeof d && a.ea[d] !== k && (b === d ? D(a.ea[d], "us_btn_" + d + " us_active") : D(a.ea[d], "us_btn_" + d))
  }
}
function Ta(a, b) {
  a.ea[b] = u("us_btn_" + b, U(a.c.a));
  sa(a.ea[b], r["t_" + b]);
  F(a.ea[b], "click", function() {
    a.ea[b].blur();
    a.Ud.apply(a, [b])
  })
}
n.Ud = function(a) {
  this.l || (Ua(this, a), this.c.$c(V[a].index, a))
};
n.Yc = function(a) {
  this.n !== k && (this.n.value = a)
};
n.zb = function(a) {
  this.l || ("close" === a ? this.c.zb("close") : this.c.zb())
};
n.Ya = function() {
  if(!this.l) {
    var a = "", b = k;
    if(this.n !== k) {
      v() ? this.n.value !== this.Pa && (a = this.n.value) : "" !== this.n.value && (a = this.n.value);
      if(this.qb && "" === a) {
        b = new W("alert", r.Vc, this.c.a);
        b.show();
        return
      }
      if((this.qb || "" !== a) && !aa(a)) {
        b = new W("alert", r.Wc, this.c.a);
        b.show();
        return
      }
    }
    b = "";
    this.K !== k && this.K.value !== this.Za && (b = this.K.value);
    this.Wb && "" === b ? (b = new W("alert", r.oc, this.c.a), b.show()) : (na("usersnap_email", a), this.c.Ya({Nb:b, Sc:a}))
  }
};
n.ca = function() {
  this.c.ca()
};
n.q = function() {
  U(this.c.a).body.removeChild(this.g)
};
n.lc = function() {
  var a = pa(this.g, "height");
  return a = "auto" === a ? this.g.clientHeight : parseInt(a.substr(0, a.length - 2), 10)
};
n.show = function() {
  C(this.g, "display:block; bottom: 0px; right: 15px;");
  var a = oa("usersnap_email");
  a !== k && ("" !== a && this.n !== k) && (v() ? this.n.value === this.Pa && (this.n.value = a) : "" === this.n.value && (this.n.value = a))
};
n.ya = function() {
  C(this.g, "display: none;")
};
var Va = '<div class="us_container" aria-disabled="false"><div class="us_header" role="banner">' + r.Gd + '</div><div class="us_body" role="main"><div class="us_email">' + r.Fd + ' </div><div class="us_email us_right"><input type="email" placeholder="{0}" class="us_input" id="us_add_email" value="{1}"/></div><div><textarea class="us_input" id="us_add_comment"></textarea></div><p class="us_small">' + r.Id + '</p><div class="us_footer"><div class="us_right"><button id="us_btn_send" class="us_btn_mobile us_btn_primary">' + 
r.Nc + '</button></div><div class="us_right"><button id="us_btn_cancel" class="us_btn_mobile">' + r.Jc + "</button></div></div></div></div>";
function Wa(a) {
  this.c = a;
  this.g = U(this.c.a).createElement("div");
  this.g.setAttribute("id", "us_report_ios");
  this.g.setAttribute("unselectable", "on");
  a = eval("'" + r.Uc.replace(/&#x([0-9a-z]{4});/g, "\\u$1") + "'");
  var b = "";
  this.c.xb !== f && (b = this.c.xb);
  this.c.wb !== f && (a = this.c.wb);
  this.g.innerHTML = t(Va, a, b);
  U(this.c.a).body.appendChild(this.g);
  this.qb = this.c.jb === h;
  this.Wb = this.c.ib === h;
  this.n = u("us_add_email", U(this.c.a));
  this.K = u("us_add_comment", U(this.c.a));
  var d = this;
  F(u("us_btn_send", U(this.c.a)), "click", function() {
    d.Ya.apply(d, arguments)
  });
  F(u("us_btn_cancel", U(this.c.a)), "click", function() {
    d.ca.apply(d, arguments)
  })
}
n = Wa.prototype;
n.Qc = function() {
};
n.enable = function() {
  this.l = m
};
n.disable = function() {
  this.l = h
};
n.Yc = function(a) {
  this.n !== k && (this.n.value = a)
};
n.start = function() {
};
n.lc = function() {
  var a = pa(this.g, "height");
  return a = "auto" === a ? this.g.clientHeight : parseInt(a.substr(0, a.length - 2), 10)
};
n.mc = function() {
  return m
};
n.Ya = function() {
  if(!this.l) {
    var a = "";
    if(this.n !== k) {
      "" !== this.n.value && (a = this.n.value);
      if(this.qb && "" === a) {
        window.alert(r.Vc);
        return
      }
      if((this.qb || "" !== a) && !aa(a)) {
        window.alert(r.Wc);
        return
      }
    }
    var b = "";
    this.K !== k && (b = this.K.value);
    this.Wb && "" === b ? window.alert(r.oc) : (na("usersnap_email", a), this.c.Ya({Nb:b, Sc:a}))
  }
};
n.ca = function() {
  this.c.ca()
};
n.q = function() {
  U(this.c.a).body.removeChild(this.g)
};
n.show = function() {
  var a = G(), b;
  b = 500 < a.width ? 500 : a.width - 20;
  pa(this.g, "height");
  C(this.g, "width: " + b + "px; display:block; top: " + Math.floor(a.height / 2 - parseInt(424, 10) / 2) + "px; left: " + Math.floor(a.width / 2 - parseInt(b, 10) / 2) + "px;");
  a = oa("usersnap_email");
  a !== k && ("" !== a && this.n !== k) && "" === this.n.value && (this.n.value = a)
};
n.ya = function() {
  C(this.g, "display: none;")
};
var Xa = "", Xa = ca() ? '<div class="us_container"><div class="us_feedback">{0}</div><div class="us_progress"><div class="us_data" id="us_progress_data"></div></div></div>' : '<div class="us_feedback">{0}</div><div class="us_progress"><div class="us_data" id="us_progress_data"></div></div>', Ya = "", Ya = ca() ? '<div class="us_container"><div class="us_header"></div><div class="us_feedback">{0}</div><div class="us_footer"><button id="us_btn_alert_ok" type="button" class="us_btn_alert">{1}</button></div></div>' : 
'<div class="us_feedback">{0}</div><div><input id="us_btn_alert_ok" type="button" class="us_btn_alert" value="{1}"/></div>', Za = "", Za = ca() ? '<div class="us_container"><div class="us_content">{0}</div></div>' : '<div class="us_content">{0}</div>';
function W(a, b, d, c) {
  this.Eb = U(d);
  this.g = this.Eb.createElement("div");
  ca() ? this.g.setAttribute("id", "us_report_dialog_ios") : this.g.setAttribute("id", "us_report_infoscreen");
  this.Mb = a;
  this.zc = "undefined" === typeof c ? k : c;
  switch(this.Mb) {
    case "progress":
      this.g.innerHTML = t(Xa, b);
      this.dc = "default";
      this.Hb = 2E3;
      this.la = {width:450, height:90};
      break;
    case "alert":
      this.g.innerHTML = t(Ya, b, r.td);
      this.dc = "default";
      this.Hb = 0;
      this.la = {width:370, height:90};
      break;
    case "info":
      this.g.innerHTML = t(Za, b), this.dc = "corner", this.Hb = 6E4, this.la = {width:200, height:50}, a = ia(this.g), D(this.g, a + " us_error")
  }
  this.ab = m;
  this.Eb.body.appendChild(this.g)
}
W.prototype.show = function() {
  var a = "";
  this.la !== f ? a = ca() ? "width: " + this.la.width + "px;" : "width: " + this.la.width + "px; height: " + this.la.height + "px; " : this.la = {width:400, height:50};
  if("corner" === this.dc) {
    a += "bottom: 35px; right: 30px; position: fixed;"
  }else {
    var b = G(), d = pa(this.g, "height");
    "auto" === d && (d = this.la.height);
    a += "top: " + Math.ceil(b.height / 2 - parseInt(d, 10) / 2) + "px; left: " + Math.ceil(b.width / 2 - this.la.width / 2) + "px;"
  }
  C(this.g, a);
  var c = this;
  if("info" === this.Mb) {
    window.setTimeout(function() {
      c.q()
    }, this.Hb)
  }else {
    if("progress" === this.Mb) {
      var e = u("us_progress_data", this.Eb), g = 0, j = this.la.width - 20, l = window.setInterval(function() {
        100 == g && (window.clearInterval(l), window.setTimeout(function() {
          c.yc.call(c)
        }, 600));
        C(e, "width: " + Math.ceil(j / 100 * g) + "px;");
        g += 1
      }, Math.ceil((this.Hb - 600) / 100))
    }else {
      "alert" === this.Mb && (this.gd = u("us_btn_alert_ok", this.Eb), F(this.gd, "click", function() {
        c.yc.call(c)
      }))
    }
  }
};
W.prototype.yc = function() {
  this.q();
  this.zc !== k && this.zc()
};
W.prototype.q = function() {
  this.ab || (this.Eb.body.removeChild(this.g), this.ab = h)
};
var $a = {footer:'<div class="us_entry"><input id="us_need_help" class="us_btn_blue" type="button" value="' + r.tb + '"/><a id="us_help_no" href="#">' + r.sd + '</a></div><div class="us_arrowdown"></div><div class="us_close" id="us_help_close">&times;</div>', highlight:'<div class="us_box"><div class="us_animation us_highlight"></div><div class="us_info_box"><div class="us_btn_cont"><input type="button" value="' + r.Kc + '" class="us_btn_highlight us_deactive" unselectable="on"></div><div class="us_description">' + 
r.cd + '</div><div><input type="button" id="us_next_btn_highlight" class="us_btn_blue" value="{0}"/><a id="us_close_btn_highlight" href="#">' + r.sb + "</a></div></div></div>", blackout:'<div class="us_box"><div class="us_animation us_blackout"></div><div class="us_info_box"><div class="us_btn_cont"><input type="button" value="' + r.Ic + '" class="us_btn_blackout us_deactive" unselectable="on"></div><div class="us_description">' + r.bd + '</div><div><input type="button" id="us_next_btn_blackout" class="us_btn_blue" value="{0}"/><a id="us_close_btn_blackout" href="#">' + 
r.sb + "</a></div></div></div>", note:'<div class="us_box"><div class="us_animation us_note"></div><div class="us_info_box"><div class="us_btn_cont"><input type="button" value="' + r.Lc + '" class="us_btn_note us_deactive" unselectable="on"></div><div class="us_description">' + r.ed + '</div><div><input type="button" id="us_next_btn_note" class="us_btn_blue" value="{0}"/><a id="us_close_btn_note" href="#">' + r.sb + "</a></div></div></div>", pen:'<div class="us_box"><div class="us_animation us_pen"></div><div class="us_info_box"><div class="us_btn_cont"><input type="button" value="' + 
r.Mc + '" class="us_btn_pen us_deactive" unselectable="on"></div><div class="us_description">' + r.fd + '</div><div><input type="button" id="us_next_btn_pen" class="us_btn_blue" value="{0}"/><a id="us_close_btn_pen" href="#">' + r.sb + "</a></div></div></div>", arrow:'<div class="us_box"><div class="us_animation us_arrow"></div><div class="us_info_box"><div class="us_btn_cont"><input type="button" value="' + r.Hc + '" class="us_btn_arrow us_deactive" unselectable="on"></div><div class="us_description">' + 
r.ad + '</div><div><input type="button" id="us_next_btn_arrow" class="us_btn_blue" value="{0}"/><a id="us_close_btn_arrow" href="#">' + r.sb + "</a></div></div></div>"};
function ab(a) {
  this.c = a;
  this.ba = this.Wd = this.Ca = m;
  this.ab = h;
  this.Lb = this.pb = 0;
  var b = this;
  this.Dc = function(a) {
    b.ba && (!J(B(a), "us_help_window") && !J(B(a), "us_report_window")) && (b.ya(), E(U(b.c.a), "mousedown", b.Dc))
  }
}
function bb(a, b) {
  a.pb = b;
  for(var d = 0;d < a.Lb;d++) {
    d === b ? D(a.g.childNodes[d], "us_box us_visible") : D(a.g.childNodes[d], "us_box")
  }
}
ab.prototype.ya = function() {
  this.Ca && (D(this.g.childNodes[this.pb], "us_box"), C(this.g, "display:none;"), this.ba = m, na("usersnap_hide_help", "true", 365))
};
ab.prototype.show = function(a) {
  a === f && (a = m);
  if(!this.Ca) {
    this.g = U(this.c.a).createElement("div");
    this.g.setAttribute("id", "us_help_window");
    this.Lb = 0;
    var b = "", d = [], c = 0, e = k, g;
    for(g in this.c.h) {
      if(this.c.h.hasOwnProperty(g)) {
        for(e in this.c.h) {
          this.c.h.hasOwnProperty(e) && this.c.h[e].index === c && d.push(e)
        }
        c++
      }
    }
    this.Lb = d.length;
    for(c = 0;c < d.length;c++) {
      b = c === d.length - 1 ? b + t($a[d[c]], r.qd) : b + t($a[d[c]], r.rd)
    }
    b += $a.footer;
    this.g.innerHTML = b;
    this.ab = m;
    U(this.c.a).body.appendChild(this.g);
    this.md = u("us_need_help", U(this.c.a));
    var j = this;
    F(this.md, "click", function() {
      j.show(h)
    });
    b = function() {
      j.pb === j.Lb - 1 ? j.ya() : bb(j, j.pb + 1)
    };
    d = function(a) {
      j.ya();
      a = a || T(j.c.a).event;
      a.preventDefault && a.preventDefault();
      return a.returnValue = m
    };
    g = c = k;
    for(e in this.c.h) {
      this.c.h.hasOwnProperty(e) && this.c.h[e] !== k && (c = u("us_next_btn_" + e, U(this.c.a)), g = u("us_close_btn_" + e, U(this.c.a)), c !== k && (F(c, "click", b), F(g, "click", d)))
    }
    F(u("us_help_no", U(this.c.a)), "click", d);
    F(u("us_help_close", U(this.c.a)), "click", d);
    this.Ca = h
  }
  e = 15;
  a ? (na("usersnap_hide_help", "true", 365), D(this.g, ""), this.pb = 0, bb(this, 0)) : (D(this.g, "us_small"), e = 215);
  C(this.g, "display:block; bottom: " + (this.c.ud + 29) + "px; right: " + e + "px;");
  this.ba = h;
  F(U(this.c.a).body, "mousedown", this.Dc)
};
ab.prototype.q = function() {
  this.ab || (U(this.c.a).body.removeChild(this.g), this.ab = h)
};
function cb(a) {
  this.Qa = [];
  this.Ca = m;
  this.u = a;
  this.kd = a.Ld;
  a = G();
  a.width = la();
  a = fa(a.width, a.height);
  this.u.width = a.width;
  this.u.height = a.height;
  this.Da = this.ta = k
}
function db(a, b) {
  switch(b) {
    case "crosshair":
      C(a.Da, "cursor: crosshair;");
      break;
    case "default":
      C(a.Da, "cursor: default;")
  }
}
cb.prototype.q = function() {
  if(this.Ca) {
    for(var a = 0;a < this.Qa.length;a++) {
      this.ta.removeChild(this.Qa[a])
    }
    U(this.u.a).body.removeChild(this.ta);
    U(this.u.a).body.removeChild(this.Da)
  }
};
function eb(a, b) {
  if(a.Ca) {
    for(var d = [], c = Math.round, e = 0;e < b.length;e++) {
      b[e] !== f && d.push([[c(b[e][0][0]), c(b[e][0][1])], [c(b[e][1][0]), c(b[e][1][1])]])
    }
    0 === d.length && d.push([[10, 10], [10, 10]]);
    var c = [], e = [], g, j, l;
    for(j = 0;j < d.length;j++) {
      d[j] !== f && (c.push(d[j][0][0]), c.push(d[j][1][0]), e.push(d[j][0][1]), e.push(d[j][1][1]))
    }
    for(j = 0;j < c.length;j++) {
      for(g = 0;g < c.length - 1;g++) {
        c[g] > c[g + 1] && (l = c[g + 1], c[g + 1] = c[g], c[g] = l)
      }
    }
    for(j = 0;j < e.length;j++) {
      for(g = 0;g < e.length - 1;g++) {
        e[g] > e[g + 1] && (l = e[g + 1], e[g + 1] = e[g], e[g] = l)
      }
    }
    c.splice(0, 0, 0);
    e.splice(0, 0, 0);
    c.push(a.u.width);
    e.push(a.u.height);
    if(1 < c.length) {
      for(j = 1;j < c.length;j++) {
        c[j] === c[j - 1] && (c.splice(j, 1), j--)
      }
    }
    if(1 < e.length) {
      for(j = 1;j < e.length;j++) {
        e[j] === e[j - 1] && (e.splice(j, 1), j--)
      }
    }
    l = 0;
    var q, z = m, y;
    for(j = 1;j < e.length;j++) {
      for(g = 1;g < c.length;g++) {
        z = m;
        for(q = 0;q < d.length;q++) {
          if(y = d[q], y !== f && y[0][0] <= c[g - 1] && y[1][0] >= c[g] && y[0][1] <= e[j - 1] && y[1][1] >= e[j]) {
            z = h;
            break
          }
        }
        z || (l < a.Qa.length ? C(a.Qa[l], "top: " + e[j - 1] + "px; left: " + c[g - 1] + "px; width: " + (c[g] - c[g - 1]) + "px; height: " + (e[j] - e[j - 1]) + "px;display:block;") : (q = a, z = "top: " + e[j - 1] + "px; left:" + c[g - 1] + "px; width: " + (c[g] - c[g - 1]) + "px; height: " + (e[j] - e[j - 1]) + "px;", y = U(q.u.a).createElement("div"), C(y, z), D(y, "us_report_overlay_element"), y.setAttribute("unselectable", "on"), q.ta.appendChild(y), q = y, a.Qa.push(q)), l++)
      }
    }
    for(j = l;j < a.Qa.length;j++) {
      C(a.Qa[j], "display:none;")
    }
  }
}
function fb(a) {
  this.o = m;
  this.Ba = [];
  this.z = this.G = k;
  this.l = h;
  this.P = [];
  this.u = a;
  this.ra = a.S;
  this.b = a.Bb;
  this.G = U(this.b.a).createElement("div");
  D(this.G, "us_report_selector_high");
  U(this.b.a).body.appendChild(this.G);
  var b = this;
  this.i = {U:function(a) {
    b.ja.call(b, a)
  }, T:function(a) {
    2 !== a.button && (J(B(a), "us_report_infoscreen", U(b.b.a)) || J(B(a), "us_help_window", U(b.b.a)) || J(B(a), "us_report_remove", U(b.b.a)) || J(B(a), "us_report_window", U(b.b.a)) || J(B(a), "us_report_note", U(b.b.a)) || b.ia.call(b, a))
  }, V:function(a) {
    2 !== a.button && (J(B(a), "us_report_infoscreen", U(b.b.a)) || J(B(a), "us_help_window", U(b.b.a)) || J(B(a), "us_report_remove", U(b.b.a)) || J(B(a), "us_report_window", U(b.b.a)) || J(B(a), "us_report_note", U(b.b.a)) || b.ka.call(b, a))
  }};
  F(U(this.b.a).body, "mousemove", this.i.U);
  F(U(this.b.a).body, "mousedown", this.i.T);
  F(U(this.b.a).body, "mouseup", this.i.V)
}
n = fb.prototype;
n.disable = function() {
  this.o = m;
  this.l = h
};
n.enable = function() {
  this.l = m;
  db(this.ra, "crosshair")
};
n.cancel = function() {
  if(!this.o) {
    return m
  }
  this.o = m;
  C(this.G, "display: none;");
  this.z = k;
  return h
};
n.hc = function() {
  this.o && (this.o = m, C(this.G, "display: none;"), this.z = k)
};
n.ja = function(a) {
  if(this.o) {
    var b = a.clientX;
    a = a.clientY;
    var d = Math.abs(b - this.M.f) - 2;
    0 > d && (d = 0);
    var c = Math.abs(a - this.M.e) - 2;
    0 > c && (c = 0);
    var e = this.M.f, g = this.M.e;
    0 > b - this.M.f && (e = b);
    0 > a - this.M.e && (g = a);
    C(this.G, "display: block; top: " + g + "px; left: " + e + "px; width: " + d + "px; height: " + c + "px;");
    this.z = {top:g, left:e, width:d, height:c, right:e + d, bottom:g + c}
  }
};
n.ia = function(a) {
  this.l ? va("disabled") : (this.M = {f:a.clientX, e:a.clientY}, C(this.G, "display: block; top: " + this.M.e + "px; left: " + this.M.f + "px; width: 0px; height: 0px;"), this.o = h)
};
n.ka = function() {
  !this.o || this.z === k ? this.hc() : (va("dragging false"), this.o = m, C(this.G, "display: none;"), 10 <= this.z.height && 10 <= this.z.width && (this.Xb(this.z), this.Ba.push([[this.z.left, this.z.top], [this.z.right, this.z.bottom]])), this.z = k)
};
n.q = function() {
  E(U(this.b.a).body, "mousemove", this.i.U);
  E(U(this.b.a).body, "mousedown", this.i.T);
  E(U(this.b.a).body, "mouseup", this.i.V);
  for(var a = 0;a < this.P.length;a++) {
    this.P[a] !== f && U(this.b.a).body.removeChild(this.P[a])
  }
  U(this.b.a).body.removeChild(this.G)
};
n.Xb = function(a) {
  var b = U(this.b.a).createElement("div");
  C(b, "top: " + a.top + "px; left: " + a.left + "px; width: " + a.width + "px; height: " + a.height + "px;");
  D(b, "us_report_blackout");
  b.innerHTML = '<div class="us_report_remove"></div><div class="us_inner" unselectable="on"></div>';
  b.setAttribute("unselectable", "on");
  U(this.b.a).body.appendChild(b);
  var d = this.P.length;
  this.P.push(b);
  var c = this;
  F(b.childNodes[0], "click", function() {
    U(c.b.a).body.removeChild(c.P[d]);
    c.P[d] = f;
    c.Ba[d] = f
  });
  return b
};
function gb(a) {
  this.o = m;
  this.ga = [];
  this.z = this.G = k;
  this.l = h;
  this.P = [];
  this.u = a;
  this.ra = a.S;
  this.b = a.Bb;
  this.G = U(this.b.a).createElement("div");
  D(this.G, "us_report_selector_high");
  U(this.b.a).body.appendChild(this.G);
  var b = this;
  this.i = {U:function(a) {
    b.ja.call(b, a)
  }, T:function(a) {
    2 !== a.button && (J(B(a), "us_report_infoscreen", U(b.b.a)) || J(B(a), "us_help_window", U(b.b.a)) || J(B(a), "us_report_remove", U(b.b.a)) || J(B(a), "us_report_window", U(b.b.a)) || J(B(a), "us_report_note", U(b.b.a)) || b.ia.call(b, a))
  }, V:function(a) {
    2 !== a.button && b.ka.call(b, a)
  }};
  F(U(this.b.a).body, "mousemove", this.i.U);
  F(U(this.b.a).body, "mousedown", this.i.T);
  F(U(this.b.a).body, "mouseup", this.i.V)
}
function hb() {
  for(var a = Q.h.highlight, b = [], d = Math.round, c = a.b.D.na.mult, e = 0;e < a.ga.length;e++) {
    a.ga[e] !== f && b.push([[d(a.ga[e][0][0] * c), d(a.ga[e][0][1] * c)], [d(a.ga[e][1][0] * c), d(a.ga[e][1][1] * c)]])
  }
  return b
}
n = gb.prototype;
n.disable = function() {
  this.o = m;
  this.l = h
};
n.enable = function() {
  this.l = m;
  db(this.ra, "crosshair")
};
n.cancel = function() {
  if(!this.o) {
    return m
  }
  this.o = m;
  C(this.G, "display: none;");
  this.z = k;
  return h
};
n.hc = function() {
  this.o && (this.o = m, C(this.G, "display: none;"), this.z = k)
};
n.ja = function(a) {
  if(this.o) {
    var b = a.clientX;
    a = a.clientY;
    var d = this.M.f, c = this.M.e, e = Math.abs(b - this.M.f) - 2;
    0 > e && (e = 0);
    var g = Math.abs(a - this.M.e) - 2;
    0 > g && (g = 0);
    0 > b - this.M.f && (d = b);
    0 > a - this.M.e && (c = a);
    C(this.G, "display: block; top: " + c + "px; left: " + d + "px; width: " + e + "px; height: " + g + "px;");
    this.z = {top:c, left:d, width:e, height:g, right:d + e, bottom:c + g}
  }
};
n.ia = function(a) {
  this.l ? va("disabled") : (this.M = {f:a.clientX, e:a.clientY}, C(this.G, "display: block; top: " + this.M.e + "px; left: " + this.M.f + "px; width: 0px; height: 0px;"), this.o = h)
};
n.ka = function() {
  !this.o || this.z === k ? this.hc() : (va("dragging false"), this.o = m, C(this.G, "display: none;"), 10 <= this.z.height && 10 <= this.z.width && (this.Xb(this.z), this.ga.push([[this.z.left, this.z.top], [this.z.right, this.z.bottom]]), eb(this.u.S, this.ga)), this.z = k)
};
n.q = function() {
  E(U(this.b.a).body, "mousemove", this.i.U);
  E(U(this.b.a).body, "mousedown", this.i.T);
  E(U(this.b.a).body, "mouseup", this.i.V);
  for(var a = 0;a < this.P.length;a++) {
    this.P[a] !== f && U(this.b.a).body.removeChild(this.P[a])
  }
  U(this.b.a).body.removeChild(this.G)
};
n.Xb = function(a) {
  var b = U(this.b.a).createElement("div");
  C(b, "top: " + a.top + "px; left: " + a.left + "px; width: " + a.width + "px; height: " + a.height + "px;");
  D(b, "us_report_highlight");
  b.innerHTML = '<div class="us_report_remove"></div><div class="us_inner" unselectable="on"></div>';
  b.setAttribute("unselectable", "on");
  U(this.b.a).body.appendChild(b);
  var d = this.P.length;
  this.P.push(b);
  var c = this;
  F(b.childNodes[0], "click", function() {
    U(c.b.a).body.removeChild(c.P[d]);
    c.P[d] = f;
    c.ga[d] = f;
    eb(c.u.S, c.ga)
  });
  return b
};
function ib(a) {
  this.o = m;
  this.Z = [];
  this.l = h;
  this.N = this.Y = this.bb = k;
  this.Yb = r.Md;
  this.ac = this.$a = this.Zb = k;
  this.u = a;
  this.ra = a.S;
  this.b = a.Bb;
  var b = this;
  this.i = {U:function(a) {
    J(B(a), "us_report_window", U(b.b.a)) ? C(b.W, "display:none;") : J(B(a), "us_report_infoscreen", U(b.b.a)) ? C(b.W, "display:none;") : J(B(a), "us_help_window", U(b.b.a)) ? C(b.W, "display:none;") : b.ja.call(b, a)
  }, T:function(a) {
    2 !== a.button && (J(B(a), "us_report_infoscreen", U(b.b.a)) || J(B(a), "us_report_note_text", U(b.b.a)) || J(B(a), "us_report_note_rem", U(b.b.a)) || J(B(a), "us_help_window", U(b.b.a)) || J(B(a), "us_report_remove", U(b.b.a)) || J(B(a), "us_report_window", U(b.b.a)) || b.ia.call(b, a))
  }, V:function(a) {
    2 !== a.button && (J(B(a), "us_report_infoscreen", U(b.b.a)) || J(B(a), "us_report_note_text", U(b.b.a)) || J(B(a), "us_report_note_rem", U(b.b.a)) || J(B(a), "us_help_window", U(b.b.a)) || J(B(a), "us_report_remove", U(b.b.a)) || J(B(a), "us_report_window", U(b.b.a)) || b.ka.call(b, a))
  }};
  F(U(this.b.a).body, "mousemove", this.i.U);
  F(U(this.b.a).body, "mousedown", this.i.T);
  F(U(this.b.a).body, "mouseup", this.i.V);
  this.W = U(this.b.a).createElement("div");
  D(this.W, "us_report_note_cursor");
  this.W.setAttribute("unselectable", "on");
  C(this.W, "display:none;");
  U(this.b.a).body.appendChild(this.W)
}
function jb() {
  for(var a = Q.h.note, b = [], d, c, e, g = Math.round, j = a.b.D.na.mult, l = eval("'" + a.Yb.replace(/&#x([0-9a-z]{4});/g, "\\u$1") + "'"), q = 0;q < a.Z.length;q++) {
    a.Z[q] !== f && (d = parseInt(a.Z[q].style.left.replace(/px/, ""), 10), c = parseInt(a.Z[q].style.top.replace(/px/, ""), 10), e = a.Z[q].children[1].value, "" === e || e === l || b.push([g(d * j), g(c * j), e]))
  }
  return b
}
n = ib.prototype;
n.disable = function() {
  this.l = h;
  C(this.W, "display:none;")
};
n.enable = function() {
  this.l = m;
  db(this.ra, "default")
};
n.cancel = function() {
  return this.o ? (this.o = m, this.N = this.Y = this.bb = k, h) : m
};
n.Ib = function(a, b) {
  "undefined" === typeof b && (b = m);
  var d, c;
  b ? (d = this.u.width - 45, c = this.u.height - 45) : (d = this.u.width - 205, c = this.u.height - 200);
  a.f > d && (a.f = d);
  a.e > c && (a.e = c);
  0 > a.e && (a.e = 0)
};
n.ja = function(a) {
  var b;
  this.o ? (C(this.W, "display:none;"), b = {f:a.clientX, e:a.clientY}, this.Y !== k ? (this.N = {f:this.N.f + (b.f - this.Y.f), e:this.N.e + (b.e - this.Y.e)}, this.Ib(this.N), C(this.bb, "display:block; top: " + this.N.e + "px; left: " + this.N.f + "px;")) : this.N = {f:parseInt(this.bb.style.left.replace(/px/, ""), 10), e:parseInt(this.bb.style.top.replace(/px/, ""), 10)}, this.Y = b) : this.l || (b = B(a), ja(B(a)) ? (D(b, "us_report_note us_hover"), this.ac = b) : this.ac !== k && D(this.ac, 
  "us_report_note"), b = {f:a.clientX, e:a.clientY}, this.Ib(b, h), J(B(a), "us_report_note", U(this.b.a)) ? C(this.W, "display:none;") : (a = b.f + 16, w() && a > this.u.width - 50 && (a = this.u.width - 50), C(this.W, "display:block; top: " + (b.e + 16) + "px; left: " + a + "px;")))
};
n.ia = function(a) {
  ja(B(a)) && (this.o = h, this.bb = B(a))
};
n.ka = function(a) {
  if(this.o) {
    this.o = m, this.N = this.Y = this.bb = k
  }else {
    if(!this.l) {
      this.$a = kb(this);
      var b = a.clientX;
      a = a.clientY;
      var d = G();
      b > d.width - 200 && (b = d.width - 200);
      a > d.height - 180 && (a = d.height - 180);
      C(this.$a, "display:block; top: " + a + "px; left: " + b + "px;");
      D(this.$a.childNodes[0], "us_report_note_rem");
      var c = this.Z.length - 1, e = this;
      F(this.$a.childNodes[0], "click", function() {
        U(e.b.a).body.removeChild(e.Z[c]);
        e.Z[c] = f
      });
      this.Zb = this.$a.getElementsByTagName("textarea")[0];
      this.$a = k;
      this.Zb !== k && this.Zb.focus()
    }
  }
};
n.q = function() {
  E(U(this.b.a).body, "mousemove", this.i.U);
  E(U(this.b.a).body, "mousedown", this.i.T);
  E(U(this.b.a).body, "mouseup", this.i.V);
  for(var a = 0;a < this.Z.length;a++) {
    this.Z[a] !== f && U(this.b.a).body.removeChild(this.Z[a])
  }
  U(this.b.a).body.removeChild(this.W);
  this.W = k
};
function kb(a) {
  var b = U(a.b.a).createElement("div");
  D(b, "us_report_note");
  b.innerHTML = '<div class="us_report_note_rem_empty"></div><textarea class="us_report_note_text">' + a.Yb + "</textarea>";
  b.setAttribute("unselectable", "on");
  C(b, "display:none;");
  U(a.b.a).body.appendChild(b);
  var d = b.childNodes[1], c = eval("'" + a.Yb.replace(/&#x([0-9a-z]{4});/g, "\\u$1") + "'");
  F(d, "focus", function() {
    d.value === c && (d.value = "")
  });
  F(d, "blur", function() {
    "" === d.value && (d.value = c)
  });
  a.Z.push(b);
  return b
}
function lb(a) {
  this.l = h;
  this.L = m;
  this.m = this.A = k;
  this.Sa = m;
  this.B = [];
  this.O = k;
  this.w = [];
  this.pa = k;
  this.u = a;
  this.ra = a.S;
  this.b = a.Bb;
  this.I = U(this.b.a).createElement("div");
  this.I.setAttribute("id", "us_painter");
  this.I.setAttribute("unselectable", "on");
  var b = G();
  b.width = la();
  b = fa(b.width, b.height);
  a.width = b.width;
  a.height = b.height;
  C(this.I, "width: " + a.width + "px; height: " + a.height + "px;top:0px;left:0px;");
  U(this.b.a).body.appendChild(this.I);
  if(x() || w()) {
    this.Sa = m;
    try {
      U(this.b.a).namespaces.v || U(this.b.a).namespaces.add("v", "urn:schemas-microsoft-com:vml"), this.Sa = h
    }catch(d) {
      xa("failed to add namespace")
    }
  }else {
    this.A = U(this.b.a).createElement("canvas"), this.A.setAttribute("width", a.width), this.A.setAttribute("height", a.height), this.I.appendChild(this.A), this.m = this.A.getContext("2d")
  }
  var c = this;
  this.sa = m;
  this.i = {U:function(a) {
    c.ec.call(c, a);
    if(!c.l) {
      var b = ga(a, T(c.b.a));
      v() && (9 >= U(c.b.a).documentMode && !T(c.b.a).event.button) && (c.sa = m);
      1 === b && !c.sa && (b = 0);
      1 !== b && (c.L = m, c.O = k);
      c.ja.call(c, a)
    }
  }, T:function(a) {
    c.l || (1 === ga(a, T(c.b.a)) && (c.sa = h), 2 !== a.button && (J(B(a), "us_report_infoscreen", U(c.b.a)) || J(B(a), "us_help_window", U(c.b.a)) || J(B(a), "us_report_remove", U(c.b.a)) || J(B(a), "us_report_window", U(c.b.a)) || J(B(a), "us_report_note", U(c.b.a)) || J(B(a), "us_path_remove", U(c.b.a)) || c.ia.call(c, a)))
  }, V:function(a) {
    c.l || (1 === ga(a, T(c.b.a)) && (c.sa = m), 2 !== a.button && (J(B(a), "us_report_remove", U(c.b.a)) || J(B(a), "us_path_remove", U(c.b.a)) || c.ka.call(c, a)))
  }, Cb:function() {
    c.od.call(c, c.j.Ia)
  }};
  F(U(this.b.a), "mousemove", this.i.U);
  F(U(this.b.a), "mousedown", this.i.T);
  F(U(this.b.a), "mouseup", this.i.V);
  this.uc("#EEF521", 10);
  this.R = [];
  this.j = {rc:Math.pow(20, 2), Ia:k, state:m, X:k, Aa:k};
  this.ua = U(this.b.a).createElement("div");
  this.ua.setAttribute("id", "us_path_remove");
  this.ua.setAttribute("unselectable", "on");
  U(this.b.a).body.appendChild(this.ua);
  F(this.ua, "click", this.i.Cb)
}
n = lb.prototype;
n.ec = function(a) {
  if(0 !== this.R.length && "us_path_remove" !== B(a).getAttribute("id")) {
    this.j.Aa !== k && window.clearTimeout(this.j.Aa);
    var b = a.clientX;
    a = a.clientY;
    for(var d = k, c = k, e = "", g, j, l, q, z, y, H = m, I = 0;I < this.R.length;I++) {
      d = this.R[I];
      c = this.w[I].path;
      if(b >= d.La && b <= d.Ja && a >= d.Ma && a <= d.Ka) {
        for(var M = 0;M < d.Wa.length;M++) {
          j = 2 * M;
          g = d.Wa[M].k;
          var R = d.Wa[M].d, da = a + g * b, S = -g;
          l = Math.max(c[j], c[j + 2]);
          z = Math.min(c[j], c[j + 2]);
          q = Math.max(c[j + 1], c[j + 3]);
          y = Math.min(c[j + 1], c[j + 3]);
          if(1E5 === g) {
            if(g = c[j], j = a, j < y || j > q) {
              continue
            }
          }else {
            if(0 === g) {
              if(g = b, j = c[j + 1], g < z || g > l) {
                continue
              }
            }else {
              if(g = (R - da) / (2 * S), j = g * S + da, g < z || g > l || j < y || j > q) {
                continue
              }
            }
          }
          l = Math.pow(g - b, 2);
          q = Math.pow(j - a, 2);
          if(l + q < this.j.rc) {
            d = this.w[I].path.length;
            e = "display: block; top:" + (this.w[I].path[d - 1] - 10) + "px; left: " + (this.w[I].path[d - 2] - 10) + "px;";
            this.j.Ia = I;
            H = h;
            break
          }
        }
      }
      if(H) {
        break
      }
    }
    var A = this;
    H ? (this.j.X !== k && (window.clearTimeout(this.j.X), this.j.X = k), this.j.Aa = window.setTimeout(function() {
      A.j.state = h;
      A.j.Aa = k;
      C(A.ua, e)
    }, 50)) : this.j.Ia !== k && (this.j.X === k && this.j.state) && (this.j.X = window.setTimeout(function() {
      A.j.state = m;
      C(A.ua, "display: none;");
      A.j.X = k
    }, 250))
  }
};
n.od = function(a) {
  if(a !== k) {
    if(this.R.splice(a, 1), this.w.splice(a, 1), C(this.ua, "display: none;"), this.A !== k) {
      this.m.clearRect(0, 0, this.A.width, this.A.height);
      for(a = 0;a < this.w.length;a++) {
        this.m.strokeStyle = this.w[a].color;
        this.m.lineWidth = this.w[a].lineWidth;
        this.m.beginPath();
        for(var b = 0;b < this.w[a].Va.length;b += 2) {
          0 === b ? this.m.moveTo(this.w[a].Va[b], this.w[a].Va[b + 1]) : this.m.lineTo(this.w[a].Va[b], this.w[a].Va[b + 1]), this.m.stroke()
        }
      }
      this.m.strokeStyle = this.pa.color;
      this.m.lineWidth = this.pa.lineWidth
    }else {
      this.I.removeChild(this.B[a].ctn), this.B.splice(a, 1)
    }
  }
};
function mb() {
  for(var a = Q.h.pen, b = [], d = Math.round, c = a.b.D.na.mult, e = [], g = 0;g < a.w.length;g++) {
    for(var e = [], j = 0;j < a.w[g].path.length;j++) {
      e.push(d(a.w[g].path[j] * c))
    }
    b.push(e)
  }
  return b
}
n.uc = function(a, b) {
  "undefined" === typeof b && (b = 10);
  this.pa = {color:a, lineWidth:b};
  this.A !== k && (this.m.strokeStyle = a, this.m.lineWidth = b)
};
n.ja = function(a) {
  if(this.L) {
    var b = Math.round, d = {f:b(a.clientX), e:b(a.clientY)};
    if(!(5 > Math.abs(d.f - this.O.f) && 5 > Math.abs(d.e - this.O.e))) {
      if(this.A !== k) {
        this.m.lineTo(d.f, d.e), this.m.stroke()
      }else {
        var c = this.B[this.B.length - 1].p.v, c = c.substr(0, c.length - 2) + " l" + d.f + "," + d.e + " e";
        this.B[this.B.length - 1].p.v = c
      }
      this.w[this.w.length - 1].path.push(b(a.clientX), b(a.clientY));
      this.w[this.w.length - 1].Va.push(d.f, d.e);
      this.O = d
    }
  }
};
n.ia = function(a) {
  if(!this.L) {
    this.L = h;
    var b = Math.round, d = {f:b(a.clientX), e:b(a.clientY)};
    this.O = d;
    if(this.A !== k) {
      this.m.beginPath(), this.m.moveTo(d.f, d.e)
    }else {
      var c, e, g, j;
      j = U(this.b.a);
      this.Sa ? (c = j.createElement('<v:shape class="usvml" style="position: absolute; left: 0px; top: 0px; width: 1px; height: 1px;" coordsize="1,1">'), e = j.createElement('<v:stroke class="usvml" weight="' + this.pa.lineWidth + '" color="' + this.pa.color + '">'), g = j.createElement('<v:fill class="usvml" on="false">'), j = j.createElement('<v:path class="usvml" v="m' + d.f + "," + d.e + " l" + d.f + "," + d.e + ' e">')) : (c = j.createElement('<shape xmlns="urn:schemas-microsoft.com:vml" class="usvml" style="position: absolute; left: 0px; top: 0px; width: 1px; height: 1px;" coordsize="1,1">'), 
      e = j.createElement('<stroke xmlns="urn:schemas-microsoft.com:vml" class="usvml" weight="' + this.pa.lineWidth + '" color="' + this.pa.color + '">'), g = j.createElement('<fill xmlns="urn:schemas-microsoft.com:vml" class="usvml" on="false">'), j = j.createElement('<path xmlns="urn:schemas-microsoft.com:vml" class="usvml" v="m' + d.f + "," + d.e + " l" + d.f + "," + d.e + ' e">'));
      c.appendChild(j);
      c.appendChild(g);
      c.appendChild(e);
      this.B.push({p:j, ctn:c});
      this.I.appendChild(c)
    }
    this.w.push({path:[b(a.clientX), b(a.clientY)], Va:[d.f, d.e], color:this.pa.color, width:this.pa.lineWidth})
  }
};
n.ka = function(a) {
  if(this.L) {
    var b = Math.round, d = b(a.clientX), c = b(a.clientY);
    if(this.A !== k) {
      this.m.lineTo(d, c), this.m.stroke()
    }else {
      var e = this.B[this.B.length - 1].p.v, e = e.substr(0, e.length - 2) + " l" + d + "," + c + " e";
      this.B[this.B.length - 1].p.v = e
    }
    this.w[this.w.length - 1].path.push(b(a.clientX), b(a.clientY));
    this.w[this.w.length - 1].Va.push(d, c);
    a = this.w[this.w.length - 1].path;
    b = {Wa:[], La:k, Ja:k, Ma:k, Ka:k};
    for(d = 0;d < a.length;d += 2) {
      b.La = b.La === k ? a[d] : Math.min(a[d], b.La), b.Ja = b.Ja === k ? a[d] : Math.max(a[d], b.Ja), b.Ma = b.Ma === k ? a[d + 1] : Math.min(a[d + 1], b.Ma), b.Ka = b.Ka === k ? a[d + 1] : Math.max(a[d + 1], b.Ka)
    }
    b.La -= 5;
    b.Ja += 5;
    b.Ma -= 5;
    b.Ka += 5;
    for(d = 0;d < a.length - 2;d += 2) {
      c = (a[d + 1] - a[d + 3]) / (a[d] - a[d + 2]), isFinite(c) || (c = 1E5), b.Wa.push({k:c, d:a[d + 1] - c * a[d]})
    }
    this.R.push(b);
    this.L = m;
    this.O = k
  }
};
n.q = function() {
  E(U(this.b.a), "mousemove", this.i.U);
  E(U(this.b.a), "mousedown", this.i.T);
  E(U(this.b.a), "mouseup", this.i.V);
  E(this.ua, "click", this.i.Cb);
  U(this.b.a).body.removeChild(this.I);
  U(this.b.a).body.removeChild(this.ua);
  this.R = []
};
n.disable = function() {
  this.l = h
};
n.enable = function() {
  this.l = m;
  db(this.ra, "crosshair")
};
n.cancel = function() {
  if(!this.L) {
    return m
  }
  this.L = m;
  this.O = k;
  return h
};
function nb(a) {
  this.l = h;
  this.L = m;
  this.m = this.A = k;
  this.Sa = m;
  this.B = [];
  this.fc = "";
  this.Xd = this.O = k;
  this.t = [];
  this.u = a;
  this.b = a.Bb;
  this.I = U(this.b.a).createElement("div");
  this.I.setAttribute("id", "us_arrow");
  this.I.setAttribute("unselectable", "on");
  this.ra = a.S;
  var b = G();
  b.width = la();
  b = fa(b.width, b.height);
  a.width = b.width;
  a.height = b.height;
  C(this.I, "width: " + a.width + "px; height: " + a.height + "px;top:0px;left:0px;");
  U(this.b.a).body.appendChild(this.I);
  if(x() || w()) {
    this.Sa = m;
    try {
      U(this.b.a).namespaces.v || U(this.b.a).namespaces.add("v", "urn:schemas-microsoft-com:vml"), this.Sa = h
    }catch(d) {
      xa("failed to add namespace")
    }
  }else {
    this.A = U(this.b.a).createElement("canvas"), this.A.setAttribute("width", a.width), this.A.setAttribute("height", a.height), this.I.appendChild(this.A), this.m = this.A.getContext("2d")
  }
  var c = this;
  this.sa = m;
  this.i = {U:function(a) {
    c.ec.call(c, a);
    if(!c.l) {
      var b = ga(a, T(c.b.a));
      v() && (9 >= U(c.b.a).documentMode && !T(c.b.a).event.button) && (c.sa = m);
      1 === b && !c.sa && (b = 0);
      1 !== b && (c.L = m, c.O = k);
      c.ja.call(c, a)
    }
  }, T:function(a) {
    c.l || (1 === ga(a, T(c.b.a)) && (c.sa = h), 2 !== a.button && (J(B(a), "us_report_infoscreen", U(c.b.a)) || J(B(a), "us_help_window", U(c.b.a)) || J(B(a), "us_report_remove", U(c.b.a)) || J(B(a), "us_report_window", U(c.b.a)) || J(B(a), "us_report_note", U(c.b.a)) || J(B(a), "us_path_remove", U(c.b.a)) || c.ia.call(c, a)))
  }, V:function(a) {
    c.l || (1 === ga(a, T(c.b.a)) && (c.sa = m), 2 !== a.button && (J(B(a), "us_report_remove", U(c.b.a)) || J(B(a), "us_path_remove", U(c.b.a)) || c.ka.call(c, a)))
  }, Cb:function() {
    c.nd.call(c, c.j.Ia)
  }};
  F(U(this.b.a), "mousemove", this.i.U);
  F(U(this.b.a), "mousedown", this.i.T);
  F(U(this.b.a), "mouseup", this.i.V);
  this.uc("#EEF521");
  this.R = [];
  this.j = {rc:Math.pow(20, 2), Ia:k, state:m, X:k, Aa:k};
  this.oa = U(this.b.a).createElement("div");
  this.oa.setAttribute("id", "us_path_remove");
  this.oa.setAttribute("unselectable", "on");
  U(this.b.a).body.appendChild(this.oa);
  F(this.oa, "click", this.i.Cb)
}
n = nb.prototype;
n.ec = function(a) {
  if(0 !== this.R.length && "us_path_remove" !== B(a).getAttribute("id")) {
    this.j.Aa !== k && window.clearTimeout(this.j.Aa);
    var b = a.clientX;
    a = a.clientY;
    var d = k, c = "", e = k, e = k, g, j, l, q, z = m, y;
    for(y = 0;y < this.R.length;y++) {
      d = this.R[y];
      e = this.t[y].C;
      e = [e.start[0], e.start[1], e.end[0], e.end[1]];
      if(b >= d.La && b <= d.Ja && a >= d.Ma && a <= d.Ka) {
        g = d.Wa[0].k;
        var H = d.Wa[0].d, I = a + g * b, M = -g, d = Math.max(e[0], e[2]);
        l = Math.min(e[0], e[2]);
        j = Math.max(e[1], e[3]);
        q = Math.min(e[1], e[3]);
        if(1E5 === g) {
          if(g = e[0], e = a, e < q || e > j) {
            continue
          }
        }else {
          if(0 === g) {
            if(g = b, e = e[1], g < l || g > d) {
              continue
            }
          }else {
            if(g = (H - I) / (2 * M), e = g * M + I, g < l || g > d || e < q || e > j) {
              continue
            }
          }
        }
        d = Math.pow(g - b, 2);
        e = Math.pow(e - a, 2);
        if(d + e < this.j.rc) {
          c = "display: block; top:" + (this.t[y].Na.end.e - 10) + "px; left: " + (this.t[y].Na.end.f - 10) + "px;";
          this.j.Ia = y;
          z = h;
          break
        }
      }
      if(z) {
        break
      }
    }
    if(!z) {
      for(y = 0;y < this.R.length;y++) {
        if(d = this.t[y].C, e = Math.atan2(d.end[1] - d.start[1], d.end[0] - d.start[0]), l = ob(e, d.end[0], d.end[1]), e = Math.min(l[0][0], l[1][0], l[2][0]), d = Math.max(l[0][0], l[1][0], l[2][0]), j = Math.min(l[0][1], l[1][1], l[2][1]), l = Math.max(l[0][1], l[1][1], l[2][1]), b > e && b < d && a > j && a < l) {
          c = "display: block; top:" + (this.t[y].Na.end.e - 10) + "px; left: " + (this.t[y].Na.end.f - 10) + "px;";
          this.j.Ia = y;
          z = h;
          break
        }
      }
    }
    var R = this;
    z ? (this.j.X !== k && (window.clearTimeout(this.j.X), this.j.X = k), this.j.Aa = window.setTimeout(function() {
      R.j.state = h;
      R.j.Aa = k;
      C(R.oa, c)
    }, 50)) : this.j.Ia !== k && (this.j.X === k && this.j.state) && (this.j.X = window.setTimeout(function() {
      R.j.state = m;
      C(R.oa, "display: none;");
      R.j.X = k
    }, 250))
  }
};
n.nd = function(a) {
  a !== k && (this.R.splice(a, 1), this.t.splice(a, 1), C(this.oa, "display: none;"), pb(this))
};
function qb() {
  for(var a = Q.h.arrow, b = [], d = Math.round, c = a.b.D.na.mult, e = 0;e < a.t.length;e++) {
    b.push([d(a.t[e].C.start[0] * c), d(a.t[e].C.start[1] * c), d(a.t[e].C.end[0] * c), d(a.t[e].C.end[1] * c)])
  }
  return b
}
n.uc = function(a) {
  this.A !== k ? (this.m.strokeStyle = a, this.m.fillStyle = a, this.m.lineWidth = 10) : this.fc = a
};
function ob(a, b, d) {
  for(var c = [[30, 0], [-2, -20], [-2, 20]], e = [], g = 0, g = 0;g < c.length;g++) {
    e.push([c[g][0] * Math.cos(a) - c[g][1] * Math.sin(a), c[g][0] * Math.sin(a) + c[g][1] * Math.cos(a)])
  }
  a = [];
  for(g = 0;g < e.length;g++) {
    a.push([e[g][0] + b, e[g][1] + d])
  }
  return a
}
function pb(a) {
  var b, d;
  a.A !== k && a.m.clearRect(0, 0, a.A.width, a.A.height);
  var c, e;
  b = k;
  for(var g = Math.round, j = 0;j < a.t.length;j++) {
    if(b = a.t[j].Na.start, d = a.t[j].Na.end, a.A !== k) {
      a.m.beginPath();
      a.m.moveTo(b.f, b.e);
      a.m.lineTo(d.f, d.e);
      a.m.stroke();
      b = Math.atan2(d.e - b.e, d.f - b.f);
      b = ob(b, d.f, d.e);
      d = a;
      d.m.beginPath();
      d.m.moveTo(b[0][0], b[0][1]);
      for(c = c = 0;c < b.length;c++) {
        d.m.lineTo(b[c][0], b[c][1])
      }
      d.m.lineTo(b[0][0], b[0][1]);
      d.m.fill()
    }else {
      if(c = Math.sqrt(Math.pow(Math.abs(d.e - b.e), 2) + Math.pow(Math.abs(d.f - b.f), 2)), e = 25 / c, c = g((d.e - b.e) * e), e = g((d.f - b.f) * e), e = "m" + b.f + "," + b.e + " l" + (d.f + e) + "," + g(d.e + c) + " e", j >= a.B.length) {
        var l = U(a.b.a);
        a.Sa ? (d = l.createElement('<v:shape class="usvml" style="position: absolute; left: 0px; top: 0px; width: 1px; height: 1px;" coordsize="1,1">'), b = l.createElement('<v:stroke endarrow="classic" class="usvml" weight="10" color="' + a.fc + '">'), c = l.createElement('<v:fill class="usvml" on="false">'), e = l.createElement('<v:path class="usvml" v="' + e + '">')) : (d = l.createElement('<shape xmlns="urn:schemas-microsoft.com:vml" class="usvml" style="position: absolute; left: 0px; top: 0px; width: 1px; height: 1px;" coordsize="1,1">'), 
        b = l.createElement('<stroke endarrow="classic" xmlns="urn:schemas-microsoft.com:vml" class="usvml" weight="10" color="' + a.fc + '">'), c = l.createElement('<fill xmlns="urn:schemas-microsoft.com:vml" class="usvml" on="false">'), e = l.createElement('<path xmlns="urn:schemas-microsoft.com:vml" class="usvml" v="' + e + '">'));
        d.appendChild(e);
        d.appendChild(c);
        d.appendChild(b);
        a.I.appendChild(d);
        a.B.push({r:d, p:e})
      }else {
        a.B[j].p.v = e
      }
    }
  }
  if(a.A === k && j < a.B.length) {
    for(g = j;g < a.B.length;g++) {
      a.I.removeChild(a.B[g].r)
    }
    a.B.splice(j, a.B.length - j)
  }
}
n.ja = function(a) {
  if(this.L) {
    var b = {f:a.clientX, e:a.clientY};
    5 > Math.abs(b.f - this.O.f) && 5 > Math.abs(b.e - this.O.e) || (this.t[this.t.length - 1].Na.end = b, this.t[this.t.length - 1].C.end = [a.clientX, a.clientY], pb(this), this.O = b)
  }
};
n.ia = function(a) {
  if(!this.L) {
    this.L = h;
    var b = {f:a.clientX, e:a.clientY};
    this.O = b;
    this.t.push({Na:{start:b, end:k}, C:{start:[a.clientX, a.clientY], end:k}})
  }
};
n.ka = function(a) {
  if(this.L) {
    this.t[this.t.length - 1].Na.end = {f:a.clientX, e:a.clientY};
    this.t[this.t.length - 1].C.end = [a.clientX, a.clientY];
    a = this.t[this.t.length - 1];
    var b = (a.C.start[1] - a.C.end[1]) / (a.C.start[0] - a.C.end[0]);
    isFinite(b) || (b = 1E5);
    a = {Wa:[{k:b, d:a.C.start[1] - b * a.C.start[0]}], La:Math.min(a.C.start[0], a.C.end[0]) - 5, Ja:Math.max(a.C.start[0], a.C.end[0]) + 5, Ma:Math.min(a.C.start[1], a.C.end[1]) - 5, Ka:Math.max(a.C.start[1], a.C.end[1]) + 5};
    this.R.push(a);
    pb(this);
    this.L = m;
    this.O = k
  }
};
n.q = function() {
  E(U(this.b.a), "mousemove", this.i.U);
  E(U(this.b.a), "mousedown", this.i.T);
  E(U(this.b.a), "mouseup", this.i.V);
  E(this.oa, "click", this.i.Cb);
  U(this.b.a).body.removeChild(this.I);
  U(this.b.a).body.removeChild(this.oa);
  this.R = []
};
n.disable = function() {
  this.l = h
};
n.enable = function() {
  this.l = m;
  db(this.ra, "crosshair")
};
n.cancel = function() {
  if(!this.L) {
    return m
  }
  this.L = m;
  this.t.splice(this.t.length - 1, 1);
  this.I.removeChild(this.B[this.B.length - 1].r);
  pb(this);
  this.O = k;
  return h
};
var X = k, rb = k, sb = k, tb = k, ub = m, vb = k, wb = k, xb = k;
sa = function(a, b) {
  X === k && xb !== k && (X = U(xb).createElement("div"), rb = U(xb).createElement("div"), tb = U(xb).createElement("div"), D(rb, "us_tooltip"), D(tb, "us_tip_arrow"), D(X, "us_tooltip_cont"), X.appendChild(rb), X.appendChild(tb), U(xb).body.appendChild(X));
  F(a, "mouseover", function() {
    ub = h;
    wb !== k && (window.clearTimeout(wb), wb = k);
    vb = window.setTimeout(function() {
      if(ub) {
        var d, c = a;
        d = 0;
        for(var e = a, g = 0;e;) {
          d += e.offsetTop, e = e.offsetParent
        }
        for(;c;) {
          g += c.offsetLeft, c = c.offsetParent
        }
        c = ma();
        d += c[1];
        g += c[0];
        d = [g, d];
        rb.innerHTML = b;
        C(X, "display: block;");
        sb = {width:document.documentElement.clientWidth - (v() ? 30 : 15), height:ka() - 15};
        g = d[0];
        c = d[1] - (X.clientHeight + 5);
        g + X.clientWidth > sb.width ? (g = sb.width - (X.clientWidth + 15), C(tb, "left: " + (d[0] - g) + "px;")) : C(tb, "left: 7px;");
        C(X, "top: " + c + "px; left: " + g + "px;")
      }
    }, 600)
  });
  F(a, "mouseout", function() {
    vb !== k && (window.clearTimeout(vb), vb = k);
    ub = m;
    wb = window.setTimeout(function() {
      C(X, "display: none;")
    }, 200)
  })
};
ta = function() {
  X !== k && (vb !== k && (window.clearTimeout(vb), vb = k), wb !== k && (window.clearTimeout(wb), wb = k), C(X, "display: none;"))
};
ra = function() {
  X !== k && (U(xb).body.removeChild(X), X = xb = k)
};
ua = function(a) {
  xb = a
};
function yb() {
  this.rb = 0;
  this.Ec = 1
}
function zb(a, b) {
  if(b === k) {
    return""
  }
  var d;
  d = "";
  if(x() || w()) {
    d = b.all[0].text, d === f && (d = "")
  }else {
    var c = b.doctype;
    c !== k && c !== f && (d = c.systemId === k ? '<!DOCTYPE HTML PUBLIC "' + c.publicId + '">' : '<!DOCTYPE HTML PUBLIC "' + c.publicId + '" "' + c.systemId + '">')
  }
  for(var c = b.getElementsByTagName("*"), e, g, j = 1, l = Math.round, j = a.Ec, q = 0, z = c.length;q < z;q++) {
    "function" !== typeof c[q].removeAttribute || ("function" !== typeof c[q].setAttribute || "function" !== typeof c[q].getAttribute) || (c[q].removeAttribute("data-usscrolly"), c[q].removeAttribute("data-usscrollx"), 0 < c[q].scrollTop && c[q].setAttribute("data-usscrolly", l(c[q].scrollTop * j)), 0 < c[q].scrollLeft && c[q].setAttribute("data-usscrollx", l(c[q].scrollLeft * j)), e = c[q], g = e.nodeName.toLowerCase(), "input" === g ? "text" === e.getAttribute("type") || e.getAttribute("type") === 
    k || "password" === e.getAttribute("type") || "date" === e.getAttribute("type") || "color" === e.getAttribute("type") || "email" === e.getAttribute("type") || "search" === e.getAttribute("type") || "tel" === e.getAttribute("type") || "url" === e.getAttribute("type") || "number" === e.getAttribute("type") || "range" === e.getAttribute("type") || "week" === e.getAttribute("type") || "month" === e.getAttribute("type") || "time" === e.getAttribute("type") || "datetime-local" === e.getAttribute("type") || 
    "datetime" === e.getAttribute("type") ? e.setAttribute("data-usval", escape(e.value)) : ("checkbox" === e.getAttribute("type") || "radio" === e.getAttribute("type")) && e.checked === h && e.setAttribute("data-uscheck", "true") : "select" === g ? e.setAttribute("data-usval", e.value) : "textarea" === g && e.setAttribute("data-usval", escape(e.value)))
  }
  e = k;
  e = "undefined" === typeof b.defaultView ? b.parentWindow : b.defaultView;
  for(c = 0;c < e.frames.length;c++) {
    try {
      e.frames[c].frameElement.setAttribute("data-usid", c)
    }catch(y) {
    }
  }
  c = b.documentElement.outerHTML || (new XMLSerializer).serializeToString(b.documentElement);
  q = q = k;
  l = q = "";
  if(c === f) {
    g = k
  }else {
    if(g = c.match(/<iframe.+?>.*?<\/iframe>/ig), g === k) {
      g = k
    }else {
      j = [];
      l = [];
      z = z = "";
      for(q = 0;q < g.length;q++) {
        z = g[q], z = z.match(/data-usid=["|'](.+?)["|']/i), z === k ? (j.push(g[q]), l.push("usblank")) : (z = parseInt(z[1], 10), j.push(g[q]), l.push(e.frames[z]))
      }
      g = {Pd:j, Od:l}
    }
  }
  if(g !== k) {
    e = g.Pd;
    g = g.Od;
    for(j = 0;j < g.length;j++) {
      "undefined" !== typeof e[j] && (l = e[j], "usblank" === g[j] ? (l = l.match(/(src=").+?(")/) !== k ? l.replace(/(.+?src=").+?(".+?)/i, "$1about:usblank$2") : l.match(/(src=').+?(')/) !== k ? l.replace(/(.+?src=').+?('.+?)/i, "$1about:usblank$2") : l.replace(/(.+?src=).+?(\s.+?)/i, "$1about:usblank$2"), c = c.replace(e[j], l)) : (q = g[j].document, q = encodeURIComponent(zb(a, q)), q = '<usframe type="text/javascript" id="usiftag_' + a.rb + '">{"data":"' + q + '", "id": "usiftag_' + a.rb + '", "url": "' + 
      g[j].location.href + '"}</usframe>', l = l.match(/(src=").+?(")/) !== k ? l.replace(/(.+?src=").+?(".+?)/i, "$1about:blank$2") : l.match(/(src=').+?(')/) !== k ? l.replace(/(.+?src=').+?('.+?)/i, "$1about:blank$2") : l.replace(/(.+?src=).+?(\s.+?)/i, "$1about:blank$2"), c = c.replace(e[j], l + q), a.rb++))
    }
  }
  e = b.getElementsByTagName("canvas");
  g = "";
  for(var H, j = 0;j < e.length;j++) {
    if(!x() && !w()) {
      try {
        H = e[j].toDataURL(), "data:image" === H.substr(0, 10) && (g += '<uscanvas data-id="' + j + '">' + H + "</uscanvas>")
      }catch(I) {
      }
    }
  }
  H = c + g;
  c = b.styleSheets;
  j = j = e = "";
  for(g = 0;g < c.length;g++) {
    if(c[g].href === k || "" === c[g].href) {
      if(j = x() || w() ? c[g].media : c[g].media.mediaText, "print" !== j) {
        if(v()) {
          e += c[g].cssText
        }else {
          if(c[g].cssRules !== k) {
            j = [];
            for(l = 0;l < c[g].cssRules.length;l++) {
              j.push(c[g].cssRules[l].cssText)
            }
            e += j.join("\n")
          }
        }
      }
    }
  }
  c = H + ("<usstyle>" + e + "</usstyle>");
  if(x() || w()) {
    if(x() || w()) {
      H = b.styleSheets;
      e = m;
      for(g = 0;g < H.length;g++) {
        for(j = 0;j < H[g].rules.length;j++) {
          if("article" === H[g].rules[j].selectorText && "block" === H[g].rules[j].style.display) {
            e = h;
            break
          }
        }
        if(e) {
          break
        }
      }
      H = e
    }else {
      H = h
    }
    c = H ? c + "<ushtml5>true</ushtml5>" : c + "<ushtml5>false</ushtml5>"
  }
  return d + c
}
var Ab = {highlight:gb, blackout:fb, note:ib, pen:lb, arrow:nb}, Q = {Vd:m, a:k, $:"none", Jb:m, Ac:m, Fb:k, D:k, s:k, yb:k, qc:k, F:k, ee:k, Oa:k, Ub:k, Tb:k, Sb:k, qa:k, Vb:k, bc:k, Ra:[], aa:"normal", Kb:m, h:{highlight:k, blackout:k, pen:k, arrow:k, note:k}, Ta:k, S:k};
function Bb() {
  for(var a in Ab) {
    Ab.hasOwnProperty(a) && (Q.h[a] = k)
  }
}
function Cb(a) {
  Q.Ac && window._gaq.push(["_trackEvent", "Usersnap", "click", a])
}
var Db = k, Eb = k, Fb;
function Gb(a, b) {
  Cb("switchtool_" + b);
  Q.Ta !== k && Q.Ta.disable();
  Q.Ta = Q.h[b];
  Q.Ta.enable()
}
function Hb(a, b) {
  "undefined" === typeof b && (b = window);
  a = a || b.event;
  a.preventDefault && a.preventDefault();
  a.returnValue = m
}
function Ib(a) {
  for(var b = [37, 38, 39, 40, 33, 34, 35, 36, 32], d = b.length;d--;) {
    if(a.keyCode === b[d]) {
      if(J(B(a), "us_report_note_text")) {
        break
      }
      if(J(B(a), "us_email_text_box")) {
        break
      }
      if(J(B(a), "us_email")) {
        break
      }
      Hb(a);
      break
    }
  }
}
var Jb = k;
function Kb() {
  window.scrollTo(Jb[0], Jb[1])
}
var Lb = document.onselectstart;
function Y(a) {
  if(!Q.Kb) {
    K.yd();
    Q.F.q();
    Q.F = k;
    Q.Fb = k;
    Q.D = k;
    if("finished" !== a) {
      var b = Q.Ra[Q.Ra.length - 1];
      b.nc !== k && Fa(b.nc);
      b.tc !== k && Fa(b.tc)
    }
    if("normal" === Q.aa) {
      for(var d in Q.h) {
        Q.h.hasOwnProperty(d) && ("object" === typeof Q.h[d] && Q.h[d] !== k) && Q.h[d].q()
      }
      Q.S.q()
    }
    Q.Oa !== k && Q.Oa.q();
    Q.yb !== k && (Q.yb.q(), Q.yb = k);
    Q.Oa = k;
    Bb();
    Q.Ta = k;
    Q.S = k;
    ra();
    Q.a.q(function() {
      Q.a = k
    });
    "normal" === Q.aa && (window.removeEventListener && window.removeEventListener("DOMMouseScroll", Hb, m), window.onmousewheel = document.onmousewheel = k, E(document, "keydown", Ib), E(window, "scroll", Kb), document.onselectstart = Lb);
    "button" === Q.$ && Oa();
    if(Q.Vb !== k && ("resize" === a || "cancel" === a)) {
      a = {type:a};
      try {
        Q.Vb.apply(window, [a])
      }catch(c) {
      }
    }
  }
}
function Mb() {
  Q.F !== k && Y("resize")
}
function Nb(a) {
  27 === a.keyCode && Q.F !== k && Q.Ta !== k && (Q.Ta.cancel() || Y("cancel"))
}
function Ob(a) {
  Eb === h && (85 === a.keyCode && a.ctrlKey === h) && (Pb(), Hb(a))
}
function Qb() {
  Cb("cancel");
  Y("cancel")
}
function Rb(a) {
  var b = {highlight:[], blackout:[], note:[], paths:[], arrows:[]};
  Q.h.highlight !== k && (b.highlight = hb());
  if(Q.h.blackout !== k) {
    for(var d = Q.h.blackout, c = [], e = Math.round, g = d.b.D.na.mult, j = 0;j < d.Ba.length;j++) {
      d.Ba[j] !== f && c.push([[e(d.Ba[j][0][0] * g), e(d.Ba[j][0][1] * g)], [e(d.Ba[j][1][0] * g), e(d.Ba[j][1][1] * g)]])
    }
    b.blackout = c
  }
  Q.h.note !== k && (b.note = jb());
  Q.h.pen !== k && (b.paths = mb());
  Q.h.arrow !== k && (b.arrows = qb());
  d = 0;
  0 === b.highlight.length && (d = 1);
  "mobile" === Q.aa && (d = 2);
  c = new za({va:{Bd:function() {
  }, scope:this}, kb:function(a, b) {
    var c = "", c = "postCB" === a ? "EC: " + b.RC + ", " + b.message : a, d = new W("alert", "A serious error has occured! (" + c + ")", Q.a, function() {
      d.q();
      Q.a.q()
    });
    Q.a.Ga++;
    d.show();
    Y("error")
  }, url:p.Qb});
  Q.Ra[Q.Ra.length - 1].tc = c.fb;
  a = {addInfo:k, email:a.Sc, comment:a.Nb};
  Fb !== f && (a.addInfo = Fb);
  if(Q.Ub !== k) {
    try {
      Q.Ub.apply(window, [a])
    }catch(l) {
    }
  }
  a.addInfo === k && (a.addInfo = f);
  O(c, "api", Db);
  a.addInfo !== f && O(c, "additionalinfo", s.stringify(a.addInfo));
  a.email !== f && O(c, "senderemail", a.email);
  a.comment !== f && O(c, "sendercomment", a.comment);
  O(c, "maskid", d);
  O(c, "sessionid", Q.Fb);
  O(c, "imgdata", s.stringify(b));
  Q.Kb = h;
  P.push(c);
  Ea();
  Q.yb = new W("progress", r.Jd, Q.a, function() {
    if(Q.Sb !== k) {
      try {
        Q.Sb.apply(window, [Q.Fb])
      }catch(a) {
      }
    }
    Q.Kb = m;
    Y("finished")
  });
  Q.yb.show()
}
function Sb(a) {
  if(!Q.Kb) {
    Cb("send");
    var b = [], b = [], b = [], b = [], d = m;
    Q.h.highlight !== k && (b = hb(), 0 < b.length && (d = h));
    Q.h.note !== k && (b = jb(), 0 < b.length && (d = h));
    Q.h.pen !== k && (b = mb(), 0 < b.length && (d = h));
    Q.h.arrow !== k && (b = qb(), 0 < b.length && (d = h));
    b = k;
    a.Nb !== f && "" !== a.Nb && (d = h);
    d ? Rb(a) : (b = /iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) ? new W("alert", r.oc, Q.a) : new W("alert", r.Hd, Q.a), b.show())
  }
}
function Tb(a, b, d) {
  if(Q.qa !== k) {
    try {
      Q.qa.apply(window, [a, b, d])
    }catch(c) {
    }
  }
}
function Ub() {
  if(Db === f || "" === Db || "YOUR-API-KEY-HERE" === Db.toUpperCase()) {
    return"button" === Q.$ && window.open(p.gb + "?apikey=", "_blank"), Tb("Invalid API Key", 100), m
  }
  var a = window.location.href;
  return 0 <= a.indexOf("http://localhost") || 0 <= a.indexOf("https://localhost") ? ("button" === Q.$ && window.open(p.gb + "?error=localdevelopment", "_blank"), Tb("Local Development not supported", 101), Ka(function() {
    var a = new W("alert", 'Local development is not supported!<br/><a target="_blank" href="' + p.gb + '?error=localdevelopment">' + r.tb + "</a>", Q.a, function() {
      a.q();
      Q.a.q()
    });
    Q.a.Ga++;
    a.show()
  }), m) : h
}
function Vb() {
  ua(Q.a);
  F(U(Q.a), "keyup", Nb);
  F(U(Q.a), "keydown", Ob);
  Q.Ra.push({nc:k, tc:k});
  "normal" === Q.aa ? Q.F = new Qa({a:Q.a, width:Q.D.width, height:Q.D.height, Ya:Sb, ca:Qb, zb:function(a) {
    Q.Oa.ba || "close" === a ? Q.Oa.ya() : (Cb("helpwindow"), Q.Oa.show())
  }, lb:Ab, $c:Gb, jb:Q.J.jb, vb:Q.J.vb, xb:Q.J.kc, wb:Q.J.Tc, ib:Q.J.ib, ub:Q.J.ub, Rc:Q.J.Ad, h:Q.J.h, ma:Q.J.ma, xa:Q.J.xa}) : "mobile" === Q.aa && (Q.F = new Wa({a:Q.a, width:Q.D.width, height:Q.D.height, Ya:Sb, ca:Qb, jb:Q.J.jb, vb:Q.J.vb, xb:Q.J.kc, wb:Q.J.Tc, ib:Q.J.ib, ub:Q.J.ub}));
  Q.F.show();
  if("normal" === Q.aa) {
    Q.S = new cb({a:Q.a, width:Q.D.width, height:Q.D.height, Ld:Q.F.mc("highlight") ? 0 : 1});
    var a = Q.S;
    a.ta = U(a.u.a).createElement("div");
    a.ta.setAttribute("id", "us_report_overlay");
    a.ta.setAttribute("unselectable", "on");
    1 === a.kd && D(a.ta, "lighter");
    C(a.ta, "width: " + a.u.width + "px; height: " + a.u.height + "px;top:0px;left:0px;");
    U(a.u.a).body.appendChild(a.ta);
    a.Ca = h;
    eb(a, []);
    for(var b in Q.h) {
      Q.F.mc(b) && (Q.h[b] = new Ab[b]({Bb:Q, S:Q.S, width:Q.D.width, height:Q.D.height}))
    }
    a = Q.S;
    a.Ca && (a.Da = U(a.u.a).createElement("div"), a.Da.setAttribute("id", "us_report_cursor_layer"), a.Da.setAttribute("unselectable", "on"), C(a.Da, "width: " + a.u.width + "px; height: " + a.u.height + "px;top:0px;left:0px;"), U(a.u.a).body.appendChild(a.Da));
    Q.F.start()
  }
  K.Db({url:p.Rb, mb:{api:Db, url:ba(), jsVersion:p.Ob}, va:function(a, b) {
    if(Q.F !== k) {
      var e;
      if(b) {
        if(a && 1 !== a.RC) {
          var g = a.message, j = a.RC;
          xa("Error " + j + " message: " + g);
          if("" !== g) {
            var l = "";
            -1 === j ? l = g + '<br/><a target="_blank" href="' + p.gb + "?apikey=" + Db + '">' + r.tb + "</a>" : -2 === j ? l = g + '<br/><a target="_blank" href="' + p.gb + '?error=localdevelopment">' + r.tb + "</a>" : -5 === j && (l = g + '<br/><a target="_blank" href="' + p.gb + '?apikey=">' + r.tb + "</a>");
            Tb(g, 102, j);
            e = new W("alert", l, Q.a, function() {
              e.q();
              Q.a.q()
            });
            Q.a.Ga++;
            e.show();
            Y("error");
            return
          }
          Y("error")
        }
        Q.qc = a.permissions;
        Q.qc.googleAnalytics === h && "undefined" !== typeof window._gaq && (Q.Ac = h);
        Cb("open");
        Q.F.Qc(Q.qc);
        Q.F.enable();
        "normal" === Q.aa && (Q.F.lc(), Q.Oa = new ab({a:Q.a, h:V, ud:Q.F.lc()}), g = Q.Oa, g.ba || "true" !== oa("usersnap_hide_help") && g.show());
        Q.Fb = a.sessionkey;
        g = new za({va:{Bd:function() {
        }, scope:this}, kb:function(a, b) {
          var c = "", c = "postCB" === a ? "EC: " + b.RC + ", " + b.message : a, d = new W("alert", "A serious error has occured! (" + c + ")", Q.a, function() {
            d.q();
            Q.a.q()
          });
          Q.a.Ga++;
          d.show();
          Y("error")
        }, url:p.Pb});
        Q.Ra[Q.Ra.length - 1].nc = g.fb;
        O(g, "api", Db);
        O(g, "sessionid", Q.Fb);
        O(g, "hlen", Q.D.data.length);
        O(g, "html", Q.D.data);
        "undefined" !== typeof Q.D.na && O(g, "viewportData", s.stringify(Q.D.na));
        j = G();
        l = Q.D.na.mult;
        O(g, "vpleft", Math.round((window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) * l));
        O(g, "vptop", Math.round((window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) * l));
        ca() ? (O(g, "vpwidth", Q.D.na.deviceWidth), O(g, "vpheight", Q.D.na.deviceHeight)) : (O(g, "vpwidth", Math.round(j.width * l)), O(g, "vpheight", Math.round(j.height * l)));
        O(g, "location", window.location.href);
        P.push(g);
        Ea()
      }else {
        Q.F !== k && (xa("Invalid API Key"), g = r.Dd, Tb("Invalid API Key", 100), e = new W("alert", g, Q.a, function() {
          e.q();
          Q.a.q()
        }), Q.a.Ga++, e.show(), Y("error"))
      }
    }
  }, scope:this})
}
function Wb() {
  if(Q.F === k && Q.a === k) {
    if("button" === Q.$) {
      var a = Q.s;
      if(!a.H.Xa) {
        a.H.Xa = h;
        a.H.vc = 3 === a.s.childNodes[0].nodeType ? a.s : a.s.childNodes[0];
        var b = 0;
        a.H.pc = window.setInterval(function() {
          for(var c = "", d = 0;d < b;d++) {
            c += "."
          }
          b++;
          4 < b && (b = 0);
          a.H.vc.innerHTML = c
        }, 200)
      }
    }
    Q.a = new Ja;
    var d = m;
    if(Ub()) {
      if("button" === Q.$ && Q.Tb !== k) {
        try {
          Q.Tb.apply(window)
        }catch(c) {
        }
      }
      var e = Q, g;
      g = new yb;
      var j = k, l = {};
      l.zoomLevel = qa.zoom();
      0 === l.zoomLevel && (l.zoomLevel = 1);
      if(ca()) {
        j = document.defaultView.getComputedStyle(document.documentElement, k);
        l.contentWidth = parseInt(j.width.replace(/px/, ""), 10);
        l.contentHeight = parseInt(j.height.replace(/px/, ""), 10);
        l.orientation = 90 === window.orientation || -90 === window.orientation ? "L" : "P";
        var j = /Chrome/i, q = navigator.userAgent || navigator.vendor || window.opera;
        /Android/i.test(q) && j.test(q) ? (l.zoomLevel *= 2, l.deviceWidth = window.screen.width * window.devicePixelRatio, l.deviceHeight = window.screen.height * window.devicePixelRatio) : (l.deviceWidth = window.screen.width, l.deviceHeight = window.screen.height);
        l.retina = 1 < window.devicePixelRatio
      }else {
        j = G(), q = 1, 0.0010 < Math.abs(l.zoomLevel - 1) && (q = l.zoomLevel), l.contentWidth = j.width, l.contentHeight = j.height, l.deviceWidth = Math.round(j.width * q), l.deviceHeight = Math.round(j.height * q)
      }
      l.mult = 1;
      0.0010 < Math.abs(l.zoomLevel - 1) && (l.mult = l.zoomLevel);
      g.Ec = l.mult;
      g.rb = 0;
      g = {data:zb(g, document) + "<ustfc>" + g.rb + "</ustfc>", width:la(), height:ka(), na:l};
      e.D = g
    }else {
      d = h
    }
    Ka(function() {
      d ? Q.a.q(function() {
        Q.a = k
      }) : Vb();
      "button" === Q.$ && Oa()
    });
    e = [];
    p.Ua ? e.push(p.za + "css/usersnap.css?dc=" + (new Date).getTime()) : e.push(p.za + "res/" + p.Fa + "/css/usersnap.css");
    Q.a.Ab({ic:e});
    d || ("normal" === Q.aa && (window.addEventListener && window.addEventListener("DOMMouseScroll", Hb, m), window.onmousewheel = document.onmousewheel = Hb, Ka(function() {
      T(Q.a).onmousewheel = U(Q.a).onmousewheel = function(a) {
        Hb(a, T(Q.a))
      }
    }), F(document, "keydown", Ib), Jb = ma(), F(window, "scroll", Kb), Lb = document.onselectstart, document.onselectstart = function() {
      if(v()) {
        if(!J(B(window.event), "us_report_note_text") && !J(B(window.event), "us_email_text_box") && !J(B(window.event), "us_email") && !J(B(window.event), "us_add_email") && !J(B(window.event), "us_add_comment")) {
          return m
        }
      }else {
        return m
      }
    }), ta())
  }
}
var Xb = {};
Xb.jsVersion = p.Ob;
Xb.cssVersion = p.Fa;
p.Ua || (window.UserSnap.setLanguage = Yb, window.UserSnap.setEmailBox = Zb, window.UserSnap.toggleButton = $b, window.UserSnap.forceReportOpen = ac, window.UserSnap.openReportWindow = Pb, window.UserSnap.getInstance = bc, window.UserSnap.version = Xb);
function Yb(a, b) {
  var d = {en:"en", fr:"fr", es:"es", pl:"pl", fa:"fa", de:"de-formal", "de-formal":"de-formal", "de-informal":"de-informal", it:"it", jp:"jp", ko:"ko", hu:"hu", da:"da", sk:"sk", cz:"cz", no:"no", nl:"nl", fi:"fi", pt:"pt", tr:"tr", ru:"ru"};
  if("undefined" !== typeof d[a]) {
    Q.F !== k && Y("restart");
    Q.s !== k && Q.s.q();
    Nb !== k && E(document, "keyup", Nb);
    Ob !== k && E(document, "keydown", Ob);
    Mb !== k && "normal" === Q.aa && E(window, "resize", Mb);
    var c = document.createElement("script");
    c.type = "text/javascript";
    c.async = h;
    c.src = p.za + "js/" + p.Ob + "/usersnap-" + p.Ob + p.wd + "-" + d[a] + ".js";
    d = document.getElementsByTagName("head")[0];
    if("function" === typeof b) {
      var e = function() {
        if(x() || w()) {
          if("loaded" !== c.readyState) {
            return
          }
          E(c, "readystatechange", e)
        }else {
          E(c, "load", e)
        }
        try {
          b()
        }catch(a) {
          xa("failed to execute callback fn")
        }
      };
      x() || w() ? F(c, "readystatechange", e) : F(c, "load", e)
    }
    d.appendChild(c)
  }
}
function Zb(a) {
  Q.F !== k ? Q.F.Yc(a) : Q.J.kc = a
}
function $b(a) {
  "button" === Q.$ && (a === h ? Q.s.show() : a === m ? Q.s.ya() : Q.s.ba ? Q.s.ya() : Q.s.show())
}
function ac() {
  Pb()
}
function Pb() {
  "none" === Q.$ ? (wa("Nothing configured yet"), Q.Jb || (Q.Jb = h)) : Wb()
}
if("undefined" !== typeof window._usersnapconfig) {
  var Z = window._usersnapconfig, $ = {pd:Z.apiKey, ma:Z.valign, xa:Z.halign, lang:Z.lang, h:Z.tools, vd:Z.btnText, ib:Z.commentRequired, ub:Z.commentBox, Ad:Z.commentBoxPlaceholder, jb:Z.emailRequired, vb:Z.emailBox, Tc:Z.emailBoxPlaceholder, kc:Z.emailBoxValue, Pc:Z.beforeSend, Oc:Z.beforeOpen, Gc:Z.afterSend, ca:Z.cancelHandler, kb:Z.errorHandler, Xc:Z.loadHandler, mode:Z.mode, Zc:Z.shortcut, Fc:Z.addinfo};
  "undefined" !== typeof Z.configurator && (p.Rb = p.Rb.replace(/\/report\//, "/configurator/"), p.xc = p.xc.replace(/\/report\//, "/configurator/"), p.Pb = p.Pb.replace(/\/report\//, "/configurator/"), p.Qb = p.Qb.replace(/\/report\//, "/configurator/"), p.wc = p.wc.replace(/\/report\//, "/configurator/"));
  if("none" !== Q.$) {
    wa("An instance was already initialized!")
  }else {
    "function" === typeof $.kb && (Q.qa = $.kb);
    "function" === typeof $.ca && (Q.Vb = $.ca);
    "function" === typeof $.Pc && (Q.Ub = $.Pc);
    "function" === typeof $.Oc && (Q.Tb = $.Oc);
    "function" === typeof $.Gc && (Q.Sb = $.Gc);
    "function" === typeof $.Xc && (Q.bc = $.Xc);
    ca() && (Q.aa = "mobile");
    Db = $.pd;
    $.Fc !== f && (Fb = $.Fc);
    $.Zc !== f && (Eb = $.Zc);
    Bb();
    F(document, "keyup", Nb);
    F(document, "keydown", Ob);
    "normal" === Q.aa && F(window, "resize", Mb);
    "report" === $.mode ? (Q.J = $, Q.$ = "report") : (Q.J = $, Q.s = new Na({ma:$.ma, xa:$.xa, Cd:Wb, text:$.vd, Ha:$}), Q.$ = "button");
    var cc = 10, dc = function() {
      if(document.body === k) {
        cc--, 0 <= cc && window.setTimeout(dc, 200)
      }else {
        ya = document.createElement("iframe");
        document.body.appendChild(ya);
        ya.style.display = "none";
        var a = ya.contentWindow.document;
        a.open();
        a.write("<!DOCTYPE html><html><body></body></html>");
        a.close();
        ya.contentWindow.name = "usersnap_postbody_" + Math.round(1E6 * Math.random());
        F(ya.contentWindow, "message", Ia)
      }
    };
    dc();
    if(Q.bc !== k) {
      try {
        Q.bc.apply(window)
      }catch(ec) {
      }
    }
    Q.Jb && (Q.Jb = m, Pb.apply(window, []))
  }
}
function bc() {
  return Q
}
;
})();
