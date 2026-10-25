# Content

All site content lives here as plain JSON, and all content images live in
`public/images/content/`. There is no CMS — to change the site you edit a file,
commit, and push. Vercel redeploys automatically.

## Layout

```
content/
  boats.json            # the featured boats shown on / and /designs
  interiors.json        # interior gallery (currently empty)
  testimonials.json     # customer reviews (currently empty)
  sanity-backup/        # raw export of the old CMS, kept for reference only
    dataset.json        # every document, exactly as Sanity stored it
    assets.json         # every image: original filename, size, old CDN URL

public/images/content/
  boats/<boat-slug>/main.jpg        # the boat's main/cover photo
  boats/<boat-slug>/gallery/01.jpg  # photos in the detail-page gallery
  unused/                           # images that were in the CMS but unused
```

Nothing reads `sanity-backup/` — it is a safety net. You can delete it once
you're confident the site is fine without the CMS.

`sanity-backup/assets.json` records each image's original filename, pixel size,
byte size and old CMS URL. Two of those originals were far larger than the site
can use and were resized to 1920px wide on the way in:

| Image | Original | In this repo |
| --- | --- | --- |
| `boats/jct-houseboat-alleppey/main` | 4348×2880 PNG, 20 MB | 1920×1271 JPEG, 905 KB |
| `boats/marari-houseboat-mararikulam/gallery/01.jpg` | 5873×3915, 4 MB | 1920×1280, 830 KB |

Next.js never serves these above 1080px wide, so this changes nothing visible.
The untouched full-resolution copies of every image are in
`Inland_Marine-original-images/`, beside this repo rather than inside it.

## Editing a boat

Open `boats.json`. Each entry looks like this:

```json
{
  "id": "1210b784-aa25-4473-aa74-d602c3bb8f67",
  "slug": "marari-houseboat-mararikulam",
  "title": "MARARI HOUSEBOAT, MARARIKULAM",
  "type": "PREMIUM",
  "tag": "Short headline shown above the description",
  "stars": 4,
  "bookings": 30,
  "desc": "Long description. The card on /designs shows the first 350 characters.",
  "designs": "...",
  "architecture": "...",
  "engex": "Shown under the 'Engineering Excellence' heading.",
  "dimensions": { "length": 35, "width": 6 },
  "image": "/images/content/boats/marari-houseboat-mararikulam/main.jpg",
  "gallery": ["/images/content/boats/marari-houseboat-mararikulam/gallery/01.jpg"]
}
```

Notes:

- `type` must be `DELUXE`, `LUXURY` or `PREMIUM` — those are the three values
  that get a coloured badge. Anything else falls back to a white badge.
- `stars` draws that many star icons, so keep it between 1 and 5.
- `image` and `gallery` paths are relative to `public/`, so they always start
  with `/images/content/...`.
- `gallery` may list the same path more than once; it renders once per entry.
- The boats appear on the site in the order they appear in this file.

## Adding a boat

1. Make a folder: `public/images/content/boats/<your-slug>/`, with `main.jpg`
   inside it and any gallery photos in a `gallery/` subfolder.
2. Copy an existing entry in `boats.json`, change the fields, and point
   `image` / `gallery` at your new files.
3. Give it a `slug` (lowercase, hyphens, no spaces) and an `id`. For a new boat
   the `id` can just be the same string as the slug — it only has to be unique.
   The detail page is reachable at `/designs/<id>` and `/designs/<slug>`.

The `id` values on the three existing boats are the old CMS document IDs. They
are kept so that any link already pointing at `/designs/<old-id>` still works.
Don't change them.

## Replacing an image

Drop the new file in place of the old one, keeping the same filename, and the
site picks it up on the next deploy. If you use a different filename, update the
matching path in `boats.json`.

Images are served through Next.js's image optimiser, so you don't need to
resize or compress them by hand — but very large originals do bloat the repo.
Anything over a couple of MB is worth shrinking before you commit it.
