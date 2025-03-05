import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import { Link, useLocation } from "react-router-dom";  // Importamos Link y useLocation

const pillTabs = [
  { text: "Home", route: "/" },
  { text: "Projects", route: "/projects" },
];

export function PillTabs() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const tabsComponents = pillTabs.map((tab, i) => {
    return (
      <Link to={tab.route} key={tab.text} style={{ textDecoration: "none" }}>
        <button
          onMouseEnter={() => setHoveredIndex(i)}
          style={{
            position: "relative",
            padding: "0.65rem 0.75rem",
            backgroundColor: "black",
            color: "white",
            border: 0,
            borderRadius: "999px",
          }}
        >
          {hoveredIndex === i && (
            <MagicTabSelect
              id="pillTabs"
              transition={{ type: "spring", bounce: 0.35 }}
            >
              <span
                style={{
                  borderRadius: "999px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 10,
                  backgroundColor: "white",
                  mixBlendMode: "difference",
                }}
              />
            </MagicTabSelect>
          )}
          {tab.text}
        </button>
      </Link>
    );
  });

  return (
    <div style={{ display: "flex", gap: "0.75rem", margin: "0.75rem 0" }}>
      {tabsComponents}
    </div>
  );
}
