// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "測試你的知識水平",
        "main":    "<h4>测试是检验蛤丝的唯一标准！测试你到底是不是真正的蛤丝。</h4>",
        "level1":  "这是最好的，快去免费<a href=\"javascript:void(0)\" onclick=\"window.open('hp.html','','width=700,height=700,toolbar=no, status=no, menubar=no, resizable=yes, scrollbars=yes');return false;\">领取蛤啤</a>吧！",
        "level2":  "你们非常熟悉长者的那一套理论，但你们毕竟还 Too Young！",
        "level3":  "我觉得你们蛤丝界还是要学习一个。",
        "level4":  "连这些都不识得还说自己是蛤丝？",
        "level5":  "你呀，Naive！" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "__国的华莱士，比你们不知高到哪里去了！",
            "a": [
                {"option": "美",     "correct": true},
                {"option": "英",     "correct": false},
                {"option": "法",     "correct": false},
                {"option": "中",     "correct": false} // no comma here
            ],
            "correct": "<p><span>［正确］</span></p>",
            "incorrect": "<p><span>［错误］</span></p>" // no comma here
        },
        { // Question 2
            "q": "每次碰到你们，我就想到—中国有句古话叫做“________”。",
            "a": [
                {"option": "闷声发大财",     "correct": true},
                {"option": "祸从口出",     "correct": false},
                {"option": "沉默是金",     "correct": false},
                {"option": "闷声大发财",   "correct": false} // no comma here
            ],
            "correct": "<p><span>［正确］</span></p>",
            "incorrect": "<p><span>［错误］</span>闷声发大财</p>" // no comma here
        },
        { // Question 3 
            "q": "在『怒斥香港记者』中，长者都说了哪些英文？",
            "a": [
                {"option": "Sometimes Naive!",           "correct": true},
                {"option": "That Is A Big Mistake!",     "correct": false},
                {"option": "I Am Angry!",  "correct": true},
                {"option": "Too Young, Too Simple.",          "correct": true} // no comma here
            ],
            "correct": "<p><span>［正确］</span></p>",
            "incorrect": "<p><span>［错误］</span>I Am Angry! 你们这样是不行的！我今天算是得罪了你们一下。</p>" // no comma here
        },
        { // Question 4
            "q": "我就什么话也不说，这是<span class=\"i\">最</span>好的！（红字的拼音）",
            "a": [
                {"option": "zuì",    "correct": false},
                {"option": "zhuì",     "correct": true},
                {"option": "zì",      "correct": false},
                {"option": "zueì",   "correct": false} // no comma here
            ],
            "correct": "<p><span>［正确］</span></p>",
            "incorrect": "<p><span>［错误］</span>我就什么话也不说，这是坠好的！</p>" // no comma here
        },
        { // Question 5
            "q": "华莱士的全名是？",
            "a": [
                {"option": "Mike Wallace",    "correct": true},
                {"option": "Michael Wallace",    "correct": false},
                {"option": "Mick Hallice",     "correct": false},
                {"option": "Max Hualesh",   "correct": false} // no comma here
            ],
            "correct": "<p><span>［正确］</span></p>",
            "incorrect": "<p><span>［错误］</span>Mike Wallace</p>" // no comma here
        } // no comma here
    ]
};
