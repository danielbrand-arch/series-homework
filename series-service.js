export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => show.seasons[seasonIndex].episodes[episodeIndex].title

export const getLastSeasonNumber = show => show.seasons.length 

export const getNextSeasonYear = show => show.nextSeason?.year ?? "No announcement"
