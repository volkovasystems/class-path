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
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
		{
			"work.js": "work",
			"fs": "fs",
			"path": "path"
		}
	@end-include
*/
var Path = function Path( location ){
	/*:
		@meta-configuration:
			{
				"location:required": "string"
			}
		@end-meta-configuration
	*/

	this.locationList = [ location ];
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