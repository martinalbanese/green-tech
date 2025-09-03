export const levelToString = (level: number): "FIRST" | "SECOND" | "UNKNOWN" => {
  switch(level) {
    case 0: return "FIRST";
    case 1: return "SECOND";
    default: return "UNKNOWN";
  }
};