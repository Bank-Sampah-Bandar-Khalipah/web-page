export const getFirstSentence = (text) => {
  if (!text || typeof text !== "string") return "";

  // Split berdasarkan titik, tanda seru, atau tanda tanya
  const match = text.match(/[^.!?]+[.!?]/);

  // Kalau ada kalimat pertama, ambil itu; kalau tidak, potong 120 huruf
  return match ? match[0].trim() : text.slice(0, 120) + "...";
};
