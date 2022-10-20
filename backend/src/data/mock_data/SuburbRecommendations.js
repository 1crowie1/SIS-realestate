const popularSuburbs = {
    suburbs: [
        {
            name: 'Mosman',
            averagePrice: 1000100,
            monthlyIncrease: 1.3,
            rating: 6
        },
        {
            name: 'Bankstown',
            averagePrice: 1100100,
            monthlyIncrease: -1.2,
            rating: 3
        },
        {
            name: 'North Sydney',
            averagePrice: 1200300,
            monthlyIncrease: 12.3,
            rating: 9
        },
        {
            name: 'Mosman',
            averagePrice: 1200400,
            monthlyIncrease: 42.6,
            rating: 8
        },
        {
            name: 'Revesby',
            averagePrice: 1350000,
            monthlyIncrease: 6.9,
            rating: 2
        },
        {
            name: 'Mt Druit',
            averagePrice: 970000,
            monthlyIncrease: 0.8,
            rating: 1
        },
        {
            name: 'Randwick',
            averagePrice: 6800300,
            monthlyIncrease: 308.0,
            rating: 3
        },
        {
            name: 'Cronulla',
            averagePrice: 7000000,
            monthlyIncrease: 240.6,
            rating: 10
        }
    ]
};

const recommendedSuburbs = {
    suburbs: [
        {
            name: 'Mosman',
            recommendationCount: 157
        },
        {
            name: 'Bankstown',
            recommendationCount: 34
        },
        {
            name: 'North Sydney',
            recommendationCount: 403
        },
        {
            name: 'Mosman',
            recommendationCount: 259
        },
        {
            name: 'Revesby',
            recommendationCount: 67
        },
        {
            name: 'Randwick',
            recommendationCount: 23
        },
        {
            name: 'Cronulla',
            recommendationCount: 34
        }
    ]
};

module.exports = {
    popularSuburbs, 
    recommendedSuburbs
}