/*:
	@module-configuration:
		{
			"packageName": "class-path",
			"fileName": "class-path.js",
			"moduleName": "Path",
			"className": "Path",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/class-path.git",
			"testCase": "class-path-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
		{			
			"fs": "fs",
			"path": "path"
		}
	@end-include

	@constructor-configuration:
        {
            "testCase": "class-path-constructor-test.js"
        }
	@end-construct-configuration

	@constructor-documentation:
		The location should be a string. The constructor will not check if the path is existing or valid.

		When certain methods are invoked, that's the time the location will be determined.

		The constructor will only put the location string inside the locationList property.
	@end-constructor-documentation
*/
var Path = function Path( location ){
	/*:
		@meta-configuration:
			{
				"location:required": "string"
			}
		@end-meta-configuration
	*/

    this.locationList.push( location );
};

/*:
	@property-configuration:
		{
			"propertyNamespace": "locationList",
			"propertyType": "List"
		}
	@end-property-configuration

	@property-documentation:
		This will server as the raw list of all the paths joined.
		
		This is done so that we can do further modifications to the path without hassle.
	@end-property-documentation
*/
Path.prototype.locationList = [ ];

Path.prototype.verifyIfExisting = function verifyIfExisting( ){
	return fs.existsSync( this.toString( ) );
};

Path.prototype.verifyIfEmpty = function verifyIfEmpty( ){
	if( this.checkIfDirectory( ) ){
		return fs.readdirSync( this.toString( ) ).length > 0;

	}else if( this.checkIfFile( ) ){
		return fs.readFileSync( this.toString( ), { "encoding": "utf8" } ).length > 0;

	}else{
		var error = new Error( "undetermined path" );
		console.error( error );
		throw error;
	}
};

Path.prototype.verifyIfNotEmpty = function verifyIfNotEmpty( ){
	return !this.verifyIfEmpty( );
};

Path.prototype.checkIfDirectory = function checkIfDirectory( ){
    if( this.verifyIfExisting( ) ){
        return fs.statSync( this.toString( ) ).isDirectory( );

    }else{
        return false;
    }

};

Path.prototype.checkIfFile = function checkIfFile( ){
    if( this.verifyIfExisting( ) ){
        return fs.statSync( this.toString( ) ).isFile( );

    }else{
        return false;
    }
};

Path.prototype.appendToPath = function appendToPath( location ){
	/*:
		@meta-configuration:
			{
				"location:required": "Path"
			}
		@end-meta-configuration
	*/

	this.locationList.push( location.toString( ) );

	return this;
};

Path.prototype.appendToRawPath = function appendToRawPath( location ){
	/*:
		@meta-configuration:
			{
				"location:required": "string"
			}
		@end-meta-configuration
	*/

	this.locationList.push( location );

	return this;
};

Path.prototype.joinToPath = function joinToPath( location ){
	/*:
		@meta-configuration:
			{
				"location:required": "Path"
			}
		@end-meta-configuration
	*/

	var newPath = new Path( this.toString( ) );
	newPath.appendToPath( location );

	return newPath;
};

Path.prototype.joinToRawPath = function joinToRawPath( location ){
	/*:
		@meta-configuration:
			{
				"location:required": "string"
			}
		@end-meta-configuration
	*/

	var newPath = new Path( this.toString( ) );
	newPath.appendToRawPath( location );

	return newPath;
};

Path.prototype.toString = function toString( ){
	return this.locationList.join( path.sep ).replaceAll( "/", path.sep );
};


var path = require( "path" );
var fs = require( "fs" );

( module || { } ).exports = Path;