import React from 'react';
import { SearchField } from '../SearchField/SearchField';
import './Topbar.css';

export const Topbar = (props) => {
  return (
            <div className="topbar">
              <p>{ props.message }<span className="eventify-yellow">{ props.title }</span></p>
              <SearchField className="topbar-search" placeHolder="Meklē kategorijās..." handleChange={ props.searchHandle } />
            </div>
      );
}

