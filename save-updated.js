import { writeFileSync } from "node:fs";
import { loadData } from "./load.js";
import * as service from "./series-service.js";

const data = loadData();
const { series } = data;

const season = {
  number: 1,
  episodes: [{ id: 801, title: "First Contact", rating: 8.0, duration: 44 }],
};

let result = service.addSeason(series, 5, season);


const newData = { ...data, updatedAt: "2026-11-21", series: result };
writeFileSync("series-updated.json", JSON.stringify(newData, null, 2));
console.log("Saved", newData.series.length, "series");