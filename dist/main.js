const input = $('input')
const render = new Renderer()

$('#getIngredient').click(function() {
    $.get(`recipes/${input.val()}`,function(recipesBase){
        render.renderRecipes(recipesBase)
    })
});

$("body").on('click',"img" ,function(){
    alert($(this).closest('#ingredientsList'))
})