/* eslint-disable no-console */
import { register } from "register-service-worker";
import Swal from "sweetalert2";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    registered() {
      console.log("Service worker has been registered.");
    },
  });

  register(`${process.env.BASE_URL}sw.js`, {
    registered() {},
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
      Swal.fire("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
