'use strict';
import React from 'react';
import get_post from './get_post';
import get_random_date from './get_random_date';
import moment from 'moment';
import DatePicker from 'react-simple-datepicker';
import 'react-simple-datepicker/dist/index.css';

class RandomMedium extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      date: 'Today',
      actual_date: new Date(),
      link: '',
      loading: true
    }
  }
  componentWillMount() {
    get_post('', (json) => {
      console.log(json);
      this.setState({article: json, loading: false});
    });
  }
  render() {
    return (
      <div className='wrapper'>
        <h3>Top Post <a href={`http://www.medium.com/browse/top/${this.state.link}`} target='_blank'>{this.state.date}</a></h3>
        {(() => {
          if (this.state.loading) {
            return (
              <div className="loading">Loading</div>
            );
          }
          return (
            <div className='card'>
              <div>
                <img src={this.state.article.profile_image} />
                <a href={this.state.article.profile.link} target='_blank'>{this.state.article.profile.name}</a>
              </div>
              <a href={this.state.article.link} target='_blank'>
                <h3>{this.state.article.title}</h3>
                <p>{this.state.article.preview}</p>
              </a>
              <a href={this.state.article.link} target='_blank' className='non-style'>Read more</a>
            </div>
          );
        })()}
        <button onClick={this._onRandomClick.bind(this)}>Random</button>
        <h3>Choose Date</h3>
        <DatePicker date={this.state.actual_date} minDate={new Date(2014, 8, 9)} maxDate={new Date()} clickOnDate={this._onDateClick.bind(this)}/>
      </div>
    );
  }
  _onRandomClick() {
    const random_date = get_random_date(new Date(2014, 8, 9), new Date());
    this.setState({date: moment(random_date).calendar(), actual_date: random_date, loading: true, link: moment(random_date).format('MMMM-DD-YYYY').toLowerCase()});
    
    get_post(moment(random_date).format('MMMM-DD-YYYY').toLowerCase(), (json) => {
      console.log(json);
      this.setState({article: json, loading: false});
    })
  }
  _onDateClick(date) {
    this.setState({date: moment(date).calendar(), actual_date: date, loading: true, link: moment(date).format('MMMM-DD-YYYY').toLowerCase()});
    
    get_post(moment(date).format('MMMM-DD-YYYY').toLowerCase(), (json) => {
      console.log(json);
      this.setState({article: json, loading: false});
    })
  }
}

module.exports = RandomMedium;