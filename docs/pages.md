# Pages and Content

## `/` - Landing page

explain LAN+ in one quick read and guide visitors to download the mod or learn more about it.

Suggested sections:

1. Short promise, download button, and restrained visual.
2. What LAN+ adds: friends, invites, hosting, presence, and profiles.
3. How it works: install, add friends, play.
4. Privacy and control: players decide what becomes public.
5. Supported versions/loaders and download CTA.

## `/downloads` - Downloads

Give a player the correct file and instructions.

Show the Minecraft version, loader and latest version. Keep external download links recognizable.

## `/worlds` - Public worlds

List worlds deliberately made public by their hosts.

Each card should use only the fields returned by the website's public worlds route.
The current interface may show the world name, owner, modpack, game mode, and difficulty.

The page must provide clear loading, empty, and unavailable states. Do not add new data requirements or call an external service directly from the page.

## `/profile/[friendCode]` - Public profile

Present a player profile that the player chose to publish.

Render the optional fields returned by the public profile request, such as the display name, skin or avatar, bio, pronouns, selected links, prompts, and public
modpacks. The layout must still work when any optional field is missing.

Use a real "not-found page" when no public profile is returned and a separate unavailable state when public data cannot be loaded.

## `/cosmetics` - Future

Start as an informational gallery. Account management and other authenticated features are outside the scope of the website.