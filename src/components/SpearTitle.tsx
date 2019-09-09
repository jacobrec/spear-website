import React from "react";

const styleDiv = {
  width: "30vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
};

const styleDivOuter = {
  width: "100vw",
  backgroundColor: "var(--spear-green)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginBottom: "20px"
};

const styleHeader = {
  textTransform: "uppercase",
  fontSize: "3em"
};

const styleImg = {
  height: "3em"
};

interface SpearTitleProps {
  img: string,
  title: string,
}

const SpearTitle = (props: SpearTitleProps) => (
  <div style={styleDivOuter}>
    <div style={styleDiv}>
      {props.img && (
        <img
          alt="A svg logo for decoration"
          style={styleImg}
          src={props.img}
        />
      )}
      {/* 
      // @ts-ignore */}
      <h1 style={styleHeader}>
        {props.title}
      </h1>
    </div>
  </div>
);

export default SpearTitle;