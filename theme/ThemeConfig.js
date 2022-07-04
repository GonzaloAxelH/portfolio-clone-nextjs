import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  colorFondoLabelCode: "#f1f5f9",

  colorFondoReactions: "#DCDCDC",
  colorFondo: "rgb(255, 255, 255)",
  colorFondoBlur: "rgb(255, 255, 255,1)",
  colorText: "#282828",
  colorTextGray: "#999999",
  colorTextParrafoBlog: "rgb(54, 52, 77)",
  colorTextBlue: "#282828",
  colorHover: "#DCDCDC",

  colorLink: "rgb(75, 85, 99)",
  colorLinkP: "rgb(15, 23, 42)",
  colorTextSubtitle: "rgb(51, 65, 85)",
  colorBorder2: "rgb(209, 213, 219)",
  colorBorder: "rgb(229, 231, 235)",
  colorFondoUpdateForm: "rgb(248, 250, 252)",
  colorFondoHeader: "rgba(255,255,255, 0.8)",
  colorTurkeza: "#2dd4bf",
  colorTextParrafo: "#111827",
  colorTextParrafo2: "#334155",

  bg: "/bg-white2.jpg",
};

export const darkTheme = {
  colorFondoLabelCode: "#1e293b",

  colorFondoReactions: "#393A3C",
  colorHover: "#282828",

  colorFondo: "rgb(17, 24, 39)",
  colorFondoBlur: "rgb(17, 24, 39,1)",
  colorFondoHeader: "rgba(17, 24, 39, 0.8)",
  colorFondoUpdateForm: "rgb(30, 41, 59)",
  colorLink: "rgb(156, 163, 175)",
  colorLinkP: "rgb(248, 250, 252)",
  colorText: "#fff",
  colorTextBlue: "#fff",
  colorTextGray: "#999999",
  colorTextParrafoBlog: "#999999",

  colorBorder: "#282828",
  colorBorder2: "#",

  colorTextSubtitle: "rgb(203, 213, 225)",
  colorTurkeza: "#2dd4bf",
  colorTextParrafo: "#cbd5e1",
  colorTextParrafo2: "#cbd5e1",
  bg: "/bg.jpg",
};

export const GlobalStyles = createGlobalStyle`
  * {
  scroll-behavior: smooth;
  
  transition: 0.25s all;

}
*::-webkit-scrollbar {
  width: 5px !important; 
  background: transparent;
  height: 5px !important;
  border-radius: 30px;
}

code::-webkit-scrollbar {
  height: 5px !important;
  background: ${({ theme }) => theme.colorFondoBlur};

  border-radius: 30px;
}
code::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colorFondoBlur};
  border-radius: 30px;

  border-radius: 30px;
}

*::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colorFondoBlur};

}

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colorTextGray};
  border-radius: 30px;
  
}
  
`;
