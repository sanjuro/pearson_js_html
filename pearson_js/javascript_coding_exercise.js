// Part 1

var Component = function (config) {
	for (property in config) {
		this[propety] = config[property]
	}
}
var list = Array (
	"Item 1",
	"Item 2",
	"Item 3", )
var instance = Component(id: "XF-254", list: list);

// line 5 -> spelling mistake, propety
// line 8 -> Array is not create correctly
// lines 11 -> missing semi-colons 
// line 11 -> extra comma
// line 12 -> incorrect declaration

// Part 2
    var Component = {};

	(function(q) {

	    var topics = {},
	        subUid = -1;

	    // Publish or broadcast events of interest
	    // with a specific topic name and arguments
	    // such as the data to pass along
	    q.publish = function( topic, args ) {

	        if ( !topics[topic] ) {
	            return false;
	        }

	        var subscribers = topics[topic],
	            len = subscribers ? subscribers.length : 0;

	        while (len--) {
	            subscribers[len].func( topic, args );
	        }

	        return this;
	    };

	    // Subscribe to events of interest
	    // with a specific topic name and a
	    // callback function, to be executed
	    // when the topic/event is observed
	    q.subscribe = function( topic, func ) {

	        if (!topics[topic]) {
	            topics[topic] = [];
	        }

	        var token = ( ++subUid ).toString();
	        topics[topic].push({
	            token: token,
	            func: func
	        });
	        return token;
	    };

	    // Unsubscribe from a specific
	    // topic, based on a tokenized reference
	    // to the subscription
	    q.unsubscribe = function( token ) {
	        for ( var m in topics ) {
	            if ( topics[m] ) {
	                for ( var i = 0, j = topics[m].length; i < j; i++ ) {
	                    if ( topics[m][i].token === token) {
	                        topics[m].splice( i, 1 );
	                        return token;
	                    }
	                }
	            }
	        }
	        return this;
	    };
	}( Component ));


var testSubscriber = function( topics , data ){
 
    console.log( topics + ": " + data );
 
};

var subscription = Component.subscribe( 'propertyChanged', testSubscriber );

Component.publish( 'propertyChanged', 'hello property!' );

Component.unsubscribe( subscription );

// Part 3


// Part 4

