define([
  'jquery',
  'underscore',
  'ko',
  'models/contact',
], function($, _, ko, Contact){
	var ContactsViewModel = function(){
		this.contacts = ko.observableArray([]);
		this.contact = ko.observable(new Contact());
		
		this.addContact = function(){
			var self = this;
			var newContact = ko.toJS(this.contact);
			var jqxhr = $.post('Contact', newContact, function(contact){
				self.contacts.push(contact);
			})
			.error(function(){
				alert('error saving');
			});			
		}	
		
		this.loadFromServer = function(){
			var self = this;
			$.getJSON('Contact', function(data){
		    	_.each(data, function(existingContact){
		    		var contact = new Contact();
		    		contact.id(existingContact.id);
		    		contact.firstname(existingContact.firstname);
		    		contact.lastname(existingContact.lastname);
		    		self.contacts.push(contact);
		    	});
		    	
		    });
		}
	}
	
	return ContactsViewModel;
});
