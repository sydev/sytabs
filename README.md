# [syTabs] (http://sydev.github.io/sytabs)

syTabs is a simple and lightweight [AngularJs] (http://angularjs.org/) tab directive working with [Bootstrap](http://getbootstrap.com)

## Demo

Do you want to see this directive in action? Click [here] (http://sydev.github.io/sytabs)

## Installation

Installation is easy as syTabs has minimal dependencies - only [AngularJs] (http://angularjs.org/) and [Bootstrap´s CSS] (http://getbootstrap.com) are required.
After downloading dependencies (or better yet, referencing them from your favourite CDN) you need to download the actual version of this project.

When you are done downloading all the dependencies and project files the only remaining part is to add dependencies on the `sy.tabs` AngularJS module:

HTML:
```html
<script src="path/to/sy-tabs.js"></script>
```

JS:
```javascript
angular.module('myModule', ['sy.tabs']);
```

## Usage

To use syTabs, insert something like this in your HTML:
```html
<sy-tabs>
  <sy-pane title="Pane 1">
    <p>Lorem Ipsum...</p>
  </sy-pane>
  <sy-pane title="Pane 2">
    <p>Lorem Ipsum...</p>
  </sy-pane>
  ...
</sy-tabs>
```

For optimal experience with this directive you should add following rules to your CSS:
```css
.tab-content {
  position: relative;
}
.tab-pane {
  width: 100%;
  padding: 15px;
  position: absolute;
  z-index: 1;
}
.tab-pane.hidden, .tab-pane:not(.in) {
  z-index: 0;
}
```

## Features

There is a little feature, that i don't wanna deprive: syTabLink.

With this directive you can set links anywhere in your panes and go to another pane. Just like magic.

To implement these links add something like this to your HTML:
```html
<sy-tabs>
  <sy-pane title="Pane 1">
    <p>
      ...
      <sy-tab-link pane="1">
      ...
    </p>
  </sy-pane>
  ...
</sy-tabs>
```

The value of the "pane"-attribute is the zero-based-index of all panes. So with "1" we shall go to "Pane 2".

You can set any pane-index as value, so you can also go back or skip two panes, no problem.

## Options

####sy-tabs
<table class="table table-bordered table-striped">
  <thead>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>animated</td>
      <td>boolean</td>
      <td>false</td>
      <td>Apply a CSS fade transition to the tab panes.</td>
    </tr>
    <tr>
      <td>justified</td>
      <td>boolean</td>
      <td>false</td>
      <td>Make the tabs stretch at equal sizes to span the entire width.</td>
    </tr>
    <tr>
      <td>scrollable</td>
      <td>boolean</td>
      <td>false</td>
      <td>Make the tab content scrollable if specific height is exceeded. See <b>scrollable-height</b>.</td>
    </tr>
    <tr>
      <td>scrollable-height</td>
      <td>integer</td>
      <td>300</td>
      <td>Set the max-height-breakpoint for scrollable content. The unit is 'px'.</td>
    </tr>
  </tbody>
</table>

####sy-pane
<table class="table table-bordered table-striped">
  <thead>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>string</td>
      <td>'Pane'</td>
      <td>Set the title for this pane.</td>
    </tr>
  </tbody>
</table>
#### sy-tab-link
<table class="table table-bordered table-striped">
  <thead>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>pane</td>
      <td>integer</td>
      <td>0</td>
      <td>Set the target-pane for the link. The value is the zero-besed-index of all panes.</td>
    </tr>
  </tbody>
</table>


## Support

If there are any issues please contact me on my website [sydev.de] (https://sydev.de)
