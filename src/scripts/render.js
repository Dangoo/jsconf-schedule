var root = process.cwd();

var fs = require('fs');
var path = require('path');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Page = require(path.resolve(root, 'build/page')).Page;
var mapDays = require(path.resolve(root, 'build/app')).mapDays;

var data = require('../index.json');

function renderPageToString(data) {
    return ReactDOMServer.renderToStaticMarkup(
        Page({
            title: data.title,
            children: data.days.map(mapDays)
        })
    );
}

fs.writeFile(path.resolve(root, 'docs/index.html'), renderPageToString(data));