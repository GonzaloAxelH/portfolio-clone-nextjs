import "../styles/globals.css";
import "../styles/codetheme.css";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../theme/ThemeConfig";
import useDarkMode from "use-dark-mode";
import { Provider } from "react-redux";
import store from "../data/redux/store";
import { loadPosts } from "../data/redux/actions";
import { savePosts } from "../data/firebase/postData";

savePosts();
store.dispatch(loadPosts());
store.subscribe(() => {
  console.log(store.getState());
});

const WrappedApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
          options={{ easing: "ease", speed: 500 }}
        />
        <GlobalStyles />

        {isMounted && (
          <>
            <Component onToggleTheme={() => darkmode.toggle()} {...pageProps} />
          </>
        )}
      </ThemeProvider>
    </Provider>
  );
};

export default WrappedApp;
