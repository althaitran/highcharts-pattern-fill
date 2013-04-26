/**
 * Highcharts fixed pattern fill plugin
 *
 * Based on:       Highcharts pattern fill plugin (by Torstein Hønsi)
 *
 * Options:
 * - patternFixed: The fixed pattern style to apply to your filling pattern. Includes:
 *                    -striped
 * - color1:       Main background color of your fill pattern
 * - color2:       Main foreground color (typically, of the pattern, itself) of your fill pattern. 
 */
(function() {
    var idCounter = 0;

    Highcharts.wrap(Highcharts.Renderer.prototype, 'color', function(proceed, color, elem, prop) {
        var markup;
        //patternFixed takes precedent over pattern.
        if (color && color.patternFixed && prop === 'fill') {
            // SVG renderer
            if (this.box.tagName == 'svg') {
                var id = 'highcharts-pattern-'+ idCounter++;
                var pattern = this.createElement('pattern')
                        .attr({
                            id: id,
                            patternUnits: 'userSpaceOnUse',
                            width: 5,
                            height: 5,
                        })
                        .add(this.defs)
                if (color.patternFixed == 'striped') {
                  var rect = this.createElement('rect')
                        .attr({
                          x: 0,
                          y: 0,
                          width: 5,
                          height: 5,
                          fill: color.color1 ? proceed.call(this, color.color1, elem, prop) : "#FFFFFF"
                        })
                      .add(pattern);
                  var line = this.createElement('line')
                        .attr({
                          x1: 0,
                          y1: 5,
                          x2: 5,
                          y2: 0,
                          'stroke-width': 1,
                          stroke: color.color2 ? color.color2 : "#000000"
                        })
                    .add(pattern);
                }
                return 'url(' + this.url + '#' + id + ')';
            } else {
              //TODO: add VML rendering logic
            }
        } else {
            return proceed.call(this, color, elem, prop);
        }
    });    
})();