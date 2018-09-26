window.drift.on("emailCapture", function(e) {
  window.rrSpace = rrSettingsConversion = {
    debug: "false",
    parameters: {
      email: e.data.email,
    },
  }
  ;(function(f, r, n, d, b, y) {
    ;(b = f.createElement(r)), (y = f.getElementsByTagName(r)[0])
    b.async = 1
    b.src = n
    b.id = "RR_DIVID"
    y.parentNode.insertBefore(b, y)
  })(
    document,
    "script",
    "//intellibookkeeping.referralrock.com/webpixel/beta/universalv03.js",
  )
})
