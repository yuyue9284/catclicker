var numberofcats = 3;
var ct = [];
var list = $("#catlist");

for (var i = 0; i < numberofcats; i++) {
    ct.push(0);
    var s = "<a><li cid=" + i + ">cat " + (i + 1) + "</li></a>";
    list.append(s);
};

var cur = undefined;

$("li").click(function() {
    var cid = Number($(this).attr("cid"));
    if (cur === undefined) {
        cur = cid;
    } else {
        $(".content[cid = " + cur + "]").css("display", "none");
        cur = cid;
    }
    $(".content[cid = " + cur + "]").css("display", "block");
});

$("img").click(function() {
    var cid = Number($(this).attr("id"));
    ct[cid] += 1;
    $(this).next().find(".count").text(ct[cid]);
    console.log(cid);
});
