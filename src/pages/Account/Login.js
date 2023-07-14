import React from "react";
import * as A from "./Account.style";

const Login = () => {
  return (
    <A.Container>
      <A.LogoIcon src="/images/logo_white.png" />

      <A.LoginTitleContainer>
        <A.LoginTitle>친구들과 음악을 공유하고</A.LoginTitle>
        <A.LoginTitle>새로운 음악을 발견해보세요.</A.LoginTitle>
      </A.LoginTitleContainer>

      <A.GoogleLoginButton>
        <A.GoogleLogoIcon src="/icons/google_logo.svg" />
        <A.GoogleLoginText>구글 계정으로 시작하기</A.GoogleLoginText>
      </A.GoogleLoginButton>

      <A.LoginTermsText>
        가입하면 서라운드의{" "}
        <A.LoginTermsLink to="">
          이용약관, 개인정보 처리방침, 쿠키 사용
        </A.LoginTermsLink>
        에 동의하게 됩니다.
      </A.LoginTermsText>
    </A.Container>
  );
};

export default Login;
