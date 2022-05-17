import {AdRecord} from "../record/ad.record";

const defaultObj = {
    name: 'Testowa Osoba',
    description: 'Bla bla',
    url: 'https://megakurs.pl',
    lat: 9,
    lon: 9,
    price: 0,
};

test('Can build AdRecord', () => {
    const ad = new AdRecord(defaultObj);

    expect(ad.name).toBe('Testowa Osoba');
    expect(ad.description).toBe('Bla bla');
});

test('Validates invalid price', () => {
    const ad = new AdRecord({
        ...defaultObj,
        price: -3,
    });

    expect(()=> new AdRecord({
        ...defaultObj,
        price: -3,
    })).toThrow('Cena nie może być mniejsza niż 0 lub większa niż 9 999 999.')
});

//@TODO: Check all the validations