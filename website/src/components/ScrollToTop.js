import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function zoomOutMobile() {
  var viewport = document.querySelector('meta[name="viewport"]');

  if ( viewport ) {
    viewport.content = "initial-scale=0.1";
    viewport.content = "width=1200";
  }
}

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      zoomOutMobile();
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);