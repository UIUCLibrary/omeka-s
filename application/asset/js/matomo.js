<!-- Matomo -->
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    /* get user id from last segment of the link to user profile  */
    let userID = document.querySelector(".user-id:first-of-type a").getAttribute("href").split( '/' ).slice(-1)[0]
    _paq.push(['setUserId', userID]);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
    var u="https://matomo.library.illinois.edu/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '7']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
<!-- End Matomo Code -->
