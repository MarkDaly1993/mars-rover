const INSTRUCTIONS = ["L", "R", "M"] as const;
const DIRCETIONS = ["N", "E", "S", "W"] as const;

export type Instruction = (typeof INSTRUCTIONS)[number]; // "L" | "R" | "M"
export type compassDircetion = (typeof DIRCETIONS)[number]; // "N" | "E" | "S" | "W"
export type RoverPosition = { x: number; y: number; facing: compassDircetion };
export type PlateauSize = { x: number; y: number };
