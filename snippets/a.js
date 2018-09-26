!(function() {
  var a = (window.driftt = window.drift = window.driftt || [])
  if (!a.init) {
    if (a.invoked)
      return void (
        window.console &&
        console.error &&
        console.error("Drift snippet included twice.")
      )
    a.invoked = !0
    a.methods = "identify config track reset debug show ping page hide off on".split(
      " ",
    )
    a.factory = function(c) {
      return function() {
        var b = Array.prototype.slice.call(arguments)
        return b.unshift(c), a.push(b), a
      }
    }
    a.methods.forEach(function(c) {
      a[c] = a.factory(c)
    })
    a.load = function(a) {
      var b = 3e5,
        c = Math.ceil(new Date() / b) * b
      b = document.createElement("script")
      b.type = "text/javascript"
      b.async = !0
      b.crossorigin = "anonymous"
      b.src = "https://js.driftt.com/include/" + c + "/" + a + ".js"
      a = document.getElementsByTagName("script")[0]
      a.parentNode.insertBefore(b, a)
    }
  }
})()
drift.SNIPPET_VERSION = "0.3.1"
drift.load("r2r2p6433rsk")
