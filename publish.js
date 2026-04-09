var newestUrls = [
    "https://0fb6.ohoscdv.cc/",           // 已放到第一行
    "https://cee4e.jrtskgbd.com/",
    "https://sjtu.jrtskgbd.com",
    "https://bnu.jrtskgbd.com",
    "https://hust.jrtskgbd.com"
];

var otherUrls = [
    "https://98seht.com",
    "https://gitlab.com/18sht",
    "https://github.com/18sht-com",
    "https://linktr.ee/seht609"
];

var emails = ["seht609@gmail.com"];

var tgChannel = "https://t.me/seht001";

var foreverUrls = [
    "https://18sht.com"
];

var notices = [
    "* 我们推荐PC和Android手机用户使用Chrome浏览器访问，iPhone用户建议使用自带Safari浏览器。",
    "* 大陆地区用户建议使用VPN或代理访问海外永久地址。",
    "* 建议截图或Ctrl+D收藏当前页面，避免迷路。"
];

function createFieldElem(option) {
    var title = option.title;
    var items = option.items || [];
    var plainText = option.plainText;
    var classStr = option.classStr || '';
    var text = option.text;

    var fieldElem = document.createElement('div');
    fieldElem.setAttribute('class', 'field ' + classStr);

    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');
    var htmlStr = '';

    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr += '<li>' + items[i] + '</li>';
        } else {
            htmlStr += '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a></li>';
        }
    }

    if (text) {
        htmlStr += '<li class="text">' + text + '</li>';
    }

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');

    // Logo标题
    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.innerHTML = '<img src="logo.png" width="180" style="margin-bottom: 12px;"/><br><span>色花堂</span><span class="flag">98堂</span>';
    mainElem.appendChild(logoElem);

    // 收藏提示
    var favoritesElem = createFieldElem({
        title: '<font color="#ff3366"><b>Ctrl + D</b></font> 收藏此页，永不迷路'
    });
    mainElem.appendChild(favoritesElem);

    // 大陆地址（0fb6.ohoscdv.cc 已放第一行）
    var newestFieldElem = createFieldElem({
        title: '🎀 色花堂最新地址（国内推荐）',
        items: newestUrls
    });
    mainElem.appendChild(newestFieldElem);

    // 地址发布页
    var otherFieldElem = createFieldElem({
        title: '📌 最新地址发布页（务必全部收藏）',
        items: otherUrls
    });
    mainElem.appendChild(otherFieldElem);

    // 邮箱
    var mailFieldElem = createFieldElem({
        title: '📧 发送任意邮件获取最新地址',
        items: emails,
        plainText: true
    });
    mainElem.appendChild(mailFieldElem);

    // TG交流频道
    var tgFieldElem = createFieldElem({
        title: '💬 TG交流频道',
        items: [tgChannel],
        text: '点击加入色花堂官方TG频道'
    });
    mainElem.appendChild(tgFieldElem);

    // 永久地址
    var foreverFieldElem = createFieldElem({
        title: '🔒 海外永久地址（需翻墙）',
        items: foreverUrls
    });
    mainElem.appendChild(foreverFieldElem);

    // 注意事项
    var noticeFieldElem = createFieldElem({
        title: '⚠️ 注意事项',
        items: notices,
        plainText: true,
        classStr: 'desc'
    });
    mainElem.appendChild(noticeFieldElem);
}
