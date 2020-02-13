function loadAllSites() {
    const siteList = {
        "常用推荐": [
            {
                "name": "哔哩哔哩",
                "img": "blbl.png",
                "link": "http://www.bilibili.com/"
            },
            {
                "name": "雀魂",
                "img": "qh.jfif",
                "link": "https://www.majsoul.com/1/"
            }
        ],
        "视听": [
            {
                "name": "腾讯视频",
                "img": "txsp.png",
                "link": "https://v.qq.com/"
            },
            {
                "name": "优酷视频",
                "img": "yksp.png",
                "link": "https://www.youku.com/"
            },
            {
                "name": "爱奇艺",
                "img": "aqy.png",
                "link": "https://www.iqiyi.com/"
            },
            {
                "name": "网易云",
                "img": "wyy.jfif",
                "link": "https://music.163.com/"
            },
            {
                "name": "Youtobe",
                "img": "youtube.jpg",
                "link": "https://www.youtube.com/"
            }
        ],
        "论坛": [
            {
                "name": "吾爱破解",
                "img": "wapj.png",
                "link": "https://www.52pojie.cn/"
            },
            {
                "name": "南+",
                "img": "n+.gif",
                "link": "https://www.south-plus.net/"
            },
            {
                "name": "知乎",
                "img": "zh.jpg",
                "link": "https://www.zhihu.com/"
            },
            {
                "name": "半次元",
                "img": "bcy.jfif",
                "link": "https://bcy.net/"
            }
        ],
        "技术": [
            {
                "name": "Github",
                "img": "github.png",
                "link": "https://github.com/"
            },
            {
                "name": "W3school",
                "img": "w3school.jpg",
                "link": "https://www.w3school.com.cn/"
            }
        ],
        "图片": [
            {
                "name": "Pixiv",
                "img": "pixiv.png",
                "link": "https://www.pixiv.net/"
            },
            {
                "name": "bilibili相册",
                "img": "blblxc.png",
                "link": "https://h.bilibili.com/"
            },
            {
                "name": "Wallroom",
                "img": "Wallroom.png",
                "link": "https://wallroom.io/"
            }
        ],
        "工具": [
            {
                "name": "百度翻译",
                "img": "bdfy.png",
                "link": "https://fanyi.baidu.com/?aldtype=16047#auto/zh"
            },
            {
                "name": "生成二维码",
                "img": "clewm.png",
                "link": "https://cli.im/"
            }
        ]
    }

    const sitesNode = document.getElementById('sites')
    for (const key in siteList) {
        if (siteList.hasOwnProperty(key)) {
            const category = siteList[key];
            const categoryNode = document.createElement('div')
            categoryNode.setAttribute('class', 'b')
    
            let siteHTML = '';
            for (const site of category) {
                siteHTML += `<div class="c">
                    <a href="${site.link}">
                        <span class="img">
                            <img src="img/${site.img}" alt="图裂了">
                        </span>
                        <span class="name">
                            <b>${site.name}</b>
                        </span>
                    </a>
                </div>`
            }
            let innerHTML = `<div class="title">${key}</div><div class="box">${siteHTML}</div>`
            categoryNode.innerHTML = innerHTML
            sitesNode.appendChild(categoryNode)
        }
    }
}

document.addEventListener('DOMContentLoaded', loadAllSites)
