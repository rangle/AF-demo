import React from "react";
import { LifestyleTout } from "./LifestyleTout";

export default {
  title: "Lifestyle Tout",
  component: LifestyleTout,
  argTypes: {
    ctaVariant: {
      options: ["secondary", "tertiary"],
      control: { type: "select" },
    },
    copyAlignment: {
      options: ["left", "right", "center"],
      control: { type: "select" },
    },
    contentPosition: {
      options: ["left", "right", "center"],
      control: { type: "select" },
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
  copyAlignment,
  contentPosition,
}) => (
  <LifestyleTout
    backgroundImage={backgroundImage}
    eyebrow={eyebrow}
    headline={headline}
    subcopy={subcopy}
    ctaVariant={ctaVariant}
    primaryCtaLabel={primaryCtaLabel}
    primaryCtaUrl={primaryCtaUrl}
    secondaryCtaLabel={secondaryCtaLabel}
    secondaryCtaUrl={secondaryCtaUrl}
    copyAlignment={copyAlignment}
    contentPosition={contentPosition}
  ></LifestyleTout>
);

Default.args = {
  backgroundImage:
    "https://img.hollisterco.com/is/image/anf/gh_HP_D_20220901_GoActivewear_R.jpg",
  eyebrow: "LIMITED TIME!",
  headline: "YOUR GUIDE TO FALL LAYERS",
  subcopy:
    "Shackets, flannels, zip-ups, jackets & every layer you could possibly need to complete your fall looks.",
  ctaVariant: "secondary",
  primaryCtaLabel: "Shop Women's",
  primaryCtaUrl: "primaryCtaLabel",
  secondaryCtaLabel: "Shop Men's",
  secondaryCtaUrl: "secondaryCtaUrl",
  copyAlignment: "left",
  contentPosition: "right",
};
