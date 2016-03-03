# Meteor Auto Fields

Allows you to automaticly create field values, based on other object fields on every save operation (update/save). Something like a before_save hook in RoR. This fields are stored in the db.

## Getting Started

Installation:

```
meteor add goooseman:auto-fields
```

### Usage

```
var test = new Mongo.Collection("test");

var fields = {
  fullName: function (doc, userId) {
    return doc.firstName + " " + doc.lastName;
  }
}

test.autoFields(fields);
```

Will create a fullName field, based on firstName and lastName fields in the db on every save operation.

### Options

`fields` is an object. Each key is the field name. Each value is a function, which has a `doc` and `userId` arguments. It has to return something, which will be the fields value.



### Examples

```
var books = new Mongo.Collection("books");
var authors = new Mongo.Collection("authors");

var fields = {
  authorName: function (doc, userId) {
    return authors.findOne(doc.authorId).name;
  }
}

books.autoFields(fields);
```
Will create an `authorName` for every book object on each save operation.