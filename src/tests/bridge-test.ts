import http from "http";
// import { Stream } from "stream";

import { NativeSDK } from "../bridge.debug";
import { SIM_STATUS_URI } from "../constants";

// REMEMBER TO TURN TELEMETRY ON UNTIL WE SUPPORT AUTO TURNING IT ON!
// ALT+L
const instance = new NativeSDK();

const getSimStatus = () => {
  return new Promise((resolve, reject) => {
    http.get(SIM_STATUS_URI, (res) => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', res.headers);

      let data = "";

      res.on("data", (d) => {
        data += d;
      });

      res.on("end", () => {
        if (typeof data !== "string") {
          reject(new Error("Invalid payload from sim received"));
        }
        // This could be done more elegantly, but there is no need really :D
        resolve(data.includes('running:1'));
      });
    }).on('error', (err: NodeJS.ErrnoException) => {
      // Sim/iRacing in general is not active
      if (err.code === "ECONNREFUSED") {
        resolve(false);
      }
      reject(err)
    });
  });
};

async function main() {
  instance.defaultTimeout = 60;
  await getSimStatus();
}

main();

// console.log("Do we have an instance?", instance);

// console.log("Is it initialized?", instance.isRunning());
// instance.defaultTimeout = 60;

// if ()
// const result = instance.startSDK();
// console.log("Attempted to start sdk", result);

// setTimeout(() => {
//     console.log("Initialized now?", instance.isRunning());
// }, 2500);
