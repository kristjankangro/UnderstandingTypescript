console.log("Analytics page loaded 333")
let logged: boolean;
function sendAnalyticsEvent(data: string) {
    console.log(data)
    logged = true;
    console.log(logged)
}

sendAnalyticsEvent("data aa");