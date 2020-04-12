import { mapperNumeral } from '../src/Mapper/mapper';

test('arabic to roman', () => {
  expect(new mapperNumeral("123").convert().message).toBe("CXXIII");
  expect(new mapperNumeral("123").convert().success).toBe(true);
});

test('roman to arabic', () => {
  expect(new mapperNumeral("CXXIII").convert().message).toBe(123);
  expect(new mapperNumeral("CXXIII").convert().success).toBe(true);
});

test('Should be not convert if roman invalid', () => {
  expect(new mapperNumeral("XXXX").convert().success).toBe(false);
  expect(new mapperNumeral("XX4XX").convert().success).toBe(false);
});

test('Should be not convert if arabic invalid', () => {
  expect(new mapperNumeral("4500").convert().success).toBe(false);
  expect(new mapperNumeral("-4").convert().success).toBe(false);
  expect(new mapperNumeral("-4.3").convert().success).toBe(false);
  expect(new mapperNumeral("200.36").convert().success).toBe(false);
  expect(new mapperNumeral("1X8").convert().success).toBe(false);
  expect(new mapperNumeral("9C").convert().success).toBe(false);
});