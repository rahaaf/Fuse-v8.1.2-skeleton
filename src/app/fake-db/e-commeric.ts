export class ECommerceFakeDb
{
    public static products = [
        {
            'id'              : '1',
            'name'            : 'banana',
            'handle'          : 'banana',
            'description'     : 'Officia amet eiusmod eu sunt tempor voluptate laboris velit nisi amet enim proident et. Consequat laborum non eiusmod cillum eu exercitation. Qui adipisicing est fugiat eiusmod esse. Sint aliqua cupidatat pariatur mollit ad est proident reprehenderit. Eiusmod adipisicing laborum incididunt sit aliqua ullamco.',
            'category'      : 'vegtables',
            'tags'            : [
                'canvas-print',
                'nature'
            ],
            'featuredImageId' : 1,
            'images'          : [
                {
                    'id'  : 0,
                    'url' : 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 1,
                    'url' : 'assets/images/ecommerce/braies-lake.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 2,
                    'url' : 'assets/images/ecommerce/fall-glow.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 3,
                    'url' : 'assets/images/ecommerce/first-snow.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 4,
                    'url' : 'assets/images/ecommerce/lago-di-braies.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 5,
                    'url' : 'assets/images/ecommerce/lago-di-sorapis.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 6,
                    'url' : 'assets/images/ecommerce/never-stop-changing.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 7,
                    'url' : 'assets/images/ecommerce/reaching.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 8,
                    'url' : 'assets/images/ecommerce/morain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 9,
                    'url' : 'assets/images/ecommerce/yosemite.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl'    : 9.309,
            'priceTaxIncl'    : 10.24,
            'quantity'        : true,
            'weight'          : '3',
            'active'          : true
        },
        {
            'id'              : '2',
            'name'            : 'apple',
            'handle'          : 'apple',
            'description'     : 'Duis anim est non exercitation consequat. Ullamco ut ipsum dolore est elit est ea elit ad fugiat exercitation. Adipisicing eu ad sit culpa sint. Minim irure Lorem eiusmod minim nisi sit est consectetur.',
            'category'      : 'frutis',
            'tags'            : [
                'canvas-print',
                'nature'
            ],
            'featuredImageId' : 2,
            'images'          : [
                {
                    'id'  : 0,
                    'url' : 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 1,
                    'url' : 'assets/images/ecommerce/braies-lake.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 2,
                    'url' : 'assets/images/ecommerce/fall-glow.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 3,
                    'url' : 'assets/images/ecommerce/first-snow.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 4,
                    'url' : 'assets/images/ecommerce/lago-di-braies.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 5,
                    'url' : 'assets/images/ecommerce/lago-di-sorapis.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 6,
                    'url' : 'assets/images/ecommerce/never-stop-changing.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 7,
                    'url' : 'assets/images/ecommerce/reaching.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 8,
                    'url' : 'assets/images/ecommerce/morain-lake.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 9,
                    'url' : 'assets/images/ecommerce/yosemite.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl'    : 22.381,
            'priceTaxIncl'    : 24.62,
            'quantity'        : true,
            'weight'          : '3',
            'active'          : true
        },
    ];

    public static orders = [
        {
            'id'             : 1,
            'reference'      : '70d4d7d0',
            'subtotal'       : '39.97',
            'tax'            : '77.44',
            'discount'       : '-10.17',
            'total'          : '73.31',
            'date'           : '2018/04/25 02:07:59',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Dollie',
                'lastName'       : 'Bullock',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'interfacingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'banana',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id'      : 2,
                    'name'    : 'apple',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id'      : 3,
                    'name'    : 'Never Stop Changing - Canvas Print',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status'         : [
                {
                    'id'   : 13,
                    'name' : 'On pre-order (not paid)',
                    'color': 'purple-300',
                    'date' : '2018/04/03 10:06:18'
                },
                {
                    'id'   : 1,
                    'name' : 'Awaiting check payment',
                    'color': 'blue-500',
                    'date' : '2018/03/17 18:28:37'
                }
            ],
            'payment'        : {
                'transactionId': '2a894b9e',
                'amount'       : '73.31',
                'method'       : 'Direct',
                'date'         : '2018/02/23 15:50:23'
            },
            'interfacingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'TNT',
                    'weight'  : '10.44',
                    'fee'     : '7.00',
                    'date'    : '2018/04/10 07:03:52'
                }
            ]
        },
        {
            'id'             : 2,
            'reference'      : '2003479c',
            'subtotal'       : '98.68',
            'tax'            : '45.55',
            'discount'       : '-10.25',
            'total'          : '24.51',
            'date'           : '2018/11/07 15:47:31',
            'customer'       : {
                'id'             : 1,
                'firstName'      : 'Holmes',
                'lastName'       : 'Hines',
                'email'          : 'abbott@withinpixels.com',
                'phone'          : '+1-202-555-0175',
                'interfacingAddress': {
                    'address': '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
                    'lat'    : 41.2183223,
                    'lng'    : -95.8420876
                }
            },
            'products'       : [
                {
                    'id'      : 1,
                    'name'    : 'A Walk Amongst Friends - Canvas Print',
                    'price'   : '10.24',
                    'quantity': 1,
                    'total'   : '10.24',
                    'image'   : 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
                },
                {
                    'id'      : 2,
                    'name'    : 'Lago di Braies - Canvas Print',
                    'price'   : '24.62',
                    'quantity': 1,
                    'total'   : '24.62',
                    'image'   : 'assets/images/ecommerce/lago-di-braies.jpg'
                },
                {
                    'id'      : 3,
                    'name'    : 'Never Stop Changing - Canvas Print',
                    'price'   : '49.29',
                    'quantity': 1,
                    'total'   : '49.29',
                    'image'   : 'assets/images/ecommerce/never-stop-changing.jpg'
                }
            ],
            'status'         : [
                {
                    'id'   : 2,
                    'name' : 'Payment accepted',
                    'color': 'green-500',
                    'date' : '2018/10/04 08:54:33'
                },
                {
                    'id'   : 1,
                    'name' : 'Awaiting check payment',
                    'color': 'blue-500',
                    'date' : '2018/05/03 03:43:04'
                }
            ],
            'payment'        : {
                'transactionId': '79c640c8',
                'amount'       : '24.51',
                'method'       : 'Check',
                'date'         : '2018/04/22 04:49:49'
            },
            'interfacingDetails': [
                {
                    'tracking': '',
                    'carrier' : 'USPS',
                    'weight'  : '2.92',
                    'fee'     : '4.00',
                    'date'    : '2018/07/11 14:57:12'
                }
            ]
        },
       
    ];
}
