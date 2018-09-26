"use strict"

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
drift.SNIPPET_VERSION = "0.3.1"

if (location.search.toLowerCase().indexOf("drifttest=true") != -1) {
  drift.load("mk93s685itke")
} else {
  drift.load("ai8sdiz3y56v")
}

/* DRIFT TRACKING */
window.driftChatEvent = function(driftEvent) {
  s.clearVars()

  /* Set other eVars, props */
  s.prop2 = _A.s.prop2 = document.location.href.match(/\/\/(.+)/)[1]
  s.eVar2 = _A.s.eVar2 = document.location.href.match(/\/\/(.+)/)[1]

  s.prop4 = _A.s.prop4 = document.referrer.split("?")[0] || "No Referrer"
  s.eVar4 = _A.s.eVar4 = "D=c4"
  if (jQuery(this).hasParent("a[href]")) {
    s.prop8 = _A.s.prop8 = jQuery(this)
      .hasParent("a[href]", true)
      .attr("href")
      .replace(/http.*\/\//, "")
      .replace(/%20/g, " ")
    s.eVar8 = _A.s.eVar8 = "D=c8"
  }
  s.prop22 = _A.s.prop22 = "D=v22"
  s.prop29 = _A.s.prop29 = document.location.host
  s.eVar29 = _A.s.eVar29 = "D=c29"
  if (/^\/[a-z]{2}$|\/[a-z]{2}\//.test(window.location.pathname)) {
    var langDict = {
      fr: "french",
      de: "german",
      br: "portuguese",
      mx: "spanish",
      ja: "japanese",
      jp: "japanese",
      ko: "korean",
      se: "swedish",
      esp: "spanish",
      nl: "dutch",
    }
    var siteCountry = window.location.pathname
      .match(/^\/[a-z]{2}$|\/[a-z]{2}\//)[0]
      .replace(/\//g, "")
    s.prop35 = _A.s.prop35 = langDict[siteCountry]
    s.eVar35 = _A.s.eVar35 = "D=c35"
  } else if (
    /^[a-z]{2}$/.test(
      window.location.host.split(".")[
        window.location.host.split(".").length - 1
      ],
    )
  ) {
    var langDict = {
      fr: "french",
      de: "german",
      ja: "japanese",
      jp: "japanese",
      br: "portuguese",
      mx: "spanish",
      ko: "korean",
      se: "swedish",
      esp: "spanish",
      nl: "dutch",
    }
    var siteCountry = window.location.host
      .split(".")
      [window.location.host.split(".").length - 1].match(/^[a-z]{2}$/)[0]
    s.prop35 = _A.s.prop35 = langDict[siteCountry]
    s.eVar35 = _A.s.eVar35 = "D=c35"
  } else if (/www\.servicenow\.com/.test(document.location.host)) {
    s.prop35 = _A.s.prop35 = "us-.com"
    s.eVar35 = _A.s.eVar35 = "D=c35"
  }

  if (document.referrer) {
    s.prop36 = _A.s.prop36 = document.referrer.split("/").filter(function(e) {
      return /\.com/.test(e)
    })[0]
    s.eVar36 = _A.s.eVar36 = "D=c36"
  } else {
    s.prop36 = _A.s.prop36 = "no referrer"
    s.eVar36 = _A.s.eVar36 = "D=c36"
  }
  if (/community/.test(document.location.host.split(".")[0])) {
    //add code to add sections based on url and jquery 3/20/17 TO DO
    if (/^\/community/.test(document.location.pathname)) {
      if (
        document.location.search &&
        /\?tagSet=.+/.test(document.location.search)
      ) {
        var communityMap = {
          "2226": "customer service management",
          "2258": "facilities service management",
          "2236": "field service management",
          "2237": "finance service management",
          "2225": "hr service management",
          "2259": "legal service management",
          "2260": "marketing service management",
          "2268": "asset management",
          "2266": "change management",
          "2269": "incident management",
          "2271": "password reset",
          "2270": "problem management",
          "2267": "release management",
          "2280": "cloud management",
          "2278": "discovery",
          "2281": "event management",
          "2279": "orchestration",
          "2285": "service mapping",
          "2286": "service watch",
          "2289": "agile development",
          "2290": "demand management",
          "2291": "financial management",
          "2292": "project management",
          "2293": "project portfolio management",
          "2294": "resource management",
          "2251": "dashboard",
          "2253": "performance analytics",
          "2252": "reporting",
          "2296": "configuration management database",
          "2298": "connect",
          "2297": "edge encryption",
          "2299": "knowledge management",
          "2300": "mobile",
          "2301": "service catalog",
          "2302": "service portal designer",
          "2303": "subscription management",
          "2304": "visual task boards",
          "2305": "workflow",
          "2282": "governance risk and compliance",
          "2230": "security operations",
          "2013": "analytics and reports",
          "2129": "automated testing",
          "2321": "best practices",
          "2011": "instance configuration",
          "1038": "integrations",
          "2012": "personal developer instance",
          "2014": "scoped app development",
          "2015": "scripting and coding",
          "2319": "service portal development",
          "2318": "studio ide",
          "2016": "team development",
          "2017": "upgrades and patches",
          "1045": "user interface",
        }
        var tempSubspace = document.location.search.match(/\?tagSet=(.+)/)[1]
        s.prop75 = _A.s.prop75 = s.eVar75 = _A.s.eVar75 = document.location.pathname
          .replace(/\//, "")
          .replace(/\//g, ":")
          .replace(/-/g, " ")
        ;+":" + communityMap[tempSubspace]
      } else {
        s.prop75 = _A.s.prop75 = s.eVar75 = _A.s.eVar75 = "undefined"
      }
    } else if (
      !!jQuery("#jive-body-intro").length &&
      !!jQuery("#jive-body-intro").find("[data-container-display-name]").length
    ) {
      s.prop75 = _A.s.prop75 = s.eVar75 = _A.s.eVar75 = jQuery(
        "#jive-body-intro",
      )
        .find("[data-container-display-name]")
        .attr("data-container-display-name")
        .lText()
    } else {
      s.prop75 = _A.s.prop75 = s.eVar75 = _A.s.eVar75 = "undefined"
    }
  }

  /* begin asset tracking */
  if (
    jQuery(this).hasParent("a[href]") &&
    !/^#/.test(
      jQuery(this)
        .hasParent("[href]", true)
        .attr("href"),
    )
  ) {
    var extensionTLD = jQuery(this)
      .hasParent("[href]", true)
      .attr("href")
      .split(".")
      .reverse()[0]
    if (
      extensionTLD.length > 0 &&
      !/^do$/.test(extensionTLD) &&
      new RegExp(extensionTLD, "i").test(s.linkDownloadFileTypes)
    ) {
      s.linkType = _A.s.linkType = "d"
      s.linkURL = _A.s.linkURL = jQuery(this)
        .hasParent("[href]", true)
        .attr("href")
        .replace(/http.*\/\//, "")
        .replace(/^\//, document.location.host + "/")
    }
    // externals
    //changed conditional on 61917
    else if (
      !/^\/[^\/]/.test(
        jQuery(this)
          .hasParent("[href]", true)
          .attr("href"),
      ) &&
      !/^javascript/.test(
        jQuery(this)
          .hasParent("[href]", true)
          .attr("href"),
      ) &&
      !new RegExp(document.location.hostname, "i").test(
        jQuery(this)
          .hasParent("[href]", true)
          .attr("href"),
      ) &&
      !/\/company\/ventures\/creatorcon-challenge\.html/.test(
        document.location.pathname,
      )
    ) {
      s.linkType = _A.s.linkType = "e"
      s.linkURL = _A.s.linkURL = jQuery(this)
        .hasParent("[href]", true)
        .attr("href")
        .replace(/^http.*\/\/|^\/\//g, "")
    }
    // externals for community
    else if (
      /community\.servicenow\.com/.test(document.location.host) &&
      /external-link\.jspa/.test(
        jQuery(this)
          .hasParent("[href]", true)
          .attr("href"),
      )
    ) {
      s.linkType = _A.s.linkType = "e"
      s.linkURL = _A.s.linkURL = jQuery(this)
        .hasParent("[href]", true)
        .attr("href")
        .replace(/http.*\/\//, "")
    } else {
      s.linkType = _A.s.linkType = "o"
      s.linkName = _A.s.linkName = tempLinkName || "Body Link"
    }
  }

  /* begin conditional report suite */
  var suites = {
    "www.servicenow.com": "servn-servicenow%2Ecom-prod",
    "info.service-now.com": "servn-servicenow%2Ecom-prod",
    "info.servicenow.com": "servn-servicenow%2Ecom-prod",
    "express.servicenow.com": "servn-expressservicenowcom-support-prod",
    "developer.servicenow.com": "servn-developer-prod",
    "community.servicenow.com": "servn-servnow%2Ecommunity-prod",
    "knowledge.servicenowevents.com": "servn-servnow%2Ecommunity-prod",
    "publisher.servicenow.com": "servnpublisher-portal-prod",
    "store.servicenow.com": "servnstore-prod",
    "tpp.servicenow.com": "servnpublisher-portal-prod",
    "appshowcase.service-now.com": "servn-appshowcase-prod",
    "wiki.servicenow.com": "servn-wiki-prod",
    "eventsponsor.servicenow.com": "servn-sponsor-prod",
    // "signon.service-now.com"       :"servn-sso-prod",
    "geneva-docs.servicenow.com": "servn-geneva-prod",
    "docs.servicenow.com": "servn-geneva-prod",
    "www.the-stresstest.com": "servn-stress-test-prod",
    "servicematters.servicenow.com": "servn-servicematters-prod",
    "knowledge.servicenow.com": "servn-kuc-prod",
    "knowledge16.servicenowevents.com": "servn-kuc-prod",
    //added 11/2/16 (not pushed yet)
    "knowledge.servicenowevents.com": "servn-kuc-prod",
    //ITSM assessment, formerly Snap App
    "104.236.36.111": "servn-servicenow%2Ecom-prod",
    "itsm-assessment.servicenow.com": "servn-servicenow%2Ecom-prod",
    "demonowprod.service-now.com": "servn-demonow-prod",
    //partner portal
    "partnerportal.service-now.com": "servn-partnerportal-prod",
    "knowledge.lanyonevents.com": "servn-kuc-prod",
    //added 3/20/17 for domain masking
    "www.servicenow.de": "Servn-germanlocalized-prod",
    "www.servicenow.fr": "Servn-francelocalize-prod",
    "www.servicenow.co.jp": "servn-japanese-prod",
    "www.servicenow.co.ja": "servn-japanese-prod",
    "www.servicenow.nl": "servn-dutch-prod",
  }

  if (
    document.location.host == "surf.service-now.com" &&
    /^\/esm_portal/.test(document.location.pathname)
  ) {
    s.account = _A.s.account =
      "servn-esmportal-prod,servn-servicenow-global-prod"
  } else if (
    document.location.host == "surf.service-now.com" &&
    /^\/esm/.test(document.location.pathname)
  ) {
    s.account = _A.s.account =
      "servn-esmportal-prod2,servn-servicenow-global-prod"
  }
  //added 09/06/16 for tracking eloqua pages
  else if (
    (document.location.host == "info.servicenow.com" &&
      /LP=6268|LP=6339|LP=5964|LP=5960/.test(document.location.pathname)) ||
    /s1133\.t\.eloqua.com\/e\/f2/.test(document.location.host)
  ) {
    s.account = _A.s.account =
      "servn-servicenow%2Ecom-prod,servn-servicenow-global-prod"
  } else {
    if (suites[document.location.host]) {
      s.account = _A.s.account =
        suites[document.location.host] + ",servn-servicenow-global-prod"
      //added 1/26/17 for international pages
      if (/^\/de$|^\/de\/|^\/fr$|^\/fr\//.test(window.location.pathname)) {
        s.account = _A.s.account += ",Servn-international-prod"
      } else if (/^\/esp$|^\/esp\//.test(window.location.pathname)) {
        s.account = _A.s.account += ",Servn-international-prod"
      } else if (/^\/mx$|^\/mx\//.test(window.location.pathname)) {
        s.account = _A.s.account =
          "servn-spanishlocalized-prod,Servn-international-prod,servn-servicenow-global-prod"
      } else if (/^\/br$|^\/br\//.test(window.location.pathname)) {
        s.account = _A.s.account =
          "servn-portugueselocalized-prod,Servn-international-prod,servn-servicenow-global-prod"
      }
      //added 61917
      else if (/^\/ja$|^\/ja\/|^\/jp$|^\/jp\//.test(window.location.pathname)) {
        s.account = _A.s.account =
          "servn-japanese-prod,Servn-international-prod,servn-servicenow-global-prod"
      }
      //added 70717
      else if (/^\/nl$|^\/nl\//.test(window.location.pathname)) {
        s.account = _A.s.account =
          "servn-dutch-prod,Servn-international-prod,servn-servicenow-global-prod"
      }
      //added 3/20/17 for domain masking
      else if (
        /^[a-z]{2}$/.test(
          window.location.host.split(".")[
            window.location.host.split(".").length - 1
          ],
        )
      ) {
        s.account = _A.s.account += ",Servn-international-prod"
        //added 61917
        if (
          /ja|jp/.test(
            window.location.host.split(".")[
              window.location.host.split(".").length - 1
            ],
          )
        ) {
          s.account = _A.s.account += ",servn-japanese-prod"
        }
      }
    } else {
      s.account = _A.s.account = "servnservicenow-global-dev"
    }
  }

  s.linkTrackEvents = "event6"
  s.linkTrackVars = "events"
  s.events = "event6"

  if (driftEvent !== undefined && typeof driftEvent == "string") {
    s.eVar91 = driftEvent
  }

  /* Make the call */
  s.useForcedLinkTracking = _A.s.useForcedLinkTracking = true
  if (!!s.tl && typeof s === "object") {
    s.tl(
      this,
      s.linkType,
      s.linkName,
      null,
      (function() {
        return false
      })(),
    )
  } else if (!!_A.s.tl && typeof _A.s === "object") {
    _A.s.tl(
      this,
      _A.s.linkType,
      _A.s.linkName,
      null,
      (function() {
        return false
      })(),
    )
  } else {
    console.log("UNABLE TO FIRE DTM BEACON")
  }
  s.clearVars()
}

drift.on("ready", function(api) {
  drift.on("sidebarOpen", function(event) {
    window.driftChatEvent("sidebarOpen")
  })
  drift.on("sidebarClose", function(event) {
    window.driftChatEvent("sidebarClose")
  })
  drift.on("welcomeMessage:open", function(event) {
    window.driftChatEvent("welcomeMessage:open")
  })
  drift.on("welcomeMessage:close", function(event) {
    window.driftChatEvent("welcomeMessage:close")
  })
  drift.on("awayMessage:open", function(event) {
    window.driftChatEvent("awayMessage:open")
  })
  drift.on("awayMessage:close", function(event) {
    window.driftChatEvent("awayMessage:close")
  })
  drift.on("campaign:open", function(event) {
    window.driftChatEvent("campaign:open")
  })
  drift.on("campaign:dismiss", function(event) {
    window.driftChatEvent("campaign:dismiss")
  })
  drift.on("campaign:click", function(event) {
    window.driftChatEvent("campaign:click")
  })
  drift.on("campaign:submit", function(event) {
    window.driftChatEvent("campaign:submit")
  })
  drift.on("sliderMessage:close", function(event) {
    window.driftChatEvent("sliderMessage:close")
  })
  drift.on("startConversation", function(event) {
    window.driftChatEvent("startConversation")
  })
  drift.on("message:sent", function(event) {
    window.driftChatEvent("message:sent")
  })
  drift.on("message", function(event) {
    window.driftChatEvent("message")
  })
  drift.on("emailCapture", function(event) {
    window.driftChatEvent("emailCapture")
  })
  drift.on("scheduling:requestMeeting", function(event) {
    window.driftChatEvent("scheduling:requestMeeting")
  })
  drift.on("scheduling:meetingBooked", function(event) {
    window.driftChatEvent("scheduling:meetingBooked")
  })
})
