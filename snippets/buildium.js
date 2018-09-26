function getCookie(b) {
  var c = document.cookie
  b += "\x3d"
  var a = c.indexOf("; " + b)
  if (-1 == a) {
    if (((a = c.indexOf(b)), 0 != a)) return null
  } else {
    a += 2
    var d = document.cookie.indexOf(";", a)
    ;-1 == d && (d = c.length)
  }
  return unescape(c.substring(a + b.length, d))
}
var optx_drift_var_name = google_tag_manager["GTM-WG8VJP"].macro(4)
if (optx_drift_var_name) {
  var optxCookie = getCookie("c_optx_drift_var_name")
  null == optxCookie &&
    google_tag_manager["GTM-WG8VJP"].macro(5)(
      "c_optx_drift_var_name",
      optx_drift_var_name,
      90,
      "/",
      google_tag_manager["GTM-WG8VJP"].macro(6),
    )
}
