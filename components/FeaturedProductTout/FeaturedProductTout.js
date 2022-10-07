import React from "react";
import "./FeaturedProductTout.scss";
import { Link } from "../Link/Link";

export const FeaturedProductTout = ({
  backgroundImage,
  primaryOverlayImage,
  secondaryOverlayImage,
  eyebrow,
  headline,
  subcopy,
  ctaVariant = "primary",
  primaryCtaLabel,
  primaryCtaUrl,
  secondaryCtaLabel,
  secondaryCtaUrl,
}) => {
  return (
    <div className="af-featured-product-tout">
      <div className="af-tout-container">
        <img className="af-tout-background" src={backgroundImage} />
        <div className="af-tout-image-group">
          {primaryOverlayImage && (
            <div className="af-tout-image-container">
              <img className="af-tout-image" src={primaryOverlayImage} />
            </div>
          )}
          {secondaryOverlayImage && (
            <div className="af-tout-image-container">
              <img className="af-tout-image" src={secondaryOverlayImage} />
            </div>
          )}
        </div>
      </div>
      <div className="af-tout-content">
        <p className="af-tout-eyebrow">{eyebrow}</p>
        <p className="af-tout-headline">{headline}</p>
        <p className="af-tout-subcopy">{subcopy}</p>
        <div className="af-tout-cta-group">
          {primaryCtaLabel && (
            <div className="af-tout-cta">
              <Link
                variant={ctaVariant}
                label={primaryCtaLabel}
                url={primaryCtaUrl}
              ></Link>
            </div>
          )}
          {secondaryCtaLabel && (
            <div className="af-tout-cta">
              <Link
                variant={ctaVariant}
                label={secondaryCtaLabel}
                url={secondaryCtaUrl}
              ></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
