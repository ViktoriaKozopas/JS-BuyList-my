$(function () {
    var LIST = $(".list-of-products");
    var ITEM_TEMPLATE = $(".one-row-template").html();

    var LEFT_LIST_LEFT = $(".bl-right-prod-list-left");
    var LEFT_ITEM_TEMPLATE = $(".one-product-template").html();

    var BOUGHT_LIST_LEFT = $(".bl-right-prod-list-bought");
    var BOUGHT_ITEM_TEMPLATE = $(".one-product-template").html();

    function addItem(title) {
        var $node = $(ITEM_TEMPLATE);
        var quantity = 1;
        var $quantity_label = $node.find(".bl-quantity-label");
        $quantity_label.text(quantity);
        $node.find(".bl-product-name").text(title);

        var $right_node = $(LEFT_ITEM_TEMPLATE);
        $right_node.find(".titleProduct").text(title);
        var $orange_quantity = $right_node.find(".ui-circular-number");
        $orange_quantity.text(quantity);

        //when start
        $node.find(".bl-minus").css('opacity', '0.6');
        $node.find(".bl-minus").prop("disabled", true);
        //that was bad code


        $node.find(".bl-minus").click(function () {
            if (quantity > 1) {
                quantity -= 1;
                $quantity_label.text(quantity);
                $orange_quantity.text(quantity);
            }else if (quantity == 1){
                $node.find(".bl-minus").prop("disabled", true);
                $node.find(".bl-minus").css('opacity', '0.6');
            }
        });

        $node.find(".bl-plus").click(function () {
            $node.find(".bl-minus").prop("disabled", false);
            $node.find(".bl-minus").css('opacity', '1');
            quantity += 1;
            $quantity_label.text(quantity);
            $orange_quantity.text(quantity);
        });

        $node.find(".bl-del").click(function () {
            $node.remove();
        });

        //Bought product НЕ АБОТАЕТ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        $node.find(".bl-bought").click(function () {
            // $node.remove();
            alert("sth");
            $node.addClass(".is-bought");
        });

        //unboought product
        //НЕ АБОТАЕТ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        $node.find(".bl-unbought").click(function () {
            $node.removeClass("is-bought");
        });


        //і тут НЕ АБОТАЕТ - редагує але не повертається попередня форма
        $node.find(".bl-product-name").click(function () {
            $node.find(".bl-product-name").hide();
            $node.find(".edit-name").show();
            $node.find(".edit-name").val(title);
        });

        $node.find(".edit-name").focusout(function () {
            $node.find(".bl-product-name").show();
            $node.find(".edit-name").hide();
            title = $node.find(".edit-name").val();
            if(title.trim()){
                $node.find(".bl-product-name").text(title);
                $right_node.find(".titleProduct").text(title);
            }
        });

        $node.find(".edit-name").keyup(function (e) {
            if (e.which == 13) {
                $node.find(".bl-product-name").show();
                $node.find(".edit-name").hide();
                title = $node.find(".edit-name").val();
                if(title.trim()){
                    $node.find(".bl-product-name").text(title);
                    $right_node.find(".titleProduct").text(title);
                }
            }
        });

        LIST.append($node);
        LEFT_LIST_LEFT.append($right_node);
    }

    addItem("Помідори");
    addItem("Печиво");
    addItem("Сир");

    //add new product
    var $new_input = $(".input-text");
    $(".button-add").click(function () {
        var new_name = $new_input.val();
        if (new_name.trim()) {
            addItem(new_name);
            $new_input.val("");
            $new_input.focus();
        }
    });
    //add new product enter pressed
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
