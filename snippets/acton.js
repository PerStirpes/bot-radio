drift.on("emailCapture", function(e) {

    function() {
        var Tracker = {}
      
        Tracker.track = function(eventName, data) {
          var url = `https://restapi.actonsoftware.com${PATH}`
      
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
          "email_caputured",
          "useremail@exampleemail.com",
        )


    analytics.identify({ email: e.data.email })
    analytics.track("Email Captured", {
      email: e.data.email,
      pageUrl: document.referrer,
    })
  })

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
  