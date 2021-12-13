function renderInboxPage() {
    const inboxPage = document.createElement('div')
    inboxPage.classList.add('pageStyle')
    inboxPage.innerHTML = `
    <div class="contentOne">
        <div class="contentOneOne">
            <h1>
                Inbox
            </h1>
        </div>
        <div class="contentOneTwo">
            <svg id='newListBtn' class="invert" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" fill-rule="evenodd" transform="translate(4 3)">
                <mask id="jd4FBg" fill="#fff">
                    <path
                    d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"
                    ></path>
                </mask>
                <g mask="url(#jd4FBg)">
                    <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
                </g>
                </g>
            </svg>
            <h1 class='random1'>
                Add List
            </h1>
        </div>
    </div>

    <div class="contentInbox">
    </div>
    `
    
    return inboxPage
}


function renderTodayPage() {
    const todayPage = document.createElement('div')
    todayPage.classList.add('pageStyle2')
    todayPage.innerHTML = `
        <div class="contentOne">
            <div class="contentOneOne">
                <h1>
                    Today
                </h1>
            </div>
            <div class="contentOneTwo">
                <svg id='newListBtn2' class="invert" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" fill-rule="evenodd" transform="translate(4 3)">
                    <mask id="jd4FBg" fill="#fff">
                        <path
                        d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"
                        ></path>
                    </mask>
                    <g mask="url(#jd4FBg)">
                        <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
                    </g>
                    </g>
                </svg>
                <h1 class='random2'>
                    Add List
                </h1>
            </div>
        </div>
        
        <div class="contentToday">
        </div>
    `

    return todayPage
}



export { renderInboxPage, renderTodayPage }

