_base64DecodeString = function() {
    var fromCharCode = String.fromCharCode;
    var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var cb_decode = function(cccc) {
        var len = cccc.length, padlen = len % 4, n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0), chars = [ fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 255), fromCharCode(n & 255) ];
        chars.length -= [ 0, 0, 2, 1 ][padlen];
        return chars.join("");
    };
    var atob = function(a) {
        return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    var re_btou = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g");
    var cb_btou = function(cccc) {
        switch (cccc.length) {
          case 4:
            var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
            return fromCharCode((offset >>> 10) + 55296) + fromCharCode((offset & 1023) + 56320);

          case 3:
            return fromCharCode((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));

          default:
            return fromCharCode((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var _decode = function(a) {
        return btou(atob(a));
    };
    return function(a) {
        return _decode(String(a).replace(/[-_]/g, function(m0) {
            return m0 == "-" ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, ""));
    };
}();

(function(m, o, r, u, l, u, s) {
    var template = _base64DecodeString("PGRpdj48aDE+e3thdHRyaWJ1dGVzLnRpdGxlfX08L2gxPjxkZXNjcmlwdD48L2Rlc2NyaXB0PjwvZGl2Pgo8YnIgLz4KPGlucHV0IHR5cGU9InRleHQiIG5nLW1vZGVsPSJhbnN3ZXJzLnJlc3BvbnNlIiAvPgo8aDI+e3thbnN3ZXJzLnJlc3BvbnNlfX08L2gyPgo8aDI+T3V0c2lkZTogPGk+e3thbnN3ZXJzLm91dHNpZGV9fTwvaT48L2gyPgo8ZGl2PgoJQWFhYWFuZCB0aGlzIGlzIGFub3RoZXIgY29tcG9uZW50IGxpa2UgdGhpczoKCTxkaXY+CgkJPHN5bnRoZXRpYy1hbmd1bGFyMiB0aXRsZT0iV293LCBhbSBJIHdvcmtzcz8/Ij48L3N5bnRoZXRpYy1hbmd1bGFyMj4KCTwvZGl2Pgo8L2Rpdj4=");
    var template2 = _base64DecodeString("PGRpdiBzdHlsZT0iYm9yZGVyOjFweCB3aGl0ZSBzb2xpZDtwYWRkaW5nOjEwcHg7Ij4KCTxoMT57e2F0dHJpYnV0ZXMudGl0bGV9fTwvaDE+Cgk8ZGVzY3JpcHQ+PC9kZXNjcmlwdD4KPC9kaXY+");
    (function(tpl, tpl2) {
        Synthetic.createComponent({
            name: "synthetic-angular",
            engine: "angular"
        }, function($component) {
            $component.created(function($self, $scope) {
                setTimeout(function() {
                    $self.$template(tpl);
                }, 2e3);
            });
            $component.watch("answers", [ "response" ], function(response) {
                
            });
        });
        Synthetic.createComponent({
            name: "synthetic-angular2",
            engine: "angular"
        }, function($component) {
            $component.created(function($self, $scope) {
                $self.$template(tpl2, "angular");
            });
            $component.watch("answers", [ "response" ], function(response) {
                
            });
        });
    })(template, template2);
})();