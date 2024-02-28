function groupByStudyFullNm(data) {
  const grouped = data.reduce((acc, obj) => {
    // `studyFullNm` 값으로 그룹화
    acc[obj.studyFullNm] = acc[obj.studyFullNm] || [];
    acc[obj.studyFullNm].push(obj);
    return acc;
  }, {});

  console.log(grouped);

  const result = Object.values(grouped).map(group => {
    // 그룹에 객체가 하나만 있으면 객체를 반환, 그렇지 않으면 배열을 반환
    return group.length === 1 ? group[0] : group;
  });

  return result;
}

// 예제 데이터
const data = [
  {
    "score": "독해력 24%",
    "studyDt": "20240222 06:08",
    "resetCnt": 0,
    "coachingYn": "N",
    "studyFullNm": "추천 3레벨 95레슨 비문학"
  },
  {
    "score": "독해력 51%",
    "studyDt": "20240222 05:27",
    "resetCnt": 0,
    "coachingYn": "N",
    "studyFullNm": "맞춤 3레벨 15레슨 문학"
  },
  {
    "score": "독해력 37%",
    "studyDt": "20240222 05:00",
    "resetCnt": 1,
    "coachingYn": "N",
    "studyFullNm": "맞춤 3레벨 15레슨 문학"
  },
  {
    "score": "독해력 28%",
    "studyDt": "20240222 03:05",
    "resetCnt": 0,
    "coachingYn": "N",
    "studyFullNm": "맞춤 1레벨 1레슨 문학"
  }
];

console.log(groupByStudyFullNm(data));
