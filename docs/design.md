# LAN+ Website Design Direction

## Feeling

The site should feel like part of the LAN+ game experience, but it should not imitate the mod literally.

## Brand

`LAN` is purple. The `+` is green.

Use the green accent for actions, connection state, and key highlights.

## Prefer

- Dark backgrounds with clear text contrast.
- Strong, compact typography.
- Subtle pixel/grid/texture details used sparingly.
- Clear hierarchy and generous spacing around important content.
- Cards with stats, a world, a profile section, or a download.
- Motion (hover, load, expand)

## Avoid

- Generic SaaS dashboards.
- Glassmorphism (i really hate it so don't even think about suggesting it).
- Soft gradients as the main visual identity.
- Excessively rounded cards and pill shaped controls.
- Decorative animation (Please make sure the content is easy to read.)
- Copying Minecraft textures or UI assets from others projects (you may use assets as placeholder).

## Accessibility baseline

- Do not communicate a state with color alone.
- Keep normal text contrast high on the dark background.
- Preserve visible keyboard focus.
- Respect `prefers-reduced-motion`.
- Test navigation and buttons without a mouse.

## Responsive rule

Design the content structure for narrow screens first. Wide layouts can add
columns, they must not hide essential context behind hover only interactions.