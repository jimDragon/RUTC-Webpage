# RUTC-Webpage
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
 └── Media
      ├── Videos
      │    └── embeded / Youtube Channel
      └── Photos
           └── Photo Gallery ~> [all-photos]
```

## Layout inheritance
```
- home
- list
   ├── archive-list 
   └── post-list
- info
```
