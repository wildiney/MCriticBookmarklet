class Metacritic {

    constructor(url, gameName) {
        this.url = url;
        this.gameName = gameName
        this.fullUrl = this.goTo()
    }

    goTo () {
        const cleanedGameName = encodeURI(
            this.gameName
                .replaceAll("&", "")
                .replaceAll("?", "")
                .replaceAll(":", "")
                .replaceAll(" ", "-")
                .replaceAll("--", "-")
                .toLowerCase()
        )
        return `${this.url}${cleanedGameName}`
    }
}

const url = "https://www.metacritic.com/game/playstation-4/"
const gameName = window.getSelection().toString() || prompt("Enter game name:")
const meta = new Metacritic(url, gameName)
const finalURL = meta.goTo()

window.open(finalURL)

// module.exports = { Metacritic }