var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "160",
        "ok": "80",
        "ko": "80"
    },
    "minResponseTime": {
        "total": "131",
        "ok": "400",
        "ko": "131"
    },
    "maxResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "221"
    },
    "meanResponseTime": {
        "total": "354",
        "ok": "565",
        "ko": "142"
    },
    "standardDeviation": {
        "total": "221",
        "ok": "88",
        "ko": "17"
    },
    "percentiles1": {
        "total": "311",
        "ok": "567",
        "ko": "137"
    },
    "percentiles2": {
        "total": "566",
        "ok": "632",
        "ko": "144"
    },
    "percentiles3": {
        "total": "690",
        "ok": "698",
        "ko": "166"
    },
    "percentiles4": {
        "total": "702",
        "ok": "705",
        "ko": "220"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 80,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 80,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "22.857",
        "ok": "11.429",
        "ko": "11.429"
    }
},
contents: {
"req_home-8cf04": {
        type: "REQUEST",
        name: "Home",
path: "Home",
pathFormatted: "req_home-8cf04",
stats: {
    "name": "Home",
    "numberOfRequests": {
        "total": "80",
        "ok": "80",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "400",
        "ok": "400",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "565",
        "ok": "565",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "percentiles1": {
        "total": "567",
        "ok": "567",
        "ko": "-"
    },
    "percentiles2": {
        "total": "632",
        "ok": "632",
        "ko": "-"
    },
    "percentiles3": {
        "total": "698",
        "ok": "698",
        "ko": "-"
    },
    "percentiles4": {
        "total": "705",
        "ok": "705",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 80,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "11.429",
        "ok": "11.429",
        "ko": "-"
    }
}
    },"req_home-redirect-1-df14c": {
        type: "REQUEST",
        name: "Home Redirect 1",
path: "Home Redirect 1",
pathFormatted: "req_home-redirect-1-df14c",
stats: {
    "name": "Home Redirect 1",
    "numberOfRequests": {
        "total": "80",
        "ok": "0",
        "ko": "80"
    },
    "minResponseTime": {
        "total": "131",
        "ok": "-",
        "ko": "131"
    },
    "maxResponseTime": {
        "total": "221",
        "ok": "-",
        "ko": "221"
    },
    "meanResponseTime": {
        "total": "142",
        "ok": "-",
        "ko": "142"
    },
    "standardDeviation": {
        "total": "17",
        "ok": "-",
        "ko": "17"
    },
    "percentiles1": {
        "total": "137",
        "ok": "-",
        "ko": "137"
    },
    "percentiles2": {
        "total": "144",
        "ok": "-",
        "ko": "144"
    },
    "percentiles3": {
        "total": "166",
        "ok": "-",
        "ko": "166"
    },
    "percentiles4": {
        "total": "220",
        "ok": "-",
        "ko": "220"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 80,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "11.429",
        "ok": "-",
        "ko": "11.429"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
