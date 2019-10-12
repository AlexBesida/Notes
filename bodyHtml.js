function loadBody(){
    document.getElementById('body').innerHTML = document.getElementById('body').innerHTML + `
    <link rel='stylesheet' href='FluxUI.css'>
    <link rel='stylesheet' href='main.css'>
    <div id="SearchBarForm">
        <input id="SearchBar" class="FluxAppSearchBar ripple" placeholder="Search"/>
    </div>
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="SearchIcon" class="FluxAppSearchBarIcon">
        <path d="M7.05714 0C8.92881 0 10.7238 0.743518 12.0473 2.06699C13.3708 3.39046 14.1143 5.18547 14.1143 7.05714C14.1143 8.80514 13.4737 10.412 12.4206 11.6497L12.7137 11.9429H13.5714L19 17.3714L17.3714 19L11.9429 13.5714V12.7137L11.6497 12.4206C10.412 13.4737 8.80514 14.1143 7.05714 14.1143C5.18547 14.1143 3.39046 13.3708 2.06699 12.0473C0.743518 10.7238 0 8.92881 0 7.05714C0 5.18547 0.743518 3.39046 2.06699 2.06699C3.39046 0.743518 5.18547 0 7.05714 0ZM7.05714 2.17143C4.34286 2.17143 2.17143 4.34286 2.17143 7.05714C2.17143 9.77143 4.34286 11.9429 7.05714 11.9429C9.77143 11.9429 11.9429 9.77143 11.9429 7.05714C11.9429 4.34286 9.77143 2.17143 7.05714 2.17143Z"/>
    </svg>
    <div class="FluxAppFloatingButton ripple" id="AddNoteButton" onmouseover="AddButtonHover()" onmouseout="AddButtonUnHover()" onclick="MobileDialogCreateNote()">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" id="SvgAddIcon" class="FluxAppFloatingButtonIcon">
            <path d="M21 10.5C21 11.3284 20.3284 12 19.5 12H13C12.4477 12 12 12.4477 12 13V19.5C12 20.3284 11.3284 21 10.5 21V21C9.67157 21 9 20.3284 9 19.5V13C9 12.4477 8.55228 12 8 12H1.5C0.671573 12 0 11.3284 0 10.5V10.5C0 9.67157 0.671573 9 1.5 9H8C8.55228 9 9 8.55228 9 8V1.5C9 0.671573 9.67157 0 10.5 0V0C11.3284 0 12 0.671573 12 1.5V8C12 8.55228 12.4477 9 13 9H19.5C20.3284 9 21 9.67157 21 10.5V10.5Z"/>
        </svg>
    </div>
    <div class="FluxAppButton ripple" id="AppMenuButton" onmouseover="AppButtonHover('AppMenuButtonIcon')" onmouseout="AppButtonOut('AppMenuButtonIcon')" onclick="AppMenuButtonClick()">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="AppMenuButtonIcon" class="FluxAppButtonIcon">
            <path d="M4 18C4 19.1046 3.10457 20 2 20C0.89543 20 0 19.1046 0 18C0 16.8954 0.89543 16 2 16C3.10457 16 4 16.8954 4 18Z"/>
            <path d="M12 18C12 19.1046 11.1046 20 10 20C8.89543 20 8 19.1046 8 18C8 16.8954 8.89543 16 10 16C11.1046 16 12 16.8954 12 18Z"/>
            <path d="M20 18C20 19.1046 19.1046 20 18 20C16.8954 20 16 19.1046 16 18C16 16.8954 16.8954 16 18 16C19.1046 16 20 16.8954 20 18Z"/>
            <path d="M4 10C4 11.1046 3.10457 12 2 12C0.89543 12 0 11.1046 0 10C0 8.89543 0.89543 8 2 8C3.10457 8 4 8.89543 4 10Z"/>
            <path d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"/>
            <path d="M20 10C20 11.1046 19.1046 12 18 12C16.8954 12 16 11.1046 16 10C16 8.89543 16.8954 8 18 8C19.1046 8 20 8.89543 20 10Z"/>
            <path d="M4.00006 2C4.00006 3.10457 3.10463 4 2.00006 4C0.895491 4 6.10352e-05 3.10457 6.10352e-05 2C6.10352e-05 0.89543 0.895491 0 2.00006 0C3.10463 0 4.00006 0.89543 4.00006 2Z"/>
            <path d="M20 2C20 3.10457 19.1046 4 18 4C16.8954 4 16 3.10457 16 2C16 0.89543 16.8954 0 18 0C19.1046 0 20 0.89543 20 2Z"/>
            <path d="M12.0001 2C12.0001 3.10457 11.1046 4 10.0001 4C8.89549 4 8.00006 3.10457 8.00006 2C8.00006 0.895434 8.89549 3.8147e-06 10.0001 3.8147e-06C11.1046 3.8147e-06 12.0001 0.895434 12.0001 2Z"/>
        </svg>
    </div>
    <div id="AddNoteWindow">
        <input id="AddNoteTitle" class="FluxAppCardTextBox ripple" placeholder="Title"/>
        <textarea id="AddNoteDescription" class="FluxAppLargeCardTextBox ripple" placeholder="Description"></textarea>
        <div id="CreateNoteAcceptButton" class="FluxAppFloatingTextButton ripple" onclick="CreateNoteMobile()">
            <p id="CreateNoteAcceptP" class="FluxAppFloatingTextButtonText">Create</p>
        </div>
        <div class="FluxAppButton ripple" id="CloseAddNoteDialogButton" onclick="CloseDialogCreateNote()" onmouseover="AppButtonHover('SvgCloseAddIcon')" onmouseout="AppButtonOut('SvgCloseAddIcon')">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" id="SvgCloseAddIcon" class="FluxAppButtonIcon">
                <path d="M21 10.5C21 11.3284 20.3284 12 19.5 12H13C12.4477 12 12 12.4477 12 13V19.5C12 20.3284 11.3284 21 10.5 21V21C9.67157 21 9 20.3284 9 19.5V13C9 12.4477 8.55228 12 8 12H1.5C0.671573 12 0 11.3284 0 10.5V10.5C0 9.67157 0.671573 9 1.5 9H8C8.55228 9 9 8.55228 9 8V1.5C9 0.671573 9.67157 0 10.5 0V0C11.3284 0 12 0.671573 12 1.5V8C12 8.55228 12.4477 9 13 9H19.5C20.3284 9 21 9.67157 21 10.5V10.5Z"/>
            </svg>
        </div>
    </div>
    <div id="OpenNoteWindow">
        <div id="OpenNoteCard" class="FluxAppLiteCard ripple">
            <p id="OpenNoteTitle"></p>
            <p id="OpenNoteDescription"></p>
            <p id="OpenNoteDate"></p>
        </div>
        <div class="FluxAppButton ripple" id="OpenNote_ToHomeButton" onclick="OpenNote_ToHomeButton()" onmouseover="AppButtonHover('OpenNote_ToHomeButtonIcon')" onmouseout="AppButtonOut('OpenNote_ToHomeButtonIcon')">
            <svg id="OpenNote_ToHomeButtonIcon" class="FluxAppButton" width="24" height="23" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg" fill="var(--main-color)">
                <path d="M11.3269 3.66069C11.7095 3.30782 12.2905 3.30782 12.6731 3.66069L18.1408 8.7024C18.5648 9.09343 19 9.65049 19 10.235V19.1794C19 19.7488 18.5557 20.2103 18 20.2103H17C16.4443 20.2103 16 19.7488 16 19.1794V13.9033C16 12.7645 15.1115 12 14 12H10C8.88853 12 8 12.7645 8 13.9033V19.1794C8 19.7488 7.55574 20.2103 7 20.2103H6C5.44426 20.2103 5 19.7488 5 19.1794V10.235C5 9.65049 5.43516 9.09343 5.85922 8.7024L11.3269 3.66069ZM13.3463 0.529307C12.5809 -0.176436 11.4191 -0.176435 10.6537 0.529308L0.335128 10.0441C-0.350347 10.6762 0.0860618 11.8414 1.00827 11.8414H1.46397C2.01971 11.8414 2.5 12.4306 2.5 13V21C2.5 22.1388 3.37125 23 4.48272 23H8.5C9.61147 23 10.5 22.1388 10.5 21V15.5C10.5 14.9306 10.9443 14.5 11.5 14.5H12.5C13.0557 14.5 13.5 14.9306 13.5 15.5V21C13.5 22.1388 14.3885 23 15.5 23H19.5173C20.6288 23 21.5298 22.0768 21.5298 20.9381V12.8723C21.5298 12.3029 21.9803 11.8414 22.536 11.8414H22.9917C23.9139 11.8414 24.3503 10.6762 23.6649 10.0441L13.3463 0.529307Z"/>
            </svg>
        </div>
        <div class="FluxAppButton ripple" id="OpenNote_Delete" onclick="OpenNote_Delete()" onmouseover="AppButtonHover('OpenNote_DeleteButtonIcon')" onmouseout="AppButtonOut('OpenNote_DeleteButtonIcon')">
            <svg class="FluxAppButtonIcon" id="OpenNote_DeleteButtonIcon" width="16" height="24" viewBox="0 0 16 24" xmlns="http://www.w3.org/2000/svg" fill="var(--main-color)">
                <path d="M0.777705 21.5C0.777705 22.8941 1.85402 24 3.18511 24H12.8147C14.1458 24 15.2221 22.8941 15.2221 21.5V8.5C15.2221 7.39543 14.3267 6.5 13.2221 6.5H2.7777C1.67313 6.5 0.777705 7.39543 0.777705 8.5V21.5ZM3.18511 9.76923C3.18511 9.21695 3.63283 8.76923 4.18511 8.76923H11.8147C12.367 8.76923 12.8147 9.21695 12.8147 9.76923V20.5C12.8147 21.0523 12.367 21.5 11.8147 21.5H4.18511C3.63283 21.5 3.18511 21.0523 3.18511 20.5V9.76923ZM13.0454 1.2856C12.5848 1.27017 12.1437 1.09616 11.7966 0.792989L11.454 0.493736C11.0896 0.175416 10.6222 0 10.1383 0H5.73579C5.32898 0 4.93185 0.124056 4.59737 0.355616L4.18026 0.644384C3.84579 0.875944 3.44865 1 3.04184 1H1.34615C0.602693 1 0 1.60269 0 2.34615V2.34615C0 3.08961 0.602694 3.69231 1.34615 3.69231H14.8268C15.4748 3.69231 16 3.16706 16 2.51913V2.51913C16 1.8865 15.4984 1.36781 14.8661 1.34662L13.0454 1.2856Z"/>
            </svg>
        </div>
    </div>
    <div id="SettingsWindow">
        <div class="FluxAppButton ripple" id="Settings_ToHomeButton" onclick="Settings_ToHomeButton()" onmouseover="AppButtonHover('Settings_ToHomeButtonIcon')" onmouseout="AppButtonOut('Settings_ToHomeButtonIcon')">
            <svg id="Settings_ToHomeButtonIcon" class="FluxAppButtonIcon" width="24" height="23" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg" fill="var(--main-color)">
                <path d="M11.3269 3.66069C11.7095 3.30782 12.2905 3.30782 12.6731 3.66069L18.1408 8.7024C18.5648 9.09343 19 9.65049 19 10.235V19.1794C19 19.7488 18.5557 20.2103 18 20.2103H17C16.4443 20.2103 16 19.7488 16 19.1794V13.9033C16 12.7645 15.1115 12 14 12H10C8.88853 12 8 12.7645 8 13.9033V19.1794C8 19.7488 7.55574 20.2103 7 20.2103H6C5.44426 20.2103 5 19.7488 5 19.1794V10.235C5 9.65049 5.43516 9.09343 5.85922 8.7024L11.3269 3.66069ZM13.3463 0.529307C12.5809 -0.176436 11.4191 -0.176435 10.6537 0.529308L0.335128 10.0441C-0.350347 10.6762 0.0860618 11.8414 1.00827 11.8414H1.46397C2.01971 11.8414 2.5 12.4306 2.5 13V21C2.5 22.1388 3.37125 23 4.48272 23H8.5C9.61147 23 10.5 22.1388 10.5 21V15.5C10.5 14.9306 10.9443 14.5 11.5 14.5H12.5C13.0557 14.5 13.5 14.9306 13.5 15.5V21C13.5 22.1388 14.3885 23 15.5 23H19.5173C20.6288 23 21.5298 22.0768 21.5298 20.9381V12.8723C21.5298 12.3029 21.9803 11.8414 22.536 11.8414H22.9917C23.9139 11.8414 24.3503 10.6762 23.6649 10.0441L13.3463 0.529307Z"/>
            </svg>
        </div>
        <div class="FluxAppButton ripple" id="Settings_ReloadApp" onclick="Settings_ReloadApp()" onmouseover="AppButtonHover('Settings_ReloadAppIcon')" onmouseout="AppButtonOut('Settings_ReloadAppIcon')">
            <svg id="Settings_ReloadAppIcon" class="FluxAppButtonIcon" width="24" height="24" viewBox="0 0 24 24" fill="var(--main-color)" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2277 5.47362C11.5031 5.45256 11.7273 5.6784 11.7273 5.95455V7.52017C11.7273 7.96562 12.2658 8.1887 12.5808 7.87372L15.3838 5.07074C15.7743 4.68022 15.7743 4.04705 15.3838 3.65653L12.5808 0.853553C12.2658 0.538571 11.7273 0.761654 11.7273 1.20711V2.77273C11.7273 3.04887 11.5032 3.27123 11.2275 3.28704C9.09509 3.40927 7.07465 4.3104 5.55616 5.82889C3.91948 7.46557 3 9.68538 3 12C3 13.2089 3.25 14.358 3.6963 15.4013C3.98069 16.0661 4.83835 16.1617 5.34964 15.6504V15.6504C5.70307 15.2969 5.7722 14.7563 5.59602 14.2885C5.32694 13.5742 5.18182 12.7958 5.18182 12C5.18182 10.264 5.87143 8.59918 7.09894 7.37167C8.20816 6.26244 9.67451 5.59245 11.2277 5.47362ZM19.7613 8.60594C19.476 7.93717 18.6135 7.84106 18.0993 8.3552V8.3552C17.7482 8.70636 17.6754 9.24191 17.8503 9.70671C18.1205 10.4248 18.2727 11.2007 18.2727 12C18.2727 13.736 17.5831 15.4008 16.3556 16.6283C15.2464 17.7376 13.78 18.4076 12.2268 18.5264C11.9515 18.5474 11.7273 18.3216 11.7273 18.0455V16.4798C11.7273 16.0344 11.1887 15.8113 10.8737 16.1263L8.07074 18.9293C7.68022 19.3198 7.68022 19.9529 8.07074 20.3435L10.8737 23.1464C11.1887 23.4614 11.7273 23.2383 11.7273 22.7929V21.2273C11.7273 20.9511 11.9514 20.7288 12.2271 20.713C14.3595 20.5907 16.3799 19.6896 17.8984 18.1711C19.5351 16.5344 20.4545 14.3146 20.4545 12C20.4545 10.7939 20.2057 9.64731 19.7613 8.60594Z"/>
            </svg>
        </div>
    </div>
    <div id="TopBar">
        <div id="FluxAppTitle" class="ripple">
            <svg class="FluxAppTitleImg" style="transition: 0s;" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.4135 7.8503C20.6067 7.65664 20.9199 7.65664 21.1131 7.8503L21.6378 8.37629C22.1207 8.86045 22.1207 9.64542 21.6378 10.1296L17.0905 14.6881C16.6075 15.1723 15.8245 15.1723 15.3415 14.6881C14.8585 14.204 14.8585 13.419 15.3415 12.9349L20.4135 7.8503Z" style="transition: 0.3s; fill: var(--hover-c-color);"/>
                <path d="M18.1398 1.36312C17.6569 0.87896 16.8738 0.87896 16.3909 1.36312L13.7674 3.99306C13.2845 4.47722 13.2845 5.26219 13.7674 5.74635L16.216 8.20096C16.6989 8.68512 17.482 8.68512 17.965 8.20096L20.5884 5.57102C21.0714 5.08686 21.0714 4.30189 20.5884 3.81773L18.1398 1.36312Z" style="transition: 0.3s; fill: var(--hover-c-color)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9691 6.79833C11.4521 6.31417 12.2351 6.31417 12.7181 6.79833L15.1666 9.25294C15.6496 9.7371 15.6496 10.5221 15.1666 11.0062L5.55974 20.6369C5.32781 20.8694 5.01325 21 4.68525 21H2.23671C1.55369 21 1 20.4449 1 19.7602L1 17.3056C1 16.9768 1.13029 16.6615 1.36222 16.429L10.9691 6.79833ZM11.4938 9.07761C11.687 8.88394 12.0002 8.88394 12.1934 9.07761L12.893 9.77893C13.0861 9.97259 13.0861 10.2866 12.893 10.4802L4.64282 18.7508C4.55005 18.8438 4.42422 18.896 4.29302 18.896L3.59344 18.8961C3.32023 18.8961 3.09876 18.674 3.09876 18.4001V17.6988C3.09876 17.5673 3.15087 17.4412 3.24365 17.3482L11.4938 9.07761Z" style="transition: 0.3s; fill: var(--hover-c-color)"/>
                <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M10.9691 6.7983C11.4521 6.31414 12.2351 6.31414 12.7181 6.7983L15.1666 9.25291C15.6496 9.73707 15.6496 10.522 15.1666 11.0062L5.55974 20.6369C5.32781 20.8694 5.01325 21 4.68525 21H2.23671C1.55369 21 1 20.4449 1 19.7602L1 17.3056C1 16.9768 1.13029 16.6615 1.36222 16.429L10.9691 6.7983Z" style="transition: 0.3s; fill: var(--hover-c-color)"/>
            </svg>
                
            <p class="FluxAppTitleP">Notes</p>
        </div>
    </div>
    <style>
        #AppView{ top:76px;}    
    </style>
    `;
}