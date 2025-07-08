import React from "react";
import Sticker from "./Sticker";
import PropTypes from "prop-types";
import styled from "styled-components";

const List = styled.ul`
  width: 606px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  border: 2px solid black;
  margin: 0;
  padding: 0;
`;

function StickerList({stickers, onStickerClick}) {
  return (
    <List>
      {
      stickers.map((sticker, index) => (
      <Sticker onClick={()=>onStickerClick(sticker.label)} key={index} img={sticker.img} label={sticker.label} />
      ))}
    </List>
  );
}

StickerList.propTypes = {
  stickers: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  onStickerClick:PropTypes.func.isRequired,
}

export default StickerList;