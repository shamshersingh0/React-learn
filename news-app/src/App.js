import React, { useState, useEffect } from "react";
import Card from "./component/card";
import Loader from './component/loader'

function App() {

  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false) 
  const[page, setPage] = useState(1)

  console.log(news.length)

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6d2dbf2274554774bf6ae2acf4a78d1d&page=${page}`
  
  useEffect(() => {
    setLoading(true); 
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setNews(data.articles);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [url]); 

  const handelNextPage = () => {
    // console.log("NextPage")
    setPage(page + 1)
  }

  const handelPrevPage = () => {
    // console.log("PrevPage")
    setPage(page - 1)
  }


  

  return (
    <>
      {loading && <Loader />} {/* Render Loader component if loading is true */}
      {!loading && <Card data={news} />} Render Card component if loading is false
     <div className="flex justify-around">
     <button onClick={handelPrevPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Prev
</button>

<button disabled={news.length <=1} onClick={handelNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Next
</button>
     </div>

    </>
  );
}

export default App;
