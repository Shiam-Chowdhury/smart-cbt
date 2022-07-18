const partialQuestionSets = [
    {
        _id: '001',
        name: 'one one',
        questions: [
            {
                is_from_question_bank: true,
                question:{
                    _id: '00001',
                    details: 'details 1',
                    tag:'react',
                    type: 'mcq',
                    rank: '4A',
                    difficulty: 'medium',
                    remarks: 'asdads',
                    answer: {},
                    count: 0,
                    comments: 'asdadsasd'
                },
                mark: 10,
                isAdded: false
            },
            {
                is_from_question_bank: true,
                question:{
                    _id: '00002',
                    details: 'details 2',
                    tag:'react',
                    type: 'mcq',
                    rank: '4A',
                    difficulty: 'medium',
                    remarks: 'asdads',
                    answer: {},
                    count: 0,
                    comments: 'asdadsasd'
                },
                mark: 10,
                isAdded: false
            },
            {
                is_from_question_bank: true,
                question:{
                    _id: '00003',
                    details: 'details 3',
                    tag:'react',
                    type: 'mcq',
                    rank: '4A',
                    difficulty: 'medium',
                    remarks: 'asdads',
                    answer: {},
                    count: 0,
                    comments: 'asdadsasd'
                },
                mark: 10,
                isAdded: false
            }
        ]
    },
    {
        _id: '002',
        name: 'two two',
        questions: [
            {
                is_from_question_bank: true,
                question:{
                    _id: '00010',
                    details: 'details 1',
                    tag:'vue',
                    type: 'mcq',
                    rank: '4A',
                    difficulty: 'medium',
                    remarks: 'asdads',
                    answer: {},
                    count: 0,
                    comments: 'asdadsasd'
                },
                mark: 10,
                isAdded: false
            },
            {
                is_from_question_bank: true,
                question:{
                    _id: '00011',
                    details: 'details 2',
                    tag:'vue',
                    type: 'mcq',
                    rank: '4A',
                    difficulty: 'medium',
                    remarks: 'asdads',
                    answer: {},
                    count: 0,
                    comments: 'asdadsasd'
                },
                mark: 10,
                isAdded: false
            },
            {
                is_from_question_bank: true,
                question:{
                    _id: '00012',
                    details: 'details 3',
                    tag:'vue',
                    type: 'mcq',
                    rank: '4A',
                    difficulty: 'medium',
                    remarks: 'asdads',
                    answer: {},
                    count: 0,
                    comments: 'asdadsasd'
                },
                mark: 10,
                isAdded: false
            }
        ]
    },
];

module.exports = {
    partialQuestionSets,
}