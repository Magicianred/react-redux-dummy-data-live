import includes from 'lodash/includes';
import filter from 'lodash/filter';
import orderBy from 'lodash/orderBy';

/**
 * Represent an empty post entity
 */
export const default_empty_post = {
    id: 0,
    title: '',
    description: '',
    text: '',
    categories: [],
    createDate: undefined
};

/**
 * Text filter for retrieve posts
 * 
 * @param {string} query
 * @returns 
 */
export const getDummyDataPosts = (query) => {
    // get dummydata with default order
    let dummyData = orderBy(default_complete_list, ['id', 'title']);

    let data = null;
    if(query) {
        // if there is a text filter, apply it
        data = filter(dummyData, item => includes(item.title, query));
    } else {
        data = dummyData;
    }
    return data;
}

/**
 * List of dummy data posts
 */
export const default_complete_list = [
    {
        id: 1,
        title: 'post 1',
        description: 'description 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat. Diam phasellus vestibulum lorem sed risus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Mattis rhoncus urna neque viverra justo nec. Egestas dui id ornare arcu odio. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Etiam erat velit scelerisque in dictum non. Dolor magna eget est lorem ipsum dolor sit. Elit eget gravida cum sociis. Etiam tempor orci eu lobortis elementum nibh tellus. Elementum facilisis leo vel fringilla. Orci sagittis eu volutpat odio facilisis mauris sit amet. Mauris a diam maecenas sed enim ut sem. Tempor commodo ullamcorper a lacus vestibulum sed. Et malesuada fames ac turpis egestas maecenas. Dui sapien eget mi proin sed. Est ultricies integer quis auctor elit sed vulputate. Id diam maecenas ultricies mi.',
        categories: [1,2],
        createDate: new Date(2021, 0, 1)
    },
    {
        id: 2,
        title: 'post 2',
        description: 'description 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat. Diam phasellus vestibulum lorem sed risus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Mattis rhoncus urna neque viverra justo nec. Egestas dui id ornare arcu odio. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Etiam erat velit scelerisque in dictum non. Dolor magna eget est lorem ipsum dolor sit. Elit eget gravida cum sociis. Etiam tempor orci eu lobortis elementum nibh tellus. Elementum facilisis leo vel fringilla. Orci sagittis eu volutpat odio facilisis mauris sit amet. Mauris a diam maecenas sed enim ut sem. Tempor commodo ullamcorper a lacus vestibulum sed. Et malesuada fames ac turpis egestas maecenas. Dui sapien eget mi proin sed. Est ultricies integer quis auctor elit sed vulputate. Id diam maecenas ultricies mi.',
        categories: [1,3],
        createDate: new Date(2021, 1, 1)
    },
    {
        id: 3,
        title: 'post 3',
        description: 'description 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat. Diam phasellus vestibulum lorem sed risus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Mattis rhoncus urna neque viverra justo nec. Egestas dui id ornare arcu odio. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Etiam erat velit scelerisque in dictum non. Dolor magna eget est lorem ipsum dolor sit. Elit eget gravida cum sociis. Etiam tempor orci eu lobortis elementum nibh tellus. Elementum facilisis leo vel fringilla. Orci sagittis eu volutpat odio facilisis mauris sit amet. Mauris a diam maecenas sed enim ut sem. Tempor commodo ullamcorper a lacus vestibulum sed. Et malesuada fames ac turpis egestas maecenas. Dui sapien eget mi proin sed. Est ultricies integer quis auctor elit sed vulputate. Id diam maecenas ultricies mi.',
        categories: [1],
        createDate: new Date(2021, 2, 1)
    },
    {
        id: 4,
        title: 'post 4',
        description: 'description 4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat. Diam phasellus vestibulum lorem sed risus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Mattis rhoncus urna neque viverra justo nec. Egestas dui id ornare arcu odio. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Etiam erat velit scelerisque in dictum non. Dolor magna eget est lorem ipsum dolor sit. Elit eget gravida cum sociis. Etiam tempor orci eu lobortis elementum nibh tellus. Elementum facilisis leo vel fringilla. Orci sagittis eu volutpat odio facilisis mauris sit amet. Mauris a diam maecenas sed enim ut sem. Tempor commodo ullamcorper a lacus vestibulum sed. Et malesuada fames ac turpis egestas maecenas. Dui sapien eget mi proin sed. Est ultricies integer quis auctor elit sed vulputate. Id diam maecenas ultricies mi.',
        categories: [1,3],
        createDate: new Date(2021, 3, 1)
    },
    {
        id: 5,
        title: 'post 5',
        description: 'description 5',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat. Diam phasellus vestibulum lorem sed risus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Mattis rhoncus urna neque viverra justo nec. Egestas dui id ornare arcu odio. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Etiam erat velit scelerisque in dictum non. Dolor magna eget est lorem ipsum dolor sit. Elit eget gravida cum sociis. Etiam tempor orci eu lobortis elementum nibh tellus. Elementum facilisis leo vel fringilla. Orci sagittis eu volutpat odio facilisis mauris sit amet. Mauris a diam maecenas sed enim ut sem. Tempor commodo ullamcorper a lacus vestibulum sed. Et malesuada fames ac turpis egestas maecenas. Dui sapien eget mi proin sed. Est ultricies integer quis auctor elit sed vulputate. Id diam maecenas ultricies mi.',
        categories: [2,3],
        createDate: new Date(2021, 4, 1)
    },
    {
        id: 6,
        title: 'post 6',
        description: 'description 6',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat. Diam phasellus vestibulum lorem sed risus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Mattis rhoncus urna neque viverra justo nec. Egestas dui id ornare arcu odio. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Etiam erat velit scelerisque in dictum non. Dolor magna eget est lorem ipsum dolor sit. Elit eget gravida cum sociis. Etiam tempor orci eu lobortis elementum nibh tellus. Elementum facilisis leo vel fringilla. Orci sagittis eu volutpat odio facilisis mauris sit amet. Mauris a diam maecenas sed enim ut sem. Tempor commodo ullamcorper a lacus vestibulum sed. Et malesuada fames ac turpis egestas maecenas. Dui sapien eget mi proin sed. Est ultricies integer quis auctor elit sed vulputate. Id diam maecenas ultricies mi.',
        categories: [1],
        createDate: new Date(2021, 5, 1)
    },
    {
        id: 7,
        title: 'post 7',
        description: 'description 7',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat. Diam phasellus vestibulum lorem sed risus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Mattis rhoncus urna neque viverra justo nec. Egestas dui id ornare arcu odio. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Etiam erat velit scelerisque in dictum non. Dolor magna eget est lorem ipsum dolor sit. Elit eget gravida cum sociis. Etiam tempor orci eu lobortis elementum nibh tellus. Elementum facilisis leo vel fringilla. Orci sagittis eu volutpat odio facilisis mauris sit amet. Mauris a diam maecenas sed enim ut sem. Tempor commodo ullamcorper a lacus vestibulum sed. Et malesuada fames ac turpis egestas maecenas. Dui sapien eget mi proin sed. Est ultricies integer quis auctor elit sed vulputate. Id diam maecenas ultricies mi.',
        categories: [2],
        createDate: new Date(2021, 6, 1)
    }
];
