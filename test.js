var randomMenu = {
  '해장국집': ['냉모밀'
    , '짜그리'
    , '돈까스'
    , '국밥'
    , '콩나물해장국'
  ],
  '중식': ['짜장면'
    , '짬뽕'
    , '볶음짬뽕'
    , '탕수육'
    , '냉면'
  ],
  '분식': ['치돈'
    , '김밥라면'
    , '알밥'
  ],
  '한식': ['오징어덮밥'
    , '제육덮밥'
    , '생선구이'
    , '순두부찌개'
  ]
};

function randomMenuItem(a) {
  var result = '';

  Object.keys(a).forEach(function(key) {
    var arr = a[key];
    result += '[' + key + '] ' + arr[Math.floor(Math.random() * arr.length)] + '\n';
  });
  
  return result;
}

randomMenuItem(randomMenu);