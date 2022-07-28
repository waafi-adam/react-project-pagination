const paginate = (data) => {
  const itemsPerPg = 10
  const numOfPgs = Math.ceil(data.length / itemsPerPg)
  let paginatedData = []
  data = data.map((follower) => {
    const { id, html_url: url, avatar_url: image, login: name } = follower
    return { id, url, image, name }
  })
  for (let i = 0; i < numOfPgs; i++) {
    const singlePageItems = data.splice(-itemsPerPg, itemsPerPg)
    paginatedData.push(singlePageItems)
  }
  return paginatedData.reverse()
}

export default paginate
