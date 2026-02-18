# S3 to Local Image Migration Plan

**Project:** dorisbaizley.com (Gatsby.js)
**S3 Bucket:** `zno.s3.us-west-1.amazonaws.com`
**Total Images:** 33 unique files
**Total References:** 42 across codebase

---

## Phase 1: Download Images from S3

### Play/Content Images (19 files)
Download to: `src/images/plays/`

| Filename | S3 URL | Used In |
|----------|--------|---------|
| a_christmas_carol.jpg | https://zno.s3.us-west-1.amazonaws.com/a_christmas_carol.jpg | a-christmas-carol.js |
| agnes_smedley_our_american_friend.jpg | https://zno.s3.us-west-1.amazonaws.com/agnes_smedley_our_american_friend.jpg | agnes-smedley-our-american-friend.js |
| changing-lives-changing-la.jpg | https://zno.s3.us-west-1.amazonaws.com/changing-lives-changing-la.jpg | changing-lives-changing-la.js, change-is-what-we-do.js |
| daniel_in_babylon.jpg | https://zno.s3.us-west-1.amazonaws.com/daniel_in_babylon.jpg | daniel-in-babylon.js |
| glass_mountain.jpg | https://zno.s3.us-west-1.amazonaws.com/glass_mountain.jpg | glass-mountain.js |
| may.png | https://zno.s3.us-west-1.amazonaws.com/may.png | may.js |
| mimis_guide.png | https://zno.s3.us-west-1.amazonaws.com/mimis_guide.png | mimis-guide.js |
| mrs_california.jpg | https://zno.s3.us-west-1.amazonaws.com/mrs_california.jpg | mrs-california.js |
| one-day-sarah-house.jpg | https://zno.s3.us-west-1.amazonaws.com/one-day-sarah-house.jpg | one-day-sarah-house.js |
| phreaks.png | https://zno.s3.us-west-1.amazonaws.com/phreaks.png | phreaks-the-hidden-history-of-people-with-disabilities.js |
| prairie_fire.jpg | https://zno.s3.us-west-1.amazonaws.com/prairie_fire.jpg | prairie-fire.js |
| sex_sting.jpg | https://zno.s3.us-west-1.amazonaws.com/sex_sting.jpg | sex-sting.js |
| shiloh_rules.jpg | https://zno.s3.us-west-1.amazonaws.com/shiloh_rules.jpg | shiloh-rules.js |
| sister_kennys_children.jpg | https://zno.s3.us-west-1.amazonaws.com/sister_kennys_children.jpg | sister-kennys-children.js |
| sisters_of_peace.jpg | https://zno.s3.us-west-1.amazonaws.com/sisters_of_peace.jpg | sisters-of-peace.js |
| spirit-moves.png | https://zno.s3.us-west-1.amazonaws.com/spirit-moves.png | spirit-moves.js |
| tears_of_rage.png | https://zno.s3.us-west-1.amazonaws.com/tears_of_rage.png | tears-of-rage.js |
| the_dyers_hand.jpg | https://zno.s3.us-west-1.amazonaws.com/the_dyers_hand.jpg | the-dyers-hand.js |
| the_mikado_project.jpg | https://zno.s3.us-west-1.amazonaws.com/the_mikado_project.jpg | the-mikado-project.js |

---

### Background Images (11 files)
Download to: `static/images/backgrounds/` (for CSS access)

| Filename | S3 URL | Used In |
|----------|--------|---------|
| moe_765.png | https://zno.s3.us-west-1.amazonaws.com/moe_765.png | custom.css (about section) |
| moe_589.png | https://zno.s3.us-west-1.amazonaws.com/moe_589.png | static-image.js (snippet) |
| moe_1145.png | https://zno.s3.us-west-1.amazonaws.com/moe_1145.png | custom.css (commented) |
| dorie_1145.png | https://zno.s3.us-west-1.amazonaws.com/dorie_1145.png | custom.css (commented) |
| home_1069_938.png | https://zno.s3.us-west-1.amazonaws.com/home_1069_938.png | custom.css (home page) |
| dbz-home.jpg | https://zno.s3.us-west-1.amazonaws.com/dbz-home.jpg | custom.css (contact section) |
| 1145_ts_bfbfbf_moe.png | https://zno.s3.us-west-1.amazonaws.com/1145_ts_bfbfbf_moe.png | custom.css (desktop moe) |
| 1145_ts_fff_moe.png | https://zno.s3.us-west-1.amazonaws.com/1145_ts_fff_moe.png | custom.css (mobile moe) |
| 1145_ts_fff_dorie.png | https://zno.s3.us-west-1.amazonaws.com/1145_ts_fff_dorie.png | custom.css (dorie, multiple breakpoints) |
| 589_ts_bfbfbf_moe.png | https://zno.s3.us-west-1.amazonaws.com/589_ts_bfbfbf_moe.png | custom.css (mobile footer) |

---

### Meta/SEO Images (1 file)
Download to: `static/images/meta/`

| Filename | S3 URL | Used In |
|----------|--------|---------|
| dbphoto.jpg | https://zno.s3.us-west-1.amazonaws.com/dbphoto.jpg | seo.js (og:image) |

---

### Other Images (2 files)
Download to: `src/images/misc/`

| Filename | S3 URL | Used In |
|----------|--------|---------|
| Inkednarrowcrop717_LI.jpg | https://zno.s3.us-west-1.amazonaws.com/Inkednarrowcrop717_LI.jpg | contact.js |
| story_editing_2.JPG | https://zno.s3.us-west-1.amazonaws.com/story_editing_2.JPG | story-editing-list.js |
| story_editing_3.jpg | https://zno.s3.us-west-1.amazonaws.com/story_editing_3.jpg | story-editing-list.js |

---

## Phase 2: Create Local Directory Structure

```
src/
└── images/
    ├── plays/           (19 play images)
    ├── misc/            (3 other images)
    └── (existing files)

static/
└── images/
    ├── backgrounds/     (11 background images)
    └── meta/            (1 SEO image)
```

**Note:** Images in `static/` are served directly at `/images/...` URLs, which is required for CSS background-image references.

---

## Phase 3: Update Code References

### Files to Update (26 total)

**Play Pages (21 files)** - Replace img src with local import:
- `src/pages/a-christmas-carol.js`
- `src/pages/agnes-smedley-our-american-friend.js`
- `src/pages/change-is-what-we-do.js`
- `src/pages/changing-lives-changing-la.js`
- `src/pages/daniel-in-babylon.js`
- `src/pages/glass-mountain.js`
- `src/pages/may.js`
- `src/pages/mimis-guide.js`
- `src/pages/mrs-california.js`
- `src/pages/one-day-sarah-house.js`
- `src/pages/phreaks-the-hidden-history-of-people-with-disabilities.js`
- `src/pages/prairie-fire.js`
- `src/pages/sex-sting.js`
- `src/pages/shiloh-rules.js`
- `src/pages/sister-kennys-children.js`
- `src/pages/sisters-of-peace.js`
- `src/pages/spirit-moves.js`
- `src/pages/tears-of-rage.js`
- `src/pages/the-dyers-hand.js`
- `src/pages/the-mikado-project.js`
- `src/pages/contact.js`

**Components (2 files)**:
- `src/components/seo.js` - Update og:image URL
- `src/components/story-editing-list.js` - Update 2 image references

**CSS (1 file)**:
- `src/css/custom.css` - Update all background-image URLs

**Snippets (1 file)**:
- `src/snippets/static-image.js` - Update background URLs (if used)

---

## Phase 4: Code Change Examples

### For Play Pages (JSX)
**Before:**
```jsx
<img className="me-3 mb-3 play-img" alt="May"
     src="https://zno.s3.us-west-1.amazonaws.com/may.png"></img>
```

**After (Option A - Static Import):**
```jsx
import mayImg from '../images/plays/may.png'
// ...
<img className="me-3 mb-3 play-img" alt="May" src={mayImg}></img>
```

**After (Option B - Gatsby StaticImage for optimization):**
```jsx
import { StaticImage } from "gatsby-plugin-image"
// ...
<StaticImage className="me-3 mb-3 play-img" alt="May"
             src="../images/plays/may.png" />
```

### For CSS Background Images
**Before:**
```css
background: url("https://zno.s3.us-west-1.amazonaws.com/moe_765.png") no-repeat center center fixed;
```

**After:**
```css
background: url("/images/backgrounds/moe_765.png") no-repeat center center fixed;
```

### For SEO Component
**Before:**
```jsx
{ property: 'og:image', content: 'https://zno.s3.us-west-1.amazonaws.com/dbphoto.jpg' }
```

**After:**
```jsx
{ property: 'og:image', content: 'https://dorisbaizley.com/images/meta/dbphoto.jpg' }
```

---

## Phase 5: Testing Checklist

- [ ] All play pages display images correctly
- [ ] Background images load on all breakpoints (mobile, tablet, desktop)
- [ ] og:image works when sharing on social media
- [ ] Story editing page images load
- [ ] Contact page image loads
- [ ] Build completes without errors (`gatsby build`)
- [ ] No console errors for missing images

---

## Quick Download Commands

If you have AWS CLI configured, you can download all images at once:

```bash
# Create directories
mkdir -p src/images/plays src/images/misc static/images/backgrounds static/images/meta

# Download play images
aws s3 cp s3://zno/a_christmas_carol.jpg src/images/plays/
aws s3 cp s3://zno/agnes_smedley_our_american_friend.jpg src/images/plays/
aws s3 cp s3://zno/changing-lives-changing-la.jpg src/images/plays/
aws s3 cp s3://zno/daniel_in_babylon.jpg src/images/plays/
aws s3 cp s3://zno/glass_mountain.jpg src/images/plays/
aws s3 cp s3://zno/may.png src/images/plays/
aws s3 cp s3://zno/mimis_guide.png src/images/plays/
aws s3 cp s3://zno/mrs_california.jpg src/images/plays/
aws s3 cp s3://zno/one-day-sarah-house.jpg src/images/plays/
aws s3 cp s3://zno/phreaks.png src/images/plays/
aws s3 cp s3://zno/prairie_fire.jpg src/images/plays/
aws s3 cp s3://zno/sex_sting.jpg src/images/plays/
aws s3 cp s3://zno/shiloh_rules.jpg src/images/plays/
aws s3 cp s3://zno/sister_kennys_children.jpg src/images/plays/
aws s3 cp s3://zno/sisters_of_peace.jpg src/images/plays/
aws s3 cp s3://zno/spirit-moves.png src/images/plays/
aws s3 cp s3://zno/tears_of_rage.png src/images/plays/
aws s3 cp s3://zno/the_dyers_hand.jpg src/images/plays/
aws s3 cp s3://zno/the_mikado_project.jpg src/images/plays/

# Download background images
aws s3 cp s3://zno/moe_765.png static/images/backgrounds/
aws s3 cp s3://zno/moe_589.png static/images/backgrounds/
aws s3 cp s3://zno/moe_1145.png static/images/backgrounds/
aws s3 cp s3://zno/dorie_1145.png static/images/backgrounds/
aws s3 cp s3://zno/home_1069_938.png static/images/backgrounds/
aws s3 cp s3://zno/dbz-home.jpg static/images/backgrounds/
aws s3 cp s3://zno/1145_ts_bfbfbf_moe.png static/images/backgrounds/
aws s3 cp s3://zno/1145_ts_fff_moe.png static/images/backgrounds/
aws s3 cp s3://zno/1145_ts_fff_dorie.png static/images/backgrounds/
aws s3 cp s3://zno/589_ts_bfbfbf_moe.png static/images/backgrounds/

# Download meta images
aws s3 cp s3://zno/dbphoto.jpg static/images/meta/

# Download misc images
aws s3 cp s3://zno/Inkednarrowcrop717_LI.jpg src/images/misc/
aws s3 cp s3://zno/story_editing_2.JPG src/images/misc/
aws s3 cp s3://zno/story_editing_3.jpg src/images/misc/
```

---

## All S3 URLs (Copy-Paste List)

```
https://zno.s3.us-west-1.amazonaws.com/a_christmas_carol.jpg
https://zno.s3.us-west-1.amazonaws.com/agnes_smedley_our_american_friend.jpg
https://zno.s3.us-west-1.amazonaws.com/changing-lives-changing-la.jpg
https://zno.s3.us-west-1.amazonaws.com/daniel_in_babylon.jpg
https://zno.s3.us-west-1.amazonaws.com/glass_mountain.jpg
https://zno.s3.us-west-1.amazonaws.com/may.png
https://zno.s3.us-west-1.amazonaws.com/mimis_guide.png
https://zno.s3.us-west-1.amazonaws.com/mrs_california.jpg
https://zno.s3.us-west-1.amazonaws.com/one-day-sarah-house.jpg
https://zno.s3.us-west-1.amazonaws.com/phreaks.png
https://zno.s3.us-west-1.amazonaws.com/prairie_fire.jpg
https://zno.s3.us-west-1.amazonaws.com/sex_sting.jpg
https://zno.s3.us-west-1.amazonaws.com/shiloh_rules.jpg
https://zno.s3.us-west-1.amazonaws.com/sister_kennys_children.jpg
https://zno.s3.us-west-1.amazonaws.com/sisters_of_peace.jpg
https://zno.s3.us-west-1.amazonaws.com/spirit-moves.png
https://zno.s3.us-west-1.amazonaws.com/tears_of_rage.png
https://zno.s3.us-west-1.amazonaws.com/the_dyers_hand.jpg
https://zno.s3.us-west-1.amazonaws.com/the_mikado_project.jpg
https://zno.s3.us-west-1.amazonaws.com/moe_765.png
https://zno.s3.us-west-1.amazonaws.com/moe_589.png
https://zno.s3.us-west-1.amazonaws.com/moe_1145.png
https://zno.s3.us-west-1.amazonaws.com/dorie_1145.png
https://zno.s3.us-west-1.amazonaws.com/home_1069_938.png
https://zno.s3.us-west-1.amazonaws.com/dbz-home.jpg
https://zno.s3.us-west-1.amazonaws.com/1145_ts_bfbfbf_moe.png
https://zno.s3.us-west-1.amazonaws.com/1145_ts_fff_moe.png
https://zno.s3.us-west-1.amazonaws.com/1145_ts_fff_dorie.png
https://zno.s3.us-west-1.amazonaws.com/589_ts_bfbfbf_moe.png
https://zno.s3.us-west-1.amazonaws.com/dbphoto.jpg
https://zno.s3.us-west-1.amazonaws.com/Inkednarrowcrop717_LI.jpg
https://zno.s3.us-west-1.amazonaws.com/story_editing_2.JPG
https://zno.s3.us-west-1.amazonaws.com/story_editing_3.jpg
```
