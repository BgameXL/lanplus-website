## Public endpoints

```http
GET /public/worlds
GET /public/profile/:friendCode
```

They are read-only and require no `Authorization` header. They must be
rate-limited and return only intentionally public fields.

These are backend endpoints. Browser code should normally use the website's
same-origin `/api/public/*` route handlers instead of calling the backend
origin directly.

## Required behavior

### `GET /public/worlds`

- Returns only worlds whose host selected a public listing option.
- Does not return IP addresses, relay tickets, passwords, friend codes, or
  unredacted internal ID.
- Uses pagination or a bounded response before the directory becomes large.
- Supports clear empty and unavailable states.

The successful response is a JSON array, an empty array means that no public
world is currently available.

```json
[
  {
    "name": "Survival with the boys",
    "owner": "PlayerName",
    "modpackId": "def-not-atm10",
    "gameMode": "SURVIVAL",
    "difficulty": "NORMAL"
  }
]
```

`modpackId`, `gameMode`, and `difficulty` may be `null`. The website rejects a
successful response that is not an array or whose entries do not match this
shape.

### `GET /public/profile/:friendCode`

- Returns `404` for an unknown, or non-public profile.
- Does not reveal the existence of a private profile.
- Returns only fields enabled for public display by the owner.
- Applies a strict input format/length limit for `[friendCode]`.

Friend codes use the format `LAN-` followed by five letters or digits and the website normalizes them to uppercase before requesting the profile.

The fields currently consumed by the website have this shape:

```json
{
  "username": "PlayerName",
  "friendCode": "LAN-7K2QF",
  "bio": "ATM9 is the only good modpack.",
  "pronouns": "he/him",
  "skin": {
    "type": "MOJANG",
    "id": "skin-id",
    "hash": null,
    "model": "default"
  },
  "links": {
    "twitch": "playername"
  },
  "prompts": {
    "favorite_block": "Copper"
  },
  "favorite": {
    "modpackId": "def-not-atm10",
    "name": "ATM10",
    "downloadUrl": null
  },
  "currentlyPlaying": null,
  "lastPlayed": null,
  "recentlyPlayed": null
}
```

`bio`, `pronouns`, `skin`, and each modpack field may be `null`. `links` and
`prompts` are objects and may be empty. The backend may add other public fields so clients must tolerate additive fields.

## Website route handlers

The Next.js application translates backend responses into a small, same-origin contract:

| Website route                              | Success | Not found | Backend unavailable | Invalid backend response |
|--------------------------------------------|---------|-----------|---------------------|--------------------------|
| `GET /api/public/worlds`                   | `200`   | —         | `503`               | `502`                    |
| `GET /api/public/profile/:friendCode`      | `200`   | `404`     | `503`               | —                        |

World responses use `Cache-Control: no-store`. Successful profile JSON responses use `public, max-age=60, stale-while-revalidate=300`.
Requests to the backend time out after four seconds.

## Browser access

The current website architecture does not require browser-to-backend requests, because Next.js performs them server-side.
If a future client calls the backend directly from a browser, allow CORS only for approved LAN+ website origins,
for example:

```text
https://lanplus.dev
https://www.lanplus.dev
```

The API must enforce publication and field-level visibility on the server even if the request does not come from a browser.

## Website implementation notes

- Keep backend requests server-side so the backend origin can be changed without rebuilding browser code.
- Use a non-secret server environment variable such as `LANPLUS_PUBLIC_API_URL`.
- Do not use `NEXT_PUBLIC_` for credentials. Public API URLs may be exposed, tokens and keys may not.
- Set fetch timeouts, handle non-200 responses, and show a friendly fallback.
- Do not log full profile responses if they might later contain private fields.

## Trusted service access

The Discord bot may use a service token or a `X-Admin-Key` to call privileged backend actions.
That credential belongs only in the bot/server environment, the website must never receive or forward it.