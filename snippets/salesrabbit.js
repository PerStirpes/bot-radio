drift.on("ready", function(b, c) {
  window.drift.on("startConversation", function(a) {
    console.log("User started a new conversation " + a.conversationId)
    window.ga("send", "event", "Drift", "startConversation")
  })
  window.drift.on("scheduling:meetingBooked", function(a) {
    console.log("user booked a meeting with " + a.teamMember.name)
    window.ga("send", "event", "Drift", "MeetingBooked")
  })
  window.drift.on("emailCapture", function(a) {
    console.log("user identified as: " + a.data.email)
    window.ga("send", "event", "Drift", "emailCaptured")
  })
})
