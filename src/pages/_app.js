// import Script from 'next/script';
// import ContextProvider from "@/context/ContextProvider";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "node_modules/swiper/swiper-bundle.min.css";
// import "tiny-slider/dist/tiny-slider.css";
// import "@/vendors/animate/animate.min.css";
// import "@/vendors/animate/custom-animate.css";
// import "@/vendors/fontawesome/css/all.min.css";
// import "@/vendors/mibooz-icons/style.css";
// import "@/vendors/reey-font/stylesheet.css";
// import "@/vendors/the-sayinistic-font/stylesheet.css";
// import "react-modal-video/css/modal-video.min.css";

// // extra css
// import "@/styles/globals.css";
// import "@/styles/mibooz.css";
// import "@/styles/mibooz-responsive.css";

// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <ContextProvider>
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=G-1WDYM80XFH"
//         strategy="afterInteractive"
//       />
//       <Script id="google-analytics" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-1WDYM80XFH');
//         `}
//       </Script>
//       <Component {...pageProps} />
//     </ContextProvider>
//   );
// };

// export default MyApp;


import Script from 'next/script';
import ContextProvider from "@/context/ContextProvider";
import dynamic from 'next/dynamic';
// Add framer-motion for animations
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "@/vendors/animate/animate.min.css";
import "@/vendors/animate/custom-animate.css";
import "@/vendors/fontawesome/css/all.min.css";
import "@/vendors/mibooz-icons/style.css";
import "@/vendors/reey-font/stylesheet.css";
import "@/vendors/the-sayinistic-font/stylesheet.css";
import "react-modal-video/css/modal-video.min.css";
import "@/styles/globals.css";
import "@/styles/mibooz.css";
import "@/styles/mibooz-responsive.css";

// Dynamically import CookieConsent with no SSR
const CookieConsent = dynamic(() => import('@/components/CookieConsent/CookieConsent'), {
  ssr: false
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1WDYM80XFH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1WDYM80XFH');
        `}
      </Script>
      <CookieConsent />
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;