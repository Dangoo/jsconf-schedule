import React from 'react';

const gaScript = `(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-144643-20', 'jsconf.philnash.co.uk');
ga('send', 'pageview');`;


export function Page(props) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>CSSConf and JSConf EU Schedule 2017</title>
        <meta name="author" content="Phil Nash" />
        <meta name="viewport" content="width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="CSS/JSConfEU" />
        <meta name="theme-color" content="#0C1222" />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/images/apple-touch-icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="/style/app.css" />
      </head>

      <body>
        <header>
          <h1>CSSConf &amp; JSConf EU 2017</h1>
          <nav>
            <a href="#fri" id="nav_fri" className="active">CSSConf</a>
            <a href="#sat" id="nav_sat">JSConf Day 1</a>
            <a href="#sun" id="nav_sun">JSConf Day 2</a>
          </nav>
        </header>

        <main>
          {props.children}
        </main>

        <div className="notice" hidden>
          <p><a href="/">The schedule has updated, click here to refresh.</a></p>
        </div>
        <footer>
          <p>Built by <a href="https://twitter.com/philnash" target="_blank" rel="noopener noreferrer">philnash</a> supported by <a href="https://www.twilio.com" target="_blank" rel="noopener noreferrer">Twilio</a></p>
        </footer>
        <script src="/js/app.js"></script>
        <script dangerouslySetInnerHTML={{__html: gaScript}}/>
      </body>
    </html>
  );
}
