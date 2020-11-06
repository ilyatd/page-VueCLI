$( "#page-box__filter__slider__floors" ).slider({
    range: true,
    min: 1,
    max: 99,
    values: [ 1, 99 ],
    slide: function(event, ui){
        $("#page-box__filter__slider__values__min__floors").text(ui.values[0]);
        $("#page-box__filter__slider__values__max__floors").text(ui.values[1]);
    }
});
$( "#page-box__filter__slider__area" ).slider({
    range: true,
    min: 1,
    max: 999,
    values: [ 1, 999 ],
    slide: function(event, ui){
        $("#page-box__filter__slider__values__min__area").text(ui.values[0]);
        $("#page-box__filter__slider__values__max__area").text(ui.values[1]);
    }
});
$( "#page-box__filter__slider__price" ).slider({
    range: true,
    min: 0.1,
    max: 99.9,
    step: 0.1,
    values: [ 0.1, 99.9 ],
    slide: function(event, ui){
        $("#page-box__filter__slider__values__min__price").text(ui.values[0]);
        $("#page-box__filter__slider__values__max__price").text(ui.values[1]);
    }
});
$("#clear-filter").click(function(){
    $( "#page-box__filter__slider__floors" ).slider("values", [1, 99]);
    $( "#page-box__filter__slider__area" ).slider("values", [1, 999]);
    $( "#page-box__filter__slider__price" ).slider("values", [0.1, 99.9]);
    showRage();
});
showRage();

function showRage() {
    $("#page-box__filter__slider__values__min__floors").text($("#page-box__filter__slider__floors").slider("values", 0));
    $("#page-box__filter__slider__values__max__floors").text($("#page-box__filter__slider__floors").slider("values", 1));
    $("#page-box__filter__slider__values__min__area").text($("#page-box__filter__slider__area").slider("values", 0));
    $("#page-box__filter__slider__values__max__area").text($("#page-box__filter__slider__area").slider("values", 1));
    $("#page-box__filter__slider__values__min__price").text($("#page-box__filter__slider__price").slider("values", 0));
    $("#page-box__filter__slider__values__max__price").text($("#page-box__filter__slider__price").slider("values", 1));
}



