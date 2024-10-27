import Nextra from "nextra";

const withNextra = Nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = {};

export default withNextra(nextConfig);
