(function() {
    $(document).ready(function() {
        var arrItems;
        arrItems = $('.lm-item');
        return arrItems.hover(function() {
            return arrItems.addClass('blur');
        }, function() {
            return arrItems.removeClass('blur');
        });
    });

}).call(this);



// let clickprize = document.getElementById("Click")[0];

// clickprize.addEventListener("click", ()=>{
//     console.log("clicked");
// })

function calcAndShowTotal() {
    var total = 0;
    var amt = 0;
    $('#catlist :checkbox:checked').each(function() {
        total += parseFloat($(this).attr('price')) || 0;
    });
    $('#custom-real-price').val(total);
    amt = (total - 500);
    if (amt <= 0) {
        $('#custom-price').val(0);
    } else {
        $('#custom-price').val(amt);
    }
    customRedirect(amt);
}
$('#catlist :checkbox').change(calcAndShowTotal).change();

function customRedirect(bill) {
    if (bill < 1399) {
        document.getElementById("button_click").href = "#";
    } else {
        document.getElementById("button_click").href = "http://www.w3schools.com";
    }
}

// function customRedirect() {
//     var a = document.getElementById("custom_price").innerHTML;
//     var b = parseInt(a);
//     if(a < 1399){
//         prompt("min 1399Rs");
//     }
//     else{
//         window.location.href = "http://www.w3schools.com";
//     }
// }