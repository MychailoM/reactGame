import React, {Component} from 'react';
import './App.css';
import StickerList from './StickerList';
import Choice from './Choice';
import stickers from "./stickers.json";
import styled from 'styled-components';

const Wrap = styled.div`
  
  display: flex;  
  flex-direction: column;
  align-items: center;
`;

class App extends Component{

  constructor() {
    super();
    this.state = {
      selectedLabel: '',
    }
  }

  handleStickerClick = (label) => {
    this.setState({
      selectedLabel: label
    })
  }

  render() {
    return (
      <Wrap>
        <Choice selectedLabel={this.state.selectedLabel} />
        <StickerList
          onStickerClick={this.handleStickerClick}
          stickers={stickers}
        />
      </Wrap>
    );
  }
}

export default App;
