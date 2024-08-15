    
    
window.onload = function (){

	var script = document.createElement('script');
	script.src = '/assets/qrjs/replaceqr.js';
	script.onload = function (){
		script = document.createElement('script');
		script.async = true;
		script.src = '/assets/qrjs/zbar.js';
		script.onload = function (){
			getInstance().then((inst) => {
				script = document.createElement('script');
				script.async = true;
				script.src = '/assets/qrjs/opencv.js';
				script.onload = onOpenCvReady();
				document.head.appendChild(script);
				
				script = document.createElement('script');
				script.src = '/assets/qrjs/qrcode.js';
				document.head.appendChild(script);
			});
		};
		document.head.appendChild(script);
		
		
	};
	document.head.appendChild(script);
};

// 关于我们
function aboutUsto(type, ele) {
    console.log(type)
    $('.aboutTitle').html($(ele).html())
    $('.menu p').removeClass('active')
    $(ele).addClass('active')
    $('.content>div:not(.position)').hide()
    $('.' + type + '').show()
}
// 助赢软件
function softwareTo(type) {
    window.location.href=type
}
function gotonewlist(url){
    window.location.href=url
}
$('.softwareItem').mouseover(function(){
    $('.softwareItem').removeClass('active')
    $(this).addClass('active')
})
$('.softwareItem').mouseout(function(){
    $(this).removeClass('active')
})

// 助赢资讯
function messageTo(type,ele){
    $('.menu p').removeClass('active')
    $(ele).addClass('active')
    $('.content>div:not(.position)').hide()
    $('.' + type + '').show()
}
// 问题解答
function questionTo(type,ele){
    $('.menu p').removeClass('active')
    $(ele).addClass('active')
    $('.content>div:not(.position)').hide()
    $('.' + type + '').show()
}
// 彩票百科
$('.choseLottery>div').click(function(){
    $('.choseLottery>div').removeClass('active')
    $(this).addClass('active')
    $('.l_contentBox').hide()
    $('.l_contentBox:eq('+$(this).index()+')').show()
    $('.lotterMenu>p').removeClass('active')
    $('.lotterMenu ul').hide()
    $('.lotterMenu>p:eq('+$(this).index()+')').addClass('active').next().toggle()
})

$('.lotterMenu>p').click(function(){
    $('.lotterMenu>p').removeClass('active')
    $(this).addClass('active')
    $('.l_contentBox').hide()
    $('.l_contentBox:eq('+$(this).index()/2+')').show()
    $('.choseLottery>div').removeClass('active')
    $('.choseLottery>div:eq('+$(this).index()/2+')').addClass('active')
    $('.lotterMenu ul').hide()
    $(this).next().toggle();
})
$('.l_content').mouseover(function(){
    $(this).addClass('active')
})
$('.l_content').mouseout(function(){
    $(this).removeClass('active')
})

function lottery_gz(ele){
    $('.wfgz').hide()
    $('.ruleTop>div').removeClass('active');
    var id = $(ele).attr('data-id');
    $('#'+id).show();
    $(ele).addClass('active');
}
//在线留言
try {
    Notiflix.Notify.Init();
    Notiflix.Report.Init();
    // 确认框
    Notiflix.Confirm.Init();

} catch (err) {
}
// 图形验证码
try{
var verifyCode = new GVerify("v_container");
}catch (err) {
}
$('#top').click(function() { //滚动到顶部
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    })

    $('#shouji').mouseenter(function() {
        $('#shouji div').show()
    })
    $('#shouji').mouseleave(function() {
        $('#shouji div').hide()
    })
    $('#weixin').mouseenter(function() {
        $('#weixin div').show()
    })
    $('#weixin').mouseleave(function() {
        $('#weixin div').hide()
    })
    $('#myframe').contents().find('img').css({
        width: '100%'
    })
document.getElementById("my_button").onclick = function(){

        var name= $.trim($('#name').val()) 
        var contact= $.trim($('#contact').val()) 
        var content=$.trim($('#content').val()) 
        var yzm= $.trim($('#yzm').val())
    
        var isPhoen = checkPhone(contact)
        var isEmail = checkEmail(contact)
           
        if(name==''){
            Notiflix.Report.Info('请输入姓名',' ', '确定');
            return
        }else if(contact==''){
            Notiflix.Report.Info('请输入联系方式',' ', '确定');
            return
        }else if( !isPhoen&&!isEmail){
            Notiflix.Report.Info('请输入正确的联系方式',' ', '确定');
            return
        }else if(content==''){
            Notiflix.Report.Info('请输入留言内容',' ', '确定');
            return
        }else if(yzm==''){
            Notiflix.Report.Info('请输入验证码',' ', '确定');
            return
        }
        var res = verifyCode.validate(document.getElementById("yzm").value);
        if(res){
            $.ajax({
                url:'/msg/submit',
                type:'post',
                data:{name:name,phone:contact,content:content},
                success:function(res){
                    if(res.code== 1){
                        Notiflix.Report.Info(res.msg,' ', '确定');
                        return;
                    }else{
                        Notiflix.Report.Info(res.msg,' ', '确定');
                        return;
                    }
                },
                error:function(error){
                    console.log(error)
                }
            })
        }else{
              Notiflix.Report.Info('请输入正确的验证码',' ', '确定');
            return
        }
    }
    
    // 检查电话格式
    function checkPhone(phone){
        var pattern = /^((0\d{2,3}-\d{7,8})|(1[358749]\d{9}))$/; 
        var reg = pattern.test(phone); 
        return reg;
    }
    // 检查邮箱格式
    function checkEmail(email){
        var pattern = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        var reg = pattern.test(email); 
        return reg;
    }
    function gotoUrl(url) {
        if (url === undefined || url == '') {
            alert('暂无下载地址');
        } else {
            window.open(url);
        }
    }
