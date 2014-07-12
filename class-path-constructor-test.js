var Path = require( "./class-path.js" );

describe( "Path class, constructor method",
	function PathClassConstructorMethod( ){
		var SAMPLE_LOCATION = "./sample/location";

		it( "should create a property locationList.",
			function shouldCreateAPropertyLocationList( ){
				var path = new Path( SAMPLE_LOCATION );
			} );

		it( "should store location in locationList.",
			function shouldStoreLocationInLocationList( ){
				var path = new Path( "./sample/location" );
				//expect( path. )
			} );

		it( "should return instance of Path if not invoked with new.",
			function shouldReturnInstanceOfPathIfNotInvokedWithNew( ){

			} );
	} );