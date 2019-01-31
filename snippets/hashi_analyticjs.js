
window.analytics.ready(() => {
  const analytics = window.analytics || {
    trackLink: () => {},
    track: () => {}
  }

  // Track all button clicks
  track(
    '[data-ga-button]',
    el => {
      return {
        event: 'Click',
        category: 'Button',
        label: el.getAttribute('data-ga-button')
      }
    },
    true
  )

  // TODO: Track product subnav clicks

  // Track meganav link clicks
  track(
    '[data-ga-meganav]',
    el => {
      return {
        event: 'Click',
        category: 'Meganav Navigation',
        label: el.getAttribute('data-ga-meganav')
      }
    },
    true
  )

  // Track footer link clicks
  track(
    '[data-ga-footer]',
    el => {
      return {
        event: 'Click',
        category: 'Footer Navigation',
        label: el.getAttribute('data-ga-footer')
      }
    },
    true
  )

  // Track learn component clicks
  track(
    '[data-ga-learn]',
    el => {
      return {
        event: 'Click',
        category: 'Learn Navigation',
        label: el.getAttribute('data-ga-learn')
      }
    },
    true
  )

  // Track outbound links
  track(
    'a[href^="http"]:not([href^="http://hashicorp"]):not([href^="https://hashicorp"]):not([href^="http://www.hashicorp"]):not([href^="https://www.hashicorp"])',
    el => {
      return {
        event: `Outbound Link | ${window.location.pathname}`,
        category: 'Outbound link',
        label: el.href
      }
    },
    true
  )

  /**
   * Wrapper for segment's track function that will track multiple elements,
   * normalize parameters, and easily switch between tracking links or events.
   * @param  {String} selector - query selector, multi element compatible
   * @param  {Function} cb - optional function that should return params, and will receive the element as a parameter
   * @param  {Boolean} [link=false] - if true, tracks a link click
   */
  function track(selector, cb, link = false) {
    each(document.querySelectorAll(selector), el => {
      let params = cb
      if (typeof cb === 'function') params = cb(el)
      const event = params.event
      delete params.event
      if (link) {
        analytics.trackLink(el, event, params)
      } else {
        el.addEventListener('click', () => {
          analytics.track(event, params)
        })
      }
    })
  }
})
