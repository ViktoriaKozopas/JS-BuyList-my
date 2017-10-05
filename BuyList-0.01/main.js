$(function () {
    var LIST = $(".list-of-products");
    var ITEM_TEMPLATE = $(".one-row-template").html();

    function addItem(title) {
        var $node = $(ITEM_TEMPLATE);
        var quantity = 1;
        var $quantity_label = $node.find(".bl-quantity-label");
        $quantity_label.text(quantity);

        $node.find(".bl-product-name").text(title);

        $node.find(".bl-minus").click(function () {
            if (quantity > 1) {
                quantity -= 1;
                $quantity_label.text(quantity);
            }
        });

        $node.find(".bl-plus").click(function () {
            quantity += 1;
            $quantity_label.text(quantity);
        });

        $node.find(".bl-del").click(function () {
            $node.remove();
        });

        $node.find(".bl-product-name").click(function () {
            $node.find(".bl-product-name").hide();
            $node.find(".edit").show();
            $node.find(".edit").val(title);
            $node.find(".bl-product-name").text(title);
        });

        $node.find(".bl-product-name").focusout(function () {
            $node.find(".bl-product-name").show();
            $node.find(".edit").hide();
            title = $node.find(".edit").val();

        });

        LIST.append($node);
    }

    addItem("Помідори");
    addItem("Печиво");
    addItem("Сир");

    var $new_input = $(".input-text");
    $(".button-add").click(function () {
        var new_name = $new_input.val();
        if (new_name.trim()) {
            addItem(new_name);
            $new_input.val("");
            $new_input.focus();
        }
    });

    $(".input-text").keyup(function (e) {
        if (e.which == 13) {
            var new_name = $new_input.val();
            if (new_name.trim()) {
                addItem(new_name);
                $new_input.val("");
                $new_input.focus();
            }
        }
    });
});
