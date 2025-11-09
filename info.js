function collectVisitorInfo(){
    // const satver datus
    const data = {
     timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    language: navigator.language,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    platform: navigator.platform
    };


    const csv = Object.keys(data).join(",") + "\n" + Object.values(data).join(",") + "\n";

    const blob = new Blob([csv], {type: "test/csv"});
    const url = URL.createObjectUrl(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "visitor_info.cvs";
    a.click()
    URL.revokeObjectURL(url);

}

