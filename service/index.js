/**
 * Created by helingyun on 2018/10/27.
 */
// var API_URI_PRE = "https://dmodev.cn/jianban/jbpm7/";
var API_URI_PRE = "http://localhost:9000/airbnbclone/";

$(document).ready(function() {

    //获取权限
    tourList();

    //test()
});

// function test() {
//     var content = '<div class="main_title_2"><span><em></em></span> <h2>Our Popular Tours</h2> <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p> </div> < div id="reccomended" class="owl-carousel owl-theme">'
//     content = '<div class="item"> <div class="box_grid"> <figure><a href="#0" class="wish_bt"></a> <a href="tour-detail.html"><img src="img/tour_1.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a> <small>Historic</small> </figure> <div class="wrapper"> <h3><a href="tour-detail.html">Arc Triomphe</a></h3> <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p> <span class="price">From <strong>$54</strong> /per person</span> </div> <ul> <li><i class="icon_clock_alt"></i> 1h 30min</li> <li> <div class="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li> </ul> </div> </div>'
//     content += '<div class="item"> <div class="box_grid"> <figure> <a href="#0" class="wish_bt"></a> <a href="tour-detail.html"><img src="img/tour_2.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a> <small>Churches</small> </figure> <div class="wrapper"> <h3><a href="tour-detail.html">Notredam</a></h3> <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p> <span class="price">From <strong>$124</strong> /per person</span> </div> <ul> <li><i class="icon_clock_alt"></i> 1h 30min</li> <li> <div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li> </ul> </div> </div>'
//     content += '<div class="item"> <div class="box_grid"> <figure> <a href="#0" class="wish_bt"></a> <a href="tour-detail.html"><img src="img/tour_3.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a> <small>Historic</small> </figure> <div class="wrapper"> <h3><a href="tour-detail.html">Versailles</a></h3> <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p> <span class="price">From <strong>$25</strong> /per person</span> </div> <ul> <li><i class="icon_clock_alt"></i> 1h 30min</li> <li> <div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li> </ul> </div> </div>'
//     content += '<div class="item"> <div class="box_grid"> <figure> <a href="#0" class="wish_bt"></a> <a href="tour-detail.html"><img src="img/tour_3.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a> <small>Historic</small> </figure> <div class="wrapper"> <h3><a href="tour-detail.html">Versailles</a></h3> <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p> <span class="price">From <strong>$25</strong> /per person</span> </div> <ul> <li><i class="icon_clock_alt"></i> 1h 30min</li> <li> <div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li> </ul> </div> </div>'
//     content += '<div class="item"> <div class="box_grid"> <figure> <a href="#0" class="wish_bt"></a> <a href="tour-detail.html"><img src="img/tour_3.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a> <small>Historic</small> </figure> <div class="wrapper"> <h3><a href="tour-detail.html">Versailles</a></h3> <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p> <span class="price">From <strong>$25</strong> /per person</span> </div> <ul> <li><i class="icon_clock_alt"></i> 1h 30min</li> <li> <div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li> </ul> </div> </div>'
//     content += '<div class="item"> <div class="box_grid"> <figure> <a href="#0" class="wish_bt"></a> <a href="tour-detail.html"><img src="img/tour_3.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a> <small>Historic</small> </figure> <div class="wrapper"> <h3><a href="tour-detail.html">Versailles</a></h3> <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p> <span class="price">From <strong>$25</strong> /per person</span> </div> <ul> <li><i class="icon_clock_alt"></i> 1h 30min</li> <li> <div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li> </ul> </div> </div>'
//     content += '</div>< div class="container"> < p class="btn_home_align"><a href="tours-grid-isotope.html" class="btn_1 rounded">View all Tours</a></p> < / div> < hr class="large">'
//
//
//     $("#tour").html(content)
// }

function tourList() {
    //do something
    $.ajax({
        type: "get",
        url: API_URI_PRE+"area/listArea.do",
        dataType: 'json',
        success: function(data) {
            console.log(data)
            var areas =data[2]
            var strData = '{"data":'+JSON.stringify(areas)+'}'
            var parseData = JSON.parse(strData);
            var result= template("tpl-user", parseData)
            $("#areaByFee").html(result);

        },
        error: function(error) {
            console.log(error);
        }
    });


}

function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    //console.log("url="+url)
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
