import {AdRecord} from "../record/ad.record";

test('AdRecord returns data from database for one entry.', async () => {

    const ad = await AdRecord.getOne('abc');

    console.log(ad);

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');
    expect(ad.name).toBe('Testowa');
});

test('AdRecord returns null database for unexciting entry.', async () => {

    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();
});