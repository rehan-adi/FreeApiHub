export default {
  logo: (
    <>
      <img src="/images/icon.png" alt="Logo" style={{ width: "2rem" }} />
    </>
  ),
  project: {
    link: "https://github.com/rehan-adi/FreeApiHub",
  },
  docsRepositoryBase: "https://github.com/rehan-adi/FreeApiHub",
  footer: {
    content: <span>{new Date().getFullYear()} © Rehan</span>,
  },
  color: {
    hue: 220,
    saturation: 100,
    lightness: {
      dark: 41,
      light: 41,
    },
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – FreeApiHub",
    };
  },
};
