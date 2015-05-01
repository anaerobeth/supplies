var _ = require('lodash'),
    Category = require('./domain/Category.js'),
    Task = require('./domain/Task.js'),
    repository = require('./repository.js');

var fixtures = (function() {
    var loadCategories = function() {
        var categories = [{
            name: 'Office supplies'
        },{
            name: 'Bathroom supplies'
        },{
            name: 'Kitchen supplies'
        },{
            name: 'Others'
        }];
        _.forEach(categories, function(item) {
            repository.categories.push(new Category(item));
        });
    };  

    var loadTasks = function() {
        var tasks = [{
            name: 'A4 Paper - 1 pack',
            category: 1,
            status: 0
        },{
            name: 'Air Refresher - 3 pcs',
            category: 1,
            status: 0
        },{
            name: 'Advil - 1 pack',
            category: 4,
            status: 0
        },{
            name: 'Clorox/Drano - 1 bottle',
            category: 2,
            status: 0
        },{
            name: 'Dish soap - 1 pc',
            category: 1,
            status: 0
        },{
            name: 'Toilet paper - 15 pcs',
            category: 2,
            status: 0
        },{
            name: 'Hand paper tower - 6 pcs',
            category: 3,
            status: 0
        },{
            name: 'Hand soap - 3 pcs',
            category: 3,
            status: 0
        },{
            name: 'Hand sanitizer - 2 pcs',
            category: 3,
            status: 0
        },{
            name: 'Light bulbs - 2 pcs',
            category: 4,
            status: 0
        },{
            name: 'Scents odor neutralizer - 1 pc',
            category: 1,
            status: 0
        },{
            name: 'Matches - 2 pcs',
            category: 2,
            status: 0
        },{
            name: 'Party cups - 2 packs',
            category: 3,
            status: 0
        },{
            name: 'Tissue box - 8 boxes',
            category: 1,
            status: 0
        },{
            name: 'Trash bag (big black) - 1 box',
            category: 2,
            status: 0
        },{
            name: 'Trash bag (small black) - 2 boxes',
            category: 2,
            status: 0
        },{
            name: 'Recycling bag (translucent) - 1 box',
            category: 1,
            status: 0
        },{
            name: 'Wipes (disinfecting wipes) - 2 packs',
            category: 1,
            status: 0
        },{
            name: 'Wipes (monitor wipes) - 1 pack',
            category: 1,
            status: 0
        },{
            name: 'Tape (clear) - 1 pc',
            category: 1,
            status: 0
        },{
            name: 'Pens - 5 pcs',
            category: 1,
            status: 0
        },{
            name: 'Notebooks - 5 pcs',
            category: 1,
            status: 0
        },{
            name: 'Whiteboard markers - 5 pcs',
            category: 1,
            status: 0
        }];

        _.forEach(tasks, function(item) {
            repository.tasks.push(new Task(item));
        });
    };
    
    return {
        loadAll: function() {
            loadCategories();
            loadTasks();
        }
    };
})();

module.exports = fixtures;
