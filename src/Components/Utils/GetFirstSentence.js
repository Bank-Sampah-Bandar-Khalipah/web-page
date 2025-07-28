export const getFirstSentence = (descArray) => {
  if (!descArray || descArray.length === 0) return "";

  // Ambil paragraf pertama
  const paragraph = descArray[0];

  // Split berdasarkan titik, dan ambil kalimat pertama
  const firstSentence = paragraph.split(".")[0];

  return firstSentence.trim() + ".";
};
