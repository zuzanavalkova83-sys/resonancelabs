/**
 * Narrative frames — typed wrapper around seed JSON.
 * Replace the import source when migrating to Airtable / Supabase.
 */
import seedData from "./seed/narrativeFrames.json";

export interface NarrativeFrame {
  id: string;
  frameName: string;
  status: string;
  type: "stable";
  shortDescription: string;
  typicalTopics: string[];
  triggerWords: string[];
  likelyDistortion: string;
  publicFear: string;
  whatToClarifyUpfront: string;
  whatItDoesNotMean: string;
  rapidResponseAdvice: string;
  humourOptions: string[];
  exampleNarrative: string;
  notes: string;
}

export const narrativeFrames: NarrativeFrame[] = seedData as NarrativeFrame[];
