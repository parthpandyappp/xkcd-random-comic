import React, { useEffect, useState } from "react";

function Comic() {
  // for storing comic image link
  var [imageCom, setImg] = useState("");

  // for storing comic title
  var [title, setTitle] = useState("");

  // for storing latest comic number reference, which stays constant
  const [latestRef, setLatestRef] = useState("");

  // for storing latest comic number reference, which is manipulated at next and prev fetches
  var [comicRef, setRef] = useState("");

  // Loader value to render loading spinner
  var [loading, setLoading] = useState(false);

  // To render default image
  var [render, setRender] = useState(false);

  // CORS header to fix CORS issue. The actual API is appended to this to get rid
  var corsHeader = "https://the-ultimate-api-challenge.herokuapp.com/";

  // Main API
  var mains = "https://xkcd.com/";

  // API endpoint for latest comic fetch
  var latest = "info.0.json";
  var api = "";

  // Fetches latest comic
  const latestFetch = () => {
    api = corsHeader + mains + latest;
    fetchAPI(api);
  };

  // Fetches previous comic
  const prevFetch = () => {
    var ref = (comicRef - 1).toString();
    setRef(comicRef - 1);
    api = corsHeader + mains + ref + "/" + latest;
    fetchAPI(api);
  };

  // Fetches next comic
  const nextFetch = () => {
    var ref;
    if (comicRef + 1 > latestRef) {
      ref = comicRef.toString();
    } else {
      ref = (comicRef + 1).toString();
      setRef(comicRef + 1);
    }
    api = corsHeader + mains + ref + "/" + latest;
    fetchAPI(api);
  };

  // Fetches random comic on the basis of random comic referece generated inside it
  const randomFetch = () => {
    var max = Math.floor(latestRef + 1);
    console.log(max);
    randomRef = Math.floor(Math.random() * max);
    api = corsHeader + mains + randomRef + "/" + latest;
    console.log(api);
    fetchAPI(api);
  };

  // Main function to fetch API
  async function fetchAPI(api) {
    const res = await fetch(api);
    console.log("status:", res.ok, res);

    if (!res.ok) {
      const err = await res.text();
      console.log("err:", err);
    } else {
      setLoading(true);
      let data = await res.json();
      setImg(data.img);
      setTitle(data.title);
      setRef(data.num);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setRender(true);
    }
  }

  // Initially triggered for fetching the latest comic reference
  useEffect(async function fetchAPI() {
    const res = await fetch(
      "https://the-ultimate-api-challenge.herokuapp.com/https://xkcd.com/info.0.json"
    );
    console.log("status:", res.ok, res);

    if (!res.ok) {
      const err = await res.text();
      console.log("err:", err);
    } else {
      let data = await res.json();

      setRef(data.num);
      setTitle(data.title);
      setLatestRef(data.num);
    }
  }, []);

  return (
    <div
      style={{ letterSpacing: "0.3rem" }}
      className="flex flex-col justify-center space-x-3"
    >
      <div className="flex text-center justify-center items-center space-x-2 mt-2">
        {/* <img src="" > */}
        <button
          className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:shadow-lg"
          onClick={prevFetch}
        >
          Prev
        </button>
        <button
          className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:shadow-lg"
          onClick={latestFetch}
        >
          Latest
        </button>
        <button
          className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:shadow-lg"
          onClick={nextFetch}
        >
          Next
        </button>
      </div>

      <div className="flex justify-center items-center">
        <h1 class="text-center p-5 font-bold text-2xl underline">{title}</h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-72 mt-10 md:mt-6 p-2">
          <i className="fa fa-cog fa-spin text-4xl" />
        </div>
      ) : (
        [
          render ? (
            <div className="flex justify-center items-center mt-10 md:mt-6 p-2">
              <img
                className="shadow-lg"
                src={imageCom}
                height="350"
                width="350"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center mt-10 md:mt-6 p-2">
              <img
                className="shadow-lg"
                src="https://imgs.xkcd.com/comics/rover_replies.png"
                height="350"
                width="350"
              />
            </div>
          ),
        ]
      )}

      <div className="flex text-center justify-center items-center space-x-2 mt-4">
        <button
          className="bg-gray-600 text-white text-xl font-bold px-8 py-2 rounded hover:shadow-lg"
          onClick={randomFetch}
        >
          Random
        </button>
      </div>
    </div>
  );
}

export default Comic;
