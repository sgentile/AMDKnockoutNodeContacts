define([
  'jquery',
  'ko',
  'models/contactsviewmodel',
  'text!templates/contacts/add.html'
], function($, ko, ContactsViewModel, addContactTemplate){
  var initialize = function(){
  	//uses this for now - 
  	//next step will be to swamp in and out for 'add' vs. 'edit'
  	$('#mainRegion').append(addContactTemplate);
  	
    var contactsViewModel = new ContactsViewModel();    
    ko.applyBindings(contactsViewModel);    
    contactsViewModel.loadFromServer();    
  }

  return {
    initialize: initialize
  };
});

