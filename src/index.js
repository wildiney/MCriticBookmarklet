// const game = prompt("Game name");
const url = "https://www.metacritic.com/game/playstation-4/";
const game = prompt("Game Name")

function constructURL () {
    const cleanedGameName = encodeURI(
        game
            .replaceAll("&", "")
            .replaceAll("?", "")
            .replaceAll(":", "")
            .replaceAll(" ", "-")
            .replaceAll("--", "-")
            .toLowerCase()
    )
    const fullURL = `${url}${cleanedGameName}`
    window.location = fullURL
}

constructURL()

