var HomeView = function(store) {
    this.initialize = function() {
        // define a div wrapper for the view. the div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
    };
    
    this.render = function() {
        // si utilizza this.el invece di #body per rendere la view riutilizzabile
        this.el.html(HomeView.template());
        return this;
    };
    
    this.findByName = function() {
        /*
        var self = this;
        store.findByName($('.search-key').val(), function(employees) {
            $('.employee-list').html(HomeView.liTemplate(employees));
        });*/
        store.findByName($('.search-key').val(), function(employees) {
            $('.employee-list').html(HomeView.liTemplate(employees));
            if (self.iscroll) {
                console.log('Refresh iScroll');
                self.iscroll.refresh();
            } else {
                console.log('New iScroll');
                self.iscroll = new iScroll($('.scroll', self.el)[0], {hScrollbar: false, vScrollbar: false });
            }
        });
    };
    
    this.initialize();
}

// membri statici della vista
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());

