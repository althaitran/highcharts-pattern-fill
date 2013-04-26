Highcharts Pattern Fill
=======================

This plugin enables highcharts.js to have pattern fillings for its graphs, instead of
just single colors. Right now, it simply supports selecting from a fixed set of patterns
to use.


Fixed patterns supported
------------------------

* striped


How to use
----------

When specifying a color for a series in your graph, pass in an object with the
following parameters as such:

{
  patternFixed: patternFixed
  color1: color1
  color2: color2
}

where patternFixed is a string from the list of fixed patterns supported, while
color1 and color2 are the background and foreground colors for the pattern,
respectively.

For example, if you want a series with a red background and black stripes for
a series, you may wish to do this:

series: [{
  name: "Test",
  data: [ ...insert data here... ],
  color: {
    patternFixed: "striped",
    color1: "#FF0000",
    color2: "#000000"
  }
}]
