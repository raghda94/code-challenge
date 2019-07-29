'use strict';

const chai = require('chai');

const challenge = require('../src/challenge');

const expect = chai.expect;

const testCases = [
    { A: [40, 40, 100, 60], B: [3, 3, 2, 2], M: 3, X: 3, Y: 200, totalFloors: 5 }
];

describe('Testing src/challenge.js', function () {
    return testCases.map(function (testCase, index) {
        const { A, B, M, X, Y, totalFloors } = testCase;
        it(`CASE ${index + 1}: A = [${A}], B = [${B}], M = ${M}, X = ${X}, Y = ${Y}`, function () {
            const expectedResult = totalFloors;

            const result = challenge(A, B, M, X, Y);

            expect(result).to.be.eql(expectedResult);
        });
        return testCase;
    });
});
