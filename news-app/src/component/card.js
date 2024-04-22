function card({ data }) {
  const newsInfo = data.map(({ description, title, url, urlToImage }) => {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-12">
        <a href="#">
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
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </div>
    )
  })
  return (
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