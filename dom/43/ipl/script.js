let arr=[
    {
        team:"csk",
        fullName:"chennai super kings",
        captain:"ms dhoni",
        img:"https://imgs.search.brave.com/HQfuRDu2phiXjs4btxbNU6JRtL688tU81gB-QS-rbUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMy53/cC5jb20vaW1hZ2Vz/LnRoZXF1aW50LmNv/bS90aGVxdWludC8y/MDIzLTA1LzNlN2Rl/YWViLWUwNDYtNGIx/ZS1hN2U4LTQ4YTdk/NzZlZGQ0OS9TUENT/NTY1Ny5KUEc_c3Ry/aXA9YWxs",
        primary:"yellow",
        secondary:"blue",
        tropies:4
    },
    {
        team:"mi",
        fullName:"mumbai indians",
        captain:"rohit sharma",
        img:"https://imgs.search.brave.com/Qm-NleOXW59nnFWtKIioYnU6nUtQjY8z-pqpHhzHtFE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZHVzdGFudGlt/ZXMuY29tL2h0LWlt/Zy9pbWcvMjAyMy8w/NS8wNC81NTB4MzA5/L21pLTIwMTVfMTY4/MzIwMDg4NTc0NF8x/NjgzMjAwODkwNDUw/LmpwZw",
        primary:"blue",
        secondary:"gold",
        tropies:5
    },
    {
        team:"rcb",
        fullName:"royal challengers bangalore",
        captain:"virat kohli",
        img:"https://imgs.search.brave.com/RBwRUQnpptBDdTuPoYFbz7BMZpnxzoE6Jh7lmBsLsQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZHVzdGFudGlt/ZXMuY29tL2h0LWlt/Zy9pbWcvMjAyNS8w/Ni8wMy81NTB4MzA5/L0NSSUNLRVQtSVBM/LVJDQi1QQktTLS03/XzE3NDg5Nzg5MTA0/NDlfMTc0ODk3ODky/MTM0MS5KUEc",
        primary:"red",
        secondary:"black",
        tropies:1
    },
    {
        team:"srh",
        fullName:"sunrisers hyderabad",
        captain:"pat cummins",
        img:"https://imgs.search.brave.com/HAscZVnmk9d9q8QmEqnL0VD62Yo0DdIpuAZwmbxLlmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ha20t/aW1nLWEtaW4udG9z/c2h1Yi5jb20vaW5k/aWF0b2RheS9pbWFn/ZXMvc3RvcnkvMjAx/ODA1L1NSSF85Lmpw/ZWc_c2l6ZT02OTA6/Mzg4",
        primary:"orange",
        secondary:"black",
        tropies:1  
    },
    {
        team:"kxip",
        fullName:"kings xi punjab",
        captain:" Shreyas Iyer",
        img:"https://imgs.search.brave.com/0Rm-ACBwITFU342d02uuNHqFFCn9DDkBbR1OgYc71IU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhlY3JpY2tldHBh/bmRhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wNS9Q/QktTLUluLTIwMjUt/U28tRmFyLmpwZw",
        primary:"red",
        secondary:"white",
        tropies:0
    },
    {
        team:"dc",
        fullName:"delhi capitals",
        captain:"kl rahul",
        img:"https://imgs.search.brave.com/f-huUTtWD3EAQryAYwegsLyjuBBce2nZkOgBUj8EIm4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS90aHVtYi9tc2lk/LTEyNTMzMTI2NCxp/bWdzaXplLTgxNjE2/LHdpZHRoLTQwMCxy/ZXNpemVtb2RlLTQv/ZGMtdGVhbS0xNDEx/LWlwbC5qcGc",
        primary:"blue",
        secondary:"red",
        tropies:0
    },
    {   
        team:"kkr",
        fullName:"kolkata knight riders",
        captain:"sourav ganguly",
        img:"https://imgs.search.brave.com/DFTjdnDwuAUq2-ODCQRom0g33OpmCyENYNn1OR-FOmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vbmVj/cmlja2V0bmV3cy5h/a2FtYWl6ZWQubmV0/L3BhcnRoLWVkaXRv/ci9vYy1kYXNoYm9h/cmQvbmV3cy1pbWFn/ZXMtcHJvZC8xNzMy/NjEzNjQyOTIyX0tL/ciUyMCgxKSUyMCgx/KS5qcGc",
        primary:"purple",
        secondary:"gold",
        tropies:2
    }
]



let box=document.querySelector("#box");
let button=document.querySelector("button");
let h1=document.querySelector("h1");
let main=document.querySelector("main");

button.addEventListener("click",()=>{
    let a=Math.floor(Math.random()*arr.length);
    h1.innerText=arr[a].team.toUpperCase(); 
    h1.style.backgroundColor=arr[a].primary;
    main.style.backgroundImage=`url(${arr[a].img})`;

    
    
});