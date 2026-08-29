import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LIMBUS_DATA } from "../data/limbus-data-utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outputPath = path.join(projectRoot, "data", "tts-card-map.json");

function byStableCode(left, right) {
  return left.code.localeCompare(right.code, "en", { numeric: true });
}

function buildTtsCardMap() {
  const entries = LIMBUS_DATA.cards
    .filter((card) => card.code)
    .map((card) => ({
      code: card.code,
      id: card.id,
      type: card.type,
      image: card.image
    }))
    .sort(byStableCode);

  return {
    version: 1,
    cards: entries
  };
}

const map = buildTtsCardMap();
fs.writeFileSync(outputPath, `${JSON.stringify(map, null, 2)}\n`, "utf8");
console.log(`Wrote ${path.relative(projectRoot, outputPath)} (${map.cards.length} cards)`);
