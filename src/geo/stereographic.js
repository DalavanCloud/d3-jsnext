import { d3_geo_projection } from './projection';
import { d3_geo_azimuthal } from './azimuthal';
import { d3$geo } from './geo';

var d3$geo$stereographic;

var d3_geo_stereographic = d3_geo_azimuthal(
  function(cosλcosφ) { return 1 / (1 + cosλcosφ); },
  function(ρ) { return 2 * Math.atan(ρ); }
);

(d3$geo$stereographic = function() {
  return d3_geo_projection(d3_geo_stereographic);
}).raw = d3_geo_stereographic;

export { d3$geo$stereographic, d3_geo_stereographic };