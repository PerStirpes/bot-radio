/**
 * This is a script that handles the tracking logic for UTM paramaters
 * We keep it in a seperate file so that it can be used on other domains that are not
 * using this code base. The URL of the file will be:
 * www.optimizely.com/scripts/ext-tracking.js
 * It will be loaded using Google Tag Manager
 */

const getQueryParam = name => {
  const match = window.location.search.match(`${name}=([^&]*)`)
  return match ? decodeURIComponent(match[1]) : undefined
}

const getCookie = name => {
  const match = document.cookie.match(`${name}=([^;]*)`)
  return match ? match[1] : undefined
}

const setCookie = (name, value, days, domain, encode) => {
  const cDomain = typeof domain === "undefined" ? "" : `domain=${domain};`
  const expDate = new Date()
  expDate.setDate(expDate.getDate() + days)
  const eValue = encode ? btoa(JSON.stringify(value)) : escape(value)
  const cValue =
    eValue + (days === null ? "" : `; expires=${expDate.toUTCString()}`)
  document.cookie = `${name}=${cValue};${cDomain}path=/`
}

/**
 *
 * @param {String} domain The document.referrer of the request
 * @returns {property} refObject.source
 * @returns {property} refObject.campaign
 * @returns {property} refObject.medium
 */
const getReferrerObject = domain => {
  const refObject = {}
  refObject.source = domain
  switch (true) {
    case domain.indexOf("facebook.") > -1:
      refObject.medium = "social"
      break
    case domain.indexOf("google.") > -1:
      refObject.medium = "organic"
      break
    case domain.indexOf("bing.") > -1:
      refObject.medium = "organic"
      break
    case domain.indexOf("www.t.co") > -1:
      refObject.medium = "social"
      break
    case domain.indexOf("linkedin.") > -1:
      refObject.medium = "social"
      break
    case domain.indexOf("yahoo.") > -1:
      refObject.medium = "organic"
      break
    case domain.indexOf("baidu.") > -1:
      refObject.medium = "organic"
      break
    case domain.indexOf("yandex.") > -1:
      refObject.medium = "organic"
      break
    case !domain:
      refObject.source = "direct"
      refObject.medium = "direct"
      break
    default:
      refObject.medium = "referral"
      break
  }

  return refObject
}

/**
 * Function to check if there is a utm_medium, utm_source, or utm_campaign query validateString
 * if there is set those values as session cookies so that they can be passed into
 * form submissions that will go to marketo. This is called in the main.js on every page
 */
const setUTMParamCookies = () => {
  const utmSource = getQueryParam("utm_source")
  const utmCampaign = getQueryParam("utm_campaign")
  const utmMedium = getQueryParam("utm_medium")
  const utmContent = getQueryParam("utm_content")
  const numDays = 2

  // Get the default document referrer in case there is not a UTM param added to the URL
  const referrer = document.referrer
  const refObject = getReferrerObject(referrer)
  if (utmSource) {
    setCookie("marketo_utm_source", utmSource, numDays)
  } else if (!getCookie("marketo_utm_source")) {
    setCookie("marketo_utm_source", refObject.source, numDays)
  }

  // Only set the campaign if it is a query param.
  // If there is not a utm_campaign param then it will use the
  // Current URL as the campaign
  if (utmCampaign) {
    setCookie("marketo_utm_campaign", utmCampaign, numDays)
  }

  if (utmMedium) {
    setCookie("marketo_utm_medium", utmMedium, numDays)
  } else if (!getCookie("marketo_utm_medium")) {
    setCookie("marketo_utm_medium", refObject.medium, numDays)
  }

  if (utmContent) {
    setCookie("marketo_utm_content", utmContent, numDays)
  }
}

const setUTMHiddenFormFields = () => {
  const utmSource = getCookie("marketo_utm_source")
  const utmCampaign = getCookie("marketo_utm_campaign")
  const utmMedium = getCookie("marketo_utm_medium")
  const utmContent = getCookie("marketo_utm_content")

  /**
   * Only set the campaign if it is a query param.
   * If there is not a utm_campaign param then it will use the
   * Current URL as the campaign
   */
  if (utmCampaign) {
    $('input[name="utm_campaign"]').val(utmCampaign)
    if (!$('input[name="utm_Campaign__c"]').length)
      $('input[name="utm_Campaign__c"]').val(utmCampaign)
  } else {
    $('input[name="utm_campaign"]').val(`${window.location.pathname}+Inbound`)
    if (!$('input[name="utm_Campaign__c"]').length)
      $('input[name="utm_Campaign__c"]').val(
        `${window.location.pathname}+Inbound`,
      )
  }

  if (utmSource) {
    $('input[name="utm_source"]').val(utmSource)
    if (!$('input[name="utm_Source__c"]').length)
      $('input[name="utm_Source__c"]').val(utmSource)
  }

  if (utmMedium) {
    $('input[name="utm_medium"]').val(utmMedium)
    if (!$('input[name="utm_Medium__c"]').length)
      $('input[name="utm_Medium__c"]').val(utmMedium)
  }

  if (utmContent) {
    $('input[name="utm_content"]').val(utmContent)
    if (!$('input[name="utm_Content__c"]').length)
      $('input[name="utm_Content__c"]').val(utmContent)
  }
}

$(() => {
  setUTMParamCookies()
  setUTMHiddenFormFields()
})

drift.on("ready", function() {
  drift.api.setUserAttributes({
    email: "abcd@example.com",
    nickname: "John Doe",
    age: 21,
  })
})

window.drift.on("emailCapture", function() {
  var getCookie = name => {
    var match = document.cookie.match(`${name}=([^;]*)`)
    return match ? match[1] : undefined
  }

  drift.api.setUserAttributes({
    source: getCookie("sourceType"),
    sourceUrl: getCookie("sourceUrl"),
  })
})
