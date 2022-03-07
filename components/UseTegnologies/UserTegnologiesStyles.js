import styled from "styled-components";
export const Tecnologies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  grid-gap: 1em;
  place-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
  .avatar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 100px;

    border-radius: 10%;
    overflow: hidden;

    /* Subtle inner border */
    box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.015);
  }

  .avatar img {
    height: 70%;
    width: 70%;
    z-index: 2;

    /* Optionally add a drop shadow to the main image	 */
    /* to make it feel "lifted"	 */
    filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.12));
  }

  .avatar .background {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    transform: scale(2);
    filter: blur(13px) opacity(0.2);
  }
`;
