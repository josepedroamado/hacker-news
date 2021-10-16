import axios from 'axios';

const service = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/'
});

export async function getStories() {
    try {
        var fetchedStoriesIds = await service.get(`/newstories.json`).then(({ data }) => data);
        //console.log(fetchedStoriesIds);
        //slice
        return fetchedStoriesIds.slice(1,50);
    }
    catch (error) {
        console.error(error);
    }
}

export async function getStory(storyId) {
    try {
        const story = await service.get(`/item/${storyId}.json`).then(({ data }) => data);
        //console.log(story);
        return story;
    }
    catch (error) {
        console.error(error);
    }
}