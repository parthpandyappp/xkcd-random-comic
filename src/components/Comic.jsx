import React, { useEffect, useState } from "react";

function Comic() {
  var [imageCom, setImg] = useState("");
  const [latestRef, setLatestRef] = useState("");
  var [comicRef, setRef] = useState("");
  var [loading, setLoading] = useState(false);
  var [render, setRender] = useState(false);

  var corsHeader = "https://the-ultimate-api-challenge.herokuapp.com/";
  var mains = "https://xkcd.com/";
  var latest = "info.0.json";
  var api = "";

  const latestFetch = () => {
    api = corsHeader + mains + latest;
    fetchAPI(api);
  };

  const prevFetch = () => {
    var ref = (comicRef - 1).toString();
    setRef(comicRef - 1);
    api = corsHeader + mains + ref + "/" + latest;
    fetchAPI(api);
  };

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

  const randomFetch = () => {
    var max = Math.floor(latestRef + 1);
    console.log(max);
    randomRef = Math.floor(Math.random() * max);
    api = corsHeader + mains + randomRef + "/" + latest;
    console.log(api);
    fetchAPI(api);
  };

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
      setRef(data.num);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setRender(true);
      console.log(imageCom);
    }
  }

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
      setLatestRef(data.num);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center">
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

      {loading ? (
        <div className="flex justify-center items-center mt-10 md:mt-6 p-2">
          <i className="fa fa-cog fa-spin text-4xl" />
        </div>
      ) : (
        [
          render ? (
            <div className="flex justify-center items-center mt-10 md:mt-6 p-2">
              <img
                className="shadow-lg"
                src={imageCom}
                height="200"
                width="200"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center mt-10 md:mt-6 p-2">
              <img
                className="shadow-lg"
                src="https://imgs.xkcd.com/comics/rover_replies.png"
              />
            </div>
          ),
        ]
      )}

      <div className="flex text-center justify-center items-center space-x-2 mt-4">
        <button
          className="bg-gray-600 text-white text-lg font-bold px-6 py-2 rounded hover:shadow-lg"
          onClick={randomFetch}
        >
          Random
        </button>
      </div>
    </div>
  );
}

export default Comic;
