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
  - Widgets
    - TfL updates
    - Weather
    - Time / Date

## Nice to haves (~priority order)
- Gestures (leapmotion)
  - Sleep / Wake app
  - Switch users
  - Close notifications
- Mobile (pushbullet) notifications
- Further dashboard widgets
  - Emails
  - Calendars
  - News feed
- Multiple user accounts
- Themes: fonts, styles
- Screensaver art when idle
- Drag-and-drop to set widget layout
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
