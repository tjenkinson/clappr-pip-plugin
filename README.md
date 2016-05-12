[![npm version](https://badge.fury.io/js/clappr-pip-plugin.svg)](https://badge.fury.io/js/clappr-pip-plugin)
# Clappr Picture-In-Picture Plugin
A plugin for clappr which adds support for picture-in-picture on devices which support it, currently iOS on some models.

# Usage
Add both Clappr and the pip plugin scripts to your HTML:

```html
<head>
  <script type="text/javascript" src="http://cdn.clappr.io/latest/clappr.min.js"></script>
  <script type="text/javascript" src="clappr-pip-plugin.js"></script>
</head>
```

You can also find the project on npm: https://www.npmjs.com/package/clappr-pip-plugin

Then just add `ClapprPIPPlugin` into the list of plugins of your player instance.

```javascript
var player = new Clappr.Player({
  source: "http://your.video/here.mp4",
  plugins: [ClapprPIPPlugin]
});
```
That's it, a button will be shown on the media control to enable picture in picture on devices which support it.

# Demo
To run the demo start a web server with the root directory being the root of this repo, and then browse to the "index.html" file in the "demo" folder.

I am also hosting a demo at http://tjenkinson.me/clappr-pip-plugin/

# Development
Install dependencies:

`npm install`

Build:

`npm run build`

Minified version:

`npm run release`
