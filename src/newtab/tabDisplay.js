import PropTypes from 'prop-types';
import React from 'react';

import {tabPropType} from 'src/common/tabModel';

import './tabDisplay.less';

export default function TabDisplay({tab, clickCallback, closeCallback}) {
  const image = tab.image ? (
    <img className="Image-TabThumbnail" src={tab.image}/>
  ) : null;
  return (
    <div className="Component-TabDisplay">
      <p onClick={() => clickCallback(tab.id)} className="Text-Overlay">
        {'Go to tab'}
      </p>
      <a
        className="Icon-Close"
        href="#"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          closeCallback(tab.id);
        }}
        title={'Close tab'}
      >
        <svg viewBox="0 0 12 12" version="1.1">
          <line x1="1" y1="10" x2="10" y2="1" stroke="rgba(0,0,0,0.8)" strokeWidth="1"/>
          <line x1="1" y1="1" x2="10" y2="10" stroke="rgba(0,0,0,0.8)" strokeWidth="1"/>
        </svg>
      </a>
      <div className="Text-TabTitle" title={tab.title}>
        {tab.title}
      </div>
      {image}
    </div>
  );
}

TabDisplay.propTypes = {
  clickCallback: PropTypes.func.isRequired,
  closeCallback: PropTypes.func.isRequired,
  tab: tabPropType,
};
