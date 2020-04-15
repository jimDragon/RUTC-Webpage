# RUTC-Webpage [wip]
Development/testing repository for upcoming Rock Under The Clock Festival webpage

## Site Structure
```
Home Page ~> [home]
 ├── News
 │    └── Post List
 │         └── Individual Post
 ├── Past Festivals
 │    └── Events List
 │         └── Individual Event
 ├── Past Street Events
 │    └── Events List
 │         └── Individual Event
 ├── Workshops
 │    └── Events List
 │         └── Individual Event
 ├── Volunteers
 │    └── Individual Page
 ├── Venues
 │    └── Venues List
 │         └── Individual Page
 ├── About Us
 │    └── Individual Page
 ├── Bands
 │    └── Band List
 │         └── Individual Band
 ├── Sponsors
 │    ├── Sponsor List
 │    └── Donate Button
 ├── Media
 │    ├── Videos
 │    │    └── embeded / Youtube Channel
 │    └── Photos
 │         └── Photo Gallery
 └── Contact
     └── Contact page
```

## Layout inheritance and descriptions
```
- home
- default
   ├── post
   ├── info
   ├── list
   └── 404
```

### Home layout
The point of the home layout is to be a scrolling page. This means that every option on the navigation bar can also be accessed by scrolling to the corresponding heading. The home layout contains the "Splash" and the "Feed" includes by default but it can support up to 5 total categories. If there needs to be more than 5 categories, those extra categories get their own page. The "home" layout is the only layout that uses the **home.css**. All the other layouts will include at least the **default.css**.


## CSS structure
```
```
