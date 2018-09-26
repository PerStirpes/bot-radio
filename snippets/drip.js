;(function() {
  try {
    !(function() {
      var a
      return (
        (a = window.driftt = window.drift = window.driftt || []),
        a.init
          ? void 0
          : a.invoked
            ? void (
                window.console &&
                console.error &&
                console.error("Drift snippet included twice.")
              )
            : ((a.invoked = !0),
              (a.methods = "identify track reset debug show ping page hide off on".split(
                " ",
              )),
              (a.factory = function(c) {
                return function() {
                  var b
                  return (
                    (b = Array.prototype.slice.call(arguments)),
                    b.unshift(c),
                    a.push(b),
                    a
                  )
                }
              }),
              a.methods.forEach(function(c) {
                a[c] = a.factory(c)
              }),
              (a.load = function(a) {
                var b = 3e5
                var c = Math.ceil(new Date() / b) * b
                b = document.createElement("script")
                b.type = "text/javascript"
                b.async = !0
                b.crossorigin = "anonymous"
                b.src = "https://js.driftt.com/include/" + c + "/" + a + ".js"
                a = document.getElementsByTagName("script")[0]
                a.parentNode.insertBefore(b, a)
              }))
      )
    })(),
      (drift.SNIPPET_VERSION = "0.2.0"),
      drift.load("smpm9u2nyvas"),
      window.drift.on("startConversation", function() {
        window.dataLayer.push({ event: "driftChat" })
      }),
      window.drift.on("emailCapture", function(a) {
        window.dataLayer.push({ event: "emailCapture", driftData: a })
      }),
      window.drift.on("scheduling:meetingBooked", function(a) {
        window.dataLayer.push({ event: "driftMeetingBooked", driftData: a })
      }),
      google_tag_manager["GTM-WXZ7JQ"].macro(129)
  } catch (a) {
    dataLayer.push({
      event: "Tag Error",
      "Tag Name": "Base Code - Drift",
      Details: a,
    }),
      google_tag_manager["GTM-WXZ7JQ"].macro(131)
  }
})()
