function stringify(obj) {
    var itm, arr = [];
    for (itm in obj) arr.push(itm + "=" + escape(obj[itm]));
    return arr.join("&");
}

function download(obj) {
    var xhr = Ti.Network.createHTTPClient();
    var strMode = obj.method || "GET";
    xhr.setTimeout(obj.timeout || 1e4);
    xhr.onload = function() {
        var strType = obj.type.toLowerCase() || "json";
        switch (xhr.status) {
          case 200:
            response = this.responseText;
            switch (strType) {
              case "json":
                json = JSON.parse(response);
                obj.success && obj.success(json);
                break;

              case "html":
                obj.success && obj.success(response);
            }
            break;

          case 304:
            obj.success && obj.success([]);
            break;

          case 404:
            obj.error && obj.error({
                responseText: "Page Not Found",
                status: xhr.status
            });
        }
    };
    obj.error && (xhr.onerror = function(e) {
        obj.error(e);
    });
    obj.progress && (xhr.onsendstream = function(e) {
        "undefined" != typeof obj.progress && obj.progress({
            value: parseFloat(100 * e.progress, 10)
        });
    });
    obj.state && (xhr.onreadystatechange = function() {
        var state = this.readyState;
        var states = [ "Unsent", "Opened", "Headers", "Loading", "Done" ];
        obj.state({
            state: state,
            caption: states[state]
        });
    });
    if ("POST" === strMode) {
        xhr.open(strMode, obj.url);
        xhr.send(obj.param);
    } else {
        xhr.open(strMode, obj.url + "?" + stringify(obj.param));
        xhr.send();
    }
}

exports.download = download;