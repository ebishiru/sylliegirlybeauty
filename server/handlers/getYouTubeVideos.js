require("dotenv").config();
const { YT_KEY, CHANNEL_ID } = process.env;

const getYoutTubeVideos = async (req, res) => {
    
    try {
        //Fetch channel data
        const apiChannelDataUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YT_KEY}`
        const apiChannelResponse = await fetch(apiChannelDataUrl);
        if (!apiChannelResponse.ok) {
            throw new Error ("Unable to access YouTube Api V3 to collect uploads data")
        }
        const channelData = await apiChannelResponse.json();
        //Get upload playlist id from channel data
        const uploadsId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        //Fetch uploaded videos data
        const apiVideosDataUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&key=${YT_KEY}&maxResults=50`
        const apiVideosResponse = await fetch(apiVideosDataUrl);
        if (!apiVideosResponse.ok) {
            throw new Error ("Unable to access YouTube Api V3 to collect videos data")
        }
        const videosData = await apiVideosResponse.json();
        const videos = videosData.items
        res.status(200).json({ 
            status: 200, 
            data: videos
        });
        //Verify that the videos are not shorts and are longer than a minute (STRETCH GOAL)
        // data[0].snippet.title >> title
        // data[0].snippet.thumbnails.high.url >>> 
        // data[0].snippet.resourceId.videoId >>> url

    } catch (err) {
        throw err;
    }
};

module.exports = getYoutTubeVideos;