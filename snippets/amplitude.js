try {
  var PARENT_URL = ""
  var VENDOR_GUID = ""
  var SHOW_ERRORS = ""
  var IS_PREVIEW = ""

  var query_param_kvps = document.location.href.split("?")[1].split("&")
  var qKey = ""
  var qVal = ""
  for (var i = 0; i < query_param_kvps.length; i++) {
    qKey = query_param_kvps[i].split("=")[0]
    qVal = query_param_kvps[i].split("=")[1]
    if (qKey === "purl") PARENT_URL = decodeURIComponent(qVal)
    if (qKey === "vid") VENDOR_GUID = decodeURIComponent(qVal)
    if (qKey === "se") SHOW_ERRORS = decodeURIComponent(qVal)
    if (qKey === "prev") IS_PREVIEW = decodeURIComponent(qVal)
  }

  window.addEventListener(
    "message",
    function(event) {
      //console.log('LocalStorage postMessage event received in identity.html');
      //console.log(event);

      var origin = event.origin || event.originalEvent.origin
      //console.log('origin: ' + origin);

      if (origin && PARENT_URL && PARENT_URL.indexOf(origin) === 0) {
        var data = {}

        try {
          data = JSON.parse(event.data)
        } catch (err) {
          return
        }

        if (typeof data !== "object" || data === null) {
          return
        }

        if (!data.hasOwnProperty("vid") || data.vid !== VENDOR_GUID) {
          //console.log('DIGIOH: ERROR in identity.html: LocalStorage postMessage event vendor guid in child (identity.html) does not match parent (child / parent): ' + VENDOR_GUID + ' / ' + data.vid);
          //console.log(data);
          return
        }

        if (!data.hasOwnProperty("operation")) {
          //console.log('DIGIOH: ERROR in identity.html: LocalStorage postMessage operation not found or invalid (identity.html)');
          //console.log(data);
          return
        }

        if (data.operation === "set" && data.hasOwnProperty("value")) {
          localStorage.setItem(VENDOR_GUID, data.value)
        } else if (
          data.operation === "get" &&
          data.hasOwnProperty("identifier")
        ) {
          var val = localStorage.getItem(VENDOR_GUID)
          if (typeof val !== "string") {
            val = ""
          }

          parent.postMessage(
            "#localStorage#" + data.identifier + "#" + val,
            origin,
          )
        } else if (data.operation === "erase") {
          localStorage.removeItem(VENDOR_GUID)
        } else if (
          data.operation === "set_manual" &&
          data.hasOwnProperty("key") &&
          data.hasOwnProperty("value")
        ) {
          localStorage.setItem(data.key, data.value)
        } else if (
          data.operation === "get_manual" &&
          data.hasOwnProperty("key") &&
          data.hasOwnProperty("identifier")
        ) {
          var val = localStorage.getItem(data.key)
          if (typeof val === "undefined" || val === null) {
            val = ""
          }

          parent.postMessage(
            "#localStorage#" + data.identifier + "#" + val,
            origin,
          )
        } else if (
          data.operation === "erase_manual" &&
          data.hasOwnProperty("key")
        ) {
          localStorage.removeItem(data.key)
        } else if (
          data.operation === "set_inner" &&
          data.hasOwnProperty("key") &&
          data.hasOwnProperty("value") &&
          data.hasOwnProperty("type")
        ) {
          var val = ""
          var json = {}
          var str = localStorage.getItem(VENDOR_GUID)
          if (typeof str === "string") {
            str = LZString.decompressFromBase64(str)
            if (str && str.indexOf("{") === 0) {
              json = JSON.parse(str)
            }
          }

          var dec = LZString.decompressFromBase64(data.value)

          if (data.type === "object") {
            val = JSON.parse(dec)
          } else if (data.type === "number") {
            val = Number(dec)
          } else if (data.type === "boolean") {
            val = dec === "true"
          } else {
            val = dec.toString()
          }

          json[data.key] = val
          localStorage.setItem(
            VENDOR_GUID,
            LZString.compressToBase64(JSON.stringify(json)),
          )
        } else if (
          data.operation === "get_inner" &&
          data.hasOwnProperty("key") &&
          data.hasOwnProperty("identifier")
        ) {
          var val = ""
          var json = {}
          var str = localStorage.getItem(VENDOR_GUID)
          if (typeof str === "string") {
            str = LZString.decompressFromBase64(str)
            if (str && str.indexOf("{") === 0) {
              json = JSON.parse(str)
            }
          }
          if (
            typeof json === "object" &&
            json !== null &&
            json.hasOwnProperty(data.key)
          ) {
            val = json[data.key]
          }
          if (typeof val === "undefined" || val === null) {
            val = ""
          }
          if (typeof val === "object") {
            val = JSON.stringify(val)
          } else {
            val = val.toString()
          }

          val = LZString.compressToBase64(val)

          parent.postMessage(
            "#localStorage#" + data.identifier + "#" + val,
            origin,
          )
        } else if (
          data.operation === "erase_inner" &&
          data.hasOwnProperty("key")
        ) {
          var json = {}
          var str = localStorage.getItem(VENDOR_GUID)
          if (typeof str === "string") {
            str = LZString.decompressFromBase64(str)
            if (str && str.indexOf("{") === 0) {
              json = JSON.parse(str)
            }
          }
          if (
            typeof json === "object" &&
            json !== null &&
            json.hasOwnProperty(data.key)
          ) {
            delete json[data.key]
          }
          localStorage.setItem(
            VENDOR_GUID,
            LZString.compressToBase64(JSON.stringify(json)),
          )
        } else {
          //console.log('DIGIOH: ERROR in identity.html: LocalStorage postMessage operation not found.');
          //console.log(data);
        }
      } else {
        //console.log('DIGIOH: ERROR in identity.html: LocalStorage postMessage event origin in child (identity.html) does not match parent (origin / parent): ' + origin + ' / ' + PARENT_URL);
        //console.log(event);
      }
    },
    false,
  )

  //console.log('LocalStorage postMessage identity.html signaling ready to parent');

  setTimeout(function() {
    parent.postMessage("#localStorage#999999999#zyxcba", PARENT_URL)
  }, 50)
} catch (err) {
  console.log("DIGIOH: ERROR in identity.html: " + err.message)
}
