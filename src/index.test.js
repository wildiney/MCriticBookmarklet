import { constructURL } from './index.js'

const url = "https://www.metacritic.com/game/playstation-4/";

test("It should return the url test", () => {
    const fullURL = constructURL(url, "teste")
    expect(fullURL).toBe(`${url}teste`)
})

test("It should return the url for God of War", () => {
    const fullURL = constructURL(url, "God of War")
    expect(fullURL).toBe(`${url}god-of-war`)
})

test("It should return the url for Asterix & Obelix: Slap them all!", () => {
    const fullURL = constructURL(url, "Asterix & Obelix: Slap them all!")
    expect(fullURL).toBe(`${url}asterix-obelix-slap-them-all`)
})

