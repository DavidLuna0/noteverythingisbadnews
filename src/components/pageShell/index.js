import React from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const PageShell = (Page, previous) => {
    return props => (
      <div className="page">
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
          transitionName={props.match.path === "/one" ? "SlideIn" : "SlideOut"}
        >
          {console.log(props)}
          <Page {...props} />
        </ReactCSSTransitionGroup>
      </div>
    );
  };

  export default PageShell;
