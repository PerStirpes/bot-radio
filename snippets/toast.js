var formField1 = $("input").val();
var formField2 = $("input").val();
var formField3 = $("input").val();
var formField4 = $("input").val();



function waitForDrift() {
    if (null != window.drift)
      drift.on("ready", function() {
        var a = google_tag_manager["your GTM tag"].dataLayer.get("your form data")
        drift.api.setUserAttributes({
          name: formField1
          zip_code: formField2,
          major: formField3,
          address: formField4,
        })
      })
    else
      setTimeout(function() {
        waitForDrift()
      }, 500)
  }
  waitForDrift()
var affinPricing = readCookie("_affPricing"),
  affinityRestaurantType = readCookie("_restType"),
  affinityFeature = readCookie("_affFeaturePage"),
  affinityCustomer = readCookie("_affCaseStudy")
function waitForDrift() {
  if (null != window.drift)
    drift.on("ready", function() {
      var a = google_tag_manager["GTM-5BQ3J5"].dataLayer.get("zipVal")
      drift.api.setUserAttributes({
        zip_code: a,
        affinity_pricingPage: affinPricing,
        affinity_restaurantType: affinityRestaurantType,
        affinity_posFeature: affinityFeature,
        affinity_customerCaseStudy: affinityCustomer,
      })
    })
  else
    setTimeout(function() {
      waitForDrift()
    }, 500)
}
waitForDrift()

function readCookie(n) {
  for (
    var r = n + "=", t = document.cookie.split(";"), e = 0;
    e < t.length;
    e++
  ) {
    for (var i = t[e]; " " == i.charAt(0); ) i = i.substring(1, i.length)
    if (0 == i.indexOf(r)) return i.substring(r.length, i.length)
  }
  return null
}
///////
function zipFieldShown() {
  $('input[id*\x3d"zip-"]').is(":visible")
    ? ($("input.hs-button.primary.large").css({
        "background-color": "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        "text-align": "center",
        "text-decoration": "none",
        display: "inline-block",
        "font-size": "16px",
        margin: "4px 2px",
        cursor: "pointer",
      }),
      $("input.hs-button.primary.large").removeClass("hs-button primary large"),
      $("input").css("margin", "5px 0 0"),
      $(".field").css("margin-bottom", "5px"),
      $(".actions").css("padding", "0"))
    : setTimeout(function() {
        zipFieldShown()
      }, 100)
}
zipFieldShown()

/////
if (null == window.ga) {
  ;(function(a, e, f, g, b, c, d) {
    a.GoogleAnalyticsObject = b
    a[b] =
      a[b] ||
      function() {
        ;(a[b].q = a[b].q || []).push(arguments)
      }
    a[b].l = 1 * new Date()
    c = e.createElement(f)
    d = e.getElementsByTagName(f)[0]
    c.async = 1
    c.src = g
    d.parentNode.insertBefore(c, d)
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga",
  )
  ga("create", "UA-58064552-1", "auto")
  var webUserId = readCookie("_webUserId"),
    webSessionHistory = readCookie("_webSessHistory"),
    webSessionFlag = readCookie("_webSessFlag")
  null != webUserId
    ? webSessionFlag || null == webSessionHistory
      ? webSessionFlag ||
        webSessionHistory ||
        ((document.cookie =
          "_webSessHistory\x3d1;domain\x3d.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/"),
        (document.cookie =
          "_webSessFlag\x3dtrue;domain\x3d.toasttab.com;path\x3d/"),
        ga("set", "dimension3", "1"),
        ga("set", "dimension2", webUserId))
      : ((webSessionHistory = parseInt(webSessionHistory)),
        (webSessionHistory += 1),
        (document.cookie =
          "_webSessHistory\x3d" +
          webSessionHistory +
          ";domain\x3d.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/"),
        (document.cookie =
          "_webSessFlag\x3dtrue;domain\x3d.toasttab.com;path\x3d/"),
        ga("set", "dimension3", webSessionHistory),
        ga("set", "dimension2", webUserId))
    : ((webUserId =
        new Date().getTime() + "-" + Math.floor(1e3 * Math.random())),
      (document.cookie =
        "_webUserId\x3d" +
        webUserId +
        ";domain\x3d.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/"),
      (document.cookie =
        "_webSessHistory\x3d1;domain\x3d.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/"),
      (document.cookie =
        "_webSessFlag\x3dtrue;domain\x3d.toasttab.com;path\x3d/"),
      ga("set", "dimension3", "1"),
      ga("set", "dimension2", webUserId))
  ga("send", "pageview")
  window.dataLayer.push({ event: "gaLoaded", userId: webUserId })
}
//////

var cookieVal = readCookie("_webUser")
;(null !== cookieVal && nkC.match(/cust/)) ||
  (!(function() {
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
  })(),
  (drift.SNIPPET_VERSION = "0.3.1"),
  drift.load("u5af23ca8k2t"))

//////////////////////
function getURLParameter(a) {
  return (
    decodeURIComponent(
      (new RegExp("[?|\x26]" + a + "\x3d([^\x26;]+?)(\x26|#|;|$)").exec(
        location.search,
      ) || [, ""])[1].replace(/\+/g, "%20"),
    ) || null
  )
}
var webOriginCookieVal = readCookie("webOrigin"),
  paramSource = getURLParameter("utm_source"),
  paramMedium = getURLParameter("utm_medium"),
  paramCampaign = getURLParameter("utm_campaign"),
  paramTerm = getURLParameter("utm_term"),
  paramContent = getURLParameter("site_content")
if (webOriginCookieVal && "" !== webOriginCookieVal) {
  if (paramSource && "" !== paramSource)
    if (webOriginCookieVal.match(/src|/)) {
      webOriginCookieVal = webOriginCookieVal.replace(
        /src\|[a-zA-Z_0-9\.\-]+/,
        "src|" + paramSource,
      )
      var webOriginOverride = !0
    } else
      webOriginCookieVal = webOriginCookieVal.match(/\|$/)
        ? webOriginCookieVal + "src|" + paramSource
        : webOriginCookieVal + "|src|" + paramSource
  paramMedium &&
    "" !== paramMedium &&
    (webOriginCookieVal.match(/med|/)
      ? ((webOriginCookieVal = webOriginCookieVal.replace(
          /med\|[a-zA-Z_0-9\.\-]+/,
          "med|" + paramMedium,
        )),
        (webOriginOverride = !0))
      : (webOriginCookieVal = webOriginCookieVal.match(/\|$/)
          ? webOriginCookieVal + "med|" + paramMedium
          : webOriginCookieVal + "|med|" + paramMedium))
  paramCampaign &&
    "" !== paramCampaign &&
    (webOriginCookieVal.match(/cam|/)
      ? ((webOriginCookieVal = webOriginCookieVal.replace(
          /cam\|[a-zA-Z_0-9\.\-]+/,
          "cam|" + paramCampaign,
        )),
        (webOriginOverride = !0))
      : (webOriginCookieVal = webOriginCookieVal.match(/\|$/)
          ? webOriginCookieVal + "cam|" + paramCampaign
          : webOriginCookieVal + "|cam|" + paramCampaign))
  paramTerm &&
    "" !== paramTerm &&
    (webOriginCookieVal.match(/trm|/)
      ? ((webOriginCookieVal = webOriginCookieVal.replace(
          /trm\|[a-zA-Z_0-9\.\-]+/,
          "trm|" + paramTerm,
        )),
        (webOriginOverride = !0))
      : (webOriginCookieVal = webOriginCookieVal.match(/\|$/)
          ? webOriginCookieVal + "trm|" + paramTerm
          : webOriginCookieVal + "|trm|" + paramTerm))
  paramContent &&
    "" !== paramContent &&
    (webOriginCookieVal.match(/con|/)
      ? ((webOriginCookieVal = webOriginCookieVal.replace(
          /con\|[a-zA-Z_0-9\.\-]+/,
          "con|" + paramContent,
        )),
        (webOriginOverride = !0))
      : (webOriginCookieVal = webOriginCookieVal.match(/\|$/)
          ? webOriginCookieVal + "con|" + paramContent
          : webOriginCookieVal + "|con|" + paramContent))
  var tommorowDate = new Date(
    new Date().setDate(new Date().getDate() + 1),
  ).toGMTString()
  document.cookie =
    "webOrigin\x3d" +
    webOriginCookieVal +
    ";domain\x3d.toasttab.com;expires\x3d" +
    tommorowDate +
    ";path\x3d/"
} else {
  if (null == paramSource) var paramSourceName = (paramSource = "")
  else (paramSource += "|"), (paramSourceName = "src|")
  if (null == paramMedium) var paramMediumName = (paramMedium = "")
  else (paramMedium += "|"), (paramMediumName = "med|")
  if (null == paramCampaign) var paramCampaignName = (paramCampaign = "")
  else (paramCampaign += "|"), (paramCampaignName = "cam|")
  if (null == paramTerm) var paramTermName = (paramTerm = "")
  else (paramTerm += "|"), (paramTermName = "trm|")
  if (null == paramContent) var paramContentName = (paramContent = "")
  else (paramContent += "|"), (paramContentName = "con|")
  tommorowDate = new Date(
    new Date().setDate(new Date().getDate() + 1),
  ).toGMTString()
  document.cookie =
    "webOrigin\x3d" +
    paramSourceName +
    paramSource +
    paramMediumName +
    paramMedium +
    paramCampaignName +
    paramCampaign +
    paramTermName +
    paramTerm +
    paramContentName +
    paramContent +
    ";expires\x3d" +
    tommorowDate +
    ";domain\x3d.toasttab.com;path\x3d/"
}
/////

var userZipVal = readCookie("_userLoc")
null == userZipVal
  ? $.get(
      "https://ipinfo.io?token\x3d2d3d72c1a8e588",
      function(a) {
        userCountry = a.country
        userZip = a.postal
        userState = a.region
        "US" == userCountry &&
          ((document.cookie =
            "_userLoc\x3d" +
            userZip +
            ";domain\x3dpos.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/"),
          (document.cookie =
            "_userRegion\x3d" +
            userState +
            ";domain\x3dpos.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/"),
          dataLayer.push({ event: "zipKnown", zipVal: userZip }))
        ga("set", "dimension16", userZip)
        ga(
          "send",
          "event",
          "dataPush",
          "dataPush",
          document.location.hostname + document.location.pathname,
          { nonInteraction: !0 },
        )
      },
      "jsonp",
    )
  : userZipVal && dataLayer.push({ event: "zipKnown", zipVal: userZipVal })
//////////
var userSeg = readCookie("_webUser")
if (null == userSeg || !userSeg.match(/cust|partner|jbSeeker/)) {
  var MouseStats_Commands = MouseStats_Commands ? MouseStats_Commands : []
  ;(function() {
    function b() {
      if (void 0 == document.getElementById("__mstrkscpt")) {
        var a = document.createElement("script")
        a.type = "text/javascript"
        a.id = "__mstrkscpt"
        a.src =
          ("https:" == document.location.protocol
            ? "https://ssl"
            : "http://www2") +
          ".mousestats.com/js/5/5/5558332752395476402.js?" +
          Math.floor(new Date().getTime() / 6e5)
        a.async = !0
        a.defer = !0
        ;(
          document.getElementsByTagName("head")[0] ||
          document.getElementsByTagName("body")[0]
        ).appendChild(a)
      }
    }
    window.attachEvent
      ? window.attachEvent("onload", b)
      : window.addEventListener("load", b, !1)
    "complete" === document.readyState && b()
  })()
}
/////
<script type="text/javascript" id="">var affinPricing=readCookie("_affPricing"),affinityRestaurantType=readCookie("_restType"),affinityFeature=readCookie("_affFeaturePage"),affinityCustomer=readCookie("_affCaseStudy");
function waitForDrift(){if(null!=window.drift)drift.on("ready",function(){var a=google_tag_manager["GTM-5BQ3J5"].dataLayer.get("zipVal");drift.api.setUserAttributes({zip_code:a,affinity_pricingPage:affinPricing,affinity_restaurantType:affinityRestaurantType,affinity_posFeature:affinityFeature,affinity_customerCaseStudy:affinityCustomer})});else setTimeout(function(){waitForDrift()},500)}waitForDrift();</script>


/////////////
<script type="text/javascript" id="">var affPricing=readCookie("_affPricing"),pageSeg=document.location.pathname;if(null!==affPricing){if("/pricing"==pageSeg){var newAffPricing=parseInt(affPricing)+1;document.cookie="_affPricing\x3d"+newAffPricing+";domain\x3dpos.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/"}}else"/pricing"==pageSeg&&(document.cookie="_affPricing\x3d1;domain\x3dpos.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/");pageSeg=document.location.pathname;
-1<pageSeg.indexOf("/pos-system/")&&(pageSeg=pageSeg.replace(/\/pos\-system\//,""),document.cookie="_affFeaturePage\x3d"+pageSeg+";domain\x3dpos.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/");pageSeg=document.location.pathname;-1<pageSeg.indexOf("/toast/customers/")&&(pageSeg=pageSeg.replace(/\/toast\/customers\//,""),document.cookie="_affCaseStudy\x3d"+pageSeg+";domain\x3dpos.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/");</script>


///////////////////////
<script type="text/javascript" id="">var affPricing=readCookie("_affPricing"),pageSeg=document.location.pathname;if(null!==affPricing){if("/pricing"==pageSeg){var newAffPricing=parseInt(affPricing)+1;document.cookie="_affPricing\x3d"+newAffPricing+";domain\x3dpos.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/"}}else"/pricing"==pageSeg&&(document.cookie="_affPricing\x3d1;domain\x3dpos.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/");pageSeg=document.location.pathname;
-1<pageSeg.indexOf("/pos-system/")&&(pageSeg=pageSeg.replace(/\/pos\-system\//,""),document.cookie="_affFeaturePage\x3d"+pageSeg+";domain\x3dpos.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/");pageSeg=document.location.pathname;-1<pageSeg.indexOf("/toast/customers/")&&(pageSeg=pageSeg.replace(/\/toast\/customers\//,""),document.cookie="_affCaseStudy\x3d"+pageSeg+";domain\x3dpos.toasttab.com;expires\x3d31 Dec 2020 12:00:00 UTC;path\x3d/");</script>
//////////////////////////

<script type="text/javascript" id="">try{setTimeout(function(){if(0<$('input[name\x3d"last_blog_seen"]').length){var a=readCookie("bInteract"),b=$('input[name\x3d"last_blog_seen"]');b.val(a)}},2500)}catch(a){};</script>
///////////

    /// a / b test
(function() {
  var cookies = document.cookie.split(";");
  var abTestCookie = null;
  var key = 'hs_ab_test';
  for (var i=0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();

    if (cookie.indexOf(key + '=') == 0) {
      abTestCookie = cookie.substring(key.length + 1, cookie.length);
      break;
    }
  }

  if (abTestCookie == null) {
    document.cookie = 'hs_ab_test' + "=" + '4369402485:4173014289' + "; path=/;";
  } else {
    document.cookie = 'hs_ab_test' + "=" + abTestCookie + "," + '4369402485:4173014289' + "; path=/;";
  }
})();
//////////


