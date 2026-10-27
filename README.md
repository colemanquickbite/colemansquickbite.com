# Coleman's Quick Bite Website

Website for **Coleman's Quick Bite LLC**, currently featuring Thanksgiving 2026 preorders.

## Thanksgiving 2026

The homepage features the holiday menu, prices, images of all nine dishes prepared
by the business, and direct call/text links to 662-516-5046. Customers send their
name, dishes, quantities, and pan sizes; the business personally confirms
availability, total, deposit arrangements, and pickup details.

All holiday items, sizes, prices, and dates come from the owner's flyer:
`flyers/thanksgiving_2026/Colemans_Quick_Bite_Thanksgiving_2026_Final.png`.

- Preorders only.
- 50% deposit due Thursday, November 19, 2026.
- Pickup Wednesday evening, November 25, 2026.
- Food images: fried turkey, ribs, mac and cheese, baked beans, lasagna, string beans, mixed greens,
  banana pudding, and peach cobbler. Clicking a photo opens the full image.
- Thanksgiving orders are taken by call/text. The holiday cart, quantity
  controls, estimates, and website preorder form have been removed.
- `thanksgiving.css` contains the seasonal layout. `script.js` updates the footer
  year and retains the form handler for when the catering form is restored.
- The homepage ends with a short owner introduction, a catering contact line,
  and call, text, email, and Facebook links. General catering/event content is
  archived for restoration after Thanksgiving.

After the holiday, update the homepage, social metadata, and `menu/index.html`
together. The seasonal content does not expire automatically.

## Restoring the general website after Thanksgiving

The mixed greens image is `images/mixed-greens-foil-pan-closeup.jpg`, an AI-assisted
half-size foil-pan serving illustration based on the owner's original
`images/greens.jpg` (greens in a red cast-iron pot). The original is unchanged.
The gallery labels this image as a serving illustration and lists the flyer
prices: 1/3 pan $35, 1/2 pan $50, full pan $80.

The fried turkey menu photo is `images/fried-turkey-thanksgiving-edited.jpg`,
edited from the owner's preferred `images/fried_turkey_fryer_2.jpg`. It was
tightly reframed with AI-assisted photo editing and color adjustment to exclude
the ground, cardboard, hoses, and surrounding outdoor setup. The three original
turkey photos remain unchanged. The edited photo appears first in the holiday
gallery with the flyer price of $75 each.

The original general sections are preserved in
`archive/thanksgiving-2026/general-sections.html`. This is a source fragment,
not a standalone preview page. It contains the milestone, full owner/about
section, values, general menu and food cards, catering quote form, and event
and food galleries exactly as they appeared before the seasonal trim.

To bring the general website back:

1. Use the archived sections to replace the short `#about` section in
   `index.html`, or choose which sections to restore and refresh their copy.
2. Update the homepage hero, page title, search/social descriptions, image,
   and navigation for the next season. Replace or remove the Thanksgiving menu,
   photos, dates, and call/text section as appropriate.
3. Restore `menu/index.html` to open `colemans-quick-bite-menu.pdf` when the
   Thanksgiving feature ends. The PDF and supporting assets remain in place.
4. Keep `styles.css` and `script.js`; they still support the archived sections
   and catering form. Keep all existing photos, PDFs, and other assets.
5. Check navigation, mobile layout, and the catering form before publishing.

Nothing changes automatically after Thanksgiving. Review and publish the next
version when ready; this archive does not schedule a change.

## Files

- `index.html` — main website page
- `styles.css` — site colors, spacing, and mobile design
- `thanksgiving.css` — seasonal homepage design
- `script.js` — footer year and shared form handler for restored catering content

## Menu address

Share **https://colemansquickbite.com/menu/** as the easy-to-type menu address.
It currently opens the Thanksgiving section on the homepage. The catering menu
remains available directly at `menu/colemans-quick-bite-menu.pdf`. The older
`menu/colemans-quick-bite-real-wood-menu.pdf` is retained so existing links work.

## Preview locally

Open `index.html` in a web browser.

## Publish with GitHub Pages

1. Upload the website files and referenced images, flyer, and menu assets to your GitHub repository.
2. Open the repository's **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save.
7. After GitHub publishes the site, add `colemansquickbite.com` under **Custom domain**.

## Contact information currently used

- Phone: 662-516-5046
- Email: colemanquickbite@gmail.com
- Facebook: facebook.com/colemansquickbite
- Website: https://colemansquickbite.com
- Google review link: https://g.page/r/Cbv4tz_cvOX-EAE/review

## Google reviews — saved customer link

Use this public link when asking customers to review **Coleman's Quick Bite**:

**https://g.page/r/Cbv4tz_cvOX-EAE/review**

The owner supplied this link from Google Business Profile. On October 13, 2026,
its public redirect was checked: it returned HTTP 200 and led to Google's
`/local/writereview` page for place ID `ChIJ91iZWt6hZgkRu_i3P9y85f4`.
Customers may need to sign in to Google to submit a review.

Direct destination, saved as a fallback:
https://search.google.com/local/writereview?placeid=ChIJ91iZWt6hZgkRu_i3P9y85f4

Use the short `g.page` review link for customer texts, emails, and Google review
QR codes. The older `share.google` URL in archived drafts is not the preferred
review-request link. The current business card's Google QR uses the short link.

Copyable customer message:

> Thank you for choosing Coleman's Quick Bite! Would you share your experience
> in a Google review? Your feedback helps our small business:
> https://g.page/r/Cbv4tz_cvOX-EAE/review
