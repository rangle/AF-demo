import React from "react";
import styled from "@emotion/styled";
import { mq } from "../../styles/theme";
import tokens from "../../styles/tokens.json";
import { Link } from "../Link/Link";

const StyledContainer = styled.div`
  position: relative;
`;

const StyledBackgroundImage = styled.img`
  width: 100%;
`;

const StyledCopyContainer = styled.div(({ copyAlignment, contentPosition }) =>
  mq({
    position: ["relative", "absolute"],
    width: ["auto", "40%"],
    top: [0, "50%"],
    right: contentPosition === "right" ? 0 : "auto",
    left: contentPosition === "center" ? "50%" : "auto",
    transform: [
      "none",
      contentPosition === "center"
        ? "translate(-50%, -50%)"
        : "translatey(-50%)",
    ],
    padding: "20px",
    textAlign: copyAlignment,
  })
);

const StyledEyebrow = styled.p`
  ${mq({
    fontSize: tokens.global.fontSize.small.value,
  })}
  font-family: ${tokens.global.fontFamily.secondary.value};
  margin-bottom: 10px;
`;

const StyledHeadline = styled.p`
  ${mq({
    fontSize: tokens.global.fontSize.large.value,
  })}
  font-family: ${tokens.global.fontFamily.secondary.value};
  margin-bottom: 20px;
`;

const StyledSubcopy = styled.p`
  ${mq({
    fontSize: tokens.global.fontSize.medium.value,
  })}
  font-family: ${tokens.global.fontFamily.primary.value};
  margin-bottom: 20px;
`;

const StyledCtaContainer = styled.div(({ copyAlignment }) => ({
  justifyContent: copyAlignment,
  display: "flex",
}));

const StyledPrimaryCtaContainer = styled.div`
  margin-right: 6px;
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
  copyAlignment = "left",
  contentPosition = "center",
}) => {
  return (
    <StyledContainer>
      <StyledBackgroundImage src={backgroundImage} />
      <StyledCopyContainer
        copyAlignment={copyAlignment}
        contentPosition={contentPosition}
      >
        <StyledEyebrow>{eyebrow}</StyledEyebrow>
        <StyledHeadline>{headline}</StyledHeadline>
        <StyledSubcopy>{subcopy}</StyledSubcopy>
        <StyledCtaContainer copyAlignment={copyAlignment}>
          {primaryCtaLabel && (
            <StyledPrimaryCtaContainer>
              <Link
                variant={ctaVariant}
                label={primaryCtaLabel}
                url={primaryCtaUrl}
              ></Link>
            </StyledPrimaryCtaContainer>
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
        </StyledCtaContainer>
      </StyledCopyContainer>
    </StyledContainer>
  );
};
