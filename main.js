let weather = null;

fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-4510E05C-1D1A-4868-9B08-5FB5FE051F9E")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    weather = data;
    console.log(weather.records.location);
})
.catch(function(error) {
    console.log(error);
})

const now = new Date();
const statN = document.querySelector("#stateN");
const teN = document.querySelector("#temN");
const In = document.querySelector("#iN");

const statT = document.querySelector("#stateT");
const teT = document.querySelector("#temT");
const It = document.querySelector("#iT");

const statH = document.querySelector("#stateH");
const teH = document.querySelector("#temH");
const Ih = document.querySelector("#iH");

const statC = document.querySelector("#stateC");
const teC = document.querySelector("#temC");
const Ic = document.querySelector("#iC");

const statP = document.querySelector("#stateP");
const teP = document.querySelector("#temP");
const Ip= document.querySelector("#iP");

const statTp = document.querySelector("#stateTp");
const teTp = document.querySelector("#temTp");
const Itp = document.querySelector("#iTp");

const statY = document.querySelector("#stateY");
const teY = document.querySelector("#temY");
const Iy = document.querySelector("#iY");

const statHu = document.querySelector("#stateHu");
const teHu = document.querySelector("#temHu");
const Ihu = document.querySelector("#iHu");

const statD = document.querySelector("#stateD");
const teD = document.querySelector("#temD");
const Id = document.querySelector("#iD");

setTimeout(function() {
    let minT = null;
    let maxT = null;
    weather.records.location.forEach((i) => {
        if(i.locationName === "臺南市") {
            i.weatherElement[0].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    statN.innerText = j.parameter.parameterName;
                    if(j.parameter.parameterName === "多雲") {
                        In.setAttribute("class" , "fa-solid fa-cloud-sun fa-bounce");
                    } else {
                        In.setAttribute("class" , "fa-solid fa-cloud-sun-rain fa-spin fa-spin-reverse");
                    }
                }
            });

            i.weatherElement[2].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    minT = j.parameter.parameterName;
                }
            });

            i.weatherElement[4].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    maxT = j.parameter.parameterName;
                }
            });
            teN.innerText = minT + "°C ~" + maxT + "°C";
        }

        if(i.locationName === "桃園市") {
            i.weatherElement[0].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    statT.innerText = j.parameter.parameterName;
                    if(j.parameter.parameterName === "陰短暫雨") {
                        It.setAttribute("class" , "fa-solid fa-cloud-rain fa-fade");
                    } else {
                        It.setAttribute("class" , "fa-solid fa-cloud-sun-rain fa-spin fa-spin-reverse");
                    }
                }
            });

            i.weatherElement[2].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    minT = j.parameter.parameterName;
                }
            });

            i.weatherElement[4].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    maxT = j.parameter.parameterName;
                }
            });
            teT.innerText = minT + "°C ~" + maxT + "°C";
        }

        if(i.locationName === "新竹縣") {
            i.weatherElement[0].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    statH.innerText = j.parameter.parameterName;
                    if(j.parameter.parameterName === "陰時多雲短暫雨") {
                        Ih.setAttribute("class" , "fa-solid fa-cloud-showers-heavy fa-beat-fade");
                    } else {
                        Ih.setAttribute("class" , "fa-solid fa-cloud-sun-rain fa-spin fa-spin-reverse");
                    }
                }
            });

            i.weatherElement[2].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    minT = j.parameter.parameterName;
                }
            });

            i.weatherElement[4].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    maxT = j.parameter.parameterName;
                }
            });
            teH.innerText = minT + "°C ~" + maxT + "°C";
        }

        if(i.locationName === "臺中市") {
            i.weatherElement[0].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    statC.innerText = j.parameter.parameterName;
                    if(j.parameter.parameterName === "多雲時陰短暫雨") {
                        Ic.setAttribute("class" , "fa-solid fa-cloud-showers-heavy fa-beat-fade");
                    } else {
                        Ic.setAttribute("class" , "fa-solid fa-cloud-sun-rain fa-spin fa-spin-reverse");
                    }
                }
            });

            i.weatherElement[2].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    minT = j.parameter.parameterName;
                }
            });

            i.weatherElement[4].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    maxT = j.parameter.parameterName;
                }
            });
            teC.innerText = minT + "°C ~" + maxT + "°C";
        }

        if(i.locationName === "屏東縣") {
            i.weatherElement[0].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    statP.innerText = j.parameter.parameterName;
                    if(j.parameter.parameterName === "多雲") {
                        Ip.setAttribute("class" , "fa-solid fa-cloud-sun fa-bounce");
                    } else {
                        Ip.setAttribute("class" , "fa-solid fa-cloud-sun-rain fa-spin fa-spin-reverse");
                    }
                }
            });

            i.weatherElement[2].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    minT = j.parameter.parameterName;
                }
            });

            i.weatherElement[4].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    maxT = j.parameter.parameterName;
                }
            });
            teP.innerText = minT + "°C ~" + maxT + "°C";
        }

        if(i.locationName === "臺北市") {
            i.weatherElement[0].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    statTp.innerText = j.parameter.parameterName;
                    if(j.parameter.parameterName === "陰時多雲短暫雨") {
                        Itp.setAttribute("class" , "fa-solid fa-cloud-showers-heavy fa-beat-fade");
                    } else {
                        Itp.setAttribute("class" , "fa-solid fa-cloud-sun-rain fa-spin fa-spin-reverse");
                    }
                }
            });

            i.weatherElement[2].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    minT = j.parameter.parameterName;
                }
            });

            i.weatherElement[4].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    maxT = j.parameter.parameterName;
                }
            });
            teTp.innerText = minT + "°C ~" + maxT + "°C";
        }

        if(i.locationName === "宜蘭縣") {
            i.weatherElement[0].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    statY.innerText = j.parameter.parameterName;
                    if(j.parameter.parameterName === "陰短暫雨") {
                        Iy.setAttribute("class" , "fa-solid fa-cloud-rain fa-fade");
                    } else {
                        Iy.setAttribute("class" , "fa-solid fa-cloud-sun-rain fa-spin fa-spin-reverse");
                    }
                }
            });

            i.weatherElement[2].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    minT = j.parameter.parameterName;
                }
            });

            i.weatherElement[4].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    maxT = j.parameter.parameterName;
                }
            });
            teY.innerText = minT + "°C ~" + maxT + "°C";
        }

        if(i.locationName === "花蓮縣") {
            i.weatherElement[0].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    statHu.innerText = j.parameter.parameterName;
                    if(j.parameter.parameterName === "陰短暫雨") {
                        Ihu.setAttribute("class" , "fa-solid fa-cloud-rain fa-fade");
                    } else {
                        Ihu.setAttribute("class" , "fa-solid fa-cloud-sun-rain fa-spin fa-spin-reverse");
                    }
                }
            });

            i.weatherElement[2].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    minT = j.parameter.parameterName;
                }
            });

            i.weatherElement[4].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    maxT = j.parameter.parameterName;
                }
            });
            teHu.innerText = minT + "°C ~" + maxT + "°C";
        }

        if(i.locationName === "臺東縣") {
            i.weatherElement[0].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    statD.innerText = j.parameter.parameterName;
                    if(j.parameter.parameterName === "陰短暫雨") {
                        Id.setAttribute("class" , "fa-solid fa-cloud-rain fa-fade");
                    } else {
                        Id.setAttribute("class" , "fa-solid fa-cloud-sun-rain fa-spin fa-spin-reverse");
                    }
                }
            });

            i.weatherElement[2].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    minT = j.parameter.parameterName;
                }
            });

            i.weatherElement[4].time.forEach((j) => {
                if(Date.parse(j.startTime) <= now && Date.parse(j.endTime) >= now) {
                    maxT = j.parameter.parameterName;
                }
            });
            teD.innerText = minT + "°C ~" + maxT + "°C";
        }

    })
},1000);
