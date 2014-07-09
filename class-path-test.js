var assert = require( "assert" );

var Path = require( "./class-path.js" );

describe( "Path class",
    function PathClass( ){
        //var testedMethodList = [ ];

		it( "should have verifyIfExisting method.",
			function shouldHaveVerifyIfExistingMethod( ){
                Path.prototype.should.have.property( "verifyIfExisting" );
                Path.prototype.property( "verifyIfExisting" ).should.be.a.Function;
				/*assert.ifTrue( "verifyIfExisting" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.verifyIfExisting ).toBe( "function" );
                testedMethodList.push( "verifyIfExisting" );*/
			} );

		/*it( "should have verifyIfEmpty method.",
			function shouldHaveVerifyIfEmptyMethod( ){
				expect( "verifyIfEmpty" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.verifyIfEmpty ).toBe( "function" );
                testedMethodList.push( "verifyIfEmpty" );
			} );

		it( "should have verifyIfNotEmpty method.",
			function shouldHaveVerifyIfNotEmptyMethod( ){
				expect( "verifyIfNotEmpty" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.verifyIfNotEmpty ).toBe( "function" );
                testedMethodList.push( "verifyIfNotEmpty" );
			} );

		it( "should have checkIfDirectory method.",
			function shouldHaveCheckIfDirectoryMethod( ){
				expect( "checkIfDirectory" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.checkIfDirectory ).toBe( "function" );
                testedMethodList.push( "checkIfDirectory" );
			} );

		it( "should have checkIfFile method.",
			function shouldHaveCheckIfFileMethod( ){
				expect( "checkIfFile" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.checkIfFile ).toBe( "function" );
                testedMethodList.push( "checkIfFile" );
			} );

		it( "should have appendToPath method.",
			function shouldHaveAppendToPathMethod( ){
				expect( "appendToPath" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.appendToPath ).toBe( "function" );
                testedMethodList.push( "appendToPath" );
			} );

		it( "should have appendToRawPath method.",
			function shouldHaveAppendToRawPathMethod( ){
				expect( "appendToRawPath" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.appendToRawPath ).toBe( "function" );
                testedMethodList.push( "appendToRawPath" );
			} );

		it( "should have joinToPath method.",
			function shouldHaveJoinToPathMethod( ){
				expect( "joinToPath" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.joinToPath ).toBe( "function" );
                testedMethodList.push( "joinToPath" );
			} );

		it( "should have joinToRawPath method.",
			function shouldHaveJoinToRawPathMethod( ){
				expect( "joinToRawPath" in Path.prototype ).toBe( true );
				expect( typeof Path.prototype.joinToRawPath ).toBe( "function" );
                testedMethodList.push( "joinToRawPath" );
			} );*/

        /*var defaultMethodList = [ "constructor", "toString" ];
        var PathClassPrototypePropertyList = Object.getOwnPropertyNames( Path.prototype );
        var allMethodList = defaultMethodList.concat( testedMethodList );

        it( "should have " + testedMethodList.length + " methods in the current class.",
            function shouldHaveNMethodInTheCurrentClass( ){
                expect( allMethodList.length ).toEqual( PathClassPrototypePropertyList.length );
            } );
*/
    } );