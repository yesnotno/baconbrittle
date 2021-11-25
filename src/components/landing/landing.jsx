import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import top from "../../images/texture-top.jpeg"
import bottom from "../../images/texture-bottom.jpeg"

import BaconBrittleDesktop from "../vectors/BaconBrittleDesktop"
import TaglineDesktop from "../vectors/TaglineDesktop"
import ProductPhoto from "../vectors/ProductPhoto"
import BuyNowTag from "../vectors/BuyNowTag"
import Logo from "../vectors/Logo"
import BaconBrittleMobile from "../vectors/BaconBrittleMobile"
import TaglineMobile from "../vectors/TaglineMobile"

const TaglineDivDesktop = styled.div`
    z-index: 50;
    position: absolute;
    top: 4em;
    display: block:
    margin: auto;
    width: 90%;
    max-width: 1920px;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

const TaglineDivMobile = styled.div`
    z-index: 50;
    position: absolute;
    top: 4em;
    display: none:
    margin: auto;
    width: 90%;
    max-width: 1920px;
    opacity: 0;

    @media screen and (max-width: 900px) {
        display: block;
        opacity: 1;
    }
`

const TitleDivDesktop = styled.div`
    z-index: 50;
    position: absolute;
    bottom: 4em;
    display: block:
    margin: auto;
    width: 90%;
    max-width: 1920px;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

const TitleDivMobile = styled.div`
    z-index: 50;
    position: absolute;
    bottom: 4em;
    display: none:
    margin: auto;
    width: 90%;
    max-width: 1920px;
    opacity: 0;

    @media screen and (max-width: 900px) {
        display: block;
        opacity: 1;
    }
`
 
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
                width: `45%`,
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
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    zIndex: `50`,
                    margin: `auto`,
                    width: `95%`,
                    maxWidth: `1920px`,
                    height: `95%`,
                    // backgroundColor: `black`,
                    alignContent: `center`,
                }}
                >
                    <TaglineDivDesktop>
                        <TaglineDesktop/>
                    </TaglineDivDesktop>
                    <TaglineDivMobile>
                        <TaglineMobile/>
                    </TaglineDivMobile>
                    {/* <div className="product-tagline"
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
                    }}
                    >
                        <TaglineDesktop/>
                    </div> */}
                    <div className="buy-now"
                    style={{
                        zIndex: `100`,
                        position: `relative`,
                        // margin: `auto`,
                        marginTop: `100px`,
                        marginRight: `60%`,
                        width: `15%`,
                    }}
                    >
                        <BuyNowTag/>
                    </div>
                    <div className="logo"
                    style={{
                        zIndex: `100`,
                        position: `relative`,
                        // margin: `auto`,
                        marginTop: `-50px`,
                        // marginLeft: `75%`,
                        width: `10%`,
                    }}
                    >
                        <Logo/>
                    </div>
                    <TitleDivDesktop>
                        <BaconBrittleDesktop/>
                    </TitleDivDesktop>
                    <TitleDivMobile>
                        <BaconBrittleMobile/>
                    </TitleDivMobile>
                    {/* <div className="product-name"
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
                    }}
                    >
                        <BaconBrittleDesktop/>
                    </div> */}
                </div>
            </div>
        </div>
    </>
)
}

export default Landing
 