'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {

  return db.createTable( 'api', {
    id: {
      type: 'int',
      primaryKey: true,
      unsigned: true
    },
    key: {
      type: 'string',
      length: 32,
      unique: true,
      notNull: true
    }
  } );
};

exports.down = function(db) {

  return db.dropTable( 'api', {
    ifExists: true
  } );
};
