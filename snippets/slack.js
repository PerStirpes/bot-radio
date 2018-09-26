/* site fundamentals */
;(TD.boot_data.version_uid = "dde2363b4bccf3221e43c153ec7d44e36b18902a"),
  (TD.boot_data.environment = "prod")
TD.boot_data.abs_root_url = "https://slack.com/"

TD.boot_data.anonymous_visitor = false
TD.boot_data.beacon_timing_url = "https://slack.com/beacon/timing"
TD.boot_data.referral_code = ""
TD.boot_data.hc_tracking_qs = "sid=zd-up-t634kkllr-uc8d9ce5p"

/* Geo things */
TD.boot_data.geo = {
  country: "US",
  region: "CA",
  city: "San Francisco",
  zip: "94102",
  lat: 37.7794,
  lon: -122.417,
  metro: 807,
  area: 415,
  isp: "Webpass",
  org: null,
  country_label: "United States",
  region_label: "California",
  country3: "USA",
  continent: "NA",
  ok: true,
}
TD.boot_data.geocode = "en-us"
TD.boot_data.intl_prefix = ""
TD.boot_data.request_uri = "/enterprise"
TD.boot_data.canonical_web_url = "https://slack.com/enterprise"
TD.boot_data.i18n_locale = "en-US"
TD.boot_data.geo_root_url = "https://slack.com/"

TD.boot_data.is_usa = true
TD.boot_data.is_spain = false
TD.boot_data.is_germany = false
TD.boot_data.is_france = false
TD.boot_data.is_japan = false

TD.boot_data.is_english = true
TD.boot_data.is_spanish = false
TD.boot_data.is_german = false
TD.boot_data.is_french = false
TD.boot_data.is_japanese = false

/* get values  */

TD.boot_data.team_name = "Drift"
TD.boot_data.team_domain = "heydrift"
TD.boot_data.team_url = "https://heydrift.slack.com/"

TD.boot_data.user_id = "UC8D9CE5P"
TD.boot_data.user_id_raw = 416451422193
TD.boot_data.team_id = "T634KKLLR"
TD.boot_data.team_id_raw = 207155666705
TD.boot_data.user_email = "mbarrazacarl@drift.com"
TD.boot_data.user_username = "mbarrazacarl"

TD.boot_data.user_realname = "Matt Barraza-Carl"
/* */

/* */

/* */

/* subdomain in URL - could be diff than cfg.user.team */

/* TS bridge & flags */
TS.boot_data = {}
TS.boot_data.slack_to_zd_locale = {
  "en-us": "en-us",
  "fr-fr": "fr-fr",
  "de-de": "de",
  "es-es": "es",
  "ja-jp": "ja",
}

/* migrate these TS props into TD */
_.extend(TD.boot_data, TS.boot_data)

/* fill the model */
TD.model.user_id = TD.boot_data.user_id

TD.model.user_realname = TD.boot_data.user_realname
TD.model.user_email = TD.boot_data.user_email

TD.model.team_id = TD.boot_data.team_id
TD.model.team_url = TD.boot_data.team_url
TD.model.team_domain = TD.boot_data.team_domain
TD.model.visitor_uid = ".e6qtjut6oujtwvgknpn3xmdxt"
TD.model.enterprise_id = TD.boot_data.enterprise_id

TD.model.is_first_visit = false
TD.model.is_customer = TD.model.visitor_uid.indexOf(".") == 0
TD.model.is_prospect = !TD.model.is_customer
TD.model.is_signed_in = !!TD.model.user_id

TD.model.num_signed_in_users = 3
TD.model.is_enterprise = !!TD.boot_data.enterprise_id

/* billing$ */
TD.model.is_paid_plan = true
TD.model.curr_plan = "std_y"

/* setup clog defaults */
TD.boot_data.clog_ui_step = "page_enterprise"
if (TD.boot_data.team_id) TD.clog.setTeam(TD.boot_data.team_id)
if (TD.boot_data.user_id) TD.clog.setUser(TD.boot_data.user_id)

/* Greenhouse careers detail page */
TD.boot_data.job_board_token = "slack"

/* Define your experiments & values here */
TD.boot_data.experiments = {
  include_optimizely_tag: "",
}
