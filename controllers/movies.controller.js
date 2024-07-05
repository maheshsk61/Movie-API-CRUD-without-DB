const movies = []
let id = 0
export const movieCreate = (req, res) => {
    let newMovie = { id: ++id, name: req.body.name }
    movies.push(newMovie)
    console.log(newMovie);
    res.send(`New movie added --> ${JSON.stringify(newMovie)}`)
}
export const movieRead = (req, res) => {
    console.log(movies);
    res.send(`Movies added are --> ${JSON.stringify(movies)}`)
}
export const movieUpdate = (req, res) => {
    const { id } = req.params
    const movieIndex = movies.findIndex((movie) => {
        return movie.id === parseInt(id)
    })
    if (movieIndex === -1) {
        res.send("Movie not found")
    }
    else {
        movies[movieIndex] = {
            id: parseInt(id),
            name: req.body.name
        }
    }
    res.send(`Updated a movie -->${JSON.stringify(movies[movieIndex])}`)
}
export const movieDelete = (req, res) => {
    const { id } = req.params
    const movieIndex = movies.findIndex((movie) => {
        return movie.id === parseInt(id)
    })
    if (movieIndex !== -1) {
        const temp = movies[movieIndex]
        movies.splice(movieIndex, 1)
        res.send(`Deleted a movie ${JSON.stringify(temp)}`)
    }
    else {
        res.send("Movie not found")
    }
}