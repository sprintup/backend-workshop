$(document).ready( function () {

    var TextModel = Backbone.Model.extend({
        editedValue : 0,

        defaults : {"value" : "",
                    "editedValue" : 0},
        replace : function (str) {
            this.set("value", str);                              
        },
        increment : function (argument) {
            this.editedValue++;  
            this.set("editedValue", this.editedValue); 
            console.log('increment called with editedValue: '+ this.editedValue);  
        }
    });

    var TextView = Backbone.View.extend({
        render: function () {
            var textVal = this.model.get("value");
            var btn = '<button>Clear</button>';
            var dbtn = '<button id=\'delete\'>Delete</button>';
            var input = '<input type="text" value="' + textVal + '" />';

            var editedValue = this.model.get("editedValue");
            var edited = '<span> Edited: ' + editedValue + '</span>';

            this.$el.html(textVal+"<br><div>" + input + btn + dbtn  +edited +"</div>");
        },
        initialize: function () {
            this.model.on("change", this.render, this);
            // last argument 'this' ensures that render's
            // 'this' means the view, not the model
        },
        events : {
            "click button" : "clear",
            "keypress input" : "updateOnEnter",                  //Why are the event keys so loosly defined? 
            "click #delete"    : "deleteModel"
        },
        replace : function () {
            var str = this.$el.find("input").val();
            this.model.replace(str);
            this.model.increment();
        },
        clear: function () {
            this.model.replace("");
        },
        updateOnEnter: function (e){
            if(e.keyCode == 13) {
                this.replace();
            }
        },
        deleteModel : function (argument) {
            // body...
            console.log("delete button pressed with argument: " + argument + 'and this: ' + this);
            this.remove();
        }
    });

    var TextCollection = Backbone.Collection.extend({
        model : TextModel
    });

    var TextCollectionView = Backbone.View.extend({
        render : function () {
            var btn = '<button id="addbutton">Add Text</button>';
            var div = '<div id="text-list"></div>';
            this.$el.html(div + btn);
        },
        initialize : function () {
            this.listenTo(this.collection, 'add', this.addView);
        },
        events : {
            "click #addbutton" : "addModel"
        },
        addModel : function () {
            this.collection.add({});
            // collection adds a model, fires add event, then listener calls this.addView(model)
        },
        addView : function (newModel) {
            newModel.set("value","Enter something here...");
            var view = new TextView({model : newModel});
            view.render();
            this.$("#text-list").append(view.$el);
        }
    });

    var textCollection = new TextCollection();

    var textCollectionView = new TextCollectionView({ collection : textCollection});

    textCollectionView.render();

    $("#listdiv").append(textCollectionView.$el);               
    /*
        why does textCollectionView have a cached jQuery object?
    */

});
