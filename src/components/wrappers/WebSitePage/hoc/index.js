/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import WebsitePageWrapper from '../..';

export default function webSitePageHOC(
  PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props) => (
    <WebsitePageWrapper
      {...pageWrapperProps}
      {...props.pageWrapperprops}
    >
      <PageComponent {...props} />
    </WebsitePageWrapper>
  );
}
