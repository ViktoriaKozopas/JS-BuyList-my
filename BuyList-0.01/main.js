$(function () {
    var LIST = $(".list-of-products");
    var ITEM_TEMPLATE = $(".one-row-template").html();

    function addItem(title){
        var $node  = $(ITEM_TEMPLATE);
        var quantity = 3;
        var $quantity_label = $node.find(".bl-quantity-label");
        $quantity_label.text(quantity);

        $node.find(".bl-product-name").text(title);



        LIST.append($node);
    }

    addItem("something");
});
