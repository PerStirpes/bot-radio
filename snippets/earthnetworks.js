window.drift.on("startConversation", function() {
  ga("send", "event", "Drift Widget", "Chat Started")
})
window.drift.on("emailCapture", function(data) {
  ga("send", "event", "Drift Widget", "Email Captured")
})
window.drift.on("scheduling:meetingBooked", function(data) {
  ga("send", "event", "Drift Widget", "Meeting Booked")
})
