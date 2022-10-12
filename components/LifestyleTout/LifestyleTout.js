import React from "react";
import styled from "@emotion/styled";
import { theme, mq } from "../../styles/theme";
import { Link } from "../Link/Link";

const StyledContainer = styled.div`
  position: relative;
`;

const StyledBackgroundImage = styled.img`
  width: 100%;
`;

const StyledCopyContainer = styled.div`
  ${mq({
    position: ["relative", "absolute"],
    width: ["100%", "40%"],
  })}
  top: 0;
  right: 0;
`;

const StyledEyebrow = styled.p`
  ${mq({
    fontSize: theme.fontSize.small,
  })}
  font-family: ${theme.fontFamily.secondary}
`;

const StyledHeadline = styled.p`
  ${mq({
    fontSize: theme.fontSize.large,
  })}
  font-family: ${theme.fontFamily.secondary}
`;

const StyledSubcopy = styled.p`
  ${mq({
    fontSize: theme.fontSize.medium,
  })}
  font-family: ${theme.fontFamily.primary}
`;

export const LifestyleTout = ({
  backgroundImage,
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
    <StyledContainer>
      <StyledBackgroundImage src={backgroundImage} />
      <StyledCopyContainer>
        <StyledEyebrow>{eyebrow}</StyledEyebrow>
        <StyledHeadline>{headline}</StyledHeadline>
        <StyledSubcopy>{subcopy}</StyledSubcopy>
        <div>
          {primaryCtaLabel && (
            <div>
              <Link
                variant={ctaVariant}
                label={primaryCtaLabel}
                url={primaryCtaUrl}
              ></Link>
            </div>
          )}
          {secondaryCtaLabel && (
            <div>
              <Link
                variant={ctaVariant}
                label={secondaryCtaLabel}
                url={secondaryCtaUrl}
              ></Link>
            </div>
          )}
        </div>
      </StyledCopyContainer>
    </StyledContainer>
  );
};
