const input = $('input')
const render = new Renderer()

$('#getIngredient').click(function() {
    $.get(`recipes/${input.val()}`,function(recipesBase){
        render.renderRecipes(recipesBase)
    })
});

$("body").on('click',"img" ,function(){
    let title=$(this).siblings('#ingredientsList').children()[0].innerHTML ;
    alert(title)
})