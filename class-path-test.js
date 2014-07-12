/*:
	@test-configuration:
		{
			"packageName": "class-path",
			"fileName": "class-path-test.js",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/class-path.git",
			"referenceFile": "class-path.js",
			"referenceModule": "Path"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation
*/
var testDesign = {
	"title": "Class Path",

	"description": "Design specification for class Path",

	"caseList": [
		{
			"title": "Should have verifyIfExisting method",
			"description": "verifyIfExisting method should be a function",
			"caseProcedure": function caseProcedure( ){

				Path.prototype.should.have.property( "verifyIfExisting" );

				Path.prototype.verifyIfExisting.should.be.a.Function;
			}
		},

		{
			"title": "Should have verifyIfEmpty method",
			"description": "verifyIfEmpty method should be a function",
			"caseProcedure": function caseProcedure( ){

				Path.prototype.should.have.property( "verifyIfEmpty" );

				Path.prototype.verifyIfEmpty.should.be.a.Function;
			}
		},

		{
			"title": "Should have verifyIfNotEmpty method",
			"description": "verifyIfNotEmpty method should be a function",
			"caseProcedure": function caseProcedure( ){

				Path.prototype.should.have.property( "verifyIfNotEmpty" );

				Path.prototype.verifyIfNotEmpty.should.be.a.Function;
			}
		},

		{
			"title": "Should have checkIfDirectory method",
			"description": "checkIfDirectory method should be a function",
			"caseProcedure": function caseProcedure( ){

				Path.prototype.should.have.property( "checkIfDirectory" );

				Path.prototype.checkIfDirectory.should.be.a.Function;
			}
		},

		{
			"title": "Should have checkIfFile method",
			"description": "checkIfFile method should be a function",
			"caseProcedure": function caseProcedure( ){

				Path.prototype.should.have.property( "checkIfFile" );

				Path.prototype.checkIfFile.should.be.a.Function;
			}
		},

		{
			"title": "Should have appendToPath method",
			"description": "appendToPath method should be a function",
			"caseProcedure": function caseProcedure( ){

				Path.prototype.should.have.property( "appendToPath" );

				Path.prototype.appendToPath.should.be.a.Function;
			}
		},

		{
			"title": "Should have appendToRawPath method",
			"description": "appendToRawPath method should be a function",
			"caseProcedure": function caseProcedure( ){

				Path.prototype.should.have.property( "appendToRawPath" );

				Path.prototype.appendToRawPath.should.be.a.Function;
			}
		},

		{
			"title": "Should have joinToPath method",
			"description": "joinToPath method should be a function",
			"caseProcedure": function caseProcedure( ){

				Path.prototype.should.have.property( "joinToPath" );

				Path.prototype.joinToPath.should.be.a.Function;
			}
		},

		{
			"title": "Should have joinToRawPath method",
			"description": "joinToRawPath method should be a function",
			"caseProcedure": function caseProcedure( ){

				Path.prototype.should.have.property( "joinToRawPath" );

				Path.prototype.joinToRawPath.should.be.a.Function;
			}
		},

		{
			"title": "Should currently have {currentMethodCount} methods",
            "description": "To check if there are methods not tested",
			"caseProcedure": function caseProcedure( ){

				var defaultPropertyList = [ "constructor", "toString" ];
				var allPropertyList = Object.getOwnPropertyNames( Path.prototype );

				var propertyListCount = allPropertyList.length - defaultPropertyList.length;

				propertyListCount.should.be.exactly( currentMethodCount );

			}
		}
	],

	"scopeSet": {
		"Path": require( "./class-path.js" ),
		"currentMethodCount": 9
	},

	"dependencyList": { }
};

( module || { } ).exports = testDesign;