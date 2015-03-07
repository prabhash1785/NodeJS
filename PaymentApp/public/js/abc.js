/**
 * Created by clboyd on 2/25/15.
 */

var month = {
    name: 'stringName',
    index: 0,
    year: 2015,
    days: [
        {
            courses: [
                {
                    name: 'coursename',
                    description: 'string short description',
                    id: 'id of the class instance'
                }
            ]
        }
    ]
}

var instance = {
    name: 'string',
    location: 'string',
    classroom: 'string',
    instructor: 'string',
    startDate: 'date',
    endDate: 'date'
}

var course = {
    name: 'string',
    shortDescription: 'string',
    duration: 'number of days',
    descUrl: 'confluence url',
    courseMaterialsUrl:'github url',
    instructors: [
        'instructor ids'
    ]
}

var instructor = {
    name: 'string',
    telephone: 'string',
    email: 'string',
    address: 'address',
    comment: 'string comment about instructor',
    courses: [
        'course ids'
    ]
};

var location = {
    address: 'id of address',
    mapUrl: 'url',
    building: 'name of building',
    room: 'string name / number of room'
}

var address = {
    address1: 'string',
    address2: 'string',
    city: 'string',
    state: 'string',
    zip: 'string',
    country: 'string',
    contact: {
        name: 'string',
        telephone: 'string',
        email: 'string'
    }
}