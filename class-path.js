/*:
	@include:
		{
			"path": "path",
			"fs": "fs",
			"work": "work"
		}
	@end-include
*/
Path = function Path( location ){
	/*:
		@meta-configuration:
			{
				"location:required": "string"
			}
		@end-meta-configuration
	*/
	if( this instanceof Path ){
		this.location = location;
	}else{
		return new Path( location );
	}
};

Path.prototype.getLocation = function getLocation( ){
	return this.location;
};

Path.prototype.verifyLocation = function verifyLocation( callback ){
	/*:
		@method-documentation:

		@end-method-documentation

		@meta-configuration:
			{
				"callback:optional": "Callback"
			}
		@end-meta-configuration
	*/
	fs.exists( this.location,
		function( state ){
			self.locationVerified = state;
			callback( state );
		} );
};

Path.prototype.isLocationVerified = function isLocationVerified( ){
	return this.locationVerified;
};

Path.prototype.generateLocationInformation = function generateLocationInformation( callback ){
	/*:
		@method-documentation:

		@end-method-documentation

		@meta-configuration:
			{
				"callback:optional": "Callback"
			}
		@end-meta-configuration
	*/
	fs.lstat( this.location,
		function( error, fileStatistic ){
			if( error ){
				console.log( error );
				callback( error );
			}else{
				self.fileStatistic = fileStatistic;
				callback( );
			}
		} );
};

Path.prototype.getLocationInformation = function getLocationInformation( ){
	return this.fileStatistic;
};

Path.separator = path.sep;

Path.prototype.generateHierarchyList = function generateHierarchyList( callback ){
	/*:
		@method-documentation:

		@end-method-documentation

		@meta-configuration:
			{
				"callback:optional": "Callback"
			}
		@end-meta-configuration
	*/
	var location = this.location;
	var separatorPattern = new RegExp( ".+?" + path.sep + "?" );
	var hierarchyList = [ ];
	var match = separatorPattern.exec( location );	
	while( separatorPattern.lastIndex <= location.length ){
		hierarchyList.push( location.substring( 0, separatorPattern.lastIndex ) );
		match = separatorPattern.exec( location );
	}
	this.hierarchyList = hierarchyList;
	callback( );
};

Path.prototype.getHierarchyList = function getHierarchyList( ){
	return this.hierarchyList;
};