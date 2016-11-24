# syTabs

syTabs is a simple and lightweight [angularjs](http://angularjs.org/) tab directive working with [bootstrap](http://getbootstrap.com)

## Installation

**npm**

```
$ npm install --save sytabs
```

**bower**

```
$ bower install --save sytabs
```

**manually**

```
$ git clone https://github.com/sydev/sytabs.git
```

Or simply [download]() the latest release.


## Usage

**HTML**

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

<script src="path/to/sytabs.js"></script>
```

**JavaScript**

```javascript
angular.module('myModule', ['sy.tabs']);
```


For an optimal experience with this directive you should add following styles to your **CSS**

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

#### Icons

You can use icons in the tabs too. Just add the "icon"-attribute to the pane like:
```html
<sy-tabs>
  <sy-pane title="Pane 1" icon="glyphicon glyphicon-star">
    ...
  </sy-pane>
  ...
</sy-tabs>
```


#### sy-pane-link

There is a little feature, that i don't wanna deprive: syPaneLink.

With this directive you can set links anywhere in your panes and go to another pane. Just like magic.

To implement these links add something like this to your **HTML**:
```html
<sy-tabs>
  <sy-pane title="Pane 1">
    <p>
      ...
      <sy-pane-link pane="1">
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
    <tr>
      <td>icon</td>
      <td>string</td>
      <td>none</td>
      <td>Set the icon next to the title of this pane</td>
    </tr>
  </tbody>
</table>

#### sy-pane-link
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


## Changelog

- 1.0
  - Initial release
