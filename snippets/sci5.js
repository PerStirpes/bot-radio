<script>
window.drift.on('ready',function(api){ 
  
     /* These are the drift events that are working/firing */
    
  window.drift.on('startConversation',function(event){ 
    { 
	   dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'Drift', 
              'eventAction': 'Conversation Started', 
              'eventLabel': 'Drift - Start Conversation id: ' + event.conversationId
          });
    } 
  })
  
  window.drift.on('emailCapture',function(event){ 
    { 
	   dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'Drift', 
              'eventAction': 'Email Captured', 
              'eventLabel': 'Drift - Email Capture'
          });
    } 
  })

  window.drift.on('scheduling:meetingBooked',function(event){ 
    { 
     	dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'Drift', 
              'eventAction': 'Meeting Scheduled', 
              'eventLabel': 'Drift - Meeting Schedule id: ' + event.conversationId
          });
    } 
  })
  
     /* These are the campaign events I also want to capture */
    
  window.drift.on('campaign:open',function(event){ 
    { 
	   dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'Drift', 
              'eventAction': 'campaign open', 
              'eventLabel': 'Drift - Campaign open id: ' + event.campaignId
          });
    } 
  })

    window.drift.on('campaign:dismiss',function(event){ 
    { 
	   dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'Drift', 
              'eventAction': 'campaign dismiss', 
              'eventLabel': 'Drift - Campaign dismiss id: ' + event.campaignId
          });
    } 
  })
  
  window.drift.on('campaign:click',function(event){ 
    { 
	   dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'Drift', 
              'eventAction': 'campaign click', 
              'eventLabel': 'Drift - Campaign click id: ' + event.campaignId
          });
    } 
  })
  
  window.drift.on('campaign:submit',function(event){ 
    { 
	   dataLayer.push({
              'event': 'driftInteraction', 
              'eventCategory': 'Drift', 
              'eventAction': 'campaign submit', 
              'eventLabel': 'Drift - Campaign submit id: ' + event.campaignId
          });
    } 
  })

}) 
</script>



drift.on('ready', function(id) {
   var customerProduct = <query  hadoop api for product info with id>
    // pass into setuserAttributes 

    drift.api.setUserAttributes({
      email: 'abcd@example.com',
      customerProducts: customerProducts
    })
  })