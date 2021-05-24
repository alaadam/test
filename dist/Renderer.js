class Renderer {
    renderRecipes = function(recipes){
        $(".recipes").empty()
        var source = $('#recipes-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({recipes});
        $('.recipes').append(newHTML);
    }
}

