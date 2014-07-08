var Path = require( "./class-path.js" );

describe( "Path class",
	function PathClass( ){
		it( "should have verifyIfExisting method.",
			function shouldHaveVerifyIfExistingMethod( ){
				expect( "verifyIfExisting" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.verifyIfExisting ).toBe( "function" );
			} );

		it( "should have verifyIfEmpty method.",
			function shouldHaveVerifyIfEmptyMethod( ){
				expect( "verifyIfEmpty" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.verifyIfEmpty ).toBe( "function" );
			} );

		it( "should have verifyIfNotEmpty method.",
			function shouldHaveVerifyIfNotEmptyMethod( ){
				expect( "verifyIfNotEmpty" in Path.prototype ).toBe( true );	
				expect( typeof Path.prototype.verifyIfNotEmpty ).toBe( "function" );
			} );

		it( "should have checkIfDirectory method.",
			function shouldHaveCheckIfDirectoryMethod( ){
				expect( "checkIfDirectory" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.checkIfDirectory ).toBe( "function" );
			} );

		it( "should have checkIfFile method.",
			function shouldHaveCheckIfFileMethod( ){
				expect( "checkIfFile" in Path.prototype ).toBe( true );	
				expect( typeof Path.prototype.checkIfFile ).toBe( "function" );
			} );

		it( "should have appendToPath method.",
			function shouldHaveAppendToPathMethod( ){
				expect( "appendToPath" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.appendToPath ).toBe( "function" );
			} );

		it( "should have appendToRawPath method.",
			function shouldHaveAppendToRawPathMethod( ){
				expect( "appendToRawPath" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.appendToRawPath ).toBe( "function" );
			} );

		it( "should have joinToPath method.",
			function shouldHaveJoinToPathMethod( ){
				expect( "joinToPath" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.joinToPath ).toBe( "function" );
			} );

		it( "should have joinToRawPath method.",
			function shouldHaveJoinToRawPathMethod( ){
				expect( "joinToRawPath" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.joinToRawPath ).toBe( "function" );
			} );		
	} );