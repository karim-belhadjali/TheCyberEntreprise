export const handleLanguage = (language: any): string => {
  switch (language) {
    case "English":
      return "en";
    case "Spanish":
      return "es";
    default:
      return "en";
  }
};
export const handleUrlLanguage = (language: any): string => {
  switch (language) {
    case "en":
      return "English";
    case "es":
      return "Spanish";
    default:
      return "English";
  }
};
