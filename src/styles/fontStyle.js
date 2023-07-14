import { css } from "styled-components";

const font = {
  // MARK: Headings
  heading01: css`
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
    letter-spacing: -0.8px; // TODO: 디자이너 추가 확인 필요
  `,
  heading02: css`
    font-size: 28px;
    font-weight: bold;
    line-height: 36px;
    letter-spacing: -0.4px;
  `,
  heading03: css`
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
    letter-spacing: -0.4px;
  `,
  heading04: css`
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
  `,

  heading05: css`
    font-size: 18px;
    font-weight: bold;
    line-height: 26px;
  `,
  heading06: css`
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
  `,

  // MARK: Body
  bodyLarge: css`
    font-size: 16px;
    line-height: 24px;
  `,
  body: css`
    font-size: 14px;
    line-height: 24px;
  `,
  bodySmall: css`
    font-size: 12px;
    line-height: 24px;
  `,
  bodyLargeSemiBold: css`
    font-size: 16px;
    font-weight: 600; // TODO: 디자이너 추가 확인 필요
    line-height: 24px;
  `,
  bodySemiBold: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
  `,
  bodySmallSemiBold: css`
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
  `,

  // MARK: Link
  linkLarge: css`
    font-size: 16px;
    line-height: 24px;
  `,
  link: css`
    font-size: 14px;
    line-height: 20px;
  `,
  linkSmall: css`
    font-size: 12px;
    line-height: 16px;
  `,
  linkLargeSemiBold: css`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  `,
  linkSemiBold: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  `,
  linkSmallSemiBold: css`
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
  `,

  // MARK: Utility
  caption: css`
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
  `,
  helperText: css`
    font-size: 12px;
    line-height: 16px;
  `,
  code: css`
    font-size: 14px;
    line-height: 20px;
  `,
};

export default font;
