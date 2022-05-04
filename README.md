# Bear Robotics - Ho Chan Lee


## Getting Started
### Clone remote Git repository
```
$ git clone https://github.com/lhc0506/Draggable-Component.git
$ npm install
```

### Operate application
```
$ npm start
```

### What I consider
The line "Make Draggable area cannot overflow current window." makes me confused because I thought this line can mean several ways.

Fist, I judged "current window" means current browser.
By using "vh, vw" in style, I could make draggable component not to overflow browser.

But after few hours, I realized that current window can mean parents tag of draggable component. I thought this way is more useful in the sense of extension. So I confirmed to make draggable area have relative position.

If you add parent like "class: outer div", draggable and box component will not overflow it.