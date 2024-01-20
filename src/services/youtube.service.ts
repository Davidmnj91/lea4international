'use server';

import { getAuthToken, oAuthClient } from '@/services/oath.service';
import { google, youtube_v3 } from 'googleapis';

export const getVideos =
  async (): Promise<youtube_v3.Schema$SearchListResponse> => {
    await getAuthToken();
    const client = oAuthClient();
    client.apiKey = process.env.YOUTUBE_API_KEY!;
    const youtubeService = google.youtube('v3');
    const { data } = await youtubeService.search.list({
      auth: client,
      channelId: 'UCMQZSMxrlgjZEAlJJdds89w', // 'UC58jbZp1CqC--5HBphpJmdg',
      part: ['snippet', 'id'],
      order: 'date',
    });

    return data;
  };
