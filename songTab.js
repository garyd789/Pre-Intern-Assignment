'use strict';
class songTab{
    constructor(songname, artist, timestamp, links, released) {
        this.songname = songname;
        this.artist = artist;
        this.timestamp = timestamp;
        this.released = released;
        this.links = links; 
    }
}


const Aiker = new songTab("unknown", "Aikers", "0:00");
document.getElementById("Aikers").innerHTML = Aiker.songname + " " + Aiker.artist + " " + Aiker.timestamp;

const HiJack = new songTab("unknown", "HiJack", "1:30");
document.getElementById("HiJack").innerHTML = HiJack.songname + " " + HiJack.artist + " " + HiJack.timestamp;

const Don_Parmesan = new songTab("unknown", "Don Parmesan", "2:40" );
document.getElementById("Don Parmesan").innerHTML = Don_Parmesan.songname + " " + Don_Parmesan.artist + " " + Don_Parmesan.timestamp;

const HYPDELIC_Netwerk = new songTab("unknown", "HYPDELIC & Netwerk", "3:50");
document.getElementById("HYPDELIC & Netwerk").innerHTML = HYPDELIC_Netwerk.songname + " " + HYPDELIC_Netwerk.artist + " " + HYPDELIC_Netwerk.timestamp;

const SUBSHIFT_HOODERS = new songTab("Furious![GENERATION HEX]", "SUBSHIFT & Hooders", "4:40" );
document.getElementById("SUBSHIFT_HOODERS").innerHTML = SUBSHIFT_HOODERS.songname + " " + SUBSHIFT_HOODERS.artist + " " + SUBSHIFT_HOODERS.timestamp; 