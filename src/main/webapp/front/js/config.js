
var projectName = '高校社团管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '社团申请信息',
	url: './pages/shetuanshenqingxinxi/list.html'
}, 
{
	name: '校园社团',
	url: './pages/xiaoyuanshetuan/list.html'
}, 
{
	name: '社团活动',
	url: './pages/shetuanhuodong/list.html'
}, 
{
	name: '活动参与',
	url: './pages/huodongcanyu/list.html'
}, 
{
	name: '会员申请',
	url: './pages/huiyuanshenqing/list.html'
}, 

{
	name: '校园资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssmhn4b5/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["查看","删除","审核"],"menu":"社团申请信息","menuJump":"列表","tableName":"shetuanshenqingxinxi"}],"menu":"社团申请信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"校园社团","menuJump":"列表","tableName":"xiaoyuanshetuan"}],"menu":"校园社团管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"社团活动","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"会员","menuJump":"列表","tableName":"huiyuan"}],"menu":"会员管理"},{"child":[{"buttons":["查看","审核","删除"],"menu":"活动参与","menuJump":"列表","tableName":"huodongcanyu"}],"menu":"活动参与管理"},{"child":[{"buttons":["添加会员","查看","审核","删除"],"menu":"会员申请","menuJump":"列表","tableName":"huiyuanshenqing"}],"menu":"会员申请管理"},{"child":[{"buttons":["查看"],"menu":"校园资讯","tableName":"news"},{"buttons":["新增","查看","修改","删除"],"menu":"在线咨询","tableName":"chat"},{"buttons":["查看","删除","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","删除","修改"],"menu":"社团申请信息列表","menuJump":"列表","tableName":"shetuanshenqingxinxi"}],"menu":"社团申请信息模块"},{"child":[{"buttons":["查看","加入社团"],"menu":"校园社团列表","menuJump":"列表","tableName":"xiaoyuanshetuan"}],"menu":"校园社团模块"},{"child":[{"buttons":["查看","报名参加"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"},{"child":[{"buttons":["查看"],"menu":"活动参与列表","menuJump":"列表","tableName":"huodongcanyu"}],"menu":"活动参与模块"},{"child":[{"buttons":["新增","查看"],"menu":"会员申请列表","menuJump":"列表","tableName":"huiyuanshenqing"}],"menu":"会员申请模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"校园社团","menuJump":"列表","tableName":"xiaoyuanshetuan"}],"menu":"校园社团管理"},{"child":[{"buttons":["查看"],"menu":"社团活动","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"会员申请","menuJump":"列表","tableName":"huiyuanshenqing"}],"menu":"会员申请管理"}],"frontMenu":[{"child":[{"buttons":["查看","删除","修改"],"menu":"社团申请信息列表","menuJump":"列表","tableName":"shetuanshenqingxinxi"}],"menu":"社团申请信息模块"},{"child":[{"buttons":["查看","加入社团"],"menu":"校园社团列表","menuJump":"列表","tableName":"xiaoyuanshetuan"}],"menu":"校园社团模块"},{"child":[{"buttons":["查看","报名参加"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"},{"child":[{"buttons":["查看"],"menu":"活动参与列表","menuJump":"列表","tableName":"huodongcanyu"}],"menu":"活动参与模块"},{"child":[{"buttons":["新增","查看"],"menu":"会员申请列表","menuJump":"列表","tableName":"huiyuanshenqing"}],"menu":"会员申请模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["查看","删除","修改"],"menu":"社团申请信息","menuJump":"列表","tableName":"shetuanshenqingxinxi"}],"menu":"社团申请信息管理"},{"child":[{"buttons":["查看","加入社团"],"menu":"校园社团","menuJump":"列表","tableName":"xiaoyuanshetuan"}],"menu":"校园社团管理"},{"child":[{"buttons":["查看","报名参加"],"menu":"社团活动","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"活动参与","menuJump":"列表","tableName":"huodongcanyu"}],"menu":"活动参与管理"}],"frontMenu":[{"child":[{"buttons":["查看","删除","修改"],"menu":"社团申请信息列表","menuJump":"列表","tableName":"shetuanshenqingxinxi"}],"menu":"社团申请信息模块"},{"child":[{"buttons":["查看","加入社团"],"menu":"校园社团列表","menuJump":"列表","tableName":"xiaoyuanshetuan"}],"menu":"校园社团模块"},{"child":[{"buttons":["查看","报名参加"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"},{"child":[{"buttons":["查看"],"menu":"活动参与列表","menuJump":"列表","tableName":"huodongcanyu"}],"menu":"活动参与模块"},{"child":[{"buttons":["新增","查看"],"menu":"会员申请列表","menuJump":"列表","tableName":"huiyuanshenqing"}],"menu":"会员申请模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"会员","tableName":"huiyuan"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
