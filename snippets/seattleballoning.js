function addChatScript() {
  !(function() {
    var t
    if (((t = window.driftt = window.drift = window.driftt || []), !t.init)) {
      return t.invoked
        ? void (
            window.console &&
            console.error &&
            console.error("Drift snippet included twice.")
          )
        : ((t.invoked = !0),
          (t.methods = [
            "identify",
            "config",
            "track",
            "reset",
            "debug",
            "show",
            "ping",
            "page",
            "hide",
            "off",
            "on",
          ]),
          (t.factory = function(e) {
            return function() {
              var n
              return (
                (n = Array.prototype.slice.call(arguments)),
                n.unshift(e),
                t.push(n),
                t
              )
            }
          }),
          t.methods.forEach(function(e) {
            t[e] = t.factory(e)
          }),
          (t.load = function(t) {
            var e, n, o, i
            ;(e = 3e5),
              (i = Math.ceil(new Date() / e) * e),
              (o = document.createElement("script")),
              (o.type = "text/javascript"),
              (o.async = !0),
              (o.crossorigin = "anonymous"),
              (o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js"),
              (n = document.getElementsByTagName("script")[0]),
              n.parentNode.insertBefore(o, n)
          }))
    }
  })()
  drift.on("ready", function(api, payload) {
    var os = ""
    if (navigator.appVersion.indexOf("Windows") != -1) os = "-windows"
    if (navigator.appVersion.indexOf("Mac") != -1) os = "-mac"
    if (navigator.appVersion.indexOf("iPhone") != -1) os = "-ios"
    if (navigator.appVersion.indexOf("iPod") != -1) os = "-ios"
    if (navigator.appVersion.indexOf("iPad") != -1) os = "-ios"
    if (navigator.appVersion.indexOf("android") != -1) os = "-android"
    $("body").append(
      '<div id="drift-intercept-container" class="drift-intercept' +
        os +
        '"><a id="drift-intercept" href="#thebest"></a></div>',
    )
  })
  drift.on("sidebarOpen", function(payload) {
    $("#drift-intercept-container").hide()
  })
  drift.on("sidebarClose", function(payload) {
    $("#drift-intercept-container").show()
  })
  drift.SNIPPET_VERSION = "0.3.1"
  drift.load("whsuar42ika6")
}
