export const getDramas = series => series.filter(show => show.genre === "Drama");

export const getEpisodeById = (season, idText) => season.episodes.find(episode => episode.id === Number(idText));

export const addEpisodeToFirstSeason = (show, episode) => {
  const seasons = [...show.seasons];
  seasons[0] = {
    ...seasons[0],
    episodes: [...seasons[0].episodes, episode]
  };
  return { ...show, seasons };
};