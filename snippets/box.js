var executeDnB = function() {
  dnbvid.getData("api3781", "json", "T", function(dnb_Data) {
    if (cxSiteId) {
      reportDNBCxenseEvent(dnb_Data)
    }
    // set the Adobe eVars
    // replace the eVar number with the ones configured in your Analytics report suite

    // logic to populate rsid
    var d = window.location.hostname
    // staging
    var stagingRE = /\.mktg\.box\.com$/i
    if (_satellite.settings.isStaging === true || stagingRE.test(d)) {
      rsid = "boxincmarketingstaging"
    }
    // production. You can add additional logic to limit to certain domains or other patterns
    else if (
      d === "www.box.com" ||
      d === "developer.box.com" ||
      d === "developers.box.com" ||
      d === "www.box.net" ||
      d === "www.boxcn.net" ||
      d === "www.boxenterprise.net" ||
      d === "eegeventsite.secure.force.com" ||
      d === "content.box.com" ||
      d === "info.box.com" ||
      d === "go.box.com" ||
      d === "translate.googleusercontent.com" ||
      d === "boxer.mktg.box.com" ||
      d === "blog.box.com" ||
      d === "www.box.com/boxworks" ||
      d === "box.org" ||
      d === "box-roi.com" ||
      d === "www.boxworksevents.com"
    ) {
      rsid = "boxincmarketinglive"
    }

    var s = s_gi(rsid)
    s.linkTrackVars = "eVar130,eVar131,eVar132,eVar133"
    s.eVar130 = dnb_Data.duns
    s.eVar131 = dnb_Data.companyName
    s.eVar132 = dnb_Data.industryNaics
    s.eVar133 = dnb_Data.employeesInAllLocationsNum

    // Fire s.tl() if:
    // Company Name (evar131) is empty.
    // Status is "200".
    // localStorage value for `dnbPresent` is not present.

    var dnbPresent = localStorage.getItem("dnbPresent")

    if (s.eVar131 != null && dnb_Data.status == "200") {
      s.tl(this, "o", "DnBcall")
    }

    //Push to optimizely
    for (var o in dnb_Data) {
      window.optimizely = window.optimizely || []
      window.optimizely.push(["setDimensionValue", o, dnb_Data[o]])
    }
  })
}

function poll(fn, callback, errback, timeout, interval) {
  var endTime = Number(new Date()) + (timeout || 5000)
  interval = interval || 400

  ;(function p() {
    // If the condition is met, we're done!
    if (fn()) {
      callback()
    }
    // If the condition isn't met but the timeout hasn't elapsed, go again
    else if (Number(new Date()) < endTime) {
      setTimeout(p, interval)
    }
    // Didn't match and too much time, reject!
    else {
      errback(new Error("timed out for " + fn + ": " + arguments))
    }
  })()
}

poll(
  function() {
    // Condition to meet.
    return window.s_gi
  },

  function() {
    // Done, success callback
    executeDnB()
  },

  function() {
    // Error, failure callback
  },
)
