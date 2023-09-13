const featuredBoats = {
    "name": "featuredBoats",
    "title": "Featured Boats",
    "type": "document",
    "fields": [
      {
        "name": "title",
        "title": "Title",
        "type": "string"
      },
      {
        "name": "stars",
        "title": "Stars",
        "type": "number"
      },
      {
        "name": "bookings",
        "title": "Bookings",
        "type": "number"
      },
      {
        "name": "type",
        "title": "Type",
        "type": "string"
      },
      {
        "name": "tag",
        "title": "Tag",
        "type": "string"
      },
      {
        "name": "desc",
        "title": "Description",
        "type": "text"
      },
      {
        "name": "architecture",
        "title": "Architecture",
        "type": "text"
      },
      {
        "name": "engex",
        "title": "Engineering Explanation",
        "type": "text"
      },
      {
        "name": "designs",
        "title": "Designs",
        "type": "text"
      },
      {
        "name": "dimensions",
        "title": "Dimensions",
        "type": "object",
        "fields": [
          {
            "name": "length",
            "title": "Length",
            "type": "number"
          },
          {
            "name": "width",
            "title": "Width",
            "type": "number"
          }
        ]
      },
      {
        "name": "img",
        "title": "Main Image",
        "type": "image"
      },
      {
        "name": "imgs",
        "title": "Additional Images",
        "type": "array",
        "of": [
          {
            "type": "image"
          }
        ]
      }
    ]
  }

  export default featuredBoats