import MCritic from './classes/mcritic'

const url = 'https://www.metacritic.com/game/playstation-4/'
const meta = new MCritic(url)
const game = meta.getTextSelectionOrPrompt()
const newURL = meta.getFullURLFor(game)
meta.openInBrowser(newURL)
