const Box = styled.div`
  position: absolute;
  top: 0%;
  left: 10%;
  width: 600px;
  height: 600px;
  background-image: radial-gradient(
    closest-side,
    rgb(45, 212, 191),
    rgba(233, 168, 2, 0)
  );
  filter: blur(50px);
  -webkit-animation: traverse-up-right 12s ease-in-out infinite alternate;
  animation: traverse-up-right 12s ease-in-out infinite alternate;
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: traverse-up-right;
  z-index: -1;
  @keyframes traverse-up-right {
    from {
      transform: translate(0px, 0px) rotate(0deg);
    }
    to {
      transform: translate(200px, 20px) rotate(360deg);
    }
  }
  @-webkit-keyframes traverse-up-right {
    from {
      -webkit-transform: translate(0px, 0px) rotate(0deg);
    }
    to {
      -webkit-transform: translate(200px, 20px) rotate(360deg);
    }
  }
`;

const Box2 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  right: 10%;
  top: 5%;
  background-image: radial-gradient(
    closest-side,
    #6366f1,
    rgba(233, 168, 2, 0)
  );

  filter: blur(50px);
  -webkit-animation: traverse-up-right 12s ease-in-out infinite alternate;
  animation: traverse-up-right 12s ease-in-out infinite alternate;
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: traverse-up-right;
  z-index: -1;
  @keyframes traverse-up-right {
    from {
      transform: translate(0px, 0px) rotate(0deg);
    }
    to {
      transform: translate(200px, 20px) rotate(360deg);
    }
  }
  @-webkit-keyframes traverse-up-right {
    from {
      -webkit-transform: translate(0px, 0px) rotate(0deg);
    }
    to {
      -webkit-transform: translate(200px, 20px) rotate(360deg);
    }
  }
`;
