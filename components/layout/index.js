import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import app from "@/firebase";
import { getMessaging, getToken } from "firebase/messaging";
import { useMutation } from "@tanstack/react-query";
import FetchService from "@/services/Fetch";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
// import CookieBox from "./cookie-box/index";

// import { Notification } from "../shared/Notification";

const Layout = (props) => {
  const {
    mutate,
    // isLoading: email,
    // error: reviewError,
    // data,
  } = useMutation({
    mutationFn: (payload) => FetchService.saveToken(payload),

    onSuccess: () => {
      // setValue
      // Notification("success", "sent sucessfully!");
    },
  });

  useEffect(() => {
    const messaging = getMessaging(app);
    getToken(messaging, {
      vapidKey:
        "BC_alpRHxochBX-4RKfwjk7USl6P-z-hBSNtJL_1f3SWxs5iGlc5Xw-eDlWuL5j-cD4FoHtFiTBU--Iz6IUk9kw",
    }).then((currentToken) => {
      if (currentToken) {
        mutate({ fmc_token: currentToken });
      } else {
        // Show permission request UI
      }
    });

    let mybutton = document.getElementById("scrollBtn");

    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
  }, []);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <Header />
      <main>{props.children}</main>
      <div>
        <cite id="scrollBtn" onClick={topFunction}>
          <MdOutlineKeyboardArrowUp />
        </cite>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
