!function (a) {
    var b = "undefined" == typeof module ? a.baidu = a.baidu || {} : module.exports;
    b.template = function (b, d) {
        var e = function () {
            if (!a.document)return c._compile(b);
            var d = document.getElementById(b);
            if (d) {
                if (c.cache[b])return c.cache[b];
                var e = /^(textarea|input)$/i.test(d.nodeName) ? d.value : d.innerHTML;
                return c._compile(e)
            }
            return c._compile(b)
        }(), f = c._isObject(d) ? e(d) : e;
        return e = null, f
    };
    var c = b.template;
    c.versions = c.versions || [], c.versions.push("1.0.6"), c.cache = {}, c.LEFT_DELIMITER = c.LEFT_DELIMITER || "<%", c.RIGHT_DELIMITER = c.RIGHT_DELIMITER || "%>", c.ESCAPE = !0, c._encodeHTML = function (a) {
        return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }, c._encodeReg = function (a) {
        return String(a).replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
    }, c._encodeEventHTML = function (a) {
        return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\\\\/g, "\\").replace(/\\\//g, "/").replace(/\\n/g, "\n").replace(/\\r/g, "\r")
    }, c._compile = function (a) {
        var b = "var _template_fun_array=[];\nvar fn=(function(__data__){\nvar _template_varName='';\nfor(name in __data__){\n_template_varName+=('var '+name+'=__data__[\"'+name+'\"];');\n};\neval(_template_varName);\n_template_fun_array.push('" + c._analysisStr(a) + "');\n_template_varName=null;\n})(_template_object);\nfn = null;\nreturn _template_fun_array.join('');\n";
        return new Function("_template_object", b)
    }, c._isObject = function (a) {
        return "function" == typeof a || !(!a || "object" != typeof a)
    }, c._analysisStr = function (a) {
        var b = c.LEFT_DELIMITER, d = c.RIGHT_DELIMITER, e = c._encodeReg(b), f = c._encodeReg(d);
        return a = String(a).replace(new RegExp("(" + e + "[^" + f + "]*)//.*\n", "g"), "$1").replace(new RegExp("<!--.*?-->", "g"), "").replace(new RegExp(e + "\\*.*?\\*" + f, "g"), "").replace(new RegExp("[\\r\\t\\n]", "g"), "").replace(new RegExp(e + "(?:(?!" + f + ")[\\s\\S])*" + f + "|((?:(?!" + e + ")[\\s\\S])+)", "g"), function (a, b) {
            var c = "";
            if (b)for (c = b.replace(/\\/g, "&#92;").replace(/'/g, "&#39;"); /<[^<]*?&#39;[^<]*?>/g.test(c);)c = c.replace(/(<[^<]*?)&#39;([^<]*?>)/g, "$1\r$2"); else c = a;
            return c
        }), a = a.replace(new RegExp("(" + e + "[\\s]*?var[\\s]*?.*?[\\s]*?[^;])[\\s]*?" + f, "g"), "$1;" + d).replace(new RegExp("(" + e + ":?[hvu]?[\\s]*?=[\\s]*?[^;|" + f + "]*?);[\\s]*?" + f, "g"), "$1" + d).split(b).join("	"), a = c.ESCAPE ? a.replace(new RegExp("\\t=(.*?)" + f, "g"), "',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'") : a.replace(new RegExp("\\t=(.*?)" + f, "g"), "',typeof($1) === 'undefined'?'':$1,'"), a = a.replace(new RegExp("\\t:h=(.*?)" + f, "g"), "',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'").replace(new RegExp("\\t(?::=|-)(.*?)" + f, "g"), "',typeof($1)==='undefined'?'':$1,'").replace(new RegExp("\\t:u=(.*?)" + f, "g"), "',typeof($1)==='undefined'?'':encodeURIComponent($1),'").replace(new RegExp("\\t:v=(.*?)" + f, "g"), "',typeof($1)==='undefined'?'':baidu.template._encodeEventHTML($1),'").split("	").join("');").split(d).join("_template_fun_array.push('").split("\r").join("\\'")
    }
}(window);