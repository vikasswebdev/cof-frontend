import { Router } from "next/router";
import NProgress from "nprogress";
import "../styles/globals.css";
import "../styles/main.scss";
import "../styles/Nprogress.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <Component {...pageProps} />
    </>
  );
}
