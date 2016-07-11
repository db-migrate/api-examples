/**
  * This project should give an insight in how a project might utilize the
  * programable API.
  *
  * This assumes we have a simple web project, which should initialize the
  * database by itself. There are further examples on how to control and use the
  * API in the cli project. This is the straightforward usage of db-migrate.
  *
  * You may also find a better integrated version of this with custom configs
  * and other supported features in the server.js example.
  */

// first require the package
var DBMigrate = require( 'db-migrate' );

// The next step is to get a new instance of DBMigrate
var dbmigrate = DBMigrate.getInstance(true);

// next we call the migrations, several examples in a promise style
dbmigrate.reset()
.then( () => dbmigrate.up( 2 ) )
.then( () => dbmigrate.down( 1 ) )
.then( () => dbmigrate.up() )
.then( () => dbmigrate.reset() )
.then( () => dbmigrate.up() )
.then( () => {

  console.log( 'Here we go!' );
} );
