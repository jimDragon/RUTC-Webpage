# RUTC-Webpage [wip]
Development/testing repository for upcoming Rock Under The Clock Festival webpage

## Site Structure
```
Home Page ~> [home]
 ├── News
 │    └── Post List ~> [post-list]
 │         └── Individual Page ~> [post]
 ├── Past Festivals
 │    └── Events List ~> [list]
 │         └── Individual Event ~> [info]
 ├── Past Street Events
 │    └── Events List ~> [list]
 │         └── Individual Event ~> [info]
 ├── Workshops
 │    └── Events List ~> [list]
 │         └── Individual Event ~> [info]
 ├── Volunteers
 │    └── Individual Page ~> [info]
 ├── Venues
 │    └── Venues List ~> [list]
 │         └── Individual Page ~> [info]
 ├── Our philosophy
 │    └── Individual Page ~> [info]
 ├── Bands
 │    └── Band List ~> [list]
 │         └── Individual Band ~> [info]
 ├── Sponsors
 │    ├── Sponsor List ~> [list]
 │    └── Donate Button
 ├── Media
 │    ├── Videos
 │    │    └── embeded / Youtube Channel
 │    └── Photos
 │         └── Photo Gallery ~> [all-photos]
 └── Social Media / Contact
```

## Layout inheritance and description
```
- home ~> includes [(Splash, Feed), Carousel, Showcase, Carousel, Media, Contact*], styles [home.css]
- default ~> styles [default.css]
   ├── post ~> styles [default.css]
   ├── info ~> styles [default.css]
   └── list ~> styles [default.css]
```
*WIP

### Home layout
The home layout will contain the "Splash" and the "Feed" includes by default but it can support more. The point of the home layout is to be a scrolling page. This means that every option on the navigation bar can also be accessed by scrolling to the corresponding heading (except if it's too much content). The "home" layout is the only layout that uses the **home.css**. All the other layouts will include at least the **default.css**.
