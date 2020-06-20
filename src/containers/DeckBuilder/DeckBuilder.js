import React from 'react';
import Search from 'containers/Search';
import DeckList from 'containers/DeckList';
import Metrics from 'components/Metrics'
import SearchCardDisplay from 'containers/SearchCardDisplay';
import MaybeBoardDisplay from 'containers/MaybeBoardDisplay';
import './DeckBuilder.css'
import manacurve from 'utility/testData'

export default class DeckBuilder extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <div className="flexboxes">
          <div className="column">
          <SearchCardDisplay />
          <MaybeBoardDisplay />
          </div>
          <div className="column">
            <DeckList />
            <Metrics manacurve={manacurve}/>
          </div>
        </div>
        <img className="background" src="https://cdn.arstechnica.net/wp-content/uploads/2016/01/159984_CN-980x597.jpg" alt="default"/>
      </div>
    )
  }
}
