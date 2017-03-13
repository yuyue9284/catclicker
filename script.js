$(function() {
    var model = {
        init: function() {
            if (!localStorage.cats) {
                var cats = [{
                    cid: 0,
                    name: "Cat1",
                    count: 0,
                    src: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426"
                }, {
                    cid: 1,
                    name: "Cat2",
                    count: 1,
                    src: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496"
                }, {
                    cid: 2,
                    name: "Cat3",
                    count: 2,
                    src: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454"
                }]
                localStorage.cats = JSON.stringify(cats);
            }
        },

        addcount: function(cid) {
            var catlist = JSON.parse(localStorage.cats);
            catlist[cid].count += 1;
            localStorage.cats = JSON.stringify(catlist);
            return catlist[cid];
        },

        getcat: function(cid) {
            var catlist = JSON.parse(localStorage.cats);
            return catlist[cid];
        },

        getcatlist: function() {
            return JSON.parse(localStorage.cats);
        }
    };

    var view = {
        renderlist: function(catlist) {
            catlist.forEach(function(cat) {
                $("#catlist").append("<li cid = \"" + cat.cid + "\">" + cat.name + "</li>")
            })
        },

        rendercat: function(cat) {
            $("#name").html(cat.name);
            $('#count').html(cat.count);
            $("#img").attr({ "src": cat.src, "cid": cat.cid });
            $(".cats").css("display", "block");
        }
    };

    var controller = {
        init: function() {
            model.init();
            view.renderlist(model.getcatlist());
            $("li").click(this.showcats);
            $("img").click(this.increase);
        },

        increase: function() {
            var cid = $(this).attr("cid");
            var cat = model.addcount(cid);
            view.rendercat(cat);
        },

        showcats: function() {
            var cid = $(this).attr("cid");
            var cat = model.getcat(Number(cid));
            view.rendercat(cat);
        }
    };

    controller.init();
});
