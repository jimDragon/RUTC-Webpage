# RUTC-Development
Development/testing repository for upcoming Rock Under The Clock Festival webpage

## Site Structure
```
Home Page ~> [home]
 ├── Stage Events
 │    └── Events List ~> [List]
 │         └── Individual Event ~> [info]
 ├── Street Events
 │    └── Events List ~> [List]
 │         └── Individual Event ~> [info]
 ├── Workshops
 │    └── Events List ~> [List]
 │         └── Individual Event ~> [info]
 ├── Volunteers
 │    └── Individual Activity ~> [info]
 ├── Venues
 │    └── Venues List ~> [List]
 │         └── Individual venue ~> [info]
 ├── Food Collection
 │    └── Individual activity ~> [info]
 ├── Bands
 │    └── Band List ~> [List]
 │         └── Individual Band ~> [info]
 ├── Sponsors
 │    └── Sponsor List ~> [List]
 └── Media
      ├── Videos
      │    └── Youtube Channel
      └── Photos
           └── Photo Gallery ~> [all-photos]
```

## Layout inheritance
```
- home
- list
   ├── Event List
   └── Band List
- info
```
