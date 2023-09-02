const { Metacritic } = require('./index.js');

describe('constructURL', () => {
    it('should construct a valid URL for Super Mario Bros & 3', () => {
        const gameName = "Super Mario Bros & 3"
        const meta = new Metacritic('https://www.metacritic.com/game/playstation-4/', gameName)
        const constructedURL = meta.goTo();
        expect(constructedURL).toBe('https://www.metacritic.com/game/playstation-4/super-mario-bros-3');
    });
});

// describe('constructURL', () => {
//     it('should construct a valid URL for God of War', () => {
//         const gameName = "God of War"
//         const constructedURL = bookmarkThis(gameName);
//         expect(constructedURL).toBe('https://www.metacritic.com/game/playstation-4/god-of-war');
//     });
// });

// describe('constructURL', () => {
//     it('should construct a valid URL for Asterix & Obelisk: Slap Them All!', () => {
//         const gameName = "Asterix & Obelix: Slap Them All!"
//         const constructedURL = bookmarkThis(gameName);
//         expect(constructedURL).toBe('https://www.metacritic.com/game/playstation-4/asterix-obelix-slap-them-all!');
//     });
// });
