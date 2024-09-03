import proj4 from "proj4";

//地理坐标系
let GCS_EPSG = {
    GCS_Beijing_1954: 4214,
    GCS_Xian_1980: 4610,
    GCS_CGCS_2000: 4490,
    GCS_WGS_1984: 4326
}
//Beijing54投影坐标系
let PRJ_Beijing54_EPSG = {
    //Beijing_1954_3_Degree_GK_Zone_xx (25-45,2401) False_Easting=zone+500000
    Beijing_1954_3_Degree_GK_Zone_25: 2401,
    Beijing_1954_3_Degree_GK_Zone_26: 2402,
    Beijing_1954_3_Degree_GK_Zone_27: 2403,
    Beijing_1954_3_Degree_GK_Zone_28: 2404,
    Beijing_1954_3_Degree_GK_Zone_29: 2405,
    Beijing_1954_3_Degree_GK_Zone_30: 2406,
    Beijing_1954_3_Degree_GK_Zone_31: 2407,
    Beijing_1954_3_Degree_GK_Zone_32: 2408,
    Beijing_1954_3_Degree_GK_Zone_33: 2409,
    Beijing_1954_3_Degree_GK_Zone_34: 2410,
    Beijing_1954_3_Degree_GK_Zone_35: 2411,
    Beijing_1954_3_Degree_GK_Zone_36: 2412,
    Beijing_1954_3_Degree_GK_Zone_37: 2413,
    Beijing_1954_3_Degree_GK_Zone_38: 2414,
    Beijing_1954_3_Degree_GK_Zone_39: 2415,
    Beijing_1954_3_Degree_GK_Zone_40: 2416,
    Beijing_1954_3_Degree_GK_Zone_41: 2417,
    Beijing_1954_3_Degree_GK_Zone_42: 2418,
    Beijing_1954_3_Degree_GK_Zone_43: 2419,
    Beijing_1954_3_Degree_GK_Zone_44: 2420,
    Beijing_1954_3_Degree_GK_Zone_45: 2421,
    //Beijing_1954_3_Degree_GK_CM_xx (75E-135E,2422) False_Easting=500000
    Beijing_1954_3Degree_GK_CM_75E: 2422,
    Beijing_1954_3Degree_GK_CM_78E: 2423,
    Beijing_1954_3Degree_GK_CM_81E: 2424,
    Beijing_1954_3Degree_GK_CM_84E: 2425,
    Beijing_1954_3Degree_GK_CM_87E: 2426,
    Beijing_1954_3Degree_GK_CM_90E: 2427,
    Beijing_1954_3Degree_GK_CM_93E: 2428,
    Beijing_1954_3Degree_GK_CM_96E: 2429,
    Beijing_1954_3Degree_GK_CM_99E: 2430,
    Beijing_1954_3Degree_GK_CM_102E: 2431,
    Beijing_1954_3Degree_GK_CM_105E: 2432,
    Beijing_1954_3Degree_GK_CM_108E: 2433,
    Beijing_1954_3Degree_GK_CM_111E: 2434,
    Beijing_1954_3Degree_GK_CM_114E: 2435,
    Beijing_1954_3Degree_GK_CM_117E: 2436,
    Beijing_1954_3Degree_GK_CM_120E: 2437,
    Beijing_1954_3Degree_GK_CM_123E: 2438,
    Beijing_1954_3Degree_GK_CM_126E: 2439,
    Beijing_1954_3Degree_GK_CM_129E: 2440,
    Beijing_1954_3Degree_GK_CM_132E: 2441,
    Beijing_1954_3Degree_GK_CM_135E: 2442,
    //Beijing_1954_6_Degree_GK_Zone_xx (13-23,21413) False_Easting=zone+500000
    Beijing_1954_6_Degree_GK_Zone_13: 21413,
    Beijing_1954_6_Degree_GK_Zone_14: 21414,
    Beijing_1954_6_Degree_GK_Zone_15: 21415,
    Beijing_1954_6_Degree_GK_Zone_16: 21416,
    Beijing_1954_6_Degree_GK_Zone_17: 21417,
    Beijing_1954_6_Degree_GK_Zone_18: 21418,
    Beijing_1954_6_Degree_GK_Zone_19: 21419,
    Beijing_1954_6_Degree_GK_Zone_20: 21420,
    Beijing_1954_6_Degree_GK_Zone_21: 21421,
    Beijing_1954_6_Degree_GK_Zone_22: 21422,
    Beijing_1954_6_Degree_GK_Zone_23: 21423,
    //Beijing_1954_6_Degree_GK_CM_xx (75E-135E,21473) False_Easting=500000
    Beijing_1954_6_Degree_GK_CM_75E: 21473,
    Beijing_1954_6_Degree_GK_CM_81E: 21474,
    Beijing_1954_6_Degree_GK_CM_87E: 21475,
    Beijing_1954_6_Degree_GK_CM_93E: 21476,
    Beijing_1954_6_Degree_GK_CM_99E: 21477,
    Beijing_1954_6_Degree_GK_CM_105E: 21478,
    Beijing_1954_6_Degree_GK_CM_111E: 21479,
    Beijing_1954_6_Degree_GK_CM_117E: 21480,
    Beijing_1954_6_Degree_GK_CM_123E: 21481,
    Beijing_1954_6_Degree_GK_CM_129E: 21482,
    Beijing_1954_6_Degree_GK_CM_135E: 21483
}
//Xian80投影坐标系
let PRJ_Xian80_EPSG = {
    //Xian_1980_3_Degree_GK_Zone_xx (25-45,2349) False_Easting=zone+500000
    Xian_1980_3_Degree_GK_Zone_25: 2349,
    Xian_1980_3_Degree_GK_Zone_26: 2350,
    Xian_1980_3_Degree_GK_Zone_27: 2351,
    Xian_1980_3_Degree_GK_Zone_28: 2352,
    Xian_1980_3_Degree_GK_Zone_29: 2353,
    Xian_1980_3_Degree_GK_Zone_30: 2354,
    Xian_1980_3_Degree_GK_Zone_31: 2355,
    Xian_1980_3_Degree_GK_Zone_32: 2356,
    Xian_1980_3_Degree_GK_Zone_33: 2357,
    Xian_1980_3_Degree_GK_Zone_34: 2358,
    Xian_1980_3_Degree_GK_Zone_35: 2359,
    Xian_1980_3_Degree_GK_Zone_36: 2360,
    Xian_1980_3_Degree_GK_Zone_37: 2361,
    Xian_1980_3_Degree_GK_Zone_38: 2362,
    Xian_1980_3_Degree_GK_Zone_39: 2363,
    Xian_1980_3_Degree_GK_Zone_40: 2364,
    Xian_1980_3_Degree_GK_Zone_41: 2365,
    Xian_1980_3_Degree_GK_Zone_42: 2366,
    Xian_1980_3_Degree_GK_Zone_43: 2367,
    Xian_1980_3_Degree_GK_Zone_44: 2368,
    Xian_1980_3_Degree_GK_Zone_45: 2369,
    //Xian_1980_3_Degree_GK_CM_xx (75E-135E,2370) False_Easting=500000
    Xian_1980_3Degree_GK_CM_75E: 2370,
    Xian_1980_3Degree_GK_CM_78E: 2371,
    Xian_1980_3Degree_GK_CM_81E: 2372,
    Xian_1980_3Degree_GK_CM_84E: 2373,
    Xian_1980_3Degree_GK_CM_87E: 2374,
    Xian_1980_3Degree_GK_CM_90E: 2375,
    Xian_1980_3Degree_GK_CM_93E: 2376,
    Xian_1980_3Degree_GK_CM_96E: 2377,
    Xian_1980_3Degree_GK_CM_99E: 2378,
    Xian_1980_3Degree_GK_CM_102E: 2379,
    Xian_1980_3Degree_GK_CM_105E: 2380,
    Xian_1980_3Degree_GK_CM_108E: 2381,
    Xian_1980_3Degree_GK_CM_111E: 2382,
    Xian_1980_3Degree_GK_CM_114E: 2383,
    Xian_1980_3Degree_GK_CM_117E: 2384,
    Xian_1980_3Degree_GK_CM_120E: 2385,
    Xian_1980_3Degree_GK_CM_123E: 2386,
    Xian_1980_3Degree_GK_CM_126E: 2387,
    Xian_1980_3Degree_GK_CM_129E: 2388,
    Xian_1980_3Degree_GK_CM_132E: 2389,
    Xian_1980_3Degree_GK_CM_135E: 2390,
    // Xian_1980_6_Degree_GK_Zone_xx (13-23,2327) False_Easting=zone+500000
    Xian_1980_6_Degree_GK_Zone_13: 2327,
    Xian_1980_6_Degree_GK_Zone_14: 2328,
    Xian_1980_6_Degree_GK_Zone_15: 2329,
    Xian_1980_6_Degree_GK_Zone_16: 2330,
    Xian_1980_6_Degree_GK_Zone_17: 2331,
    Xian_1980_6_Degree_GK_Zone_18: 2332,
    Xian_1980_6_Degree_GK_Zone_19: 2333,
    Xian_1980_6_Degree_GK_Zone_20: 2334,
    Xian_1980_6_Degree_GK_Zone_21: 2335,
    Xian_1980_6_Degree_GK_Zone_22: 2336,
    Xian_1980_6_Degree_GK_Zone_23: 2337,
    // Xian_1980_6_Degree_GK_CM_xx (75E-135E,2338) False_Easting=500000
    Xian_1980_6_Degree_GK_CM_75E: 2338,
    Xian_1980_6_Degree_GK_CM_81E: 2339,
    Xian_1980_6_Degree_GK_CM_87E: 2340,
    Xian_1980_6_Degree_GK_CM_93E: 2341,
    Xian_1980_6_Degree_GK_CM_99E: 2342,
    Xian_1980_6_Degree_GK_CM_105E: 2343,
    Xian_1980_6_Degree_GK_CM_111E: 2344,
    Xian_1980_6_Degree_GK_CM_117E: 2345,
    Xian_1980_6_Degree_GK_CM_123E: 2346,
    Xian_1980_6_Degree_GK_CM_129E: 2347,
    Xian_1980_6_Degree_GK_CM_135E: 2348
};
//CGCS2000投影坐标系
let PRJ_CGCS2000_EPSG = {
    //CGCS_2000_3_Degree_GK_Zone_xx (25-45,4513) False_Easting=zone+500000
    CGCS_2000_3_Degree_GK_Zone_25: 4513,
    CGCS_2000_3_Degree_GK_Zone_26: 4514,
    CGCS_2000_3_Degree_GK_Zone_27: 4515,
    CGCS_2000_3_Degree_GK_Zone_28: 4516,
    CGCS_2000_3_Degree_GK_Zone_29: 4517,
    CGCS_2000_3_Degree_GK_Zone_30: 4518,
    CGCS_2000_3_Degree_GK_Zone_31: 4519,
    CGCS_2000_3_Degree_GK_Zone_32: 4520,
    CGCS_2000_3_Degree_GK_Zone_33: 4521,
    CGCS_2000_3_Degree_GK_Zone_34: 4522,
    CGCS_2000_3_Degree_GK_Zone_35: 4523,
    CGCS_2000_3_Degree_GK_Zone_36: 4524,
    CGCS_2000_3_Degree_GK_Zone_37: 4525,
    CGCS_2000_3_Degree_GK_Zone_38: 4526,
    CGCS_2000_3_Degree_GK_Zone_39: 4527,
    CGCS_2000_3_Degree_GK_Zone_40: 4528,
    CGCS_2000_3_Degree_GK_Zone_41: 4529,
    CGCS_2000_3_Degree_GK_Zone_42: 4530,
    CGCS_2000_3_Degree_GK_Zone_43: 4531,
    CGCS_2000_3_Degree_GK_Zone_44: 4532,
    CGCS_2000_3_Degree_GK_Zone_45: 4533,
    //CGCS_2000_3_Degree_GK_CM_xx (75E-135E,4534) False_Easting=500000
    CGCS_2000_3Degree_GK_CM_75E: 4534,
    CGCS_2000_3Degree_GK_CM_78E: 4535,
    CGCS_2000_3Degree_GK_CM_81E: 4536,
    CGCS_2000_3Degree_GK_CM_84E: 4537,
    CGCS_2000_3Degree_GK_CM_87E: 4538,
    CGCS_2000_3Degree_GK_CM_90E: 4539,
    CGCS_2000_3Degree_GK_CM_93E: 4540,
    CGCS_2000_3Degree_GK_CM_96E: 4541,
    CGCS_2000_3Degree_GK_CM_99E: 4542,
    CGCS_2000_3Degree_GK_CM_102E: 4543,
    CGCS_2000_3Degree_GK_CM_105E: 4544,
    CGCS_2000_3Degree_GK_CM_108E: 4545,
    CGCS_2000_3Degree_GK_CM_111E: 4546,
    CGCS_2000_3Degree_GK_CM_114E: 4547,
    CGCS_2000_3Degree_GK_CM_117E: 4548,
    CGCS_2000_3Degree_GK_CM_120E: 4549,
    CGCS_2000_3Degree_GK_CM_123E: 4550,
    CGCS_2000_3Degree_GK_CM_126E: 4551,
    CGCS_2000_3Degree_GK_CM_129E: 4552,
    CGCS_2000_3Degree_GK_CM_132E: 4553,
    CGCS_2000_3Degree_GK_CM_135E: 4554,
    //CGCS_2000_6_Degree_GK_Zone_xx (13-23,4491) False_Easting=zone+500000
    CGCS_2000_6_Degree_GK_Zone_13: 4491,
    CGCS_2000_6_Degree_GK_Zone_14: 4492,
    CGCS_2000_6_Degree_GK_Zone_15: 4493,
    CGCS_2000_6_Degree_GK_Zone_16: 4494,
    CGCS_2000_6_Degree_GK_Zone_17: 4495,
    CGCS_2000_6_Degree_GK_Zone_18: 4496,
    CGCS_2000_6_Degree_GK_Zone_19: 4497,
    CGCS_2000_6_Degree_GK_Zone_20: 4498,
    CGCS_2000_6_Degree_GK_Zone_21: 4499,
    CGCS_2000_6_Degree_GK_Zone_22: 4500,
    CGCS_2000_6_Degree_GK_Zone_23: 4501,
    //CGCS_2000_6_Degree_GK_CM_xx (75E-135E,4502) False_Easting=500000
    CGCS_2000_6_Degree_GK_CM_75E: 4502,
    CGCS_2000_6_Degree_GK_CM_81E: 4503,
    CGCS_2000_6_Degree_GK_CM_87E: 4504,
    CGCS_2000_6_Degree_GK_CM_93E: 4505,
    CGCS_2000_6_Degree_GK_CM_99E: 4506,
    CGCS_2000_6_Degree_GK_CM_105E: 4507,
    CGCS_2000_6_Degree_GK_CM_111E: 4508,
    CGCS_2000_6_Degree_GK_CM_117E: 4509,
    CGCS_2000_6_Degree_GK_CM_123E: 4510,
    CGCS_2000_6_Degree_GK_CM_129E: 4511,
    CGCS_2000_6_Degree_GK_CM_135E: 4512
};
let PRJ_WGS84_EPSG = {//WGS84
    WGS_1984_Web_Mercator: 3857,
    WGS_1984_World_Mercator: 3395
};
//Beijing54投影坐标系定义参数
let PRJ_Beijing54 = [
    {type: "GK_Zone", degrees: 3, startCM: 75, endCM: 135, startZone: 25, endZone: 45, startEPSG: 2401},
    {type: "GK_Zone", degrees: 6, startCM: 75, endCM: 135, startZone: 13, endZone: 23, startEPSG: 21413},
    {type: "GK_CM", degrees: 3, startCM: 75, endCM: 135, startZone: 25, endZone: 45, startEPSG: 2422},
    {type: "GK_CM", degrees: 6, startCM: 75, endCM: 135, startZone: 13, endZone: 23, startEPSG: 21473},
];
//Xian80投影坐标系定义参数
let PRJ_Xian80 = [
    {type: "GK_Zone", degrees: 3, startCM: 75, endCM: 135, startZone: 25, endZone: 45, startEPSG: 2349},
    {type: "GK_Zone", degrees: 6, startCM: 75, endCM: 135, startZone: 13, endZone: 23, startEPSG: 2327},
    {type: "GK_CM", degrees: 3, startCM: 75, endCM: 135, startZone: 25, endZone: 45, startEPSG: 2370},
    {type: "GK_CM", degrees: 6, startCM: 75, endCM: 135, startZone: 13, endZone: 23, startEPSG: 2338},
];
//CGCS2000投影坐标系定义参数
let PRJ_CGCS2000 = [
    {type: "GK_Zone", degrees: 3, startCM: 75, endCM: 135, startZone: 25, endZone: 45, startEPSG: 4513},
    {type: "GK_Zone", degrees: 6, startCM: 75, endCM: 135, startZone: 13, endZone: 23, startEPSG: 4491},
    {type: "GK_CM", degrees: 3, startCM: 75, endCM: 135, startZone: 25, endZone: 45, startEPSG: 4534},
    {type: "GK_CM", degrees: 6, startCM: 75, endCM: 135, startZone: 13, endZone: 23, startEPSG: 4502},
];

/**
 * 定义Beijing54投影坐标系
 */
function defs_Beijing54() {
    for (let i = 0; i < PRJ_Beijing54.length; i++) {
        let obj = PRJ_Beijing54[i];
        if (obj.type === "GK_Zone") {
            for (let n = obj.startZone; n <= obj.endZone; n++) {
                let x_0 = n * 1000000 + 500000;
                let str = "+proj=tmerc +lat_0=0 +lon_0=" + obj.startCM + " +k=1 +x_0=" + x_0 + " +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs";
                proj4.defs("EPSG:" + obj.startEPSG, str);
                obj.startEPSG++;
                obj.startCM += obj.degrees;
            }
        } else if (obj.type === "GK_CM") {
            for (let n = obj.startZone; n <= obj.endZone; n++) {
                let str = "+proj=tmerc +lat_0=0 +lon_0=" + obj.startCM + " +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs";
                proj4.defs("EPSG:" + obj.startEPSG, str);
                obj.startEPSG++;
                obj.startCM += obj.degrees;
            }
        }
    }
}

/**
 *定义Xian80投影坐标系
 */
function defs_Xian80() {
    for (let i = 0; i < PRJ_Xian80.length; i++) {
        let obj = PRJ_Xian80[i];
        if (obj.type === "GK_Zone") {
            for (let n = obj.startZone; n <= obj.endZone; n++) {
                let x_0 = n * 1000000 + 500000;
                let str = "+proj=tmerc +lat_0=0 +lon_0=" + obj.startCM + " +k=1 +x_0=" + x_0 + " +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs";
                proj4.defs("EPSG:" + obj.startEPSG, str);
                obj.startEPSG++;
                obj.startCM += obj.degrees;
            }
        } else if (obj.type === "GK_CM") {
            for (let n = obj.startZone; n <= obj.endZone; n++) {
                let str = "+proj=tmerc +lat_0=0 +lon_0=" + obj.startCM + " +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs";
                proj4.defs("EPSG:" + obj.startEPSG, str);
                obj.startEPSG++;
                obj.startCM += obj.degrees;
            }
        }
    }
}

/**
 * 定义CGCS2000投影坐标系
 */
function defs_CGCS2000() {
    for (let i = 0; i < PRJ_CGCS2000.length; i++) {
        let obj = PRJ_CGCS2000[i];
        if (obj.type === "GK_Zone") {
            for (let n = obj.startZone; n <= obj.endZone; n++) {
                let x_0 = n * 1000000 + 500000;
                let str = "+proj=tmerc +lat_0=0 +lon_0=" + obj.startCM + " +k=1 +x_0=" + x_0 + " +y_0=0 +ellps=GRS80 +units=m +no_defs"
                proj4.defs("EPSG:" + obj.startEPSG, str);
                obj.startEPSG++;
                obj.startCM += obj.degrees;
            }
        } else if (obj.type === "GK_CM") {
            for (let n = obj.startZone; n <= obj.endZone; n++) {
                let str = "+proj=tmerc +lat_0=0 +lon_0=" + obj.startCM + " +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
                proj4.defs("EPSG:" + obj.startEPSG, str);
                obj.startEPSG++;
                obj.startCM += obj.degrees;
            }
        }
    }
}

/**
 * 定义所有坐标系
 */
function crs_defs() {
    proj4.defs("EPSG:4214", "+proj=longlat +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +no_defs");
    proj4.defs("EPSG:4610", "+proj=longlat +a=6378140 +b=6356755.288157528 +no_defs");
    proj4.defs("EPSG:4490", "+proj=longlat +ellps=GRS80 +no_defs");
    //proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
    proj4.defs("EPSG:3395", "+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs");
    //proj4.defs("EPSG:3857","+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");

    defs_Beijing54();
    defs_Xian80();
    defs_CGCS2000();
}

export default crs_defs;
