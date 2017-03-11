var ct = [0, 0];
$("img").click(function() {
	var cid = Number($(this).attr("id"));
	ct[cid] += 1;
	$(this).next().find(".count").text(ct[cid]);

	console.log(ct);
	console.log(cid);
});
