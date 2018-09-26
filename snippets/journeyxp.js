if (!sessionStorage["clearbit-discord"]) {
  var xhttp = new XMLHttpRequest()
  xhttp.open(
    "POST",
    "https://discordapp.com/api/webhooks/465862858429956116/Kd_BR0Gs7HunKi8q05XLyLZyw0zi3nCloDhl6Lut9FfwEKVG7GfPUq8HurK_Uv2BhMBK",
    !0,
  )
  xhttp.setRequestHeader("Content-Type", "application/json;charset\x3dUTF-8")
  var xhttp_content = {
    content:
      clearbit.company.name +
      " landed on " +
      window.location.href.replace("https://", "").replace("http://", "") +
      " it's a " +
      clearbit.company.category.industry +
      " company. domain: " +
      clearbit.company.domain +
      " \nJump to \x3chttps://app.drift.com/live\x3e",
  }
  xhttp.send(JSON.stringify(xhttp_content))
}
sessionStorage["clearbit-discord"] = !0
