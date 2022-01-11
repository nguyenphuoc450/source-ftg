export default {
    setGames: (state, games) => (state.games = games),
    setGamesRecommend: (state, games) => (state.gamesRecommend = games),
    setGamesRecentlyAdded: (state, games) => (state.gamesRecentlyAdded = games),
    setGamesMostPlayed: (state, games) => (state.gamesMostPlayed = games),
    setGamesCommunityRecommend: (state, games) => (state.gamesCommunityRecommend = games),
    setGamesByFilter: (state, games) => (state.gamesByFilter = games),
    setRandomGamesByFilter: (state, games) => (state.randomGamesByFilter = games),
}