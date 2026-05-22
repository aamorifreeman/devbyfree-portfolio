type Props = {
  items: string[];
  reverse?: boolean;
};

export default function Marquee({ items, reverse = false }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-strip">
      <div className={`marquee-track${reverse ? ' reverse' : ''}`}>
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item} <span className="sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
