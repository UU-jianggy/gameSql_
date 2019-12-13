function get () {
    $.ajax({
        type:'get',
        url:'http://localhost:5000/get',
        success:function (data) {
            console.log(data)
        },
        error:function (err) {
            console.log(err,'这是err')
        }
    })
}

// 发送
// var code = {'1',新闻','世纪优优','web','19/12/13'}
var postData = ['2','新闻','世纪优','youyou','19/12/13']
var newPost = JSON.stringify(postData)
function post () {
    $.ajax({
        type: 'post',
        url: 'http://localhost:5000/post',
        data: newPost,

    })
}