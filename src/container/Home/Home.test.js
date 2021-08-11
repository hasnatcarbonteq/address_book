import 'jsdom-global/register';
import React from 'react'

import Home from './Home'
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

/**
 * @jest-environment jsdom
 */

// afterEach( () => {
//     cleanup()
// })


const details= {
    "gender": "female",
    "name": {
        "title": "Miss",
        "first": "Joy",
        "last": "Howell"
    },
    "location": {
        "street": {
            "number": 5557,
            "name": "Groveland Terrace"
        },
        "city": "Garden Grove",
        "state": "Pennsylvania",
        "country": "United States",
        "postcode": 54833,
        "coordinates": {
            "latitude": "42.3030",
            "longitude": "-144.4206"
        },
        "timezone": {
            "offset": "-3:30",
            "description": "Newfoundland"
        }
    },
    "email": "joy.howell@example.com",
    "login": {
        "uuid": "65c77819-9649-42a0-9826-6f7645855b71",
        "username": "angrycat361",
        "password": "272727",
        "salt": "hFldVOL4",
        "md5": "7e8198665a810695634a78a966d97d3b",
        "sha1": "47c387fa599301932c21b3bc236794a9e5f9012c",
        "sha256": "445ae27422411e65f5c8ad578e38ac18385f915c1b71010efb5d2a4af0668ff2"
    },
    "dob": {
        "date": "1950-04-20T19:52:37.112Z",
        "age": 71
    },
    "registered": {
        "date": "2011-11-22T21:48:43.937Z",
        "age": 10
    },
    "phone": "(162)-939-4673",
    "cell": "(157)-628-7705",
    "id": {
        "name": "SSN",
        "value": "663-12-4986"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/women/29.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/29.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/29.jpg"
    },
    "nat": "US"
}

describe('DetailedView', () => {

    it('All data should display', () => {
    
        const fetcher = true
        const wrapper = shallow(<Home />);
        expect(wrapper.find("Row").children().length).toBe(7)
        
    })
})