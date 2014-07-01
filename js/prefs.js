function AppViewModel() {
    this.username = ko.observable("");
    this.lanes = ko.observableArray(['Top', 'Jungle', 'Middle', 'Marksman', 'Support']);
    this.picks = ko.observableArray([]);
    this.bans = ko.observableArray([]);
    this.notes = ko.observable("");

    //picks
    this.selPicks = ko.observableArray([]);
    this.champToFav = ko.observable("");
    this.addFav = function() {
        tc = this.champToFav();
        if ((tc != "") && (this.picks.indexOf(tc) < 0)) {
            if (allChamps.indexOf(tc) > 0) {
                this.picks.push(tc);
            } else {
                alert("Invalid Champ Name");
            }
        }
        this.champToFav("");
    };
    this.removeFav = function() {
        this.bans.removeAll(this.selBans());
        this.selBans([]);
    };

    //bans
    this.selBans = ko.observableArray([]);
    this.champToBan = ko.observable("");

    this.addBan = function() {
        tc = this.champToBan();
        if ((tc != "") && (this.bans.indexOf(tc) < 0)) {
            if (allChamps.indexOf(tc) > 0) {
                this.bans.push(tc);
            } else {
                alert("Invalid Champ Name");
            }
        }
        this.champToBan("");
    };

    this.removeBan = function() {
        this.bans.removeAll(this.selBans());
        this.selBans([]);
    };

    allChamps = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Ashe', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Cassiopeia', 'ChoGath', 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Irelia', 'Janna', 'Jarvan IV', 'Jax', 'Jayce', 'Jinx', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 'KhaZix', 'KogMaw', 'LeBlanc', 'Lee Sin', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', ' Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Nidalee', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Pantheon', 'Poppy', 'Quinn', 'Rammus', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sejuani', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Syndra', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'VelKoz', 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yorick', 'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zyra'];
}

ko.bindingHandlers.sortable = {
    init: function(element, valueAccessor) {
        // cached vars for sorting events
        var startIndex = -1,
            koArray = valueAccessor();
        var sortableSetup = {
            // cache the item index when the dragging starts
            start: function(event, ui) {
                startIndex = ui.item.index();
                // set the height of the placeholder when sorting
                ui.placeholder.height(ui.item.height());
            },
            // capture the item index at end of the dragging then move
            stop: function(event, ui) {
                var newIndex = ui.item.index(); // get the new location item index
                if (startIndex > -1) {
                    var item = koArray()[startIndex]; //  get the item to be moved
                    koArray.remove(item); //  remove the item                    
                    koArray.splice(newIndex, 0, item); //  insert the item back in to the list
                    ui.item.remove(); //  ko rebinds the array so remove duplicate ui item
                }
            },
            placeholder: 'lane-moving'
        };
        $(element).sortable(sortableSetup); // bind
    }
};

ko.applyBindings(new AppViewModel());
