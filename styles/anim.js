import { keyframes } from "@emotion/react";

export const up = keyframes`
  from {
    opacity: 0;
    transform: translate3d(000px, 200px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const right = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-500px, 000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;


export const left = keyframes`
  from {
    opacity: 0;
    transform: translate3d(500px, 000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;


export const down = keyframes`
  from {
    opacity: 0;
    transform: translate3d(000px, -200px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

