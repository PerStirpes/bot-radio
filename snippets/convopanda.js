var createPixel = function(b) {
    var a = new Image(1, 1)
    a.src = b
    a.alt = ""
    a.style = "display:none;"
    document.body.appendChild(a)
  },
  startConversation = function() {
    fbq("track", "Lead", {
      content_name: "Conversation Started",
      content_category: "Live Chat",
    })
    ga("send", "event", "Live Chat", "Conversation Started")
    createPixel(
      "https://dc.ads.linkedin.com/collect/?pid\x3d367226\x26conversionId\x3d454713\x26fmt\x3dgif",
    )
  },
  emailCapture = function() {
    fbq("track", "Lead", {
      content_name: "Email Captured",
      content_category: "Live Chat",
    })
    ga("send", "event", "Live Chat", "Email Captured")
    createPixel(
      "https://dc.ads.linkedin.com/collect/?pid\x3d367226\x26conversionId\x3d454721\x26fmt\x3dgif",
    )
  },
  meetingBooked = function() {
    fbq("track", "Lead", {
      content_name: "Meeting Booked",
      content_category: "Live Chat",
    })
    ga("send", "event", "Live Chat", "Meeting Booked")
    createPixel(
      "https://dc.ads.linkedin.com/collect/?pid\x3d367226\x26conversionId\x3d454729\x26fmt\x3dgif",
    )
  }
window.drift.on("startConversation", startConversation)
window.drift.on("emailCapture", emailCapture)
window.drift.on("scheduling:meetingBooked", meetingBooked)
var trackLead = function(b, a, e, c) {
  var d = function() {
    var f = this
    window.drift.off("emailCapture")
    window.drift.on("emailCapture", function() {
      fbq("track", "Lead", a)
      createPixel(e)
      ga("send", "event", c.category, c.action, c.label, c.value)
      window.drift.on("emailCapture", emailCapture)
      document
        .querySelector("a[href~\x3d'" + b + "']")
        .removeEventListener("click", f)
    })
  }
  window.location.hash === b
    ? d()
    : document.addEventListener("DOMContentLoaded", function(a) {
        ;(a = document.querySelector("a[href~\x3d'" + b + "']")) &&
          a.addEventListener("click", d)
      })
}
trackLead(
  "#grow-sales-with-bots",
  { content_name: "Grow Sales With Chatbots", content_category: "Lead Magnet" },
  "https://dc.ads.linkedin.com/collect/?pid\x3d367226\x26conversionId\x3d451097\x26fmt\x3dgif",
  {
    category: "Lead Magnet",
    action: "Acquisition",
    label: "Grow Sales With Chatbots",
  },
)
trackLead(
  "#lead-generation-tactics-spreadsheet",
  {
    content_name: "Lead Generation Tactics Spreadsheet",
    content_category: "Lead Magnet",
  },
  "https://dc.ads.linkedin.com/collect/?pid\x3d367226\x26conversionId\x3d454601\x26fmt\x3dgif",
  {
    category: "Lead Magnet",
    action: "Acquisition",
    label: "Lead Generation Tactics Spreadsheet",
  },
)
