import * as React from "react"
import product from "../../images/product-photo.png"

function ProductPhoto(props) {
  return (
    <svg
      style={{
        position: `absolute`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 684 413.25"
      // width={684}
      // height={413.25}
      {...props}
    >
      <image width={912} height={551} transform="scale(.75)" href={product} />
    </svg>
  )
}
export default ProductPhoto
