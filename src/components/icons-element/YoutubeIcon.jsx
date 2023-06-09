const YoutubeIcon = (props) => {
  const { className } = props;

  return (
    <svg
      className={className}
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_0_1789"
        style={{ marginRight: 10 + "em" }}
        maskUnits="userSpaceOnUse"
        x="3"
        y="6"
        width="19"
        height="13"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.8524 6C3 6 3 7.3794 3 10.7711V14.086C3 17.3118 3.68721 18.8571 7.8524 18.8571H16.719C20.481 18.8571 21.5714 17.9537 21.5714 14.086V10.7711C21.5714 7.20076 21.3881 6 16.719 6H7.8524ZM10.3884 9.74428L15.394 12.3376L15.3933 12.3378L15.394 12.338L15.2424 12.4169L14.7818 12.6587L14.7807 12.658L10.3884 14.9482V9.74451L10.3918 9.74654L10.3884 9.74428Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_0_1789)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.8524 6C3 6 3 7.3794 3 10.7711V14.086C3 17.3118 3.68721 18.8571 7.8524 18.8571H16.719C20.481 18.8571 21.5714 17.9537 21.5714 14.086V10.7711C21.5714 7.20076 21.3881 6 16.719 6H7.8524ZM10.3884 9.74428L15.394 12.3376L15.3933 12.3378L15.394 12.338L15.2424 12.4169L14.7818 12.6587L14.7807 12.658L10.3884 14.9482V9.74451L10.3918 9.74654L10.3884 9.74428Z"
          fill="#41CB83"
        />
      </g>
    </svg>
  );
};

export default YoutubeIcon;
