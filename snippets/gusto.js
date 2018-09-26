//<![CDATA[
window.gustoAC = {
  snowplowEnabled: true,
  segmentEnabled: true,
  inspectletEnabled: true,
  driftApiKey: "regrpscdw65b",
  snowplowTrackingUrl: "snowplow.gusto.com",
  snowplowTrackerName: "gusto-corp",
  snowplowAppId: "gusto",
  segmentWriteKeyClient: "62o4Y99fKLkEaIkHWf2cSMZwfD2OYD9K",
  segmentWriteKeyServer: "GKEYzHxiruEAogxbU3S8TWIBvQJ2fb1K",
  segmentStub: false,
  gtmContainerId: "GTM-NDDH7S",
  inspectletWid: "1725340620",
  autoPageEvent: true,
  debugIdentify: false,
  userId: null,
  pandaAdminId: null,
  email: null,
  environment: "production",
}
var GustoAnalytics = (window.GustoAnalytics = window.GustoAnalytics || [])
if (!GustoAnalytics.initialize) {
  if (GustoAnalytics.invoked) {
    window.console &&
      console.error &&
      console.error("GustoAnalytics snippet included twice.")
  } else {
    GustoAnalytics.invoked = !0
    GustoAnalytics.methods = [
      "identify",
      "page",
      "group",
      "track",
      "gtmDataLayer",
      "inspectletTagSession",
      "experimentEnrollment",
    ]
    GustoAnalytics.factory = function(method) {
      return function() {
        var methodCall = Array.prototype.slice.call(arguments)
        methodCall.unshift(method)
        GustoAnalytics.push(methodCall)
        return GustoAnalytics
      }
    }
    for (var i = 0; i < GustoAnalytics.methods.length; i++) {
      var method = GustoAnalytics.methods[i]
      GustoAnalytics[method] = GustoAnalytics.factory(method)
    }
  }
}
//]]>
///
;(function() {
  function getCookie(cname) {
    var name = cname + "="
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(";")
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === " ") {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ""
  }

  var holdoutCookie = "gst_exp_drift_holdout_v2"
  var cookieOptions = "domain=.gusto.com;max-age=2592000"
  var variation
  if (!getCookie(holdoutCookie) && getCookie("has_signed_in") !== "true") {
    var random = Math.random()
    if (random <= 0.8) {
      document.cookie = holdoutCookie + "=0;" + cookieOptions
      variation = 0
    } else {
      document.cookie = holdoutCookie + "=1;" + cookieOptions
      variation = 1
    }

    GustoAnalytics.identify() // so that we can have gst_exp_drift_holdout as user property
    GustoAnalytics.track({
      eventCategory: "VisitorEvent",
      eventName: "ExperimentParticipation",
      data: {
        experiment_name: "drift_holdout",
        variation_id: variation,
      },
    })
  }
})()

// initGoogleAnalytics = (settingsConfig) => {
//     window.drift.on('ready', () => {
//         if (hasGoogleAnalyticsInstalled(window)) {
//             _forEach(_keys(AnalyticsEventNames), (evt) => {
//                 window.drift.on(evt, () => {
//                     this.handleGATrackEvent({ eventName: evt, trackingName: settingsConfig.trackingName })
//                 })
//             })
//         }
//     })
// }
