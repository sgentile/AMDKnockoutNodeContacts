define([
  'ko'
], function(ko){
	var ContactModel = function(){
		this.id = ko.observable(null);
		this.firstname = ko.observable('');
		this.lastname = ko.observable('');
		
		this.fullname = ko.computed(function(){
			return this.firstname() + " " + this.lastname();
		}, this);		
	};
	
	return ContactModel;
});
