import Chance from 'chance';
import dayjs from 'dayjs';

const chance = new Chance();

export function getRandomFutureDate(): string {
    const today = dayjs();
    const maxDate = today.add(5, 'year');

    const minTimestamp = today.valueOf();
    const maxTimestamp = maxDate.valueOf();

    const randomTimestamp =
        Math.floor(Math.random() * (maxTimestamp - minTimestamp + 1)) + minTimestamp;

    return dayjs(randomTimestamp).format('YYYY-MM-DD');
}

export function getRandomAdultBirthDate(): string {
    const today = dayjs();

    const maxDate = today.subtract(18, 'year');
    const minDate = today.subtract(70, 'year');

    const minTimestamp = minDate.valueOf();
    const maxTimestamp = maxDate.valueOf();

    const randomTimestamp =
        Math.floor(Math.random() * (maxTimestamp - minTimestamp + 1)) + minTimestamp;

    return dayjs(randomTimestamp).format('YYYY-MM-DD');
}

export function generateEmployeeData() {
    const firstName = chance.first();
    const lastName = chance.last();
    const middleName = chance.first();
    const driverLicense = chance.string({ length: 8, pool: '0123456789' });
    const licenseExpiryDate = getRandomFutureDate();
    const dateOfBirth = getRandomAdultBirthDate();
    const employeeId = chance.string({ length: 6, pool: '0123456789' });
    return {
        firstName,
        middleName,
        lastName,
        employeeId,
        driverLicense,
        licenseExpiryDate,
        dateOfBirth
    };
}