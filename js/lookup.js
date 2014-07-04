function AppViewModel() {
	username = ko.observable("");
	region = ko.observable("");
    availableRegions = ['NA', 'EUW', 'EUNE']

}

ko.applyBindings(new AppViewModel());
