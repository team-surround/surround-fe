import { keyframes } from "styled-components";

const animations = {
  fadeIn: keyframes`
  0% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 0 }
`,
};

export default animations;
