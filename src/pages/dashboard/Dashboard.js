import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col, Form, FormGroup, FormControl, Button, ControlLabel,
         Alert, Glyphicon, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  EventCalendar from 'react-event-calendar';
import Widget from '../../components/Widget';
import { fetchUniqueTags, fetchTedByTagName, fetchProducts } from '../../actions/ted';

import s from './Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


  componentDidMount() {
    fetch("http://3.1.36.200/jurisdiction/singapore/json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
 render() {
    const { error, isLoaded, items } = this.state;
      	 // console.log({items});

	for (const item of items) { 
		
		console.log({item});

		{item.title[0].value}}


      	  /*{items.map(item => (
      	  	console.log( {items.body})
      	  	))}*/
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
        	
          
        </ul>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.ted.isFetching,
    tags: state.ted.tags,
    teds: state.ted.teds,
    prod: state.ted.prod,
  };
}

export default connect(mapStateToProps)(withStyles(s)(Dashboard));
