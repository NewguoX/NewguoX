
var imgs = ''
var text = ''
var pro = ''
//获取操作对象
var box = document.querySelector('.box')
var shops = document.getElementsByClassName('shop')
var checkboxs = document.getElementsByName('xuan')

var all = document.querySelector('.all')
var dls = all.querySelectorAll('dl')
//给父元素绑定点击事件
box.onclick = function (e) {
    var e = e || window.event
    //获取点击对象
    var target = e.target || e.srcElement
    //判断是否删除按钮
    if (target.innerHTML == '删除') {
        target.parentNode.parentNode.remove()
    }

    if (target.name == 'quan') {
        //遍历每一个商品对象
        for (var i = 0; i < shops.length; i++) {
            //判断当前全选框对象是否被选中
            if (target.checked) {
                shops[i].children[0].children[0].checked = true
            } else {
                shops[i].children[0].children[0].checked = false
            }
        }
        totals()
        ands()
    }

    //判断点击的是否为+按钮
    if (target.innerHTML == '+') {
        //获取数量
        var val = target.previousElementSibling.value
        //数量递增
        val++
        //重新把递增的数量赋值给输入框
        target.previousElementSibling.value = val
        //获取单价
        var pirce = target.parentNode.previousElementSibling.lastElementChild.innerHTML
        //计算小计
        var num = parseInt(val) * parseFloat(pirce)
        //给小计赋值
        target.parentNode.nextElementSibling.lastElementChild.innerHTML = num
        totals()
        ands()
    }
    //判断点击对象是否为减号
    if (target.innerHTML == '-') {
        var val = target.nextElementSibling.value
        if (val <= 1) {
            val = 1
        } else {
            val--
        }
        target.nextElementSibling.value = val
        //获取单价
        var pirce = target.parentNode.previousElementSibling.lastElementChild.innerHTML
        //计算小计
        var num = parseInt(val) * parseFloat(pirce)
        //给小计赋值
        target.parentNode.nextElementSibling.lastElementChild.innerHTML = num
        totals()
        ands()
    }

    if (target.innerHTML == '全删') {
        //遍历所有的选中框对象
        for (var i = checkboxs.length - 1; i >= 0; i--) {
            //判断当前选中框是否被选中
            if (checkboxs[i].checked) {
                checkboxs[i].parentNode.parentNode.remove()
            }
        }
        totals()
        ands()
    }
    if (target.name == 'xuan') {
        aaa()
    }
}

function aaa() {
    var num = 0 //代表选中框被选中的次数
    //遍历所有商品选中框对象
    for (var i = 0; i < checkboxs.length; i++) {
        //判断该中框是否被选中
        if (checkboxs[i].checked) {
            num++
        }
    }
    //当前被选中的次数是否等于长度
    if (num == checkboxs.length) {
        document.querySelector('[name="quan"]').checked = true
    } else {
        document.querySelector('[name="quan"]').checked = false
    }
    totals()
    ands()
}

//总计
function totals() {
    var total = 0 //总价格
    //遍历所有商品
    for (var i = 0; i < shops.length; i++) {
        //判断当前商品是否被选中
        if (shops[i].children[0].lastElementChild.checked) {
            //获取每个商品的金额
            var subtotal = shops[i].children[4].lastElementChild.innerHTML
            //累计
            total += parseFloat(subtotal)
        }
    }
    //给总额赋值
    document.querySelector('.total').innerHTML = total
}
//店铺合计
function ands() {
    var tot = 0
    //遍历所有商品
    for (var i = 0; i < shops.length; i++) {
        //获取每个商品的小计
        var subtotal = shops[i].children[4].lastElementChild.innerHTML
        //累加
        tot += parseFloat(subtotal)
    }
    //给店铺合计赋值
    document.querySelector('.shopTotal').innerHTML = tot
}
totals()
ands()