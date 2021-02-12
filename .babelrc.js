module.exports = (api) => {
  const NODE_ENV = api.env();
  api.cache(true);

  const plugins = [];
  const presets = [];
  if (NODE_ENV === "production") {
    plugins.push("@babel/plugin-transform-react-constant-elements");
    presets.push("@babel/preset-typescript", [
      "@babel/preset-react",
      { runtime: "automatic" },
    ]);
  }

  return {
    presets,
    plugins,
  };
};
