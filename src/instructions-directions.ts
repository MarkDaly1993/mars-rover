const INSTRUCTIONS = ["L", "R", "M"] as const;
const DIRCETIONS = ["N", "E", "S", "W"] as const;

type Instruction = (typeof INSTRUCTIONS)[number]; // "L" | "R" | "M"
type Dircetion = (typeof DIRCETIONS)[number]; // "N" | "E" | "S" | "W"
