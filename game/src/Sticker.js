import React from "react";
import styled from "styled-components"
import './App.css';
import PropTypes from "prop-types"

const StickerCard = styled.li`
  width: 200px;
  position: relative;
  border: 1px solid black;
`;
const Img = styled.img`
  width: 100%;
  
`;
const Label = styled.h2`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  background-color: rgba(255, 255, 255, 0.658);
  padding: 3px;
  border-radius: 4px;
  text-align: center;
`;

function Sticker({img, label, onClick}) {
  return(
  <StickerCard onClick={onClick}>
    <Img src={img} alt={label} />
    <Label>{label}</Label>
  </StickerCard>
  )
}

Sticker.propTypes = {
  img: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Sticker;