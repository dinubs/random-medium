'use strict';
const React = require('react');
const Layout = require('../layouts/application.jsx');

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="wrapper">
          <div id="react--medium"></div>
          <h3>About</h3>
          <p>This is Random Medium.</p>
          <p>Recently Medium released a feature that lets you go back and see the top posts for a certain day. This is a site that will get you the top post from a random day (as far back as <a href="http://www.medium.com/browse/top/september-10-2014" target='_blank'>September 10, 2014</a>, since that's when the top posts for designated days disappear). You can also choose a certain day using the box above, though that's not nearly as fun.</p>
          <p>Since Medium doesn't have an open API for this, I used a service I made called <a href="http://www.jamapi.xyz">Jam API</a>, that lets you make an api for any site using CSS query selectors, it's pretty neat, you should definitely check it out.</p>
          <p>If you're interested in the code that powers this site, it's open sourced on Github, just click the Octocat in the top right corner.</p>
          <p>Follow me on Twitter <a href="http://www.twitter.com/gavindinubilo">@gavindinubilo</a>, if you wanna see more things like this.</p>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;