import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";
import { useSpring, animated } from "react-spring";
import { CvContext } from "../../Context/ContextProvider";
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 50,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function CategoryCard({ title, link }) {
  const { chooseCategory } = useContext(CvContext);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 4, tension: 250, friction: 40 },
  }));
  return (
    <animated.div
      className="category-card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-btn">
        <Link to={`/category/${link}`}>
          <button onClick={chooseCategory}>Choose</button>
        </Link>
      </div>
    </animated.div>
  );
}

export default CategoryCard;
