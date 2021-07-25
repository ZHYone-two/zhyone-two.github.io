new Vue({
    el: '#MusicPlay',
    data: {
        songs: [],
        search_song: '',
        search_song_show: '',
        show_result: false,
        musicURL: '',
        hotComments: [],
        Commentshow: false,
        MvURL: '',
        mvshows:false,

    },
    methods: {
        search_song_enter() {

            this.search_song_show = this.search_song;
            this.show_result = true;
            axios.get("https://autumnfish.cn/search?keywords=" + this.search_song)
                .then(response => {
                    this.songs = response.data.result.songs;


                })
        },
        playMusic(musicId) {
            this.Commentshow = true;
            axios.get("https://autumnfish.cn/song/url?id=" + musicId)
                .then(response => {
                    this.musicURL = response.data.data[0].url;

                });
            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId)
                .then(response => {
                    this.hotComments = response.data.hotComments;
                });
        },
        playMvId(MvId) {
            this.mvshows = true;
            axios.get("https://autumnfish.cn/mv/url?id=" + MvId)
                .then(response => {
                    this.MvURL=(response.data.data.url);
                });
        },
        mvclose() {
            this.mvshows = false;
        }

    }
})
