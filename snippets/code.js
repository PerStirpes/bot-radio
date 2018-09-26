// Tracking Cross-domain Iframes - Upgraded Solution
// https://www.simoahava.com/analytics/tracking-cross-domain-iframes-upgraded-solution/
function() {
    var iframeDecorator = {
      selector: 'iframe#decorateMe',
      attempts: 10,
      intervalMs: 1000,
      useAnchor: false
    };
  
    // DO NOT EDIT ANYTHING BELOW THIS LINE
    var globalSendHitTaskName   = '_ga_originalSendHitTask';
  
    return function(customTaskModel) {
  
      window[globalSendHitTaskName] = window[globalSendHitTaskName] || customTaskModel.get('sendHitTask');
      var tempFieldObject, dimensionIndex, count, ga, tracker, decorateTimer, decorateIframe, iframe;
  
      if (typeof iframeDecorator === 'object' && typeof iframeDecorator.selector === 'string' && typeof iframeDecorator.attempts === 'number' && typeof iframeDecorator.intervalMs === 'number') {
        count = 0;
        ga = window[window['GoogleAnalyticsObject']];
        tracker = ga.getByName(customTaskModel.get('name'));
        decorateIframe = function() {
          iframe = document.querySelector(iframeDecorator.selector);
          if (iframe !== null && /[?&]_ga=/.test(iframe.src)) {
            window.clearInterval(decorateTimer);
            return;
          }
          if (iframe === null) {
            count += 1;
            if (count === iframeDecorator.attempts) {
              window.clearInterval(decorateTimer);
            }
            return;
          }
          window.clearInterval(decorateTimer);
          iframe.src = (new window.gaplugins.Linker(tracker)).decorate(iframe.src, iframeDecorator.useAnchor);
        };
        decorateTimer = window.setInterval(decorateIframe, iframeDecorator.intervalMs);
      }
  
    };
  }