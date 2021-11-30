import * as React from "react"

import tag from "../../images/buynowtag.png"

function BuyNowTag(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 210.25 127.75"
      //   width={210.25}
      //   height={127.75}
      {...props}
    >
      <image
        style={{
          position: `absolute`,
        }}
        width={841}
        height={511}
        transform="scale(.25)"
        href={tag}
      />
    </svg>
  )
}
export default BuyNowTag
