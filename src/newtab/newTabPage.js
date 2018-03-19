import React from 'react';

import TabList from 'src/newtab/tabList';

import './newTabPage.less';

export default class NewTabPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [],
    };
  }

  componentWillMount() {
    this.setState({tabs: ['tab1', 'tab2', 'tab3', 'tab4']});
  }

  render() {
    return (
      <div className="Component-NewTabPage">
        <h1>{'Tabulator'}</h1>
        <TabList tabs={this.state.tabs}/>
      </div>
    );
  }
}