window.onmessage = function(event) {
  event = event || window.event
  if (typeof event.data === "string" && /^send_visitor_key/.test(event.data)) {
    var arr = event.data.split("|")
    cmd = arr[0]
    suggestedKey = arr[1]
    sha = arr[2]
    if (isValidKey(savedKey())) {
      parent.postMessage("visitor_key|" + savedKey() + "|localstorage", "*")
    } else if (isValidKey(suggestedKey)) {
      persistKey(suggestedKey)
      parent.postMessage("visitor_key|" + suggestedKey + "|suggested", "*")
    } else {
      var newKey = uniqId((sha || "").substring(0, 7) + "_")
      persistKey(newKey)
      parent.postMessage("visitor_key|" + newKey + "|new", "*")
    }
  } else if (
    typeof event.data === "string" &&
    /^clear_visitor_key/.test(event.data)
  ) {
    clearKey()
  }
}

function isValidKey(key) {
  return key && key.length > 25 && /^[a-z0-9_\-\.]+$/i.test(key)
}

function persistKey(key) {
  try {
    localStorage["wistia_distillery_cookie"] = key
  } catch (e) {
    // probably incognito
  }
}

function clearKey() {
  try {
    localStorage.removeItem("wistia_distillery_cookie")
  } catch (e) {
    // probably incognito
  }
}

function savedKey() {
  try {
    return localStorage["wistia_distillery_cookie"]
  } catch (e) {
    // probably incognito
    return null
  }
}

function uniqId(prefix, suffix) {
  prefix = prefix || ""
  suffix = suffix || ""
  var d = new Date().getTime()
  if (window.performance && typeof window.performance.now == "function") {
    d += window.performance.now() // use high-precision timer if available
  }
  var randStr = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-xxxxxxxxx-xxxxxxxxxxxx-xxxx".replace(
    /[xy]/g,
    function(c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      var v = c === "x" ? r : (r & 0x3) | 0x8
      return v.toString(16)
    },
  )
  return prefix + randStr + suffix
}

///////
{
  /* <script type="text/javascript"> */
}
;(function() {
  var Tracker = {}

  Tracker.track = function(eventName, data) {
    var url = "https://help.mixpanel.com/hc/tracking/events?locale=en-us"

    var payload = {
      event: eventName,
      data: data,
      referrer: document.referrer,
    }

    var xhr = new XMLHttpRequest()

    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    xhr.send(JSON.stringify(payload))
  }

  Tracker.track(
    "article_viewed",
    "BAh7CDoLbG9jYWxlSSIKZW4tdXMGOgZFVDoPYXJ0aWNsZV9pZGwrCB5FudFTADoKX21ldGF7CzoPYWNjb3VudF9pZGkDJoMbOhNoZWxwX2NlbnRlcl9pZGwrCN+xisYaADoNYnJhbmRfaWRpA3j7ZjoMdXNlcl9pZDA6DnVzZXJfcm9sZUkiDmFub255bW91cwY7BlQ7AEkiCmVuLXVzBjsGVA==--bff008d426cf3824644d94912c49c6ccfe8331d6",
  )
})()
