import Star from "./Star";

const Stars = ({ count = 0 }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  const starsArray = Array.from({ length: count });

  return (
    <ul className="card-body-stars u-clearfix">
      {starsArray.map((_, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

export default Stars;
