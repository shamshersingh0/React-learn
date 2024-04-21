
function card({data}){
  // console.log("data", data)

  let errorImage = []

  const newsInfo = data.map(({author, description, content, title, url, urlToImage})=> {
    // console.log(description);

    errorImage.push(urlToImage)

console.log("",errorImage)
   

    return(
     

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-12">
<a href="{url}">
<img
        src={urlToImage}
        alt="A house with two children standing in front of it"
        onError={event => {
          event.target.src = "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          event.onerror = null
        }}
      />
</a>

    <div className="p-5">
        <a href={url}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p  className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        {/* <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-auto">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> */}
    </div>
</div>

  
    )
  })


 if(errorImage == null){
      errorImage = "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      errorImage = newsInfo.urlToImage
 }
  

  return(
    <>
    <div>
    <h1 className="text-white text-center text-5xl my-12">
      News
    </h1>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
    {newsInfo}
  </div>
  


 
</>
  )
}

export default card;