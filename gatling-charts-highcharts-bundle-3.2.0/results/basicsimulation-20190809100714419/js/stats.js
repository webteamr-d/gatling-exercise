var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4000",
        "ok": "4000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "507",
        "ok": "507",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4060",
        "ok": "4060",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1766",
        "ok": "1766",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1397",
        "ok": "1397",
        "ko": "-"
    },
    "percentiles1": {
        "total": "831",
        "ok": "831",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3622",
        "ok": "3622",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3835",
        "ok": "3835",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3971",
        "ok": "3971",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1720,
        "percentage": 43
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 922,
        "percentage": 23
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1358,
        "percentage": 34
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "363.636",
        "ok": "363.636",
        "ko": "-"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "4000",
        "ok": "4000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "507",
        "ok": "507",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4060",
        "ok": "4060",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1766",
        "ok": "1766",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1397",
        "ok": "1397",
        "ko": "-"
    },
    "percentiles1": {
        "total": "831",
        "ok": "831",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3622",
        "ok": "3622",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3835",
        "ok": "3835",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3971",
        "ok": "3971",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1720,
        "percentage": 43
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 922,
        "percentage": 23
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1358,
        "percentage": 34
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "363.636",
        "ok": "363.636",
        "ko": "-"
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
