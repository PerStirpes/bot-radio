;(function(d, a) {
  function c() {
    var b = d.createElement("script")
    b.async = !0
    b.type = "text/javascript"
    b.src = a._settings.messengerUrl
    b.crossOrigin = "anonymous"
    var c = d.getElementsByTagName("script")[0]
    c.parentNode.insertBefore(b, c)
  }
  window.kayako = a
  a.readyQueue = []
  a.newEmbedCode = !0
  a.ready = function(b) {
    a.readyQueue.push(b)
  }
  a._settings = {
    apiUrl: "https://transistor.kayako.com/api/v1",
    messengerUrl: "https://transistor.kayakocdn.com/messenger",
    realtimeUrl: "wss://kre.kayako.net/socket",
  }
  window.attachEvent
    ? window.attachEvent("onload", c)
    : window.addEventListener("load", c, !1)
})(document, window.kayako || {})
