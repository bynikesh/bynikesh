/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
export function onRenderBody({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) {
  setHeadComponents([
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
    />,
  ])

  setPreBodyComponents([])

  setPostBodyComponents([
    <script key="pqr" type="text/javascript" src="src/js/bootstrap.min.js" />,
    <script
      type="text/javascript"
      src="src/js/jquery.animatedheadline.min.js"
    />,
    <script type="text/javascript" src="src/js/main.js" />,
  ])
}
