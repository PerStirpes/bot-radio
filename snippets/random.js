// Business Email Validation 

analytics.methods = [
  "trackSubmit",
  "trackClick",
  "trackLink",
  "trackForm",
  "pageview",
  "identify",
  "reset",
  "group",
  "track",
  "ready",
  "alias",
  "page",
  "once",
  "off",
  "on",
] // Begin Business Email Validation Marketo
;(function() {
  var invalidDomains = [
    "@mail.",
    "@yahoo.",
    "@hotmail.",
    "@live.",
    "@aol.",
    "@excitemail.",
    "@outlook.",
  ]
  if (typeof MktoForms2 != "undefined") {
    MktoForms2.whenReady(function(form) {
      form.onValidate(function() {
        var email = form.vals().Email
        if (email) {
          if (!isEmailGood(email)) {
            form.submittable(false)
            var emailElem = form.getFormElem().find("#Email")
            form.showErrorMessage("Must be Business email.", emailElem)
          } else {
            form.submittable(true)
          }
        }
      })
    })
    function isEmailGood(email) {
      for (var i = 0; i < invalidDomains.length; i++) {
        var domain = invalidDomains[i]
        if (email.indexOf(domain) != -1) {
          return false
        }
      }
      return true
    }
  }
})()
/////

!(function() {
  var a
  if (((a = window.driftt = window.drift = window.driftt || []), !a.init))
    return a.invoked
      ? void (
          window.console &&
          console.error &&
          console.error("Drift snippet included twice.")
        )
      : ((a.invoked = !0),
        (a.methods = "identify config track reset debug show ping page hide off on".split(
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
})()
drift.SNIPPET_VERSION = "0.3.1"
drift.load("a9t9z7fiynw5")
!(function() {
  var t = (window.driftt = window.drift = window.driftt || [])
  if (!t.init) {
    if (t.invoked)
      return void (
        window.console &&
        console.error &&
        console.error("Drift snippet included twice.")
      )
    ;(t.invoked = !0),
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
          var n = Array.prototype.slice.call(arguments)
          return n.unshift(e), t.push(n), t
        }
      }),
      t.methods.forEach(function(e) {
        t[e] = t.factory(e)
      }),
      (t.load = function(t) {
        var e = 3e5,
          n = Math.ceil(new Date() / e) * e,
          o = document.createElement("script")
        ;(o.type = "text/javascript"),
          (o.async = !0),
          (o.crossorigin = "anonymous"),
          (o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js")
        var i = document.getElementsByTagName("script")[0]
        i.parentNode.insertBefore(o, i)
      })
  }
})()

window.drift.on(
  "startConversation",

  function() {
    fbq("track", "startConversation")
  },
)

window.drift.on(
  "emailCapture",

  function() {
    fbq("track", "emailCaptured")
  },
)

window.drift.on(
  "scheduling:meetingBooked",

  function() {
    fbq("track", "meetingBooked")
  },
)
