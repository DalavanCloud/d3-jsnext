function d3_class(ctor, properties) {
  for (var key in properties) {
    Object.defineProperty(ctor.prototype, key, {
      value: properties[key],
      enumerable: false
    });
  }
}

export { d3_class };