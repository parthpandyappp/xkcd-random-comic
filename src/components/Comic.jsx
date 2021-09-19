import React, { useEffect, useState } from "react";

function Comic() {
  var api = "https://xkcd.com/info.0.json";

  const fetchAPI = () => {
    // fetch(api, {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //   },
    //   mode: "no-cors",
    // }).then(function (response) {
    //   console.log(response.json());
    // });
    fetch(api, { mode: "no-cors" })
      .then(function (response) {
        console.log(response.text());
      })
      .then(function (text) {
        console.log("Request successful", text);
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex text-center justify-center items-center space-x-2 mt-2">
        {/* <img src="" > */}
        <button
          className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:shadow-lg"
          onClick={fetchAPI}
        >
          Prev
        </button>
        <button
          className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:shadow-lg"
          onClick={fetchAPI}
        >
          Latest
        </button>
        <button
          className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:shadow-lg"
          onClick={fetchAPI}
        >
          Next
        </button>
      </div>
      <div className="flex justify-center items-center mt-10 md:mt-6 p-2">
        <img
          className="shadow-lg"
          src="https://lh3.googleusercontent.com/proxy/4n5qb-ojgjSGxB1ahoAwHk4F1xeELw2iosnJoyP-saKiYD0Q2uQgEF2utlsvJzGyHktY09Ah7oLtY-Yr2yjoTp65OvumsDVhkCr8cq2jwpjSjdH2OaI"
        />
      </div>
      <div className="flex text-center justify-center items-center space-x-2 mt-4">
        <button
          className="bg-gray-600 text-white text-lg font-bold px-6 py-2 rounded hover:shadow-lg"
          onClick={fetchAPI}
        >
          Random
        </button>
      </div>
    </div>
  );
}

export default Comic;
