import { d3_geo_projection } from './projection';
import { d3_geo_azimuthal } from './azimuthal';
import { d3$geo } from './geo';

var d3$geo$gnomonic;

var d3_geo_gnomonic = d3_geo_azimuthal(
  function(cosλcosφ) { return 1 / cosλcosφ; },
  Math.atan
);

(d3$geo$gnomonic = function() {
  return d3_geo_projection(d3_geo_gnomonic);
}).raw = d3_geo_gnomonic;

export { d3$geo$gnomonic, d3_geo_gnomonic };