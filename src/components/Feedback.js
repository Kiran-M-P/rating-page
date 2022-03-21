import Svg from "./Svg";
import Content from "./Content";
import Rating from "./Rating";

export default function Feedback() {
  return (
    <div className="page">
      <div className="box">
        <Svg />
        <Content />
        <Rating />
      </div>
    </div>
  );
}
