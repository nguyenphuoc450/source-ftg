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
}