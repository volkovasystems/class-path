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
            "testCase": "class-path-constructor-spec.js"
        }
	@end-construct-configuration
*/
var Path = function Path( location ){
	/*:
		@meta-configuration:
			{
				"location:required": "string"
			}
		@end-meta-configuration
	*/

    if( this instanceof Path ) this.locationList = [ location ];

    else return new Path( location );
};

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
	return fs.statSync( this.toString( ) ).isDirectory( );
};

Path.prototype.checkIfFile = function checkIfFile( ){
	return fs.statSync( this.toString( ) ).isFile( );
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