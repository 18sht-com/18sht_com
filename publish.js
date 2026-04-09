var subdomains = [
    'thu', 'pku', 'fdu', 'sjtu', 'zju', 'nju', 'xmu', 'sysu',
    'whu', 'jlu', 'scu', 'ruc', 'bnu', 'nku', 'tju', 'sdu',
    'hust', 'xjtu', 'hit'
];

function getRandomSubdomain() {
    var index = Math.floor(Math.random() * subdomains.length);
    return subdomains[index];
}

function randomNum(minNum, maxNum) {
    switch(arguments.length){
        case 1: return parseInt(Math.random()*minNum+1,10);
        case 2: return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
        default: return 0;
    }
}

// ====================== 最新地址修改为固定列表 ======================
var newestUrls = [
    "https://cee4e.jrtskgbd.com/",
    "https://sjtu.jrtskgbd.com",
    "https://bnu.jrtskgbd.com",
    "https://hust.jrtskgbd.com"
];
// =================================================================

var otherUrls = [
    'https://github.com/seht609',
    'https://gitlab.com/18sht'
];

var emails = ['seht609@gmail.com'];

var foreverUrls = [
    'https://18sht.com',
    'https://98seht.com'
];

var notices = [
    '* 我们推荐PC和Android手机用户使用Chrome(谷歌)浏览器访问，iPhone用户我们建议您使用手机自带Safari浏览器访问。',
    '* 大陆地区用户我们建议您可以使用VPN或者代理的方式来访问我们的永久地址。',
    '* 大陆地区用户我们强烈建议您截图或Ctrl+D收藏当前页面。'
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

    // Logo + 标题
    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.innerHTML = '<img src="logo.png" width="180" style="margin-bottom: 10px;"/><br><span>色花堂</span><span class="flag">98堂</span>';
    mainElem.appendChild(logoElem);

    // 收藏提示
    var favoritesElem = createFieldElem({
        title: '<font color="red"><b>Ctrl + D</b></font> 收藏此页，永不迷路'
    });
    mainElem.appendChild(favoritesElem);

    // 最新地址（已改为你指定的固定列表）
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

    // 永久地址
    var foreverFieldElem = createFieldElem({
        title: '🔒 永久地址（需翻墙）',
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