import Dexie from 'dexie';

const db = new Dexie('trello');

db.version(1).stores(
    {
        boards:"++id,name,color",
        lists:"++id,name,color",
        card:"++id,name,details,description"
    }
);

db.open().catch(function (e) {
    console.err("Open failed: " + e);
});

export default db;
