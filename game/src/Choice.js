import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ChoiceWraper = styled.div`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 500;
`;

function Choice({selectedLabel}) {
  return (
    <ChoiceWraper>
      
      {selectedLabel?`Ви обрали ${selectedLabel}`:`Оберіть картку`}
    </ChoiceWraper>
  )
}

Choice.propTypes = {
  selectedLabel: PropTypes.string,
}

export default Choice;