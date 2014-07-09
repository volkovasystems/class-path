var Path = require( "./class-path.js" );

describe( "Path class",
	function PathClass( ){

		it( "should have verifyIfExisting method.",
			function shouldHaveVerifyIfExistingMethod( ){

				Path.prototype.should.have.property( "verifyIfExisting" );
				
				Path.prototype.verifyIfExisting.should.be.a.Function;
			} );

		it( "should have verifyIfEmpty method.",
			function shouldHaveVerifyIfEmptyMethod( ){

				Path.prototype.should.have.property( "verifyIfEmpty" );
				
				Path.prototype.verifyIfEmpty.should.be.a.Function;
			} );

		it( "should have verifyIfNotEmpty method.",
			function shouldHaveVerifyIfEmptyMethod( ){
				
				Path.prototype.should.have.property( "verifyIfNotEmpty" );
				
				Path.prototype.verifyIfNotEmpty.should.be.a.Function;
			} );

		it( "should have checkIfDirectory method.",
			function shouldHaveCheckIfDirectoryMethod( ){
				
				Path.prototype.should.have.property( "checkIfDirectory" );
				
				Path.prototype.checkIfDirectory.should.be.a.Function;
			} );

		it( "should have checkIfFile method.",
			function shouldHaveCheckIfFileMethod( ){
				
				Path.prototype.should.have.property( "checkIfFile" );

				Path.prototype.checkIfFile.should.be.a.Function;
			} );

		it( "should have appendToPath method.",
			function shouldHaveAppendToPathMethod( ){

				Path.prototype.should.have.property( "appendToPath" );

				Path.prototype.appendToPath.should.be.a.Function;
			} );

		it( "should have appendToRawPath method.",
			function shouldHaveAppendToRawPathMethod( ){
				
				Path.prototype.should.have.property( "appendToRawPath" );

				Path.prototype.appendToRawPath.should.be.a.Function;
			} );

		it( "should have joinToPath method.",
			function shouldHaveJoinToPathMethod( ){
				
				Path.prototype.should.have.property( "joinToPath" );

				Path.prototype.joinToPath.should.be.a.Function;
			} );

		it( "should have joinToRawPath method.",
			function shouldHaveJoinToRawPathMethod( ){
				
				Path.prototype.should.have.property( "joinToRawPath" );

				Path.prototype.joinToRawPath.should.be.a.Function;
			} );

		/*var defaultMethodList = [ "constructor", "toString" ];
		var PathClassPrototypePropertyList = Object.getOwnPropertyNames( Path.prototype );
		var allMethodList = defaultMethodList.concat( testedMethodList );

		it( "should have " + testedMethodList.length + " methods in the current class.",
			function shouldHaveNMethodInTheCurrentClass( ){
				expect( allMethodList.length ).toEqual( PathClassPrototypePropertyList.length );
			} );
*/
	} );