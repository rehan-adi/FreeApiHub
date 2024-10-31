export default {
  logo: (
    <>
      <svg
        fill="currentColor"
        width="24"
        height="24"
        viewBox="-100 -100 200 200"
      >
        <path d="M70 60L42-27h30l28 87z"></path>
        <path d="M20.42 40.054L42-27h30L50.42 40.054z"></path>
        <path d="M20.42 40.054L-15-70h30L50.42 40.054z"></path>
        <path d="M-50.42 40.054L-15-70h30L-20.42 40.054z"></path>
        <path d="M-50.42 40.054L-72-27h30l21.58 67.054z"></path>
        <path d="M-100 60l28-87h30l-28 87z"></path>
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>FreeApiHub</span>
    </>
  ),
  project: {
    link: "https://github.com/rehan-adi/FreeApiHub",
  },
  docsRepositoryBase: "https://github.com/rehan-adi/FreeApiHub",
  footer: {
    content: (
      <span>
         {new Date().getFullYear()} ©{' '}
          Rehan
      </span>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – FreeApiHub",
    };
  },
};
