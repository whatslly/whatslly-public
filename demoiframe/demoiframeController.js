/**
 * Created by yanircalisar on 13/05/2021.
 */

({
    doInit : function(component) {
        let host = document.location.host.replace(".salesforce.com","").replace(".lightning.force.com", "");
        if(host.length > 2){
            host = "https://" + host + ".my.visualforce.com";
        }else
            host = null;

        console.log("whatslly host: " + host);

        component.set("v.baseUrl", host);
        component.set("v.vfHost", document.location.host);

        let recordID = component.get("v.recordId");
        let params = "?id=" + recordID + "&sfdcIFrameOrigin=https://" + document.location.host;
        component.set("v.params",params );
    }
})
