import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import top from "../../images/texture-top.jpeg"
import bottom from "../../images/texture-bottom.jpeg"

import BaconBrittleDesktop from "../vectors/BaconBrittleDesktop"
import TaglineDesktop from "../vectors/TaglineDesktop"
import ProductPhoto from "../vectors/ProductPhoto"
import ProductImage from "../../images/product-photo.png"

import "./landing.css"
 
const Landing = () => {

return (
    <>
        <div className="product-photo"
            style={{
                zIndex: `1000`,
                position: `absolute`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                margin: `auto`,
                top: `15%`,
                bottom: `15%`,
                left: `0`,
                right: `0`,
                width: `65%`,
                maxWidth: `900px`,
            }}
        >
            <ProductPhoto/>
        </div>
        <div className="texture-top"
            style={{
                zIndex: `100`,
                display: `flex`,
                position: `absolute`,
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${top})`,
                opacity: `10%`,
                mixBlendMode: `overlay`,
            }}
        />
        <div className="texture-bottom"
            style={{
                zIndex: `90`,
                display: `flex`,
                position: `absolute`,
                width: `100%`,
                height: `100%`,
                backgroundImage: `url(${bottom})`,
                opacity: `80%`,
                mixBlendMode: `multiply`,
            }}
        />
        <div className="Container"
            style={{
                zIndex: `0`,
                display: `flex`,
                margin: `auto`,
                backgroundColor: `#ffffff`,
                width: `100vw`,
                height: `100vh`,
            }}
        >
            <div className="Border-Box"
            style={{
                zIndex: `10`,
                display: `flex`,
                margin: `1em`,
                width: `100%`,
                backgroundColor: `#3E8F69`,
                border: `.5em solid #C51F30`,
            }}
            >
                <div className="Content"
                style={{
                    zIndex: `50`,
                    margin: `auto`,
                    width: `95%`,
                    maxWidth: `1920px`,
                    height: `95%`,
                    // backgroundColor: `black`,
                    alignContent: `center`,
                }}
                >
                    <div className="Product-Tagline"
                    style={{
                        zIndex: `50`,
                        position: `absolute`,
                        top: `4em`,
                        left: `0`,
                        right: `0`,
                        display: `block`,
                        margin: `auto`,
                        width: `90%`,
                        maxWidth: `1920px`,
                        // backgroundColor: `blue`,
                    }}
                    >
                        <TaglineDesktop/>
                    </div>
                    <div className="Product-Name"
                    style={{
                        zIndex: `50`,
                        position: `absolute`,
                        bottom: `4em`,
                        left: `0`,
                        right: `0`,
                        display: `block`,
                        margin: `auto`,
                        width: `90%`,
                        maxWidth: `1920px`,
                        // backgroundColor: `blue`,
                    }}
                    >
                        <BaconBrittleDesktop/>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
)
}

export default Landing
 