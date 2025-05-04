db.createCollection('products',{
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            properties: {
                name: {
                    bsonType: 'string'
                },
                price: {
                    bsonType: 'double'
                },
                manufacturerId: {
                    bsonType: 'objectId'
                },
                amount: {
                    bsonType: 'number'
                },
                expiredDate: {
                    bsonType: 'date'
                }
            }
        }
    }
});

db.createCollection('manufacturers',{
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            properties: {
                name: {
                    bsonType: 'string'
                },
                adress: {
                    bsonType: 'object',
                    properties: {
                        country: {
                            bsonType: 'string'
                        },
                        city: {
                            bsonType: 'string'
                        }
                    }
                }
            }
        }
    }
});



db.products.aggregate([
    {
        $lookup: {
            from: 'manufacturers',
            localField: 'manufacturerId',
            foreignField: '_id',
            as: 'manufacturer'
        }
    },
    {
        $unwind: {
            path: '$manufacturer'
        }
    },
    {
        $unset: 'manufacturerId'
    },
    {
        $group: {
            _id: '$manufacturer.name',
            productsQuantity: {
                $count: {}
            }
        }
    }
]);

// from - название колекции с которой нужно получить данные для объединения(правая таблица)
// localField - поле в выходной колекции, по которому будет происходить соединение(поле с левой таблици)
// foreignField - поле в внешней колекции, по которому будет происходить соединение(поле с правой таблици)
// as - псевдоним для результативного масива после объединения