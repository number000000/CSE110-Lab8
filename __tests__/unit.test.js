// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber 2 true 2 false
test('isPhoneNumber true 1', () => {
    let phoneNumber = '(123)456-7890';
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

test('isPhoneNumber true 2', () => {
    let phoneNumber = '092-423-1442';
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

test('isPhoneNumber false 1', () => {
    let phoneNumber = '09273';
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

test('isPhoneNumber false 2', () => {
    let phoneNumber = '----';
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

//isEmail 2 true 2 false
test('isEmail true 1', () => {
    let email = 'abcw@ucsd.edu';
    expect(functions.isEmail(email)).toBe(true);
});

test('isEmail true 2', () => {
    let email = 'q1@bktAdf.nM';
    expect(functions.isEmail(email)).toBe(true);
});

test('isEmail false 1', () => {
    let email = 'werfcdrg';
    expect(functions.isEmail(email)).toBe(false);
});

test('isEmail false 2', () => {
    let email = 'a@3.22';
    expect(functions.isEmail(email)).toBe(false);
});

//isStrongPassword 2 true 2 false
test('isStrongPassword true 1', () => {
    let pw = 'aAbB';
    expect(functions.isStrongPassword(pw)).toBe(true);
});

test('isStrongPassword true 2', () => {
    let pw = 'terD34FrsgsSD';
    expect(functions.isStrongPassword(pw)).toBe(true);
});

test('isStrongPassword false 1', () => {
    let pw = 'a';
    expect(functions.isStrongPassword(pw)).toBe(false);
});

test('isStrongPassword false 2', () => {
    let pw = 'A0';
    expect(functions.isStrongPassword(pw)).toBe(false);
});

//isDate 2 true 2 false
test('isDate true 1', () => {
    let date = '12/23/5321';
    expect(functions.isDate(date)).toBe(true);
});

test('isDate true 2', () => {
    let date = '42/1/2413';
    expect(functions.isDate(date)).toBe(true);
});

test('isDate false 1', () => {
    let date = '1342\\32\\452124';
    expect(functions.isDate(date)).toBe(false);
});

test('isDate false 2', () => {
    let date = '12/1//2114';
    expect(functions.isDate(date)).toBe(false);
});

//isHexColor 2 true 2 false
test('isHexColor true 1', () => {
    let hexC = '#1f5';
    expect(functions.isHexColor(hexC)).toBe(true);
});

test('isHexColor true 2', () => {
    let hexC = 'ac391D';
    expect(functions.isHexColor(hexC)).toBe(true);
});

test('isHexColor false 1', () => {
    let hexC = '#ppp';
    expect(functions.isHexColor(hexC)).toBe(false);
});

test('isHexColor false 2', () => {
    let hexC = 'ffffffffffff';
    expect(functions.isHexColor(hexC)).toBe(false);
});