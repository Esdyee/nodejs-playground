const countDuplicateTitle = (arr) => {
    // const result = arr.filter((item, index) => {
    //     console.log(arr.indexOf(item.studyFullNm), index);
    //     return arr.indexOf(item.studyFullNm) === index;
    // })

    const result = arr.filter((item, index, self) => {
        const firstIndex = self.findIndex((t) => (
            t.studyFullNm === item.studyFullNm
        ))
        console.log(index, firstIndex);
        return index === firstIndex
    }

  );

    console.log(result);
};

const arr = [
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
]

countDuplicateTitle(arr);
