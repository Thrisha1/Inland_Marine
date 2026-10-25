import boats from "../../content/boats.json";
import interiors from "../../content/interiors.json";
import testimonials from "../../content/testimonials.json";

export { boats, interiors, testimonials };

export function getBoats() {
  return boats;
}

// Accepts either the boat's id or its slug, so older /designs/<id> links keep
// working alongside the readable /designs/<slug> ones.
export function getBoat(idOrSlug) {
  return boats.find((boat) => boat.id === idOrSlug || boat.slug === idOrSlug);
}
