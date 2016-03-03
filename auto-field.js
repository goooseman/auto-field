Mongo.Collection.prototype.autoFields = function (transformFunctions) {
  let collection = this;

  collection.before.insert(function (userId, doc) {
    for (let functionName of Object.keys(transformFunctions)) {
      doc[functionName] = transformFunctions[functionName](doc, userId);
    }
  });

  collection.before.update(function (userId, doc, fieldNames, modifier) {
    modifier.$set = modifier.$set || {};
    // Use minimongo package to simulate transform of the object
    Package.minimongo.LocalCollection._modify(doc, modifier);
    for (let functionName of Object.keys(transformFunctions)) {
      modifier.$set[functionName] = transformFunctions[functionName](doc, userId);
    }
  });
};
