var d3$entries;

d3$entries = function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
};

export { d3$entries };