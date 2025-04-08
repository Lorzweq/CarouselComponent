#  React Carousel Component

A stylish and customizable 3D carousel component built with React. Supports any JSX elements (images, text, or even components) and includes smooth rotation and depth effects.

---

##  Features

- 3D-style rotating cards using `rotateY` and `translateZ`
- Supports any content — images, text, custom components
- Tailwind CSS compatible (optional)
- Fully responsive layout
- Smooth infinite navigation

---

##  Files Included

- `Carousel.jsx` — the main React component
- `Carousel.css` — styling for layout, positioning, and transitions

---

##  Usage

### 1. Import the Component

```jsx
import React from "react";
import Carousel from "./components/Carousel";
import "./styles/Carousel.css"; // Adjust path as needed

```
### 2. Provide Items as JSX
```
const items = [
  <img src="/images/1.jpg" alt="Slide 1" />,
  <img src="/images/2.jpg" alt="Slide 2" />,
  <img src="/images/3.jpg" alt="Slide 3" />,
];

<Carousel items={items} />
```

