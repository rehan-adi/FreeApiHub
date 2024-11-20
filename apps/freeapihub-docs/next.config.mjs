import Nextra from "nextra";

const withNextra = Nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatar.vercel.sh"],
  },
  basePath: "",
};

export default withNextra(nextConfig);
