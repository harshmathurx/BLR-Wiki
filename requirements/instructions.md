# blr.wiki - Bangalore's Ultimate Directory

## Project Overview

The goal of this project is to create a comprehensive web application that serves as a directory of interesting places, activities, and experiences in Bangalore. This website, named blr.wiki, will be modeled after the successful dilli.wiki project, but tailored specifically for the Bangalore region.

## Project Setup

1. You already have a Next.js project set up with Shadcn, we just need to add the right components.

## Database Setup (Supabase)

1. Create a new Supabase project and database.
2. In the Supabase dashboard, create two tables: `categories` and `places`.
3. **categories** table:
    - `id` (Primary Key)
    - `name` (String)
    - `emoji` (String)
4. **places** table:
    - `id` (Primary Key)
    - `name` (String)
    - `href` (String)
    - `categoryId` (Foreign Key referencing `categories` table)
    - `description` (Text)
    
5. Set up the necessary Supabase client and API calls in your Next.js project.

## Component Implementation

1. **Directory Page**:
    - Create a new page component in the `app` directory called `directory.tsx`.
    - Fetch the data from the Supabase `categories` and `places` tables.
    - Render a list of categories using the Shadcn `Card` component.
    - When a user clicks on a category, display the corresponding places using the Shadcn `Card` component.
    - When you click on a place, redirect the user to the href of the place in a new tab
2. **Micro Interactions**:
    - Create new Shadcn UI components for micro-interactions:
        - `HoverEffect.tsx`: Add subtle hover effects to directory items.
        - `PageTransition.tsx`: Implement smooth page transitions.
        - `SmoothScroll.tsx`: Implement smooth scrolling behavior.
    - Integrate these components throughout the application to enhance the user experience.
3. **SEO Optimization**:
    - Ensure proper meta tags and descriptions are in place for each page.
    - Implement dynamic page titles and meta descriptions based on the current page content.
    - Generate static HTML pages for better search engine crawling and indexing.
    - Meta tags example
        
        ```html
            <meta name="description" content="Dilli [dot] wiki is a local's google list with the best places in town. From Chole Bhature to co-working spots, this has everything you need to know." />
        
            <!-- Open Graph tags -->
            <meta property="og:title" content="dilli.wiki" />
            <meta property="og:description" content="a local's guide to falling in love with dilli." />
            <meta property="og:url" content="https://www.dilli.wiki" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="%PUBLIC_URL%/ogimage.png" />
        
            <!-- Facebook Meta Tags -->
            <meta property="og:url" content="https://www.dilli.wiki/">
            <meta property="og:type" content="website">
            <meta property="og:title" content="dilli.wiki">
            <meta property="og:description" content="a local's guide to falling in love with dilli.">
            <meta property="og:image" content="https://dilli.wiki/ogimage.png">
        
            <!-- Twitter Meta Tags -->
            <meta name="twitter:card" content="summary_large_image">
            <meta property="twitter:domain" content="dilli.wiki">
            <meta property="twitter:url" content="https://www.dilli.wiki/">
            <meta name="twitter:title" content="dilli.wiki">
            <meta name="twitter:description" content="a local's guide to falling in love with dilli.">
            <meta name="twitter:image" content="https://dilli.wiki/ogimage.png">
        ```
        
4. The look 
    1. Pick a cool font that goes with the monochromatic tone of the website and integrate it 
    2. Use /banner.png as the banner image.
    3. Make the website responsive
5. The data
    1. The list of place and the categories will be manually added in supabase so we do not need any forms or submit functionality on the website.
    2. For the users to submit a recommendation we will add a link to a typeform in out footer
    3. With the text - Have more places in mind? Share them **here**!
     

## Next Steps

1. Implement the components and integrate them into your existing Next.js project.
2. Help me with what I need to create or add in supabase. 
3. Test the application thoroughly, ensuring a seamless user experience.

Remember, the goal is to create a comprehensive, user-friendly, and visually appealing directory for Bangalore that can rival the success of the dilli.wiki project.