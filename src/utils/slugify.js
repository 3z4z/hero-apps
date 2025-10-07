export function slugify(str) {
  const slugify = str.toLowerCase().trim().split("");
  const slug = slugify
    .filter((c) => c !== "'")
    .join("")
    .replace(/\s/g, "-");
  return slug;
}
