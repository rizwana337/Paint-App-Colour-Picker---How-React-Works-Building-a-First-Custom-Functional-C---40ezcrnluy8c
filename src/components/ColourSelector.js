import React from "react";

const ColourSelector = (props) => {
  const { config, handleSelectNextBackground } = props;

  return (
    <button
      className={config.classname}
      onClick={() => handleSelectNextBackground(config.background)}
    >
      {config.label}
    </button>
  );
};
export default ColourSelector;