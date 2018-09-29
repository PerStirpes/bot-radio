import React from "react"
import _ from "lodash"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { loadMarketo } from "../actions/marketo"
import Observer from "../components/Atom/ObserverComponent"
import Loader from "../components/Atom/Loader"
import Fade from "../components/Atom/Fade"

function withMarketoDependency(WrappedComponent) {
  class MarketoLoader extends React.Component {
    isLoadedOrPending = () =>
      _.includes(["pending", "success"], _.get(this.props, "marketo.status"))

    isLoaded = () => _.get(this.props, "marketo.status") === "success"

    handleInView = inView => {
      if (inView && !this.isLoadedOrPending()) {
        const baseUrl = _.get(this.props, "baseUrl")
        this.props.loadMarketo(baseUrl)
      }
    }

    render() {
      return (
        <div style={{ position: "relative", minHeight: 120 }}>
          <Observer
            rootMargin="0px 0px 100px"
            onChange={this.handleInView}
            triggerOnce
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />

          {this.isLoaded() && (
            <WrappedComponent
              {..._.omit(this.props, ["marketo", "loadMarketo"])}
            />
          )}

          <Fade in={!this.isLoaded()}>
            <div
              style={{
                textAlign: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
              }}
            >
              <Loader />
            </div>
          </Fade>
        </div>
      )
    }
  }

  const mapStateToProps = ({ marketo }) => ({
    marketo,
  })

  const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadMarketo }, dispatch)

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MarketoLoader)
}

export default withMarketoDependency

drift.on("ready", function(b, c) {
  window.drift.on("startConversation", function(a) {
    console.log("User started a new conversation " + a.conversationId)
    window.ga("send", "event", "Drift", "startConversation")
  })
  window.drift.on("scheduling:meetingBooked", function(a) {
    console.log("user booked a meeting with " + a.teamMember.name)
    window.ga("send", "event", "Drift", "MeetingBooked")
  })
  window.drift.on("emailCapture", function(a) {
    console.log("user identified as: " + a.data.email)
    window.ga("send", "event", "Drift", "emailCaptured")
  })
})
