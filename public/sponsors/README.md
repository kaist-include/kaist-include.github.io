# Sponsor Logos

This directory contains sponsor company logos displayed on the website.

## How to Add a New Sponsor

1. **Add Logo Image**
   - Place the sponsor's logo file in this directory
   - Recommended formats: PNG, SVG, or JPG
   - Recommended size: 300x200px (3:2 aspect ratio)
   - Use clear, high-quality images

2. **Update Sponsor Data**
   - Open `/libs/sponsors.ts`
   - Add a new sponsor object to the `sponsors` array
   - Example:
   ```typescript
   {
     id: 1,
     name: "Company Name",
     logo: "/sponsors/company-logo.png",
     website: "https://company-website.com"
   }
   ```

3. **Logo Guidelines**
   - Use the company's official logo
   - Ensure you have permission to use the logo
   - Logos will be displayed in grayscale by default
   - They become colored on hover
   - Make sure logos look good in both states

## File Naming

Use descriptive, lowercase filenames with hyphens:
- ✅ `samsung-electronics.png`
- ✅ `google-korea.svg`
- ❌ `Logo1.PNG`
- ❌ `sponsor logo.jpg`

## Notes

- The website will automatically display all sponsors added to the data file
- Logos are responsive and will scale properly on all devices
- Each logo links to the company's website when clicked 