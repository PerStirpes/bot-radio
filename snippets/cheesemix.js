{
  /* <a onclick="drift.track('Clicked: Need Help? Lets Talk', { name: 'Need Help? Lets Talk' })" id="#letsspeak" class="letsspeak" href="#letsspeak">Need Help? Lets talk</a> */
}
{
  /* <a onclick="drift.track('Clicked: HelpDocs', { name: 'HelpDocs" href="#helpdocs">HelpDocs</a> */
}

drift.identify(userId, {
  customer_id: "",
  email: "",
  fullName: " ",
  firstName: "",
  lastName: "",
})

window.drift.on("campaign:open", function(data) {
  console.log("User opened campaign " + data.campaignId)
})

window.drift.on("sliderMessage:close", function(data) {
  console.log("User closed slider the slider")
})

/////////////

!(function() {
  var t
  if (((t = window.driftt = window.drift = window.driftt || []), !t.init))
    return t.invoked
      ? void (
          window.console &&
          console.error &&
          console.error("Drift snippet included twice.")
        )
      : ((t.invoked = !0),
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
            var n
            return (
              (n = Array.prototype.slice.call(arguments)),
              n.unshift(e),
              t.push(n),
              t
            )
          }
        }),
        t.methods.forEach(function(e) {
          t[e] = t.factory(e)
        }),
        (t.load = function(t) {
          var e, n, o, i
          ;(e = 3e5),
            (i = Math.ceil(new Date() / e) * e),
            (o = document.createElement("script")),
            (o.type = "text/javascript"),
            (o.async = !0),
            (o.crossorigin = "anonymous"),
            (o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js"),
            (n = document.getElementsByTagName("script")[0]),
            n.parentNode.insertBefore(o, n)
        }))
})()
drift.SNIPPET_VERSION = "0.3.1"
drift.load("wh5bmd6ie47z")
drift.on("emailCapture", function(e) {
  analytics.identify({ email: e.data.email })
  analytics.track("Email Captured", {
    email: e.data.email,
    pageUrl: document.referrer,
  })
})

const inputSearch = document.getElementById("search")
const searchIcon = document.getElementById("input-search-icon")

inputSearch.addEventListener("focus", function() {
  searchIcon.classList.toggle("focusedInput")
})

inputSearch.addEventListener("blur", function() {
  searchIcon.classList.toggle("focusedInput")
})

drift.on("ready", function(api) {
  const talkToUsButton = document.getElementById("talk-to-us-button")
  talkToUsButton.addEventListener("click", function() {
    api.sidebar.toggle()
  })

  const emptyStateTalkToUsBtn = document.getElementById(
    "empty-state-talk-to-us",
  )
  if (!!emptyStateTalkToUsBtn) {
    emptyStateTalkToUsBtn.addEventListener("click", function() {
      api.sidebar.toggle()
    })
  }
})

analytics.page("Home", {
  kbId: document.getElementById("help-center-home").getAttribute("data-kbid"),
  orgId: document.getElementById("help-center-home").getAttribute("data-orgid"),
})
