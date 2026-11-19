// A1 - A4
export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => show.seasons[seasonIndex].episodes[episodeIndex].title

export const getLastSeasonNumber = show => show.seasons.length 

export const getNextSeasonYear = show => show.nextSeason?.year ?? "No announcement"

export const getById = (series, id) => series.find(item => item.id === id)


// B1 - B5

export const getSeasonsCount = series => series.map(series => ({title: series.title, seasons: series.seasons.length}))

export const hasTopEpisode = (series, minrating) => series.seasons.some (season => season.episodes.some(episode => episode.rating >= minrating))

export const getCreatorsFrom = (series , country) => series.filter(show => show.creator.country === country).map(show => show.creator.name);

export const sortByStartYear = series => [...series].sort((a,b) => a.startYear - b.startYear)