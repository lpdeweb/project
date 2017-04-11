$(()=>{
    $('.tocity').on('mouseover',function () {
        $('#city_list').css('display','block');
    });
    $('.tocity').on('mouseout',function () {
        $('#city_list').css('display','none');
    })
});
angular.module('app',[]).controller('myCity',($scope,$http)=>{
        $http('/getcity').then((r)=>{
            console.log(r);
            $.scope.citys=r.data;
        },()=>{
            alert('数据请求失败');
        })
});
angular.module('app',[]).controller('foreign_fruit',($scope,$http)=>{
    $http('/getcontent_ph').then((r)=>{
        console.log(r);
        $.scope.photos=r.data;
    },()=>{
        alert('数据请求失败');
    })
});
$(()=>{
    $('register').on('click',function () {
        $.ajax({
            url:`login?username=${username}&password=${password}&email=${email}&phone_num=${phone_num}`,
            dataType:'json',
            cache:'false',
            success:r=>{
                if(!r.err){
                    alert(r.mag);
                }else{
                    alert(r.msg);
                }
            },error:r=>{
                alert("注册失败!")
            }
        });
    });
    $('login').on('click',function () {
        $.ajax({
            url:`login?username=${username}&password=${password}`,
            dataType:'json',
            cache:'false',
            success:r=>{
                if(!r.err){
                    alert(r.msg);
                }else{
                    alert(r.msg);
                }
            },error:r=>{
                    alert('登录失败')
            }
        })
    });
    $('#register').on("click",function () {
        checkPhone();
    })
});
function checkPhone(){
    const phone = document.getElementById('tele').value;
    const email=document.querySelector('email').value;
    const phnu=document.querySelector('phnum');
    const em=document.querySelector('myem');
    const myem= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(!(/^1[34578]\d{9}$/.test(phone))){
        phnu.style.display='block';
    }else if(!(myem.test(email))){
        phnu.style.display='block';
    }
}