/* eslint-disable consistent-return */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tabs.css';

function Tabs() {
  return (
    <nav className="tabs">
      <ul>
        <NavLink activeClassName="active" to="/info">
          <li>
            Info
          </li>
        </NavLink>
        <NavLink activeClassName="active" to="/table">
          <li>
            Table
          </li>
        </NavLink>
        <NavLink activeClassName="active" to="/plots">
          <li>
            Plots
          </li>
        </NavLink>
        <NavLink activeClassName="active" to="/definitions">
          <li>
            Plots-definition
          </li>
        </NavLink>
        <NavLink activeClassName="active" to="/aggregates">
          <li>
            Aggregates
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Tabs;