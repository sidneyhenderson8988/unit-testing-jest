const { test, expect } = require('@jest/globals')
const main = require('./main')

test('tests functions', () => {
    const budget = {
        myBudget: [
            {
                title: 'Phone',
                budget: 35
            },
            {
                title: 'Internet',
                budget: 45
            },
            {
                title: 'Education',
                budget: 80
            },
            {
                title: 'Eat out',
                budget: 25
            },
            {
                title: 'Rent',
                budget: 275
            },
            {
                title: 'Grocery',
                budget: 110
            },
            {
                title: 'Pharmacy',
                budget: 40
            },
            {
                title: 'Donations',
                budget: 10
            },
        ],
        sortedTitleBudgetAsc: [
            {
                title: 'Donations',
            },
            {
                title: 'Eat out',
            },
            {
                title: 'Education',
            },
            {
                title: 'Grocery',
            },
            {
                title: 'Internet',
            },
            {
                title: 'Pharmacy',
            },
            {
                title: 'Phone',
            },
            {
                title: 'Rent',
            },
        ],
        sortedTitleBudgetDesc: [
            {
                title: 'Rent',
            },
            {
                title: 'Phone',
            },
            {
                title: 'Pharmacy',
            },
            {
                title: 'Internet',
            },
            {
                title: 'Grocery',
            },
            {
                title: 'Education',
            },
            {
                title: 'Eat out',
            },
            {
                title: 'Donations',
            },
        ],
        sortedMoneyBudgetSmall: [
            {
                budget: 10
            },
            {
                budget: 25
            },
            {
                budget: 35
            },
            {
                budget: 40
            },
            {
                budget: 45
            },
            {
                budget: 80
            },
            {
                budget: 110
            },
            {
                budget: 275
            },
        ],
        sortedMoneyBudgetBigger: [
            {
                budget: 275
            },
            {
                budget: 110
            },
            {
                budget: 80
            },
            {
                budget: 45
            },
            {
                budget: 40
            },
            {
                budget: 35
            },
            {
                budget: 25
            },
            {
                budget: 10
            },
        ]
    };

    expect(generateTable(budget.myBudget).toEqual(budget.myBudget))
    expect(aZ(budget.myBudget).toEqual(budget.sortedTitleBudgetAsc))
    expect(zA(budget.myBudget).toEqual(budget.sortedTitleBudgetDesc))
    expect(smallerBudget(budget.myBudget).toEqual(budget.sortedMoneyBudgetSmall))
    expect(biggerBudget(budget.myBudget).toEqual(budget.sortedMoneyBudgetBigger))

})