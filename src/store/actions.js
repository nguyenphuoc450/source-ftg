export default {
    // Get data from api
    async fetchGames(context) {
        return fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "fc992028d5mshf0e2294d608259ep117215jsna8b9ca2ee164",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                context.commit('setGames', data)
            })
            .catch((error) => console.log("Error:", error))
    },

    // Get random games recommend
    randomGamesRecommend(context) {
        let length = context.getters.allGames.length - 3
        let startIndex = Math.floor(Math.random() * length + 1)
        let endIndex = Math.floor(startIndex + 3)
        const games = context.getters.allGames.slice(startIndex, endIndex)
        context.commit('setGamesRecommend', games)
    },
    // Get games recentlyAdded
    randomGamesRecentlyAdded(context) {
        const games = context.getters.allGames.slice(-7).reverse()
        context.commit('setGamesRecentlyAdded', games)
    },
    // Get random games most played
    randomGamesMostPlayed(context) {
        let length = context.getters.allGames.length - 4
        let startIndex = Math.floor(Math.random() * length + 1)
        let endIndex = Math.floor(startIndex + 4)
        const games = context.getters.allGames.slice(startIndex, endIndex)
        context.commit('setGamesMostPlayed', games)
    },
    // Get random games community recommend
    randomGamesCommunityRecommend(context) {
        let length = context.getters.allGames.length - 2;
        let startIndex = Math.floor(Math.random() * length + 1);
        let endIndex = Math.floor(startIndex + 2);
        const games = context.getters.allGames.slice(startIndex, endIndex)
        context.commit('setGamesCommunityRecommend', games)
    },

     // Get games by plaform
     async filterGamesByPlatform(context, platform) {
        return fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "fc992028d5mshf0e2294d608259ep117215jsna8b9ca2ee164",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                context.commit('setGamesByFilter', data)
            })
            .catch((error) => console.log("Error:", error))
    },
    // Get random games by platform
    randomGamesByGenre(context) {
        let length = context.getters.allGamesByPlatform.length - 3;
        let startIndex = Math.floor(Math.random() * length + 1);
        let endIndex = Math.floor(startIndex + 3);
        const games = context.getters.allGamesByPlatform.slice(startIndex, endIndex)
        context.commit('setRandomGamesByFilter', games)
    },

    // Get games by filter
    async filterGames(context, url) {
        return fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?${url}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "fc992028d5mshf0e2294d608259ep117215jsna8b9ca2ee164",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                context.commit('setGamesByFilter', data)
            })
            .catch((error) => console.log("Error:", error))
    },
    // Get random games by filter
    randomGamesByFilter(context) {
        let length = context.getters.allGamesByFilter.length - 3;
        let startIndex = Math.floor(Math.random() * length + 1);
        let endIndex = Math.floor(startIndex + 3);
        const games = context.getters.allGamesByFilter.slice(startIndex, endIndex)
        context.commit('setRandomGamesByFilter', games)
    },
}