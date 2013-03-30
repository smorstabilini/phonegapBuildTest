var app = {
    /* part 3: */
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    initialize: function() {
        //this.store = new MemoryStore();
        // this.store = new LocalStorageStore();
        var self = this;
        
        this.homeTpl = Handlebars.compile($("#home-tpl").html());
        this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
        
        // this.store = new WebSqlStore();
        //this.store = new WebSqlStore(function(){
        this.store = new MemoryStore(function(){
            // self.showAlert('Store initialized', 'My title');
            // self.renderHomeView();
            $('body').html(new HomeView(self.store).render().el);
        });
    }

};

app.initialize();