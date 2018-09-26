window._wq = window._wq || [];
  _wq.push({
    id: "szbiqn8gsy", options: {
      playerColor: "#47B881"
    },
    onHasData: function (video) {
      video.bind("play", function () {
        analytics.track(
          "Video Played",
          { 
          category: 'Video', 
          label: video.name() 
          },
        )
      });
      video.bind('pause', function () {
        analytics.track('Video Paused', 
        {
          category: 'Video',
          label: video.name()
        }
        )
      });
      video.bind("end", function () {
        analytics.track('Video End', 
        {
          category: 'Video',
          label: video.name()
        })
      });
    }
  })  
  <script>
    window._wq = window._wq || [];
    _wq.push({
      id: "szbiqn8gsy", options: {
        playerColor: "#47B881"
      },
      onHasData: function (video) {
        video.bind("play", function () {
          analytics.track(
            "Video Played",
            { category: 'Video', label: video.name() },
          )
        });
        video.bind('pause', function () {
          analytics.track('Video Paused', {
            category: 'Video',
            label: video.name()
          })
        });
        video.bind("end", function () {
          analytics.track('Video End', {
            category: 'Video',
            label: video.name()
          })
        });
      }
    })
  </script>



   // initGoogleAnalytics = (settingsConfig) => {
    //     window.drift.on('ready', () => {
    //         if (hasGoogleAnalyticsInstalled(window)) {
    //             _forEach(_keys(AnalyticsEventNames), (evt) => {
    //                 window.drift.on(evt, () => {
    //                     this.handleGATrackEvent({ eventName: evt, trackingName: settingsConfig.trackingName })
    //                 })
    //             })
    //         }
    //     })
    // }

<script>
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 
ga('create', 'UA-125634644-1', 'auto');
ga('send', 'pageview');
 
</script>


 <script type="text/javascript" id="">
        drift.on("ready", function (b, c) {
            window.drift.on("startConversation",
                function (a) {
                    console.log("User started a new conversation " + a.conversationId);
                    window.ga("send", "event", "Drift", "startConversation")
                });

            window.drift.on("scheduling:meetingBooked", function (a) {
                console.log("user booked a meeting with " + a.teamMember.name);
                window.ga("send", "event", "Drift", "MeetingBooked")
            }); window.drift.on("emailCapture", function (a) {
                console.log("user identified as: " + a.data.email);
                window.ga("send", "event", "Drift", "emaild")
            })
        });</script>




drift.on("ready", function (b, c) {
window.drift.on("startConversation",
function (a) {
console.log("User started a new conversation " + a.conversationId);
window.ga("send", "event", { "Drift", "startConversation"})
});

window.drift.on("scheduling:meetingBooked", function (a) {
console.log("user booked a meeting with " + a.teamMember.name);
window.ga("send", "event", "Drift", "MeetingBooked")
});
window.drift.on("emailCapture", function (a) {
console.log("user identified as: " + a.data.email);
window.ga("send", "event", "Drift", "emailCaptured")
})
});





window._wq = window._wq || [];
    _wq.push({
        id: "szbiqn8gsy", options: {
            playerColor: "#47B881"
        },

        onHasData: function (video) {
            video.bind("play", function () {
                analytics.track(
                    "Video Played",
                    {
                        category: 'Video',
                        label: video.name()
                    },
                )
            });
            video.bind('pause', function () {
                analytics.track('Video Paused',
                    {
                        category: 'Video',
                        label: video.name()
                    }
                )
            });
            video.bind("end", function () {
                analytics.track('Video End',
                    {
                        category: 'Video',
                        label: video.name()
                    })
            });
        }
    })  



    ///////
     ga('send', 'event', {
                eventCategory: 'Drift Conversations',
                eventAction: 'Started Conversation',
                eventLabel: event.conversationId,
            });

            console.log(' this is this ', this)

            ga('send', 'event', {
                eventCategory: 'Drift Button Click',
                eventAction: 'Clicked Button',
                eventLabel: event.target,
            });




            ga('send', 'event', {
                eventCategory: 'Drift Conversations',
                eventAction: 'Started Conversation',
                eventLabel: event.conversationId,
            });