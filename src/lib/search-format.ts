export const prettySearchSlug = (search: string): string => {
  const replaced = search.trim().replace(/\s+/g, "-");
  return encodeURIComponent(replaced)
};
