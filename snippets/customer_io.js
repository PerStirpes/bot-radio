const hl = getAllUrlParams().hl
const partner = getAllUrlParams().p
let out

if (hl) {
  out = decodeURIComponent(hl)
  $("#keyword").text(out)
} else {
  $("#keyword").text("Automate your product messaging.")
}

if (partner) {
  out = decodeURIComponent(partner)
  $("#partner").text(out)
} else {
  $("#partner").text("your existing tools")
}

$(function() {
  $("#carouselExampleControls").carousel()
})
