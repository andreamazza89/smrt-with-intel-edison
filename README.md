# S.M.R.T mk II

## TODO

- User stories?
- Set up Rails app (with MongoDB/Mongoid)
- Set up Raspbian on a Raspberry Pi (enable SSH and wifi)
- Clone rails repo to Raspberry pi
- Set up RP to auto-kiosk-mode a browser and load the rails app

-----------------

## MVP
- Customisable dashboard
  - Multiple user accounts
  - Widgets
    - News feed
    - TfL updates
    - Weather
    - Time / date
    - Emails
    - Calendars
  - Screensaver art when idle
  - Themes: fonts, styles, layout

## Nice to haves
- Mobile (pushbullet) notifications
- Gestures (leapmotion)
- Sleep / Wake
- Audio alarm

----------------

### Suggested data structure
```
{
  name: 'Jane',
  widgets: {
    time: {
      format: 'dd-mm-yy, h:MM'
      gridPosition: '0,0'
    },
    weather: {
      location: 'N4 1AB',
      gridPosition: '0,1'
    },
    travel: {
      tubes: ['piccadilly', 'victoria'],
      buses: [259, 279],
      gridPosition: '0,2',
      gridSize: '3,1'
    }
  }
}  
```
