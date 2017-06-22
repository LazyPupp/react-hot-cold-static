import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  showInfo(showModal) {
    this.setState({showModal})
  }
  render() {

    if(this.state.showModal) {
      return <InfoModal showInfo={showModal=> this.showInfo(showModal)}/>
    }

    return (
        <header>
            <TopNav newGame={()=> this.props.newGame()} showInfo={showModal=> this.showInfo(showModal)}/>
            <h1>HOT or COLD</h1>
        </header>
    );
  }
};
