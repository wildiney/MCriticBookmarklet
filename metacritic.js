javascript: window.location = "https://www.metacritic.com/game/playstation-4/" + encodeURI(prompt("Game Name").replaceAll("&", "").replaceAll(":", "").replaceAll(" ", "-").replaceAll("--", "-")).toLowerCase();