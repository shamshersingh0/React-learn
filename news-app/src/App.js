import React, { useState, useEffect } from "react";
import Card from "./component/card";
import Loader from './component/loader'

function App() {

  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const emptyArr = []

  const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-03-22&sortBy=publishedAt&apiKey=6d2dbf2274554774bf6ae2acf4a78d1d&page=${page}&pageSize=10`

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        const pushDataInEmptyArr = emptyArr.push(...data.articles)

        if (pushDataInEmptyArr) {
          for (let i = 0; i < emptyArr.length; i++) {
            if (emptyArr[i].urlToImage == null) {
              console.log(emptyArr[i] + ' is null')
              emptyArr[i].urlToImage = "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
            }
          }

          setNews(emptyArr);
          setLoading(false);
        }

        // console.log(getLength.length);

      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, page]);



  const handleNextPage = () => {
    setPage(page + 1)
  }

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <>
      {loading && <Loader />} {/* Render Loader component if loading is true */}
      {!loading && <Card data={news} />}
      <div className="flex justify-around m-10">
        <button onClick={handlePrevPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Prev
        </button>

        <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Next
        </button>
      </div>
    </>
  );
}

export default App;
