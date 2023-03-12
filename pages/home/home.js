var days, hours, minutes, seconds;
var ldays, lhours, lminutes, lseconds;
Page({
    data:{
        days:0,
        hours:0,
        minutes:0,
        seconds:0,
        ldays:0,
        lhours:0,
        lminutes:0,
        lseconds:0,
        words:"../../audio/bless_words.mp3",
    },
    onLoad:function(){
        var that = this;
        this.audoicCtx = wx.createAudioContext('myWords');
        this.audoicCtx.play();
        setInterval(function(){
            var now = new Date();
            var birthDate = new Date(2000, 3, 27);
            var loveDate = new Date(2022, 10, 15, 17, 9);

            var leftTime = now.getTime() - birthDate.getTime();
            var lleftTime = now.getTime() - loveDate.getTime();

            days = Math.floor(leftTime / 1000 / 60 / 60 / 24);
            hours = Math.floor(leftTime / 1000 / 60 / 60 % 24);
            minutes = Math.floor(leftTime / 1000 / 60 % 60);
            seconds = Math.floor(leftTime / 1000 % 60);

            ldays = Math.floor(lleftTime / 1000 / 60 / 60 / 24);
            lhours = Math.floor(lleftTime / 1000 / 60 / 60 % 24);
            lminutes = Math.floor(lleftTime / 1000 / 60 % 60);
            lseconds = Math.floor(lleftTime / 1000 % 60);
            that.setData({
                days:days,
                hours:hours,
                minutes:minutes,
                seconds:seconds,
                ldays:ldays,
                lhours:lhours,
                lminutes:lminutes,
                lseconds:lseconds,
            });
        },1000);
    }
});
