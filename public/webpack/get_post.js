function get_post(date, cb) {
  fetch('http://www.jamapi.xyz/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: `http://www.medium.com/browse/top/${date}`,
        json_data: `{"profile": {"elem": ".streamItem .postMetaInline-feedSummary a", "name": "text", "link": "href"},
                    "profile_image": ".streamItem .postMetaInline-avatar img",
                    "link": ".streamItem .postArticle-content a",
                    "posted": {"elem": ".streamItem .postMetaInline--supplemental a", "ago": "text"},
                    "title": ".streamItem .postArticle-content a h3",
                    "preview": ".streamItem .graf--p"}`
      })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      return cb(json);
    });
}

module.exports = get_post;