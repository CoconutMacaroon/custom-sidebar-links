# Better Sidebar

<kbd>[Install](https://github.com/CoconutMacaroon/better-sidebar/raw/main/sidebar.user.js)</kbd>

This is a Tampermonkey userscript (tested in Firefox) to enable support for custom links in the Stack Exchange sidebars

## Installation

1. Install Tampermonkey* in your browser
2. Press the Install button above.
3. Go to [Stack Overflow](https://stackoverflow.com) - there should be a section on the left sidebar labeled `CUSTOM LINKS`, along with a few default links.
4. To add/remove links, just edit the userscript lines that look like this:
   ```js
   /// CUSTOM LINKS GO HERE ///
   URLs.set("SO Teams Site", "https://stackoverflowteams.com");
   URLs.set("Google", "https://google.com");
   ```
   You can put whatever you want there, including links to chatrooms. For example, to add a link titled `Tavern on the Meta` with a link to that chatroom, you would add `URLs.set("Tavern on the Meta", "https://chat.meta.stackexchange.com/rooms/89/tavern-on-the-meta");` to that section.
   
## TODO
See the TODO list [on stackapps](https://stackapps.com/a/9571)
