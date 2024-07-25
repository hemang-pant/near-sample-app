const RADIUS = 20;

export default function Loader(props) {
  const { stroke = 8, secondaryColor } = props;
  return (
    <div aria-label="oval-loading">
      <svg
        width={80}
        height={80}
        viewBox={getViewBoxSize(Number(stroke), RADIUS)}
        xmlns="http://www.w3.org/2000/svg"
        className="xar-loader-circle"
        data-testid="oval-svg"
      >
        <g fill="none" fillRule="evenodd">
          <g
            transform="translate(1 1)"
            strokeWidth={stroke}
            data-testid="oval-secondary-group"
          >
            <circle
              strokeOpacity=".5"
              cx="0"
              cy="0"
              r={RADIUS}
              stroke={secondaryColor}
              strokeWidth={stroke}
              opacity={0.3}
            />
            <path d={getPath(RADIUS)} stroke={props.strokeColor}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 0 0"
                to="360 0 0"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
}

const getViewBoxSize = (strokeWidth, radius) => {
  const startingPoint = -radius - strokeWidth / 2 + 1;
  const endpoint = radius * 2 + strokeWidth;
  return [startingPoint, startingPoint, endpoint, endpoint].join(' ');
};

const getPath = (radius) => {
  return ['M' + radius + ' 0c0-9.94-8.06', radius, radius, radius].join('-');
};
