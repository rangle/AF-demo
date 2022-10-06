import React from "react";
import { FeaturedProductTout } from "./FeaturedProductTout";

export default {
  title: "Featured Product Tout",
  component: FeaturedProductTout,
  argTypes: {
    ctaVariant: {
      options: ["primary", "secondary"],
    },
  },
};

export const Default = ({
  eyebrow,
  headline,
  subcopy,
  ctaVariant,
  primaryCtaLabel,
  primaryCtaUrl,
  secondaryCtaLabel,
  secondaryCtaUrl,
  backgroundImage,
  primaryOverlayImage,
  secondaryOverlayImage,
}) => (
  <FeaturedProductTout
    backgroundImage={backgroundImage}
    eyebrow={eyebrow}
    headline={headline}
    subcopy={subcopy}
    ctaVariant={ctaVariant}
    primaryCtaLabel={primaryCtaLabel}
    primaryCtaUrl={primaryCtaUrl}
    secondaryCtaLabel={secondaryCtaLabel}
    secondaryCtaUrl={secondaryCtaUrl}
    primaryOverlayImage={primaryOverlayImage}
    secondaryOverlayImage={secondaryOverlayImage}
  ></FeaturedProductTout>
);

Default.args = {
  backgroundImage:
    "https://img.hollisterco.com/is/image/anf/hco-HP-20220930-D-WarehouseSale60OffSS.png",
  eyebrow: "LIMITED TIME!",
  headline: "YOUR GUIDE TO FALL LAYERS",
  subcopy:
    "Shackets, flannels, zip-ups, jackets & every layer you could possibly need to complete your fall looks.",
  ctaVariant: "primary",
  primaryCtaLabel: "Shop Women's",
  primaryCtaUrl: "primaryCtaLabel",
  secondaryCtaLabel: "Shop Men's",
  secondaryCtaUrl: "secondaryCtaUrl",
  primaryOverlayImage:
    "https://img.abercrombie.com/is/image/anf/KIC_350-2135-0114-400_model1?policy=product-medium",
  secondaryOverlayImage:
    "https://img.abercrombie.com/is/image/anf/KIC_350-2135-0114-400_model1?policy=product-medium",
};
